from graph.state import AgentState


def memory_tool(state: AgentState) -> AgentState:

    context = state.get("context", {})

    context["memory"] = context.get("memory", [
        "Customer complained about slow support.",
        "Customer requested escalation in past interaction.",
    ])

    state["context"] = context

    return state