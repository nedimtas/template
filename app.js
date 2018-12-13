var express = require( 'express' ),
    app = express(),
    favicon = require('express-favicon'),
    nunjucks = require('nunjucks');

// Define port to run server on
var port = process.env.PORT || 8080;


// Configure Nunjucks
var _templates = process.env.NODE_PATH ? process.env.NODE_PATH + '/' : '/';
nunjucks.configure( 'views', {
    autoescape: true,
    cache: false,
    watch: true,
    express: app
});


//Favicon
app.use(favicon(__dirname + '/favicon.ico'));


// Respond to all GET requests by rendering relevant page using Nunjucks
app.get('/', function(req, res) {
    var data = {
        firstName: 'Courtier',
        lastName: 'Stone',
        eMail: 'courtierstone@gmail.com'
    };
    return res.render('index.html', data);
});


// Start server
app.listen(port);
console.log('Listening on port %s...', port);