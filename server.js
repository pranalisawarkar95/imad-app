var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    
'article one': {
        
   title: 'Article-one | pranali sawarkar',
   heading: 'Article one',
   date: 'sept 8, 2017',
  content:`
  <p>
     This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
  </p>
  <p>
    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
 </p>
<p>
    This is the content for my first article.This is the content for my first article. This is the content for my first article.This is the content for my first article.   
 </p>`

},     
      

'article-two': {
   title: 'Article two| pranali sawarkar',
   heading: 'Article two',
   date: 'sept 9, 2017',
  content:`
  <p>
     This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. 
  </p>
  <p>
    This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. 
 </p>
<p>
    This is the content for my second article.This is the content for my second article. This is the content for my second article.This is the content for my second article.   
 </p>`
 },
    

'article-three': {
   title: 'Article three | pranali sawarkar',
   heading: 'Article three',
   date: 'sept 10, 2017',
  content:`
  <p>
     This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. 
  </p>
  <p>
    This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. 
 </p>
<p>
    This is the content for my third article.This is the content for my third article. This is the content for my third article.This is the content for my third article.   
 </p>`
}
};


function createTemplate (data){

var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmlTemplate =`
<html>
<head>
    <title>
    ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
    <div> 
        <a href="/">Home</a>
    </div>
    
    <hr/>
    
    <h3>Article One</h3>
    
    <div>
   
    ${date}
    
    </div>
    
    <div>
        
        ${content}
        
    </div>
    </div>
</body>

`;
return htmlTemplate;
}


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
      counter = counter + 1;
      res.send(counter.toString());
});


app.get('/favicon.ico', function (req, res) {
res.sendFile(path.join(__dirname, 'ui','favicon.ico'));
});

var names = [];
app.get('/submit-name', function(req,res){ //submit-name?name-xxxx
var name = req.query.name;
names.push(name);
res.send(JSON.stringify(name));
});


app.get('/:articlename', function (req, res) {
//articleone ==article-one
//article[articlename]={} content for article one
var articlename = req.params.articlename;
res.send(createTemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});





app.get('/ui/madi.png', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
console.log(`IMAD course app listening on port ${port}!`);
});

