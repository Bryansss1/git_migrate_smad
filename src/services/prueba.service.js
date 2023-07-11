const{pool}=require("../utils/database")
const models=require("../models/index")
const { aleluya } = require("../data/dataformated")
const{c_ramo,c_cobertura,e_asegcobert_seg}=models



class ServicePrueba{
    /*
    static async Check(){
        const result=await c_ramo.findOne({
        where:{
            cd_ramo:"14"
        },
        include:{
            model:c_cobertura,
            as:"c_cobertura",
            include:{
            model:e_asegcobert_seg,
            as:"e_asegcobert_seg",
            attributes:["numprima"]
            }
        }
    
        
    })
        return result
    }
*/

    static async Check(){
        aleluya()
        
        /*
        //await pool.connect();
		const rms = await c_ramo.findAll();
        const arrayCorto=rms.slice(20,21)
        
        
		const stop =arrayCorto.map((r) => {
			return new Promise(async (resolve) => {
				const primas = await pool.query(
					`select numprima from rms40.e_prima_seg eps where eps.numprima in (select DISTINCT numprima  from rms40.e_asegcobert_seg eas  where eas.cd_ramo = '${r.cd_ramo}');`,
				);

				resolve({ primas: primas.rows });
			});
		});

		
        //await pool.end();
		const data = await Promise.all(stop);
		//console.log(data);
		return {data,arrayCorto}
        
        
       //return arrayCorto
       */
    }


}

module.exports= ServicePrueba