from typing import Any
from typing_extensions import TypedDict


class AgentState(TypedDict):
    transcript: str

    plan: dict[str, Any]

    crm_data: dict[str, Any]

    knowledge: list[dict]
    
    memory: list[dict]

    recommendations: list[str]

    explanation: list[str]

    confidence: int