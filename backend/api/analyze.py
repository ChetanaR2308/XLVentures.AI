from fastapi import APIRouter
from services.crm_service import get_customer

router = APIRouter()

@router.post("/analyze")
def analyze():

    customer = get_customer("ABC Logistics")

    return {
        "customer": customer["customer"],
        "plan": customer["plan"],
        "renewal_days": customer["renewal_days"],
        "recommendation": "Executive Meeting",
        "confidence": 91
    }