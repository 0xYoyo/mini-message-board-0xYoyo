var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", function (req, res, next) {
  const { authorName, messageText } = req.body;
  messages.push({ text: messageText, user: authorName, added: new Date() });
  res.redirect("/");
});

module.exports = router;
