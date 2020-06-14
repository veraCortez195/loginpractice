class usuario{
    constructor(username, pass){
        this.usuario= username;
        this.passw =pass; 

        this.getUsuario = function(){
            return this.getUsuario;
        }

        this.getPass = function(){
            return this.getPass;

        }
        
    }
    
}

// Es preferible utilizar let en lugar de var para declarar variables (y const para constantes)
var usuarios = [];
usuarios.push(new usuario("veracortez","vera123"));
usuarios.push(new usuario("josemendez", "jose123"));

function gestionUsuarios(){
    var cajausu= document.getElementById("cajau").value;
    var cajapass= document.getElementById("cajap").value;

    // length es una variable, no una función, debería ser usuarios.length
    for(var x=0; x<usuarios.length();x++){
        alert("dentro de la funcion3" );
        // getUsuario es una función, pero acá se llama como un objeto o variable, mismo problema con getPass
        // También, en lugar de utilizar "equal", mejor el operador de igualdad === de la forma dato === caja
        if(usuarios[x].getUsuario.equal(cajausu) && usuarios[x].getPass.equal(cajapass)) 
        {
            // en el alert sería mejor poner usuarios[x].getUsuario() para saludar al usuario que esta iniciando sesión
            alert("Bienvenida Vera");
        }      
        else if(usuarios[x].getUsuario.equal(cajausu) && usuarios[x].getPass.equal(cajapass)){
            // Este Else if hace exactamente lo mismo que el if, no es necesario 
            alert("Bienvenido jose");
        }
        else{
            window.alert("No se pudo iniciar sesion, compruebe sus credeciales e intente nuevamente");
            
        }
    }
}

/*function addnewuser(cajau, cajap){

    user= new usuario(cajau,cajap);

    for(i = 0; i<users.lengt; i++ ){

        users.push(user);
        Console.log("Nuevo usuario ingresado");
    }
}*/