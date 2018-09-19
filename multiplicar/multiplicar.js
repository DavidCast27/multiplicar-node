const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject(`La base: ${base} o el limite: ${limite} No son numeros `);
            return;
        } else if (Number(limite) <= 0) {
            reject(`El limite debe ser un numero posito`);
            return;
        } else {
            let contenido = '';
            for (let j = 1; j <= limite; j++) {
                contenido += `${base} * ${j} = ${base*j}\n`;
            }
            let nombreArchivo = `./tablas/tabla-${base}.txt`
            const data = new Uint8Array(Buffer.from(contenido));
            fs.writeFile(nombreArchivo, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(nombreArchivo);
                }
            });
        }

    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject(`La base: ${base} o el limite: ${limite} No son numeros `);
            return;
        } else if (Number(limite) <= 0) {
            reject(`El limite debe ser un numero posito`);
            return;
        } else {
            let contenido = '';
            for (let j = 1; j <= limite; j++) {
                contenido += `${base} * ${j} = ${base*j}\n`;
            }
            resolve(contenido);
        }

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}