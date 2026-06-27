from backend.agents.planner_agent import planner_agent


state = {

    "transcript":
    """
    Customer said support response is slow.

    Renewal is next month.

    Customer is considering competitors.
    """

}

result = planner_agent(state)

print(result["plan"])