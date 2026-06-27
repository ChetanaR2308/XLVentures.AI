from langgraph.graph import StateGraph, START, END

from backend.graph.state import AgentState

from backend.agents.planner_agent import planner_agent
from backend.agents.recommendation_agent import recommendation_agent

from backend.tools.crm_tool import crm_tool
from backend.tools.knowledge_tool import knowledge_tool
from backend.tools.memory_tool import memory_tool


# ---------- CONDITIONS ----------

def run_crm(state: AgentState):
    agents = state.get("execution_plan", {}).get("agents", [])
    return any(a["name"] == "CRM Tool" for a in agents)


def run_knowledge(state: AgentState):
    agents = state.get("execution_plan", {}).get("agents", [])
    return any(a["name"] == "Knowledge Tool" for a in agents)


def run_memory(state: AgentState):
    agents = state.get("execution_plan", {}).get("agents", [])
    return any(a["name"] == "Memory Tool" for a in agents)


# ---------- GRAPH ----------

def build_graph():

    graph = StateGraph(AgentState)

    graph.add_node("planner", planner_agent)
    graph.add_node("crm", crm_tool)
    graph.add_node("knowledge", knowledge_tool)
    graph.add_node("memory", memory_tool)
    graph.add_node("recommendation", recommendation_agent)

    graph.add_edge(START, "planner")

    graph.add_conditional_edges(
        "planner",
        run_crm,
        {True: "crm", False: "knowledge"}
    )

    graph.add_edge("crm", "knowledge")
    graph.add_edge("knowledge", "memory")
    graph.add_edge("memory", "recommendation")

    graph.add_edge("recommendation", END)

    return graph.compile()

workflow = build_graph()