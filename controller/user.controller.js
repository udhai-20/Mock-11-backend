const { generateToken } = require("../helper/generatetoken");

const get_req = (req, res) => {
  res.send("cheking user routes");
};

const signup_post_req = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    const userPresent = await UserModel.findOne({ email });
    if (userPresent) {
      res.status(400).send("User Already Exist");
      throw new Error("User Already Exist");
    }
    const user = await UserModel.create({ email, password });
    if (user) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
        message: "registerd successfully",
      });
    } else {
      res.status(400).send("Error Occured");
      throw new Error("Error Occured");
    }
  } catch (err) {
    console.log("err", err);
  }
};

const login_user = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.status(201).send({
        _id: user._id,
        email: user.email,
        token: generateToken(user._id),
        pic: user.pic,
      });
    } else {
      res.status(400).send("Invalid Email or Password");
      throw new Error("Invalid Email or Password");
    }
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = { get_req, signup_post_req, login_user };
