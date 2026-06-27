from langchain_core.messages import HumanMessage

from config.llm import llm
from graph.state import AgentState
from models.planner_models import PlannerOutput
from prompts.planner_prompt import PLANNER_PROMPT


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
    
    print("PLANNER RESULT:", result)
    print("MODEL DUMP:", result.model_dump())
    print("TYPE:", type(result.model_dump()))
    state["execution_plan"] = result.model_dump()

    return state