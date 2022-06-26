var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Danny",
    added: new Date()
  },
  {
    text: "Hi!",
    user: "Curry",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard | Odin', messages: messages });
});

module.exports = router;
