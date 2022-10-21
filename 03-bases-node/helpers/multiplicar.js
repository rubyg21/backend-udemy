
const fs = require("fs");
const colors = require('colors');
const crearArchivo = async(base = 5, listar= false) => {

try {

    let salida = "";
    for (let i = 0; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
    }

    if ( listar ) {
        console.log("====================");
        console.log('Tabla del'.red , base );
        console.log("====================");
        
        console.log(salida.brightRed);
    }
  
    fs.writeFileSync(`tabla-${base}.txt`, salida.yellow);
  
    return `tabla-${base}.txt`.cyan;
} catch (error) {
    throw error;
}



    }



module.exports = {
    crearArchivo
}