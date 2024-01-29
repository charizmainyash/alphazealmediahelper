const express=require("express");
const { connnectionFunction }=require("./config.js");
const dotenv=require("dotenv");
const {handleEnquiry, handleWork, handleAdmin,handleAllData,handleAllWork,handleQueryResolve,removeWork }=require("./controllers/alpha.js");
const app=express();
dotenv.config();
const PORT=process.env.PORT;
const URL=process.env.URL;
const cors=require("cors");

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// MongoDB connection
connnectionFunction(URL).then( ()=>{
    console.log("DataBase Connected sucessfully");
}).catch( (err)=> {
    console.log(" Database connection failed : "+err);
});


app.post("/contact",handleEnquiry);
app.post("/work",handleWork);
app.post("/admin", handleAdmin);
app.get("/getData", handleAllData);
app.get("/getWork", handleAllWork);
app.post("/resolveQuery", handleQueryResolve);
app.post("/removeWork", removeWork);




app.listen(PORT,()=> console.log(`Server Running at ${PORT}`));