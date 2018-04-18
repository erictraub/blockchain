const express = require('express');
const app = express();
const chalk = require('chalk');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// get entire blockchain
app.get('/blockchain', function (req, res) {
	res.send(bitcoin);
});


// post a new transaction
app.post('/transaction/new', function(req, res) {
	res.send(`The amount was ${req.body.amount}`);
});


// mine a block
app.get('/mine', function(req, res) {

});
 



app.listen(3000, function() {
	console.log(chalk.green('Listening on port 3000...'));
});