from graph.workflow import workflow


state = {
    "transcript": """
Customer is unhappy with support response time.

Renewal is in 10 days.

Customer is comparing competitors.
""",

    "execution_plan": {},

    "context": {},

    "recommendations": [],

    "explanation": [],

    "confidence": 0,
}


result = workflow.invoke(state)

print("\n=== RECOMMENDATIONS ===")
print(result["recommendations"])

print("\n=== EXPLANATION ===")
print(result["explanation"])

print("\n=== CONFIDENCE ===")
print(result["confidence"])