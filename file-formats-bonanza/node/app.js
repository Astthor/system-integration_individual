import express, { json } from 'express';
import fs from 'fs';
import { txtToJson } from './txt-to-json.js';
import yaml from 'js-yaml';

const app = express();

app.get('/txt', (req, res) => {
	fs.readFile('../files/me.txt', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return res.send({msg: 'Error reading txt file'});
		}
		let txtArray = data.split('\n');
		const jsonObj = txtToJson(txtArray);
		res.send(jsonObj);
	});
});

app.get('/yaml', (req, res) => {
	console.log("Reading yaml file");
	try {
		const doc = yaml.load(fs.readFileSync('../files/me.yaml', 'utf8'));
		console.log(doc);
		return res.send(doc);
	} catch (e) {
		console.log(e);
		return res.send({'Error': e.msg});
	}
});

app.get('/json', (req, res) => {
	console.log("Reading json file");
	let raw = fs.readFileSync('../files/me.json');
	let me = JSON.parse(raw);
	//console.log("me: " + JSON.stringify(me));
	res.send(me);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('listening on port ' + port);
});