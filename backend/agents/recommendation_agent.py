import json

from langchain_core.messages import HumanMessage

from config.llm import llm
from graph.state import AgentState
from models.recommendation_models import RecommendationOutput
from prompts.recommendation_prompt import RECOMMENDATION_PROMPT


def recommendation_agent(state: AgentState) -> AgentState:

    context = state.get("context", {})

    prompt = f"""
{RECOMMENDATION_PROMPT}

TRANSCRIPT:
{state["transcript"]}

CRM:
{json.dumps(context.get("crm", {}), indent=2)}

KNOWLEDGE:
{json.dumps(context.get("knowledge", []), indent=2)}

MEMORY:
{json.dumps(context.get("memory", []), indent=2)}
"""

    structured_llm = llm.with_structured_output(RecommendationOutput)

    result = structured_llm.invoke(
        [HumanMessage(content=prompt)]
    )

    state["recommendations"] = result.recommendations
    state["explanation"] = result.reasoning
    state["confidence"] = result.confidence

    return state