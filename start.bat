@echo off
echo ==========================================================
echo  Starting Data Center Water Cooling Predictive AI Engine 
echo  Live URL: http://localhost:8000
echo ==========================================================

python main.py
if errorlevel 1 (
    python3 main.py
)
pause
