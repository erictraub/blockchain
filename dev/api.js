const express = require('express');
const app = express();
const chalk = require('chalk');
 

 
app.get('/blockchain', function (req, res) {
  
});

app.post('/transaction/new', function(req, res) {

});

app.get('/mine', function(req, res) {

});
 


app.listen(3000, function() {
	console.log(chalk.green('Listening on port 3000...'));
});