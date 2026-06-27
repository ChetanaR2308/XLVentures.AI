import json

from langchain_core.messages import HumanMessage

from backend.config.llm import llm
from backend.graph.state import AgentState
from backend.models.planner_models import PlannerOutput
from backend.prompts.planner_prompt import PLANNER_PROMPT


def planner_agent(state: AgentState) -> AgentState:
    transcript = state["transcript"]

    prompt = f"""
{PLANNER_PROMPT}

Meeting Transcript:

{transcript}
"""

    response = llm.invoke([HumanMessage(content=prompt)])

    content = response.content

    if isinstance(content, list):
        content = "".join(
            part.get("text", "") if isinstance(part, dict) else str(part)
            for part in content
        )

    content = content.strip()

    if content.startswith("```json"):
        content = content[7:]

    if content.endswith("```"):
        content = content[:-3]

    content = content.strip()

    planner_output = PlannerOutput.model_validate(
        json.loads(content)
    )

    state["plan"] = planner_output.model_dump()

    return state