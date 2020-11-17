const express = require('express');
const app = express();
const port = 8000;
const json = require('./package.json');
var name = "Node API";

app.listen(port, ()=> {
	console.log('listening on port 8000. Access port localhost:8000\\health');
})


app.get('/health', function (req,res) {
res.send('App Name = ' + json.name + '<br/>' + 'Version = ' + json.version)
})
