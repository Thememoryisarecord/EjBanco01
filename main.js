var defaultUser = "Dan";
var defaultPassword = "Discord2024";
localStorage.setItem("defaultUser", defaultUser);

function send()

{
    


    var intentos = 3;
    var contador = 1;
    
     while (contador <= intentos)

     { 
        user = document.getElementById("user").value;
    
        password = document.getElementById("password").value;


        if ( defaultUser == user && defaultPassword == password) 
    {
        window.location = "menu.html";
        break;
    } 
    else 
    {
        if (contador == 3){
            document.getElementById("user").value = "";
            document.getElementById("password").value = "";            
            alert("Intentos agotados");

        } else
        {
            document.getElementById("user").value = "";
            document.getElementById("password").value = "";

            alert("Usuario y password no coinciden con el sistema");            
        }
       
    }
    
    contador++;   
     }

}


