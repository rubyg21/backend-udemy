const { options } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs")
.option("b", {
  alias: "base",
  type: "number",
  demandOption: true,
})
.option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false
  })
.check (( argv, options) =>{
    if (isNaN( argv.b)) {
       throw 'La base tiene que ser un numero'
    }
    return true
})
.argv;

console.clear();

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=')

// console.log(process.argv);
console.log(argv);

// console.log("base: yargs", argv.b);

// const base = 7;

crearArchivo( argv.b, argv.l )
.then ( nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch( err => console.log(err) )
