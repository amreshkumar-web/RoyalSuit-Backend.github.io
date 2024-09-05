const jwt = require("jsonwebtoken");
const auth = (req, resp, next) => {
  const privateKey = "amresh@9835";

  if (req.path === "/routes/login" || req.path === "/routes/register") {
    return next();
  }
  try {
    let token = req.headers.authorization;

    if (token) {
      token = token.split(" ")[1];

      let user = jwt.verify(token, privateKey);

      req.userEmail = user.email;
      next();
    } else {
      return resp.status(401).json({login:"/"});
    }
  } catch (error) {
    console.log(error);
    resp.status(401).json({ message: "unauthorized user" });
  }
};

module.exports = auth;
