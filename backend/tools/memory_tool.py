from backend.graph.state import AgentState


def memory_tool(state: AgentState) -> AgentState:
    """
    Customer interaction memory.
    """

    context = state.get("context", {})

    memory = context.get("memory", [
        "Customer previously reported slow response times.",
        "Customer requested escalation last quarter.",
    ])

    context["memory"] = memory

    state["context"] = context

    return state