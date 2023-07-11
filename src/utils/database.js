const {Sequelize}=require("sequelize")
const {Pool}=require("pg")
require("dotenv").config()

const db=new Sequelize({
    database:process.env.DB_NAME,
    username:process.env.DB_USER,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    dialect:"postgres",
    logging:false
})


const pool = new Pool({
	user: "dimas",
	host: "10.1.0.34",
	database: "rms40dev",
	password: "sm2023.*",
	port: 5432,
});

module.exports={
    db,
    pool
}
