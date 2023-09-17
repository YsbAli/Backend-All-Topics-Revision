//import all controller
const UserController = require("./user.controller")
const TagController = require("./tag.controller")
const PostController = require("./post.controller")
const CommentController = require("./comment.controller")

//exports all controllers
module.exports = { UserController, PostController, TagController, CommentController }