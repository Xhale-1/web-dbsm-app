from fastapi import FastAPI
import uvicorn
import requests 

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5003"],  # URL вашего React приложения
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/devs_bd_status")
def sum_end():
    r_devs = requests.get("http://db_caller:5000/devs").json()
    r_syms = requests.get("http://db_caller:5000/syms").json()
    return [r_devs, r_syms]

@app.get("/table")
def table():
    table = requests.get("http://db_caller:5000/table").json()
    return table

if  __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5001)

