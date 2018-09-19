const fs = require('fs');

for (let base = 1; base <= 10; base++) {
    let contenido = '';
    for (let j = 1; j <= 10; j++) {
        contenido += `${base} * ${j} = ${base*j}\n`;
    }
    let nombreArchivo = `./tablas/tabla-${base}.txt`
    const data = new Uint8Array(Buffer.from(contenido));
    fs.writeFile(nombreArchivo, data, (err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} a sido creado`);
    });
}