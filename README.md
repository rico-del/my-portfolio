# DevOps Portfolio

A production-ready portfolio for a DevOps-focused junior developer. The site is built as a technical product showcase: React for the frontend, FastAPI for backend demo APIs, Docker for backend runtime consistency, GitHub Actions for CI, AWS S3 for frontend hosting, and optional container runtime hosting.

## What This Demonstrates

- Full-stack application structure with separate frontend and backend concerns
- Reusable React components with structured portfolio data
- Dockerized FastAPI backend with a `/health` endpoint
- CI pipelines for frontend build/lint and backend smoke testing
- Deployment configuration for GitHub Actions, AWS S3, and optional container runtime hosting
- Honest project presentation: published projects are only shown after real URLs are added

## Project Structure

```text
.
├── api/                    # FastAPI service and Docker runtime
├── src/
│   ├── components/          # Reusable React components
│   ├── data/                # Portfolio content model
│   └── assets/              # UI preview assets
├── .github/workflows/       # CI checks and S3 deployment
└── render.yaml              # Optional backend deployment blueprint
```

## Local Frontend

```bash
npm install
npm run dev
```

## Local Backend

```bash
cd api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Health check:

```bash
curl http://localhost:8000/health
```

## Docker Backend

```bash
cd api
docker build -t devops-portfolio-api .
docker run --rm -p 8000:8000 devops-portfolio-api
```

## Deployment Notes

Frontend on AWS S3 static website via GitHub Actions:

- Build command: `npm run build`
- Publish directory: `dist`
- Workflow file: `.github/workflows/deploy-to-s3.yml`

To attach a resume, place a PDF at the public root of the site, for example:

```text
public/resume.pdf
```

Then the portfolio will link to it through `/resume.pdf`.

Backend on container runtime (optional):

- Blueprint file: `render.yaml`
- Runtime: Docker
- Root directory: `api`
- Health check path: `/health`

## Updating Portfolio Content

Edit `src/data/portfolioData.js`.

