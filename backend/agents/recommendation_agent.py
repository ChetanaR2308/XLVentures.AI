import json

from langchain_core.messages import HumanMessage

from backend.config.llm import llm
from backend.graph.state import AgentState
from backend.models.recommendation_models import RecommendationOutput
from backend.prompts.recommendation_prompt import RECOMMENDATION_PROMPT


def recommendation_agent(state: AgentState) -> AgentState:

    prompt = f"""
{RECOMMENDATION_PROMPT}

Meeting Transcript:

{state["transcript"]}

CRM Information:

{json.dumps(state["crm_data"], indent=2)}

Enterprise Knowledge:

{json.dumps(state["knowledge"], indent=2)}

Customer Memory:

{json.dumps(state["memory"], indent=2)}
"""

    response = llm.invoke(
        [HumanMessage(content=prompt)]
    )

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

    result = RecommendationOutput.model_validate(
        json.loads(content)
    )

    state["recommendations"] = result.recommendations
    state["explanation"] = result.reasoning
    state["confidence"] = result.confidence

    return state