function hola(){
    console.log("hola function")
}


//BOTONES DE SUMAR Y RESTAR

var cantidad=0;
var producto="";
var precio=0;

function sumar(){
    var objeto=document.querySelector("#cantidad")
    cantidad+=1;
    objeto.innerHTML=cantidad;
    document.querySelector("#exampleModal > div > div > div:nth-child(4) > button.btn.btn-primary").disabled=false
}

function restar(){
    var objeto=document.querySelector("#cantidad")
    if(cantidad==0){
        alert("No puede pedir cantidades negativas")
    }
    else{
        if(cantidad==1){
            document.querySelector("#exampleModal > div > div > div:nth-child(4) > button.btn.btn-primary").disabled=true
        }
        cantidad-=1;
        objeto.innerHTML=cantidad;
    }
}

$( document ).ready(function() {
    $('#exampleModal').modal('toggle')
});