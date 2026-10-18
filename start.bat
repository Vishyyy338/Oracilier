@echo off
setlocal enabledelayedexpansion
title ORACILIER - Predictive AI Cooling Engine

echo ==========================================================
echo  Starting Data Center Water Cooling Predictive AI Engine
echo ==========================================================

:: Detect Python executable on Windows
set "PY_CMD="
py -3 --version >nul 2>nul && set "PY_CMD=py -3"
if not defined PY_CMD (
    python --version >nul 2>nul && set "PY_CMD=python"
)
if not defined PY_CMD (
    python3 --version >nul 2>nul && set "PY_CMD=python3"
)

if not defined PY_CMD (
    echo.
    echo [ERROR] Python was not detected on this machine!
    echo.
    echo Please download and install Python 3.8+ from:
    echo   https://www.python.org/downloads/
    echo.
    echo IMPORTANT: Make sure to check "Add python.exe to PATH" during installation.
    echo.
    pause
    exit /b 1
)

echo [*] Detected Python environment: %PY_CMD%

:: Check if packages are installed; if not, install them gracefully
%PY_CMD% -c "import pandas, joblib, sklearn" >nul 2>nul
if errorlevel 1 (
    echo [*] First-time setup: installing dependencies from requirements.txt...
    %PY_CMD% -m pip install -r requirements.txt
)

echo [*] Launching web app at http://localhost:8000 ...

:: Open default browser automatically in background after a brief delay
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:8000"

:: Run the server
%PY_CMD% main.py
if errorlevel 1 (
    echo.
    echo [ERROR] Server exited with code !errorlevel!.
    pause
)
