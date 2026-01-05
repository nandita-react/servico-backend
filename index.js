require("dotenv").config();
 
const express=require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");
const app=express();
const mongoose=require("mongoose");
const cors = require("cors");
 
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("MongoDB Connected"))
.catch((error)=>console.error("DB Connection Error:",error))
 
app.use(cors({
  origin: "http://localhost:5000", // exact frontend URL
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
 
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.status(200).send('API is running');
});
app.use("/api",require("./src/modules/router/mainRoutes"))
 
const PORT=process.env.PORT;
 
app.listen(PORT,()=>{
     console.log(`Server is live at http://localhost:${PORT}`)
       console.log(`Swagger: http://localhost:${PORT}/api-docs`);
})