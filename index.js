const express = require('express');
const app = express();

app.get('/', function (req, res) {
 return res.send('Hello world');
});

app.get('/format/:type', function (req, res) {
    return res.send('Formatting for ' + req.params.type);
   });

app.get('/scraper/:type', function (req, res) {
    return res.send('Scrape the ' + req.params.type + ' resource');
   });

app.listen(process.env.PORT || 8080);