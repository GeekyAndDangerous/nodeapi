//Variable declarations
const express = require('express');
const app = express();
const port = 8000;
const json = require('./package.json');
app.use(express.static(__dirname + '/node_modules'));

var git = require('git-rev-sync');

app.listen(port, ()=> {
	console.log('listening on port 8000. Access port: localhost:8000\\health');
})

//The application 
app.get('/health', function (req,res) {
res.send('App Name = ' + json.name + '<br/>' + 'Version = ' + json.version + '<br/>' + 'Git hash = ' + git.long())
})
