const ServicePrueba = require("../services/prueba.service")


const prueba=async(req,res,next)=>{
try {
    const result=await ServicePrueba.Check()
    res.json(result)
} catch (error) {
    res.status(400).json({message:error.message})
}
}

module.exports={
    prueba
}