import express from	'express';
import axios from	'axios';
//import swaggerAutogen from 'swagger-autogen';
import swaggerUi from 'swagger-ui-express';
//import swaggerFile from './swagger-output.json';
//const require = createRequire(import.meta.url); // construct the require method
//const swaggerFile = require("./swagger-output.json") // use the require method
import bodyParser from 'body-parser';
import { readFile } from 'fs/promises';

const swaggerFile = JSON.parse(await readFile(new URL('./swagger-output.json', import.meta.url)));


const app = express();
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use (bodyParser.json())


app.get('/utcnow', (req, res) => {
	let d = new Date(new Date().toUTCString());
	let isoD = d.toISOString();

	res.send({timestamp: isoD})
});

app.get('/testDoc', (req, res) => {
	
	res.send({Yeee: "Whoooooop"});
})

app.get('/', (req, res) => {
	res.send({Welcome: 'Welcome to the node server son'});
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Server listening on port " + port);
});
/*
swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
  await import('./app.js'); // Your project's root file
});*/
