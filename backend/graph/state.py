from typing import TypedDict


class AgentState(TypedDict):

    transcript: str

    plan: dict

    crm_data: dict

    knowledge: str

    memory: str

    recommendation: str

    explanation: str

    confidence: int