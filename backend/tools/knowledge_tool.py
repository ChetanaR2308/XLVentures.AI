from graph.state import AgentState


def knowledge_tool(state: AgentState) -> AgentState:

    context = state.get("context", {})

    context["knowledge"] = context.get("knowledge", [
        "Enterprise escalation available for premium customers.",
        "Renewals should be handled 30 days before expiry.",
    ])

    state["context"] = context

    return state