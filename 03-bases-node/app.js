const  { crearArchivo } =  require('./helpers/multiplicar')
const argv = require('yargs').argv;



console.clear();


// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=')

console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base)

// const base = 7;

// crearArchivo( base )
// .then ( nombreArchivo => console.log(nombreArchivo, 'creado'))
// .catch( err => console.log(err) )

