from backend.graph.state import AgentState


def memory_agent(state: AgentState) -> AgentState:
    """
    Reads previous customer interaction summaries.

    Expected input:
        state["memory"] = [
            "Customer complained about latency.",
            "Escalated twice.",
            "Requested executive meeting."
        ]
    """

    memory = state.get("memory", [])

    state["memory"] = memory

    return state