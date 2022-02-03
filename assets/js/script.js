// CLASES
class Propietario{
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    get getPropietario(){
        return this._nombre;
    }
    get getDireccion(){
        return this._direccion;
    }
    get getTelefono(){
        return this._telefono;
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
    
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML += `
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Información de ${objetoPropietario.getPropietario}
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Dirección: </strong>${objetoPropietario.getDireccion}   |   <strong>Telefono: </strong>${objetoPropietario.getTelefono}    |    <strong>Mascota: </strong>${objetoAnimal.getTipo}   |    <strong>Nombre: </strong>${objetoMascota.getNombre}   |    <strong>Enfermedad: </strong>${objetoMascota.getEnfermedadAnimal}
          </div>
        </div>
      </div>
    </div>
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
