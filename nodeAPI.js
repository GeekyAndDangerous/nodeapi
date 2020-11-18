//Variable declarations
const express = require('express');
const app = express();
const json = require('./package.json');
var git = require('git-rev-sync');

//Express module declaration
app.use(express.static(__dirname + '/node_modules'));

//Set port
app.set('port', process.env.PORT || 8000);

//Listen on set port.
app.listen(app.get('port'),
  function(){
    console.log("Server listening on port: " + app.get('port') + ' - Access localhost:'+ app.get('port') + '/health');
});

//The application 
app.get('/health', function (req,res) {
res.send('App Name = ' + json.name + '<br/>' + 'Version = ' + json.version + '<br/>' + 'Git hash = ' + git.long())
})
