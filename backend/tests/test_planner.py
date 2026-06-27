from agents.planner_agent import planner_agent


state = {
    "transcript": """
Customer says response time is poor.

Renewal is in 20 days.

Customer is evaluating competitors.
""",

    "plan": {},

    "crm_data": {},

    "knowledge": [],

    "memory": [],

    "recommendations": [],

    "explanation": [],

    "confidence": 0,
}

result = planner_agent(state)

print(result["plan"])