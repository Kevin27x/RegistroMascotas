// CLASES
class Propietario{
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario(){
        return (`El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion}, y el número telefónico es: ${this._telefono}`)
    }
};

class Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get getTipo(){
        return this._tipo;
    }
};

class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreAnimal, enfermedadAnimal){
        super(nombre, direccion, telefono, tipo);
        this._nombreAnimal = nombreAnimal;
        this._enfermedadAnimal = enfermedadAnimal; 
    }
    get getNombre(){
        return this._nombreAnimal;
    }
    set setNombre(nuevoNombreAnimal){
        this._nombreAnimal = nuevoNombreAnimal;
    }
    get getEnfermedadAnimal(){
        return this._enfermedadAnimal;
    }
    set setEnfermedadAnimal(nuevaEnfermedadAnimal){
        this._enfermedadAnimal = nuevaEnfermedadAnimal;
    }
};

//LÓGICA
//Botón submit con Form
var botonAgregar = document.getElementById("form");
botonAgregar.addEventListener("submit", registrarDatos);

//Capturadores de valores inputs
var propietarioInput = document.getElementById("propietario");
var telefonoInput = document.getElementById("telefono");
var direccionInput = document.getElementById("direccion");
var tipoInput = document.getElementById("tipo");
var nombreMascotaInput = document.getElementById("nombreMascota");
var enfermedadInput = document.getElementById("enfermedad");
//Creación de objetos vacíos como variables globales para ser recuparados en la función "registrarDatos"
var objetoPropietario;
var objetoAnimal;
var objetoMascota;

//Función principal
function registrarDatos(event){
    event.preventDefault()
    
    instanciarPropietario()
    instanciarAnimal()
    instanciarMascota()
    
    let resultado = document.querySelector("#resultado ul");
    resultado.innerHTML = `
    <li>${objetoPropietario.datosPropietario()}</li>
    <li>El tipo de animal es un: ${objetoAnimal.getTipo}, mientras que el nombre de la mascota es: ${objetoMascota.getNombre} y la enfermedad es: ${objetoMascota.getEnfermedadAnimal}</li>
    `
    //Limpiar variables globales de objetos
    objetoPropietario = "";
    objetoAnimal = "";
    objetoMascota = "";
}
//Funciones para instanciar objetos
function instanciarPropietario(){
    let propietario = propietarioInput.value;
    let telefono = telefonoInput.value;
    let direccion = direccionInput.value;
    //Crear objeto
    let propietario1 = new Propietario(propietario, direccion, telefono)
    //Resguardar en variable global para la función principal
    objetoPropietario = propietario1;
}

function instanciarAnimal(){
    let propietario = propietarioInput.value;
    let telefono = telefonoInput.value;
    let direccion = direccionInput.value;
    let tipo = tipoInput.value;
    //Crear objeto
    let animal1 = new Animal(propietario, direccion, telefono, tipo);
    //Resguardar en variable global para la función principal
    objetoAnimal = animal1;
}

function instanciarMascota(){
    let propietario = propietarioInput.value;
    let telefono = telefonoInput.value;
    let direccion = direccionInput.value;
    let tipo = tipoInput.value;
    let nombreMascota = nombreMascotaInput.value;
    let enfermedad = enfermedadInput.value;
    //Crear objeto
    let mascota1 = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
    //Resguardar en variable global para la función principal
    objetoMascota = mascota1;
}
