const {Router}=require("express");
const {prueba}=require("../controllers/prueba.controller")

const router=Router()
router.get("/prueba",prueba)



module.exports=router;