from fastapi import FastAPI
from api.analyze import router
from backend.main import app

app = FastAPI()

app.include_router(router)

@app.get("/")
def home():
    return {
        "status": "running",
        "message": "SellGenie Backend Working"
    }