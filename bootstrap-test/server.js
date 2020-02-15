const express = require('express');
const request = require('request');
const app = express();
const bodyParser = require('body-parser');
const xml2js = require('xml2js');

app.use('/js', express.static(`${__dirname}/node_modules/bootstrap/dist/js`)); // redirect bootstrap JS
app.use('/js', express.static(`${__dirname}/node_modules/jquery/dist`)); // redirect JS jQuery
app.use('/css', express.static(`${__dirname}/node_modules/bootstrap/dist/css`)); // red
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function(req,res){
    res.render('about');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});