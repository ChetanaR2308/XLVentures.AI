from backend.agents.recommendation_agent import recommendation_agent

state = {
    "transcript": """
Customer is unhappy with support.

Renewal is in 15 days.

Customer mentioned evaluating competitors.
""",

    "plan": {},

    "crm_data": {
        "tier": "Enterprise",
        "renewal_days": 15,
        "account_health": "At Risk"
    },

    "knowledge": [
        "Enterprise customers qualify for executive escalation.",
        "Renewals should be proactively handled within 30 days."
    ],

    "memory": [
        "Previous complaint regarding response time.",
        "Customer requested product roadmap discussion."
    ],

    "recommendations": [],

    "explanation": [],

    "confidence": 0,
}

result = recommendation_agent(state)

print(result["recommendations"])
print(result["explanation"])
print(result["confidence"])