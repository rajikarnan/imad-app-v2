var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/shin_chan_anime_folder_icon_by_ryuichi93-d7qmznf.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shin_chan_anime_folder_icon_by_ryuichi93-d7qmznf.png'));
});

app.get('/ui/make-way-for-noddy.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'make-way-for-noddy.png'));
});

app.get('/ui/Tom-And-Jerry.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Tom-And-Jerry.png'));
});

app.get('/article-one', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'styles.css'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
