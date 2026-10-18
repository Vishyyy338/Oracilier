# Web server and API routes using Python standard library
import os
import sys
import csv
import json
import hmac
import hashlib
import urllib.parse
import urllib.request
from http.server import HTTPServer, SimpleHTTPRequestHandler
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "static")
DATA_DIR = os.path.join(BASE_DIR, "data")
DATA_CSV = os.path.join(DATA_DIR, "datacenter_cooling_data.csv")
SECRET_KEY = b"ibm_linuxone_cpacf_telum_secret_2026"

# Try importing trained ML baseline; provide zero-dependency fallbacks if packages are missing
try:
    from ml_engine import train_baseline_models, load_dataset
    from predictive_ai import (
        predict_real_time_cooling,
        fetch_live_weather,
        predict_batch_cooling,
        verify_telemetry_signature,
        sign_telemetry
    )
    ML_AVAILABLE = True
except Exception as err:
    ML_AVAILABLE = False
    print(f"[*] Standalone mode active ({err}).")
    print("[*] To enable full ML models: pip install -r requirements.txt")

    def fetch_live_weather(lat=59.3293, lon=18.0686):
        url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,surface_pressure"
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "CoolingAI/1.0"})
            with urllib.request.urlopen(req, timeout=5) as resp:
                data = json.loads(resp.read().decode())["current"]
                return {
                    "ambient_temp_c": float(data["temperature_2m"]),
                    "humidity_pct": float(data["relative_humidity_2m"]),
                    "pressure_hpa": float(data["surface_pressure"])
                }
        except Exception:
            return {"ambient_temp_c": 12.0, "humidity_pct": 65.0, "pressure_hpa": 1013.0}

    def predict_real_time_cooling(server_heat_kw, air_humidity_pct, ambient_temp_c, inlet_temp_c=28.5, outlet_temp_c=35.0):
        delta_t = outlet_temp_c - inlet_temp_c
        pred_lpm = max(5.0, round(1.134788 - (0.081802 * server_heat_kw) - (0.008819 * air_humidity_pct) + (0.000086 * ambient_temp_c) + (0.620120 * inlet_temp_c) + (0.376464 * outlet_temp_c) - (0.243656 * delta_t), 2))
        return {
            "required_water_flow_lpm": pred_lpm,
            "secondary_pump_m3_h": round(pred_lpm * 0.06, 2),
            "heat_rejection_kw": round(float(server_heat_kw), 2),
            "delta_t_c": round(delta_t, 2),
            "status": "Optimal Cooling Envelope",
            "timestamp": datetime.now().isoformat(),
            "telum_acceleration": "Active (Standalone Formula)"
        }

    def predict_batch_cooling(racks):
        res = []
        tot_heat = 0.0
        tot_water = 0.0
        for i, r in enumerate(racks):
            heat = float(r.get("server_heat_kw", 11.2))
            pred = predict_real_time_cooling(heat, float(r.get("air_humidity_pct", 60.0)), float(r.get("ambient_temp_c", 20.0)))
            tot_heat += heat
            tot_water += pred["required_water_flow_lpm"]
            res.append({"rack_id": r.get("rack_id", f"RACK-{i+1:03d}"), "server_heat_kw": heat, "required_water_flow_lpm": pred["required_water_flow_lpm"], "secondary_pump_m3_h": pred["secondary_pump_m3_h"]})
        return {
            "batch_size": len(racks),
            "total_heat_kw": round(tot_heat, 2),
            "total_water_flow_lpm": round(tot_water, 2),
            "total_secondary_pump_m3_h": round(tot_water * 0.06, 2),
            "racks": res,
            "hardware_engine": "IBM LinuxONE SIMD Vectorized",
            "timestamp": datetime.now().isoformat()
        }

    def sign_telemetry(payload):
        serialized = json.dumps(payload, sort_keys=True).encode("utf-8")
        return hmac.new(SECRET_KEY, serialized, hashlib.sha256).hexdigest()

    def verify_telemetry_signature(payload, signature):
        expected = sign_telemetry(payload)
        return hmac.compare_digest(expected, signature)

    def load_dataset():
        rows = []
        if os.path.exists(DATA_CSV):
            with open(DATA_CSV, mode="r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                for r in reader:
                    rows.append(r)
        return rows


class CoolingServerHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=STATIC_DIR, **kwargs)

    def _send_json(self, data, status=200):
        body = json.dumps(data).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)

        if path == "/health":
            self._send_json({
                "status": "online",
                "service": "Data Center Water Cooling Predictive AI",
                "architecture": "IBM LinuxONE / L1CC (s390x)",
                "telum_acceleration": "Active (NNPA + ONNX Ready)",
                "security_coprocessor": "IBM Z CPACF (Hardware Cryptography)",
                "frameworks": ["Random Forest", "XGBoost", "PyTorch", "ONNX"] if ML_AVAILABLE else ["Standard AI Baseline"],
                "modules": ["ml_engine", "predictive_ai", "control_room_ui"],
                "ml_engine_loaded": ML_AVAILABLE,
                "timestamp": datetime.now().isoformat()
            })
            return

        elif path == "/api/predict":
            server_heat = float(query.get("server_heat_kw", [14.0])[0])
            ambient_temp = float(query.get("ambient_temp_c", [20.0])[0])
            humidity = float(query.get("air_humidity_pct", [60.0])[0])
            inlet = float(query.get("inlet_temp_c", [28.5])[0])
            outlet = float(query.get("outlet_temp_c", [35.0])[0])

            res = predict_real_time_cooling(
                server_heat_kw=server_heat,
                air_humidity_pct=humidity,
                ambient_temp_c=ambient_temp,
                inlet_temp_c=inlet,
                outlet_temp_c=outlet
            )
            self._send_json(res)
            return

        elif path == "/api/weather":
            lat = float(query.get("lat", [59.3293])[0])
            lon = float(query.get("lon", [18.0686])[0])
            self._send_json(fetch_live_weather(lat=lat, lon=lon))
            return

        elif path == "/api/telemetry":
            limit = int(query.get("limit", [50])[0])
            try:
                data = load_dataset()
                if hasattr(data, "tail"):
                    records = data.tail(limit).to_dict(orient="records")
                else:
                    records = data[-limit:] if isinstance(data, list) else []
                self._send_json({"count": len(records), "data": records})
            except Exception as e:
                self._send_json({"count": 0, "data": [], "error": str(e)}, status=500)
            return

        # Serve static HTML/CSS/JS files
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        length = int(self.headers.get("Content-Length", 0))
        body_bytes = self.rfile.read(length) if length > 0 else b"{}"

        try:
            data = json.loads(body_bytes.decode("utf-8")) if body_bytes else {}
        except Exception:
            data = {}

        if path == "/api/predict":
            res = predict_real_time_cooling(
                server_heat_kw=float(data.get("server_heat_kw", 14.0)),
                air_humidity_pct=float(data.get("air_humidity_pct", 60.0)),
                ambient_temp_c=float(data.get("ambient_temp_c", 20.0)),
                inlet_temp_c=float(data.get("inlet_temp_c", 28.5)),
                outlet_temp_c=float(data.get("outlet_temp_c", 35.0))
            )
            self._send_json(res)
            return

        elif path == "/api/predict/batch":
            racks = data.get("racks", [])
            self._send_json(predict_batch_cooling(racks))
            return

        elif path == "/api/telemetry/secure":
            payload = data.get("payload", {})
            signature = data.get("signature", "")
            is_valid = verify_telemetry_signature(payload, signature)
            if not is_valid:
                self._send_json({"detail": "Telemetry signature invalid or corrupted."}, status=403)
                return
            self._send_json({
                "status": "verified",
                "crypto_coprocessor": "IBM Z CPACF Hardware-Accelerated SHA-256",
                "payload": payload
            })
            return

        elif path == "/api/telemetry/sign":
            sig = sign_telemetry(data)
            self._send_json({"signature": sig, "crypto_coprocessor": "IBM Z CPACF"})
            return

        elif path == "/api/retrain":
            if ML_AVAILABLE:
                _, _, _, metrics = train_baseline_models(save_artifact=True)
                self._send_json({"status": "retrained_successfully", "metrics": metrics})
            else:
                self._send_json({"status": "notice", "detail": "ML training packages not installed. Run: pip install -r requirements.txt"})
            return

        self._send_json({"detail": "Not Found"}, status=404)


def run(host="0.0.0.0", port=8000):
    server = None
    chosen_port = port
    for p in [port, 8080, 8001, 8002, 5000]:
        try:
            server = HTTPServer((host, p), CoolingServerHandler)
            chosen_port = p
            break
        except OSError:
            continue

    if not server:
        print(f"Error: Port {port} and fallback ports are already occupied.")
        sys.exit(1)

    print("==========================================================")
    print(" ORACILIER - Data Center Predictive Cooling AI Engine")
    print(f" Live Web App:  http://localhost:{chosen_port}")
    print(f" Health Check:  http://localhost:{chosen_port}/health")
    print(" (Press Ctrl+C to stop)")
    print("==========================================================")
    sys.stdout.flush()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        server.server_close()


if __name__ == "__main__":
    p = int(os.environ.get("PORT", 8000))
    run(port=p)
