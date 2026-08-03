from os import getenv
from typing import Any

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

APP_NAME = getenv("APP_NAME", "devops-portfolio-api")
FRONTEND_ORIGIN = getenv("FRONTEND_ORIGIN", "http://localhost:5173")

app = FastAPI(
    title="DevOps Portfolio API",
    version="1.0.0",
    description="Small FastAPI service for portfolio health checks and metadata.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_ORIGIN, "http://localhost:4173"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/health", tags=["ops"])
def health() -> dict[str, str]:
    return {"status": "ok", "service": APP_NAME}


@app.get("/profile", tags=["portfolio"])
def profile() -> dict[str, Any]:
    return {
        "name": "Derick Omondi",
        "focus": "DevOps Engineer | CI/CD · Containers · IaC · Observability",
        "stack": [
            "Python",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Ansible",
            "ArgoCD",
            "GitHub Actions",
            "Prometheus",
            "Grafana",
            "AWS",
        ],
        "projects": [
            {
                "name": "Munch Catering Marketplace",
                "repo": "https://github.com/rico-del/Munch_Catering",
            },
            {
                "name": "Terraform Infrastructure",
                "repo": "https://github.com/rico-del/Terraform",
            },
        ],
        "deployment_targets": {
            "frontend": "AWS S3 static website",
            "ci_cd": "GitHub Actions",
            "infrastructure": "Terraform on AWS",
        },
    }
