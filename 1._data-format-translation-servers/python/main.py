from fastapi import FastAPI
import pandas as pd 
import json 
import xmltodict
import csv
import requests

app=FastAPI()

@app.get('/csv')
def _():
	df = pd.read_csv(open('../files/me.csv'))
	data = df.to_dict('records')
	#print(df.to_dict('list')) - Keeps all values in an array for each key
	json_object = json.dumps(data)
	#json_object = json.dumps(json.JSONDecoder().decode(data))
	print(json_object)
	return {json_object}

@app.get('/xml')
def _():
	with open('../files/me.xml') as xml_file:
		data_dict = xmltodict.parse(xml_file.read())

	json_object = json.dumps(data_dict)
	print(json_object)
	
	return {json_object}

@app.get('/json')
def _():
	resp = requests.get('http://localhost:3000/json')
	return {"Response from node server: ": resp.content}

@app.get('/yaml')
def _():
	resp = requests.get('http://localhost:3000/yaml')
	return {"Response from node server: ": resp.content}

@app.get('/txt')
def _():
	resp = requests.get('http://localhost:3000/yaml')
	return {"Response from node server: ": resp.content}