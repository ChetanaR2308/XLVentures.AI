from pydantic import BaseModel, Field


class AgentDecision(BaseModel):
    name: str = Field(..., description="Agent name")
    reason: str = Field(..., description="Reason for selecting the agent")


class PlannerOutput(BaseModel):
    agents: list[AgentDecision]
    