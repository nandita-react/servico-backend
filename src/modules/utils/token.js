const jsonwebtoken=require("jsonwebtoken");

const  SECRET_KEY=process.env.JWT_SECRET || "mysecretkey";

function genaratedToken(user){
     return jsonwebtoken.sign({
        id:user._id,
        username:user.name,
    
    },
    SECRET_KEY,
    { expiresIn: "7d"}
)
}

function verifyToken(token){
  try{
      return jsonwebtoken.verify(token,SECRET_KEY)
  }catch(error){
    return null
  }
}

module.exports={genaratedToken,verifyToken}