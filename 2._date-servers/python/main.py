from fastapi import FastAPI
import json
import datetime
import requests

app=FastAPI()

@app.get('/utcnow')
def _():
	response = requests.get('http://localhost:3000/utcnow')
	return response.content