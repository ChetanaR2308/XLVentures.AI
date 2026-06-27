from backend.graph.state import AgentState


def crm_tool(state: AgentState) -> AgentState:

    context = state.get("context", {})

    context["crm"] = context.get("crm", {
        "tier": "Enterprise",
        "status": "Active",
        "renewal": "Unknown",
    })

    state["context"] = context

    return state