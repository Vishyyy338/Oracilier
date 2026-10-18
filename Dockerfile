# ==============================================================================
# Dockerfile: Data Center Water Cooling Predictive AI
# Target Architecture: Multi-arch (IBM LinuxONE s390x, x86_64, arm64)
# Base: Ubuntu 24.04 LTS (Native multi-arch support)
# Security: Hardened, non-root user execution
# ==============================================================================

FROM ubuntu:24.04

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    DEBIAN_FRONTEND=noninteractive \
    PORT=8000

# Install Python 3 and pre-compiled binary packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    python3-pip \
    python3-numpy \
    python3-pandas \
    python3-sklearn \
    python3-joblib \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create secure non-root application user
RUN groupadd -r appuser && useradd -r -g appuser -d /app -s /sbin/nologin appuser

WORKDIR /app

# Copy application source code
COPY main.py .
COPY ml_engine.py .
COPY predictive_ai.py .

# Copy data, models, and static dashboard assets
COPY data/ ./data/
COPY models/ ./models/
COPY static/ ./static/

RUN chown -R appuser:appuser /app

# Switch to secure non-root user
USER appuser

# Expose microservice API port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

# Start Predictive AI service
CMD ["python3", "main.py"]
