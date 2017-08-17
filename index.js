const express = require('express');
const mustache = require('mustache-express');
const bodyparser = require('body-parser');

const server = express();
let results = [];
server.use(express.static('./public'))

server.engine('mustache', mustache());
server.set('views', './public');
server.set('view engine', 'mustache');

server.use(bodyparser.urlencoded({ extended: false }));

server.get("/", function(req, res){
  res.render('main', {
  })
});

server.post('/', function(req, res){
  results.push({
    list: req.body.task
  });
    res.render('main', {
      options: results
    });
  });
server.listen('3003', function(){
  console.log('hello');
})
