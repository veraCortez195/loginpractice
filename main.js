class usuario{
    constructor(username, pass){
        this.usuario= username;
        this.passw =pass; 

        this.getUsuario = function(){
            return this.usuario;
        }

        this.getPass = function(){
            return this.passw;

        }
        
    }
    
}

// Es preferible utilizar let en lugar de var para declarar variables (y const para constantes)
let usuarios = [];
usuarios.push(new usuario("veracortez","vera123"));
usuarios.push(new usuario("josemendez", "jose123"));

function gestionUsuarios(){
    let cajausu= document.getElementById("cajau").value;
    let cajapass= document.getElementById("cajap").value;    
    let user = "";
    let existe = false; 
    // length es una variable, no una función, debería ser usuarios.length
    for(let x=0; x<usuarios.length;x++){
      
        // getUsuario es una función, pero acá se llama como un objeto o variable, mismo problema con getPass
        // También, en lugar de utilizar "equal", mejor el operador de igualdad === de la forma dato === caja
       
        if(usuarios[x].getUsuario()===cajausu && usuarios[x].getPass()===cajapass)
        {
            // en el alert sería mejor poner usuarios[x].getUsuario() para saludar al usuario que esta iniciando sesión
            existe=true;
            user = usuarios[x].getUsuario();
            break;
        }  
       
        
        
    }
    if(existe){
        alert("Bienvenid@ "+ user);
    }
    else{
        alert("Usuario no existente");
    }
   
     
    
       
}

