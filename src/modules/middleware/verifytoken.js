const {verifyToken}=require("../utils/token");

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];  // Bearer token

  const decoded = verifyToken(token);
  console.log(decoded)

  if (!decoded) {
    return res.status(401).json({ message: "Invalid token" });
  }


  req.userId = decoded.id;  

  console.log(req.userId)  
      // save decoded user id
  req.userName = decoded.name;    // optional

  next();
};