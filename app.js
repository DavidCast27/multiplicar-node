const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

let command = argv._[0];
console.log(command);
switch (command) {
    case 'listar':
        listar();
        break;

    case 'crear':
        crear();
        break;

    default:

        break;
}

function crear() {
    crearArchivo(argv.base, argv.limite).then((result) => {
        console.log(`Archivo creado ${result.green}`);
    }).catch((err) => {
        console.log(err.error);
    });
}

function listar() {
    listarTabla(argv.base, argv.limite).then((result) => {
        console.log('===================='.info);
        console.log(`Tabla de multiplicar `.info);
        console.log(`con base ${argv.base} hasta  ${argv.limite}`.info);
        console.log('===================='.info);
        console.log(result);
    }).catch((err) => {
        console.log(err.error);
    });
}