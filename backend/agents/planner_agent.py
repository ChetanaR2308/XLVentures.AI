from langchain_core.messages import HumanMessage

from backend.config.llm import llm
from backend.graph.state import AgentState
from backend.models.planner_models import PlannerOutput
from backend.prompts.planner_prompt import PLANNER_PROMPT


def planner_agent(state: AgentState) -> AgentState:

    prompt = f"""
{PLANNER_PROMPT}

TRANSCRIPT:
{state["transcript"]}
"""

    structured_llm = llm.with_structured_output(PlannerOutput)

    result = structured_llm.invoke(
        [HumanMessage(content=prompt)]
    )

    state["execution_plan"] = result.model_dump()

    return state