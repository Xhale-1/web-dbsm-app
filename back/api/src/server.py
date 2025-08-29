from fastapi import FastAPI
import uvicorn
import requests 

app = FastAPI()

@app.get("/devs_bd_status")
def sum_end():
    r_devs = requests.get("db_caller/devs")
    r_syms = requests.get("db_caller/syms")
    out = 
    return "hello0"

@app.get("/table")
def sum_end():
    return "hello1"

if  __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5001)

