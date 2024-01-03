const { register, login, setAvatar, allUsers } = require("../controllers/usersController");

const Router = require("express").Router();

Router.post("/register", register)
Router.post("/login", login)
Router.post("/setAvatar/:id", setAvatar)
Router.get("/allUsers/:id", allUsers)

module.exports = Router;