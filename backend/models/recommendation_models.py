from pydantic import BaseModel, Field


class RecommendationOutput(BaseModel):
    recommendations: list[str] = Field(default_factory=list)

    reasoning: list[str] = Field(default_factory=list)

    confidence: int = Field(
        ge=0,
        le=100,
    )