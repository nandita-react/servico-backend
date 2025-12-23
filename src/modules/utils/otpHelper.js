const crypto=require("crypto");

exports.generated=()=>Math.floor(1000+Math.random()*9000).toString();

exports.hashOtp=otp=>crypto.createHash("sha256").update(otp).digest("hex");

exports.compareOTp = (hashOtp, userOtp) => {
    return hashOtp === crypto.createHash("sha256").update(userOtp).digest("hex");
 
};
