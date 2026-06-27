from backend.graph.workflow import workflow

state = {
    "transcript": """
Customer complained about delayed support.

Renewal is in 12 days.

Customer is evaluating competitors.
""",

    "plan": {},

    "crm_data": {
        "tier": "Enterprise",
        "renewal_days": 12,
        "account_health": "At Risk",
    },

    "knowledge": [
        "Enterprise customers qualify for executive escalation.",
        "Renewals should begin within 30 days."
    ],

    "memory": [
        "Customer complained about support last quarter.",
        "Requested roadmap presentation."
    ],

    "recommendations": [],

    "explanation": [],

    "confidence": 0,
}

result = workflow.invoke(state)

print("\nRecommendations")
print(result["recommendations"])

print("\nReasoning")
print(result["explanation"])

print("\nConfidence")
print(result["confidence"])