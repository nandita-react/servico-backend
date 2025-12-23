const Repository = require("./userRepository");
const Handler = require("../../../handler")
const { generated, hashOtp, compareOTp } = require("../utils/otpHelper");

const {genaratedToken}=require("../utils/token");
const { exists } = require("./userSchema");

exports.sendOtp = async (req, res) => {
    try {
        const { phone } = req.body;

        if (!phone) {
            return res.json({ status: false, message: "Phone required" });
        }

        const otp = generated();                  
        const hashed = hashOtp(otp);             
        const expiry = Date.now() + 5 * 60 * 1000;
        return Handler.success(res, { hashOtp:hashed, otp, expiry }, "OTP SENT")
    }
    catch (error) {
        return Handler.error(error, error.message)
    }
}

exports.verifyedOtp = async (req, res) => {
  
    try {
        const { otp, hashOtp, expiry,phone } = req.body;

        const isValid = compareOTp(hashOtp, otp);

        if (!isValid) {
            return Handler.error(res, "Invalid OTP")
        }

        if (Date.now() > expiry) {
            return Handler.error(res, "OTP expired");
        }
            const userRepo=new Repository(req);
       const  user=await userRepo.findByPh(phone);
      
       if(user){

        const token =genaratedToken(user);
         return Handler.success(res,{user,token},"Welcome Servico Side")
       };

       if(!user){
         return Handler.success(res,"Please create your profile")
       };

        
    }
    catch (error) {
        Handler.error(error, error.message);
    }
}


exports.create = async (req, res) => {

    const userRepository = new Repository(req)
    try {
        const userRepo = await userRepository.create();

        const token= genaratedToken(userRepo);
        return Handler.success(res, {userRepo,token}, "New User Entery  Sucessfully");
    }
    catch (error) {
        console.log(error)
        return Handler.error(res, error.messsage)
    }
}