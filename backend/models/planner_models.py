from pydantic import BaseModel, Field


class AgentDecision(BaseModel):
    name: str = Field(..., description="Tool or agent name")

    reason: str = Field(..., description="Why this tool is needed")


class PlannerOutput(BaseModel):
    agents: list[AgentDecision]