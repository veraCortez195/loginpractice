

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

var usuarios = [];
usuarios.push(new usuario("veracortez","vera123"));
usuarios.push(new usuario("josemendez", "jose123"));





function gestionUsuarios(){
  
var cajausu= document.getElementById("cajau").value;
var cajapass= document.getElementById("cajap").value;
  
    
 
    for(var x=0; x<usuarios.length();x++){

        window.alert("dentro de la funcion3" );
        
       if(usuarios[x].getUsuario.equal("MariaPerez") && usuarios[x].getPass.equal("Mari123")){
               
                Console.log("Bienvenida Maria");
        }
        else if(usuarios[x].getUsuario.equal("JoseLopez") && usuarios[x].getPass.equal("jose1234")){
               
            Console.log("Bienvenido Jose");

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


