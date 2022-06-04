class Persona {
    constructor(nombre, edad, DNI){
    this._nombre = nombre;
    this._edad = edad;
    this._DNI = DNI;
    }
 get nombre(){
    return this._nombre;
}
set nombre(nombre){
this._nombre = nombre;
}
 get edad (){

     return this._edad;
 }
set edad(edad){
    this._edad = edad;           
}
get DNI (){ 
    return this._DNI;
}
set DNI(DNI){
    this._DNI = DNI
}
mostrar(){
    return `Nombre: ${this._nombre} Edad: ${this._edad} identificacion: ${this._DNI}}`;
}
esMayorDeEdad(){
    if (this._edad>=18)
return " Es mayor de edad tiene " + this._edad + " años";
else 
return " es menor de edad" + this._edad;
}
}



nuevaper = new Persona (" Amelia ", 26,"1061760729"  );
console.log(nuevaper);
console.log (nuevaper._edad);
console.log (nuevaper.mostrar());
console.log(nuevaper.esMayorDeEdad());

