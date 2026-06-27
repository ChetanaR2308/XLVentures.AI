from backend.agents.crm_agent import crm_agent
from backend.agents.knowledge_agent import knowledge_agent
from backend.agents.memory_agent import memory_agent

state = {
    "transcript": "",

    "plan": {},

    "crm_data": {
        "customer_name": "Acme Corp",
        "tier": "Enterprise",
        "renewal_date": "2026-07-20",
        "account_health": "At Risk",
    },

    "knowledge": [
        "Enterprise customers receive executive escalation.",
        "Renewal reminders begin 30 days before renewal.",
    ],

    "memory": [
        "Previous complaint about support delays.",
        "Executive call requested last quarter.",
    ],

    "recommendations": [],

    "explanation": [],

    "confidence": 0,
}

state = crm_agent(state)
state = knowledge_agent(state)
state = memory_agent(state)

print(state["crm_data"])
print(state["knowledge"])
print(state["memory"])
