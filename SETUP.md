# XLVentures.AI — Setup Instructions

## Prerequisites

Before running the project, ensure the following software is installed:

- Python 3.11+
- Node.js 18+ (LTS recommended)
- npm (comes with Node.js)
- Git
- Visual Studio Code (recommended)

---

# 1. Clone the Repository

```bash
git clone <repository-url>
cd XLVentures.AI
```

---

# 2. Backend Setup

## Step 1: Create Virtual Environment

Windows

```bash
python -m venv venv
```

---

## Step 2: Activate Virtual Environment

### Command Prompt (CMD)

```bash
venv\Scripts\activate
```

### PowerShell

```powershell
.\venv\Scripts\Activate.ps1
```

You should now see

```text
(venv)
```

at the beginning of your terminal.

---

## Step 3: Install Python Dependencies

Navigate to the backend directory.

```bash
cd backend
```

Install all required packages.

```bash
pip install -r requirements.txt
```

---

## Step 4: Configure Environment Variables

Create a file named

```text
.env
```

inside the project root.

Example:

```env
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
```

Replace

```
YOUR_GEMINI_API_KEY
```

with your own Gemini API key obtained from Google AI Studio.

---

## Step 5: Run Backend

From the backend directory

```bash
uvicorn main:app --reload
```

Backend will start on

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

# 3. Frontend Setup

Open a new terminal.

Navigate to frontend.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start development server.

```bash
npm run dev
```

Frontend will run on

```
http://localhost:5173
```

---

# 4. Running the Complete Application

### Terminal 1

```bash
cd backend

venv\Scripts\activate

uvicorn main:app --reload
```

### Terminal 2

```bash
cd frontend

npm run dev
```

Now open

```
http://localhost:5173
```

---

# Project Structure

```
XLVentures.AI
│
├── backend/
│   ├── agents/
│   ├── config/
│   ├── graph/
│   ├── prompts/
│   ├── models/
│   ├── tests/
│   ├── utils/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .env
├── .gitignore
└── README.md
```

---

# Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router

## Backend

- Python
- FastAPI
- LangChain
- LangGraph
- Google Gemini API
- Pydantic
- python-dotenv

## AI Components

- Planner Agent
- CRM Agent
- Knowledge Agent
- Memory Agent
- Recommendation & Explainability Agent

---

# Common Commands

### Install Backend Packages

```bash
pip install -r requirements.txt
```

### Install Frontend Packages

```bash
npm install
```

### Start Backend

```bash
uvicorn main:app --reload
```

### Start Frontend

```bash
npm run dev
```

---

# Troubleshooting

### Virtual Environment Not Activated

Run

```bash
venv\Scripts\activate
```

---

### Missing Python Packages

```bash
pip install -r requirements.txt
```

---

### Frontend Dependencies Missing

```bash
npm install
```

---

### Backend Not Starting

Ensure:

- Virtual environment is activated.
- `.env` file exists.
- `GOOGLE_API_KEY` is correctly configured.

---

# Team Workflow

1. Pull the latest changes.

```bash
git pull origin main
```

2. Create or switch to your branch.

```bash
git checkout <branch-name>
```

3. Make your changes.

4. Commit your changes.

```bash
git add .
git commit -m "Meaningful commit message"
```

5. Push your branch.

```bash
git push origin <branch-name>
```

---

# Notes

- Do not commit the `.env` file.
- Do not commit the `venv` directory.
- Always pull the latest changes before starting new work.
- Keep dependencies updated in `requirements.txt` whenever new backend packages are added.

---