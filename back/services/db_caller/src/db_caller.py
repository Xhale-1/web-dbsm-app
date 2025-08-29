from fastapi import FastAPI
import uvicorn
import oracledb
from pathlib import Path
import os


print("Hello")


app = FastAPI()

# current_dir = Path(__file__).parent
# lib_dir_path = current_dir / "instantclient_23_8"
# oracledb.init_oracle_client(lib_dir=str(lib_dir_path))

oracledb.init_oracle_client()
print("client ok")







str_conn = r"E3_ADMIN/ddbadmine3@10.11.33.26:1521/E3P2"
connection = oracledb.connect(str_conn)
print("Успешное подключение!")
cursor = connection.cursor()







query_devs = 'SELECT COUNT(*) FROM "ComponentData"'
query_syms = 'SELECT COUNT(*) FROM "SymbolData"'

query_table = """
  SELECT one."*SAP_nomer", one.ENTRY, one."Description"
  FROM E3_ADMIN."ComponentData" one
  JOIN E3_ADMIN."ComponentAttribute" two ON two.ID = one.ID
  WHERE two."AttributeValue" = 'Разрешено использование'
"""








@app.get("/devs")
def devs():
    cursor.execute(query_devs)
    data = cursor.fetchall()[0][0]
    return data

@app.get("/syms")
def devs():
    cursor.execute(query_syms)
    data = cursor.fetchall()[0][0]
    return data



@app.get("/table")
def devs():
    cursor.execute(query_table)
    data = cursor.fetchall()
    return data



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port = 5000)