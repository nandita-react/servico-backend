require("dotenv").config();
 
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors = require("cors");
 
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("MongoDB Connected"))
.catch((error)=>console.error("DB Connection Error:",error))git config --global --unset user.email
 
app.use(cors({
  origin: "http://192.168.1.40:3000", // exact frontend URL
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
 
app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).send('API is running');
});
app.use("/api",require("./src/modules/router/mainRoutes"))
 
const PORT=process.env.PORT;
 
app.listen(PORT,()=>{
     console.log(`Server is live at http://localhost:${PORT}`)
})