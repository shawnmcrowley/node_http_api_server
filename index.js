const express = require('express');
const port = 3000;
const app = express();


app.get("/",(request, response) => {
	response.send("Running Node HTTP & API Server");
});

app.listen(port, () => {
	console.log(`HTTP & API Server Listening on ${port}`);
});

