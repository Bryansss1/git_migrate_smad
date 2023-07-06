const models=require("../models/index")
const{e_prima_seg}=models
const{c_ramo}=models
const sequelize=require("sequelize")

class ServicePrueba{
    static async Check(){
        const result=await c_ramo.findAll()
        return result
    }
}

module.exports= ServicePrueba