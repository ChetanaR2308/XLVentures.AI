# XLVentures.AI

## AI-Powered Enterprise Decision Intelligence Platform

XLVentures.AI is an AI-powered enterprise intelligence platform designed to convert unstructured business meeting transcripts into structured, actionable insights. By leveraging a modular multi-agent AI architecture powered by Google's Gemini 2.5 Flash model, the platform helps organizations reduce manual effort and make faster, data-driven decisions.

Instead of manually reviewing lengthy meeting discussions, users receive a comprehensive analysis that includes executive summaries, key insights, potential risks, business opportunities, and actionable recommendations through an intuitive and interactive dashboard.

---

# Team Details

## Team Name

**VentureMinds**

## Team Members

### Rangu Chetana

* Email: [chetanarangu23@gmail.com](mailto:chetanarangu23@gmail.com)
* Phone: +91 8247253582

### Thummanapelli Spoorthi

* Email: [spoorthithummanapelli14@gmail.com](mailto:spoorthithummanapelli14@gmail.com)
* Phone: +91 8374572979

### Veda Munipally

* Email: [vedamunipally@gmail.com](mailto:vedamunipally@gmail.com)
* Phone: +91 9100150278

---

# Project Overview

Business meetings generate valuable information, but the outcomes are often buried within long and unstructured transcripts. Manually identifying important decisions, risks, opportunities, and action items is time-consuming and prone to oversight.

XLVentures.AI addresses this challenge by automatically analyzing meeting transcripts using specialized AI agents. Each agent focuses on a specific aspect of the conversation, producing structured outputs that support business decision-making.

The platform provides:

* Executive Summary
* Key Business Insights
* Risk Identification
* Opportunity Detection
* Actionable Recommendations

The generated insights are presented through a clean and responsive dashboard, making it easy for users to understand meeting outcomes within seconds.

---

# Key Features

* AI-powered transcript analysis
* Multi-agent workflow for specialized reasoning
* Executive-level business summaries
* Automatic risk and opportunity detection
* Actionable recommendations
* Modern and responsive user interface
* Fast and scalable backend using FastAPI

---

# Technology Stack

## Frontend

* React
* Vite
* Tailwind CSS
* Framer Motion
* React Router
* Lucide React Icons

## Backend

* Python
* FastAPI
* Uvicorn

## Artificial Intelligence

* Google Gemini 2.5 Flash
* Prompt Engineering
* Multi-Agent AI Architecture

---

# Project Architecture

The system follows a modular client-server architecture.

1. Users upload or paste a meeting transcript through the React frontend.
2. The FastAPI backend validates the request and forwards it to the AI orchestration layer.
3. The Planner Agent coordinates the analysis process.
4. Specialized AI agents independently generate:

   * Executive Summary
   * Key Insights
   * Risks
   * Opportunities
   * Recommendations
5. The backend consolidates all outputs into a structured response.
6. The frontend displays the results in an interactive dashboard.

This modular architecture makes the system scalable, maintainable, and easy to extend with additional AI agents in the future.

---

# GitHub Repository

Repository Link:

https://github.com/ChetanaR2308/XLVentures.AI

---

# Setup Instructions

## Prerequisites

* Python 3.11 or later
* Node.js (v18 or later recommended)
* npm
* Google Gemini API Key

---

## Backend Setup

Navigate to the backend directory.

```bash
cd backend
```

Activate the virtual environment.

```bash
.\venv\Scripts\Activate
```

Install the required dependencies.

```bash
pip install -r requirements.txt
```

Create a `.env` file and add your Gemini API key.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Start the FastAPI server.

```bash
uvicorn main:app --reload
```

The backend will be available at:

```text
http://127.0.0.1:8000
```

---

## Frontend Setup

Navigate to the frontend directory.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

# Repository Structure

```text
XLVentures.AI
│
├── backend
│   ├── agents
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── README.md
├── Architecture.md
└── .gitignore
```

---

# Future Enhancements

* PDF report generation
* Audio and speech-to-text meeting analysis
* Retrieval-Augmented Generation (RAG)
* CRM integration
* Slack and Microsoft Teams integration
* User authentication and role-based access
* Cloud deployment with Docker and Kubernetes

---

# Additional Notes

* Developed as part of the **XLVentures.AI Hackathon 2026**.
* The project demonstrates the use of a modular multi-agent AI architecture for enterprise decision intelligence.
* The architecture is designed for scalability, allowing additional AI agents and enterprise integrations to be incorporated with minimal changes.
* Detailed architectural information and design decisions are available in **Architecture.md**.

---

## Thank You

Thank you for reviewing **XLVentures.AI**. We hope our solution demonstrates how agentic AI can simplify enterprise decision-making by transforming unstructured conversations into meaningful, actionable business intelligence.
