from backend.graph.state import AgentState


def crm_agent(state: AgentState) -> AgentState:
    """
    Extract CRM information already attached to the workflow state.

    Expected input from backend integration:
        state["crm_data"] = {
            "customer_name": "...",
            "segment": "...",
            "tier": "...",
            "renewal_date": "...",
            "account_health": "...",
            ...
        }
    """

    crm_data = state.get("crm_data", {})

    state["crm_data"] = crm_data

    return state