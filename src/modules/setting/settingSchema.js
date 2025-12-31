const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
    generalSetting: {
        cityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "City",
            required: true
        }
    }
})

module.exports=mongoose.model("Setting",settingSchema)