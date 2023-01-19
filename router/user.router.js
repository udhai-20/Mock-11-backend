const { Router } = require("express");
const {
  get_req,
  signup_post_req,
  login_user,
} = require("../controller/user.controller");

const userRouter = Router();

userRouter.route("").get(get_req);
userRouter.route("/signup").post(signup_post_req);
userRouter.route("/login").post(login_user);
module.exports = userRouter;
