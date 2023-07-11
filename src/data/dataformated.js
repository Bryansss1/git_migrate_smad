const fs=require("fs")
const path=require("path")
const util = require('util');

//const join=require("join")

//const ruta=__dirname
//const readingData=fs.readFile(path.join(__dirname,"e_siniestro_seg_202307061630.json"),"utf-8")

// Leer el archivo JSON

const jsonData = require("./primas.json/prima_cd_ramo_16.json");

// Convertir el objeto JSON en una cadena de texto
const jsonString = JSON.stringify(jsonData);
const regex = /(\d+):/g;
// Eliminar las comillas del objeto
const javascriptCode = jsonString.replace(/"([^"]+)":/g, "$1:");
const formated=javascriptCode.replace(regex, '')
// Guardar los datos en un archivo JavaScript




const aleluya=()=>{

    fs.writeFileSync(path.join(__dirname,"./primas.js/data_prima_cd_ramo_16.js"), javascriptCode);
    return
    //const data=await JSON.parse(readingData)
    //const objectString = util.inspect(data, { showHidden: false, depth: null });
    //await fs.writeFile(path.join(__dirname,"data2.js"),objectString)
}

module.exports={
  aleluya
}

