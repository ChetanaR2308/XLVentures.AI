from typing import Any
from typing_extensions import TypedDict


class AgentState(TypedDict):
    transcript: str

    execution_plan: dict[str, Any]

    context: dict[str, Any]

    recommendations: list[str]

    explanation: list[str]

    confidence: int