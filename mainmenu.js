user = localStorage.getItem("user");
password  = localStorage.getItem("password");

document.getElementById("welcome_user").innerHTML = "Hola " + user + " elija la operación que desea realizar";

function logout()
{
    window.location.replace("index.html");
}

function view()
{
     
}

function withdraw()
{

}

function deposit()
{

}

function transfer()
{

}