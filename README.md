# XLVentures.AI

## Intelligent Next Best Action Platform

### XLVentures.AI Hackathon 2026

---

## Project Overview

XLVentures.AI is an Agentic Decision Intelligence Platform developed for the XLVentures.AI Hackathon. The platform analyzes customer interactions, retrieves relevant enterprise knowledge, understands customer history, and recommends intelligent next best actions supported by explainable AI reasoning.

Unlike a traditional chatbot or Retrieval-Augmented Generation (RAG) application, this solution uses multiple specialized AI agents coordinated through a Planner Agent to produce business recommendations that are transparent, reusable, and extensible.

---

## Problem Statement

Organizations receive customer information from various enterprise sources including meeting transcripts, CRM systems, customer conversations, emails, and internal documentation.

Business users often spend considerable time gathering information before deciding on the next action for a customer.

The objective of this project is to automate that decision-making process using an Agentic AI platform capable of understanding customer context, retrieving enterprise knowledge, reasoning over multiple information sources, and recommending the most appropriate next actions.

---

## Solution

The platform performs the following workflow:

1. Receives customer interaction data.
2. Uses a Planner Agent to determine the required enterprise tools.
3. Retrieves customer information from CRM.
4. Retrieves organizational knowledge.
5. Retrieves previous customer interactions from memory.
6. Combines all retrieved information.
7. Generates explainable next best action recommendations.
8. Returns structured recommendations with confidence scores for human approval.

---

## System Architecture

```
                           React Frontend
                                  │
                                  ▼
                           FastAPI Backend
                                  │
                                  ▼
                         LangGraph Workflow
                                  │
                                  ▼
                           Planner Agent
                                  │
          ┌───────────────────────┼────────────────────────┐
          │                       │                        │
          ▼                       ▼                        ▼
      CRM Tool             Knowledge Tool            Memory Tool
          └───────────────────────┼────────────────────────┘
                                  ▼
         Recommendation and Explainability Agent
                                  │
                                  ▼
                    Structured Recommendation Output
                                  │
                                  ▼
                           React Dashboard
```

---

## Features

- Agentic AI architecture
- Planner-based orchestration
- Enterprise knowledge retrieval
- Customer memory integration
- Explainable recommendations
- Confidence scoring
- Human-in-the-loop approval
- Modular and reusable architecture
- Professional React dashboard

---

## AI Workflow

The AI workflow follows these stages:

1. Transcript ingestion
2. Planner Agent execution
3. CRM information retrieval
4. Knowledge retrieval
5. Memory retrieval
6. Business reasoning
7. Recommendation generation
8. Explainability generation
9. Confidence score calculation
10. User approval

---

## Technology Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router

### Backend

- Python
- FastAPI
- Uvicorn

### Artificial Intelligence

- Google Gemini
- LangChain
- LangGraph
- Pydantic
- Python Dotenv

### Development Tools

- Git
- GitHub
- Visual Studio Code

---

## Project Structure

```
XLVentures.AI
│
├── backend
│   ├── agents
│   ├── config
│   ├── graph
│   ├── prompts
│   ├── models
│   ├── utils
│   ├── tests
│   └── ...
│
├── frontend
│   ├── public
│   ├── src
│   └── ...
│
├── requirements.txt
├── .gitignore
├── .env
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd XLVentures.AI
```

---

### Backend Setup

Create a virtual environment.

```bash
python -m venv venv
```

Activate the virtual environment.

Windows (Command Prompt)

```bash
venv\Scripts\activate
```

Windows (PowerShell)

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Create a `.env` file.

```env
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
```

Start the backend server.

```bash
cd backend
uvicorn main:app --reload
```

Backend URL

```
http://localhost:8000
```

Swagger Documentation

```
http://localhost:8000/docs
```

---

### Frontend Setup

Navigate to the frontend directory.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

## Running the Complete Application

Start the backend.

```bash
cd backend
uvicorn main:app --reload
```

Open a new terminal and start the frontend.

```bash
cd frontend
npm run dev
```

---

## Team Responsibilities

### Member 1

- Frontend development
- User interface
- Dashboard
- Visualization

### Member 2

- Agentic AI architecture
- Planner Agent
- LangGraph workflow
- Recommendation engine
- Explainability module

### Member 3

- FastAPI backend
- APIs
- Database
- Enterprise knowledge retrieval
- Integration

---

## Future Enhancements

- Multi-model LLM support
- Enterprise CRM integration
- Authentication and authorization
- Multi-tenant architecture
- Continuous learning from user feedback
- Analytics dashboard
- Real-time enterprise connectors

---

## Hackathon Information

Project Name: XLVentures.AI

Hackathon: XLVentures.AI Hackathon 2026

Problem Statement: Intelligent Next Best Action Platform

Category: Agentic AI Decision Intelligence Platform

---

## License

This project was developed for the XLVentures.AI Hackathon and is intended for educational and demonstration purposes.