from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return{"message": "Smart Energy Analytics Service is Running!"}