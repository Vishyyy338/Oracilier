# Web server and API routes using standard library
import os
import json
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler
from datetime import datetime

from ml_engine import train_baseline_models, load_dataset
from predictive_ai import (
    predict_real_time_cooling,
    fetch_live_weather,
    predict_batch_cooling,
    verify_telemetry_signature,
    sign_telemetry
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "static")


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
                "telum_acceleration": "Active (NNPA + ONNX Exported)",
                "security_coprocessor": "IBM Z CPACF (Hardware Cryptography)",
                "frameworks": ["Random Forest", "XGBoost", "PyTorch", "ONNX"],
                "modules": ["ml_engine", "predictive_ai", "control_room_ui"],
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
                df = load_dataset()
                records = df.tail(limit).to_dict(orient="records")
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
            _, _, _, metrics = train_baseline_models(save_artifact=True)
            self._send_json({"status": "retrained_successfully", "metrics": metrics})
            return

        self._send_json({"detail": "Not Found"}, status=404)


def run(host="0.0.0.0", port=8000):
    server = HTTPServer((host, port), CoolingServerHandler)
    server.serve_forever()


if __name__ == "__main__":
    run()

