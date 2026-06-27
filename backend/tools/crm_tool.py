from backend.graph.state import AgentState


def crm_tool(state: AgentState) -> AgentState:
    """
    CRM tool (no LLM).

    Expected to be populated by backend integration later.
    """

    context = state.get("context", {})

    crm_data = context.get("crm", {
        "status": "unknown",
        "tier": "unknown",
        "renewal": "unknown",
    })

    context["crm"] = crm_data

    state["context"] = context

    return state