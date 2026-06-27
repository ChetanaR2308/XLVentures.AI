from langgraph.graph import END
from langgraph.graph import START
from langgraph.graph import StateGraph

from backend.agents.crm_agent import crm_agent
from backend.agents.knowledge_agent import knowledge_agent
from backend.agents.memory_agent import memory_agent
from backend.agents.planner_agent import planner_agent
from backend.agents.recommendation_agent import recommendation_agent
from backend.graph.state import AgentState


def build_workflow():

    graph = StateGraph(AgentState)

    graph.add_node("planner", planner_agent)
    graph.add_node("crm", crm_agent)
    graph.add_node("knowledge", knowledge_agent)
    graph.add_node("memory", memory_agent)
    graph.add_node("recommendation", recommendation_agent)

    graph.add_edge(START, "planner")

    graph.add_edge("planner", "crm")

    graph.add_edge("crm", "knowledge")

    graph.add_edge("knowledge", "memory")

    graph.add_edge("memory", "recommendation")

    graph.add_edge("recommendation", END)

    return graph.compile()


workflow = build_workflow()