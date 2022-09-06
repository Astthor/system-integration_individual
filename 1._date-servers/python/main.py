from fastapi import FastAPI
import json
import datetime

app=FastAPI()

@app.get('/utcnow')
def _():
	data = {
		"timestamp": datetime.datetime.utcnow().replace(microsecond=0).isoformat() + '.000Z'
	}
	return data