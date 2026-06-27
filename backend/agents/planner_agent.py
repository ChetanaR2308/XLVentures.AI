import json

from backend.config.llm import llm
from backend.prompts.planner_prompt import PLANNER_PROMPT


def planner_agent(state):

    transcript = state["transcript"]

    prompt = f"""

{PLANNER_PROMPT}

Meeting Transcript:

{transcript}

"""

    response = llm.invoke(prompt)

    try:

        plan = json.loads(response.content)

    except Exception:

        plan = {
            "agents": [
                {
                    "name": "CRM Agent",
                    "reason": "Fallback"
                },
                {
                    "name": "Memory Agent",
                    "reason": "Fallback"
                },
                {
                    "name": "Knowledge Agent",
                    "reason": "Fallback"
                }
            ]
        }

    state["plan"] = plan

    return state