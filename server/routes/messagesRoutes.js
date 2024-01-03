const { addMessage, getAllMessage } = require("../controllers/messagesController");

const Router = require("express").Router();

Router.post("/addmsg/", addMessage)
Router.post("/getmsg/", getAllMessage)

module.exports = Router;