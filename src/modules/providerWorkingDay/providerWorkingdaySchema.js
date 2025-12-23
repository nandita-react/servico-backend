const mongoose=require("mongoose");

const workingdaySchema = new mongoose.Schema({
    monday: {
        from: { type: String, default: "09:00" },
        to: { type: String, default: "18:00" }
    },
    tuesday: {
        from: { type: String, default: "09:00" },
        to: { type: String, default: "18:00" }
    },
    wednesday: {
        from: { type: String, default: "09:00" },
        to: { type: String, default: "18:00" }
    },
    thursday: {
        from: { type: String, default: "09:00" },
        to: { type: String, default: "18:00" }
    },
    friday: {
        from: { type: String, default: "09:00" },
        to: { type: String, default: "18:00" }
    },
    saturday: {
        from: { type: String, default: null },
        to: { type: String, default: null }
    },
    sunday: {
        from: { type: String, default: null },
        to: { type: String, default: null }
    }
},{
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}); 

module.exports=mongoose.model("WorkingDay",workingdaySchema);