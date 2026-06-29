# XLVentures AI (SellGenie)

An agentic dashboard that turns customer transcripts into **Explainable Next Best Actions** using a **Planner Agent** (LangGraph) and multiple enterprise-like tools (CRM, Knowledge Base, and Memory).

## Features

- **Planner Agent** decides which tools to run for the transcript
- **CRM tool** provides customer profile/context
- **Knowledge base tool** grounds responses in best practices/policies
- **Memory tool** injects prior context for personalization
- **Recommendation agent** returns prioritized actions + **confidence score**
- FastAPI backend + React (Vite) frontend

## Project Structure

- `backend/` - FastAPI app + LangGraph workflow + agents/tools
- `frontend/` - React UI for uploading a transcript and viewing recommendations

## Prerequisites

- Python 3.10+
- Node.js 18+
- A Google API key for the LLM (Gemini)

## Backend Setup (FastAPI)

1. Create and activate a virtual environment:
   - `python -m venv .venv`
   - Activate:
     - Windows (cmd): `\.venv\Scripts\activate`
     - PowerShell: `.\.venv\Scripts\Activate.ps1`

2. Install dependencies:
   - `pip install -r requirements.txt`

3. Configure environment variables:
   - `GOOGLE_API_KEY=<your_key>`

4. Run the backend:
   - `uvicorn backend.main:app --reload --port 8000`

Backend Healthcheck:
- `GET http://localhost:8000/`

## Frontend Setup (React / Vite)

1. Install dependencies:
   - `cd frontend`
   - `npm install`

2. Run the dev server:
   - `npm run dev`

Frontend default API baseURL (in `frontend/src/services/api.js`):
- `http://localhost:8000`

> Note: In the current code, `analyzeTranscript()` returns a mocked response by default. To connect to the real backend, uncomment the `API.post("/analyze", ...)` call in `frontend/src/services/api.js`.

## How the Analysis Works

1. User pastes a transcript in the UI
2. Frontend calls backend `POST /analyze` with `{ transcript }`
3. LangGraph workflow:
   - `planner_agent` decides whether to call:
     - `crm_tool`, and/or
     - `knowledge_tool`, and then
     - always `memory_tool`
   - `recommendation_agent` produces recommendations and explanation
4. UI renders:
   - customer summary
   - confidence gauge
   - planner output
   - next best actions
   - AI explanation

## Tests

Backend tests are located in `backend/tests/`.

Run:
- `pytest`

## Configuration / Data Files

The repository includes local JSON files under `backend/database/` (e.g., `crm.json`, `memory.json`) used by the tools.

## License

Add license information here if needed.

