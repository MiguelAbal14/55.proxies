const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}


const manejador = {
    set(obj, prop, valor) {

        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error(`La propiedad "${prop}" No existe en el objeto persona`);
        }

      

        obj[prop] = valor;
    }
}



const jon = new Proxy(persona, manejador);

jon.nombre = "Jon";
jon.apellido = "Mircha";
jon.edad = 35;
jon.twitter = "jony@gmail.com"

console.log(jon);