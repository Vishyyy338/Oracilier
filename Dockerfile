# ==============================================================================
# Dockerfile: Data Center Water Cooling Predictive AI
# Target Architecture: Multi-arch (IBM LinuxONE s390x & x86_64)
# Security: Hardened, non-root user execution
# Frameworks: PyTorch + XGBoost + FastAPI
# ==============================================================================

FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    DEBIAN_FRONTEND=noninteractive \
    PORT=8000

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create secure non-root application user
RUN groupadd -r appuser && useradd -r -g appuser -d /app -s /sbin/nologin appuser

WORKDIR /app

# Copy dependency specifications and install
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy application source code
COPY main.py .
COPY ml_engine.py .
COPY predictive_ai.py .
COPY server.py .

# Copy data, models, and static dashboard assets
COPY data/ ./data/
COPY models/ ./models/
COPY static/ ./static/
COPY ml_baseline.ipynb predictive_ai.ipynb ./

RUN chown -R appuser:appuser /app

# Switch to secure non-root user
USER appuser

# Expose microservice API port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

# Start FastAPI Predictive AI service
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
