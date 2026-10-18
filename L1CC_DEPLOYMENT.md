# IBM LinuxONE (L1CC) Deployment Guide

This guide details how to deploy the **Data Center Water Cooling Predictive AI** service to your LinuxONE Community Cloud (L1CC) Virtual Server to satisfy all **Technical Design (10/10)** requirements.

---

## 1. Prerequisites Checklist
- [x] **3 AI Frameworks**: Random Forest + XGBoost + PyTorch
- [x] **Telum AI Acceleration**: Exported ONNX model (`models/cooling_model.onnx`) for NNPA
- [x] **Cluster Batch Inference**: `/api/predict/batch` with SIMD vectorization
- [x] **Hardware Cryptography**: IBM Z CPACF zero-overhead SHA-256 validation (`/api/telemetry/secure`)
- [x] **Containerization**: Multi-arch `Dockerfile` & `docker-compose.yml` (Docker/Podman ready)
- [x] **SSH Key**: `datathon_vs_key.pem`

---

## 2. Connect to LinuxONE Community Cloud (L1CC)

```bash
# Set key permissions (Linux/macOS)
chmod 400 datathon_vs_key.pem

# SSH into your L1CC instance (replace YOUR_L1CC_IP with your instance IP)
ssh -i datathon_vs_key.pem linux1@YOUR_L1CC_IP
```

---

## 3. Transfer Project Files to L1CC

From your local machine terminal:
```bash
scp -i datathon_vs_key.pem -r ./* linux1@YOUR_L1CC_IP:~/datacenter-cooling/
```

---

## 4. Run with Docker or Podman on LinuxONE

On the L1CC instance:
```bash
cd ~/datacenter-cooling

# Build the container image
podman build -t dc-cooling-ai:latest .

# Run the container
podman run -d --name dc-cooling-ai -p 8000:8000 dc-cooling-ai:latest

# Check live logs (take your screenshot/video here!)
podman logs -f dc-cooling-ai
```

---

## 5. Live Verification

```bash
# 1. Verify Health & Telum AI Acceleration
curl http://localhost:8000/health

# 2. Test Real-Time Predictive AI Decision
curl -X POST http://localhost:8000/api/predict \
  -H "Content-Type: application/json" \
  -d '{
    "server_heat_kw": 14.5,
    "air_humidity_pct": 70.0,
    "ambient_temp_c": 18.0,
    "inlet_temp_c": 30.0,
    "outlet_temp_c": 38.0
  }'

# 3. Test Cluster Batch Inference (Telum SIMD)
curl -X POST http://localhost:8000/api/predict/batch \
  -H "Content-Type: application/json" \
  -d '{
    "racks": [
      {"rack_id": "RACK-001", "server_heat_kw": 12.0, "air_humidity_pct": 50, "ambient_temp_c": 20},
      {"rack_id": "RACK-002", "server_heat_kw": 18.5, "air_humidity_pct": 50, "ambient_temp_c": 20}
    ]
  }'

# 4. Verify CPACF Hardware Cryptography
curl -X POST http://localhost:8000/api/telemetry/sign \
  -H "Content-Type: application/json" \
  -d '{"rack_id": "RACK-001", "temp": 28.5}'
```

---

## 6. Video / Screenshot Tips for 10/10 Score
1. Open terminal on L1CC: show `uname -m` outputting `s390x` (proves it's running on real IBM LinuxONE hardware).
2. Show `podman ps` showing container running.
3. Show `curl http://localhost:8000/health` returning `Random Forest + XGBoost + PyTorch + ONNX`, Telum AI acceleration, and CPACF security.

