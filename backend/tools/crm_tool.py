from graph.state import AgentState
import json

def crm_tool(state: AgentState) -> AgentState:

    with open("database/crm.json", "r") as f:
        crm_data = json.load(f)

    customer = "ABC Logistics"

    customer_data = None

    for item in crm_data:
        if item["customer"] == customer:
            customer_data = item
            break

    context = state.get("context", {})

    context["crm"] = customer_data or {
        "customer": customer,
        "plan": "Unknown",
        "renewal_days": 0,
        "revenue": 0,
        "industry": "Unknown"
    }

    state["context"] = context

    return state