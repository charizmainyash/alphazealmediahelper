const express=require("express");
const { connnectionFunction }=require("./config.js");
const dotenv=require("dotenv");
const {handleEnquiry, handleWork, handleAdmin,handleAllData,handleAllWork,handleQueryResolve,removeWork }=require("./controllers/alpha.js");
const app=express();
dotenv.config();
const PORT=process.env.PORT;
const URL=process.env.URL;
const cors=require("cors");
const dbConnect=require("./config/database.js");
//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


dbConnect();


app.post("/contact",handleEnquiry);
app.post("/work",handleWork);
app.post("/admin", handleAdmin);
app.get("/getData", handleAllData);
app.get("/getWork", handleAllWork);
app.post("/resolveQuery", handleQueryResolve);
app.post("/removeWork", removeWork);




app.listen(PORT,()=> console.log(`Server Running at ${PORT}`));
