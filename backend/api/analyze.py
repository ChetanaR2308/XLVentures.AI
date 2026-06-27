from fastapi import APIRouter
from pydantic import BaseModel
import traceback
from graph.workflow import workflow

router = APIRouter()

class AnalyzeRequest(BaseModel):
    transcript: str

@router.post("/analyze")
def analyze(data: AnalyzeRequest):

    if not data.transcript.strip():
        return {
            "error": "TRANSCRIPT_EMPTY",
            "message": "Transcript cannot be empty"
        }

    try:
        state = {
            "transcript": data.transcript,
            "execution_plan": {},
            "context": {},
            "recommendations": [],
            "explanation": [],
            "confidence": 0
        }

        result = workflow.invoke(state)
        return result

    except Exception as e:
        print(traceback.format_exc())
        return {
        "error": "WORKFLOW_ERROR",
        "message": str(e)
    }