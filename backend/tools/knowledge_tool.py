from backend.graph.state import AgentState


def knowledge_tool(state: AgentState) -> AgentState:
    """
    Enterprise knowledge retrieval placeholder.
    """

    context = state.get("context", {})

    knowledge = context.get("knowledge", [
        "Standard enterprise escalation policy applies.",
        "Renewals should be reviewed 30 days in advance.",
    ])

    context["knowledge"] = knowledge

    state["context"] = context

    return state