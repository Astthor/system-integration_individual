import express from	'express';
import axios from	'axios';

const app = express();

app.get('/utcnow', (req, res) => {
	let d = new Date(new Date().toUTCString());
	let isoD = d.toISOString();

	res.send({timestamp: isoD})
});

app.get('/', (req, res) => {
	res.send({Welcome: 'Welcome to the node server son'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Server listening on port " + port);
});
