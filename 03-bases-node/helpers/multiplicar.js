
const fs = require("fs");
const colors = require('colors');
const crearArchivo = async(base = 5, listar= false, hasta = 10) => {

try {

    
    let salida = ''
    let consola = ''
    for (let i = 0; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
    }

    if ( listar ) {
        console.log("====================");
        console.log('Tabla del', base );
        console.log("====================");
        
        console.log(consola);
    }
  
    fs.writeFileSync(`tabla-${base}.txt`, salida);
  
    return `tabla-${base}.txt`.cyan;
} catch (error) {
    throw error;
}



    }



module.exports = {
    crearArchivo
}