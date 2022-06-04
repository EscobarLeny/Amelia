class cuenta {
    constructor( titular, cantidad = 0){
    this._titular = titular;
    this._cantidad = cantidad;
    }
    get titular (){ // MOSTRAR
        return this._titular;
    }
    set titular (titular){ // CREAR
        this._titular = titular;
    }
    get cantidad(){
        return this._cantidad;
    }
    set cantidad (cantidad){ 
        this._cantidad = cantidad;
    }


    mostrar(){
        return `Titular: ${this._titular} Cantidad: ${this._cantidad}`;
    }
    ingresar (cantidad){
        if (cantidad > 0){
            this._cantidad = this._cantidad + cantidad;
        }
        return this._cantidad;
    }
    retirar (cantidad){
        if (cantidad> 0){
            this._cantidad = this._cantidad - cantidad;
        }
        return "cantidad a retirtar " + cantidad;
    }

}

money = new cuenta (" Amelia Escobar", 540000);

console.log (money.ingresar(20000));
console.log (money.ingresar(-100));
console.log (money.retirar(20000));
console.log(money.mostrar());