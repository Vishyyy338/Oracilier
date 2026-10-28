# ORACILIER – Data Center Water Cooling Predictive AI Engine

An adaptive AI-driven predictive cooling optimization system for modern high-density data centers. It measures IT server heat generation, ambient humidity, and temperature forecasts to dynamically predict the optimal cooling method and exact water flow rates (LPM & pump $m^3/h$) to maintain server safety while minimizing water consumption and pumping energy.

---

## Quick Start (Run Locally on Linux or Windows)

The project is zero-dependency ready—it runs out of the box on Python 3.8+ without mandatory external packages.

### Option 1: One-Click Launch

**On Your Windows:**
Double-click `start.bat` or run:
```cmd
start.bat
```

**On Linux / macOS / IBM LinuxONE:**
```bash
chmod +x start.sh
./start.sh
```

Then open **[http://localhost:8000](http://localhost:8000)** in your browser.

---

### Option 2: Run with Python Directly

```bash
# Clone the repository
git clone https://github.com/Vishyyy338/Oracilier.git
cd Oracilier

# Start the server
python main.py     # Windows
python3 main.py    # Linux / macOS
```
Access the dashboard at **[http://localhost:8000](http://localhost:8000)**.

---

### Option 3: Docker / Podman (Containers & LinuxONE)

```bash
docker compose up
# Or on IBM LinuxONE with Podman:
podman-compose up
```

---

## Web Dashboard Pages

- **Home (`/` or `index.html`)**: Landing overview showing real-time water savings vs evaporative cooling.
- **Planner (`planner.html`)**: Day-by-day interactive predictive cooling planner with 3 pre-configured facility presets:
  - **Data Center 1 (Pilot)**: 11 kW load
  - **Data Center 2 (Mid-size)**: 1 MW load
  - **Data Center 3 (Hyperscale)**: 11.5 MW load
- **Decision Architecture (`flow.html`)**: Real-time decision flowchart showing how telemetry, weather outlook, and multi-strategy simulations feed the optimal cooling envelope.

---

## System Architecture

```
[ Real-Time Data Center Telemetry ]
   ├─ Server Heat Generation (IT Load in kW / MW)
   ├─ Surrounding Air Moisture (Relative Humidity %)
   └─ Ambient Weather (Statistical Outlook / Live Weather API)
                 │
                 ▼
[ Machine Learning Predictive Engine (ml_engine.py / predictive_ai.py) ]
   ├─ XGBoost Gradient Boosted Trees
   ├─ PyTorch Deep Neural Network
   └─ Statistical Climate Anomaly Forecast Model
                 │
                 ▼
[ Optimization & Envelope Selection ]
   ├─ Evaporative Cooling Simulation
   ├─ Dry Air-Cooled Simulation
   └─ Hybrid Cooling Simulation
                 │
                 ▼
[ Real-Time Control & Telemetry Output ]
   ├─ Real-Time Water Flow (LPM)
   ├─ Secondary Pump Flow (m³/h)
   └─ PUE & Robustness Error Band (±°C)
                 │
                 ▼
[ High-Performance Backend & UI (main.py / static/) ]
   Served live at http://localhost:8000
```

---

## Clean Repository Structure

```
├── data/                                 # Telemetry CSV datasets
│   ├── datacenter_cooling_data.csv       # Consolidated telemetry dataset
│   ├── datacenter_1_pilot.csv            # Pre-scaled Pilot site dataset (11 kW)
│   ├── datacenter_2_midsize.csv          # Pre-scaled Mid-size dataset (1 MW)
│   ├── datacenter_3_hyperscale.csv       # Pre-scaled Hyperscale dataset (11.5 MW)
│   ├── dhsubstation_v2.csv               # District heating substation telemetry
│   ├── meterdata_v2.csv                  # Server IT & facility power meters
│   ├── thermaldata_v2.csv                # Dry cooler & pump flow telemetry
│   └── weatherdata_v2.csv                # Historical weather telemetry
├── models/                               # Serialized AI model artifacts
│   ├── cooling_baseline_model.joblib     # Pre-trained baseline model
│   └── cooling_model.onnx                # Exported ONNX model (IBM Telum NNPA ready)
├── static/                               # Clean modular frontend
│   ├── index.html                        # Home dashboard & pipeline overview
│   ├── planner.html                      # Interactive predictive cooling planner
│   ├── flow.html                         # Standalone decision flowchart
│   ├── css/
│   │   └── styles.css                    # Centralized design stylesheet
│   └── js/
│       └── app.js                        # Client engine & planner interactivity
├── main.py                               # Lightweight HTTP & REST API server
├── ml_engine.py                          # Core ML regression & inference pipeline
├── predictive_ai.py                      # Real-time predictive AI engine
├── Dockerfile                            # Multi-arch LinuxONE / x86 container spec
├── docker-compose.yml                    # Container orchestration
├── start.bat                             # One-click Windows launcher
├── start.sh                              # One-click Linux / LinuxONE launcher
├── requirements.txt                      # Optional dependencies for ML retraining
├── L1CC_DEPLOYMENT.md                    # IBM LinuxONE deployment guide
├── .gitignore                            # Excludes keys, notebooks & temporary files
└── README.md                             # Project documentation
```
