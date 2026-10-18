#!/usr/bin/env bash
set -e

# Detect Python
if command -v python3 &>/dev/null; then
    PY_BIN=python3
elif command -v python &>/dev/null; then
    PY_BIN=python
else
    echo "Error: Python 3 not found. Please install Python 3.8+."
    exit 1
fi

echo "=========================================================="
echo " Data Center Water Cooling Predictive AI Engine           "
echo " Live URL: http://localhost:8000                          "
echo "=========================================================="

# Free port 8000 if already in use by a previous instance
if command -v fuser &>/dev/null; then
    fuser -k 8000/tcp &>/dev/null || true
    sleep 0.5
fi

exec $PY_BIN main.py
