class CuentaJoven {
    constructor( titular,edad, cantidad = 0, bonificacion = 0){
    this._titular = titular;
    this._edad = edad;
    this._cantidad = cantidad;
    this._bonificacion = bonificacion;
   
    }
    get bonificacion (){
        return this._bonificacion;
    }
     set bonificacion (bonificacion){
        this._bonificacion = bonificacion;
    }
    get cantidad(){
        return this._cantidad;
    }

     set cantidad(cantidad){
       this._cantidad = cantidad ;
     }
    get edad (){
        return this._edad;
    }
     set edad(edad){
       this._edad = edad ;          
   }
    mostrar(){
        return `Cuenta joven ${this._titular} bonificacion ${this._bonificacion}`;
    }
    esTitularValido (){
      if ( this._edad>=18 &&this._edad<=25  ){
        return "verdadero";  
    } 
        else {
            return "el titular no es valido";
       
        } 

    }
    retirar (cantidad){
        if ( this._edad>=18 && this._edad<=25  ){
            if (cantidad > 0){
                this._cantidad = this._cantidad - cantidad;
                return "cantidad a retirar " + cantidad;
            }
            

            }
            else {
                return "el titular no es valido ";
        }
    

    }
}


nueva = new CuentaJoven (" Amelia ", 24 , 15000, "10%");
console.log(nueva.retirar(1200));
console.log(nueva.esTitularValido());
console.log (nueva.mostrar());
nueva1 = new CuentaJoven(" Hanna ", 28 , 10000 , "20%" );
console.log(nueva1.retirar(1200));
console.log(nueva1.esTitularValido());
console.log (nueva1.mostrar());
nueva2 = new CuentaJoven("Cristin ", 14 , 12000 , "20%" );
console.log(nueva2.retirar(1200));
console.log(nueva2.esTitularValido());
console.log (nueva2.mostrar());