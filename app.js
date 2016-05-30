/**
 * Created by avrohom on 5/19/16.
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/*', function (req, res) {
    res.send("<form method='post'>Please enter your name to continue:<br><input type='text' name='name'><br><input type='submit' value='submit'></form>" + req.url)
});

app.post('/*', function (req, res) {
    console.log(req.body);
    res.send('Hello World,<strong id="xss">Welcome to Verizon</strong> your name is: ' + req.body.name);
    console.warn('again never write xss vulnerabilities')
});

app.listen(3000, function () {
    console.warn('never write xss vulnerabilities')
});
