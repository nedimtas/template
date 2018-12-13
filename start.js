// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});


/*
//This is the simplest way to use nunjucks. First, set any configuration flags (i.e. autoescaping) and then render a string:

nunjucks.configure({ autoescape: true });
nunjucks.renderString('Hello {{ username }}', { username: 'James' });


// You usually won't use renderString, instead you should write templates in individual files and use render. That way you can inherit and include templates. In this case, you need to tell nunjucks where these files live with the first argument of configure:
nunjucks.configure('views', { autoescape: true });
nunjucks.render('index.html', { foo: 'bar' });



// Using express? Simply pass your express app into configure:
var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html');
});
*/