import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"
mongoose
  .connect(
    "mongodb+srv://faisalmuhammad2001:g5Jj2AUzwBeUTkDR@ecommerce.6d5rk.mongodb.net/"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT;

app.use(
    cors({
        origin:'http://localhost:5173/',
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:['Content-Type','Authorization','Cache-Control','Expires','Pragma'],
        credentials:true
    })
)

app.use(cookieParser())
app.use(express.json())

app.listen(PORT, ()=>console.log(`Server is now running on port $PORT`))
