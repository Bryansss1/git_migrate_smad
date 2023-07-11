const express=require("express")
const fs=require("fs")
const cors=require("cors")
const {db}=require("../src/utils/database")
const morgan=require("morgan")
const app=express()
const pruebaRoute=require("./routes/prueba")

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))
app.use("/api",pruebaRoute)
db.authenticate()
.then(()=>console.log("Database autenticada"))
.catch((error)=>console.log(error))

//alter true si existe? la tabla y es diferente al modelo? se actualiza
/*
db.sync({force:false})
.then(()=>console.log("Database sincronizada"))
.catch((error)=>console.log(error))
*/


app.get("/",(req,res)=>{
    res.json({message:"Welcome to my server"})
})

module.exports=app;