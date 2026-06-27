from backend.graph.state import AgentState


def knowledge_agent(state: AgentState) -> AgentState:
    """
    Reads enterprise knowledge already retrieved by the backend.

    Expected input:
        state["knowledge"] = [
            "...policy chunk...",
            "...SLA...",
            "...renewal process..."
        ]
    """

    knowledge = state.get("knowledge", [])

    state["knowledge"] = knowledge

    return state