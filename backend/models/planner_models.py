from pydantic import BaseModel, Field


class AgentDecision(BaseModel):
    name: str = Field(...)

    reason: str = Field(...)


class PlannerOutput(BaseModel):
    agents: list[AgentDecision]