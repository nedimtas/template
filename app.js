/*
    author Gri Creative
*/


var express = require( 'express' ),
    app = express(),
    favicon = require('express-favicon'),
    nunjucks = require('nunjucks');

// Define port to run server on
var port = process.env.PORT || 8080;


// Configure Nunjucks
var _templates = process.env.NODE_PATH ? process.env.NODE_PATH + '/' : '/';
var env = nunjucks.configure( 'views', {
    autoescape: true,
    cache: false,
    watch: true,
    express: app
});


env.addFilter('findContent', function(arr, name) {
    return arr.find(item => item == name);
 })


//Favicon
app.use(favicon(__dirname + '/favicon.ico'));


// Respond to all GET requests by rendering relevant page using Nunjucks
app.get('/', function(req, res) {
    var data = {
        firstName: 'Courtier',
        lastName: 'Stone',
        eMail: 'courtierstone@gmail.com',
        food: {
            'ketchup': '5 tbsp',
            'mustard': '1 tbsp',
            'pickle': '0 tbsp'
        },
        items: [
            { title: "foo", id: 1 },
            { title: "bar", id: 2},
            { title: "stone", id: 3},
            { title: "rock", id: 4}
        ]
    };
    return res.render('index.njk', data);

    // $.getJSON('/data/data.json', function (result) {
    //     nunjucks.render('index.html', { result : result }, function (err, res) {
    //         return res.render('index.html');
    //     });
    // });
    
});


// Start server
app.listen(port);
console.log('Listening on port %s...', port);