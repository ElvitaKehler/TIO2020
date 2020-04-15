'use strict'
document.addEventListener("DOMContentLoaded",function(){
/*$("#formulario").on("submit",function(event) {
    event.preventDefault();
let serializedData = $(this).serialize();
console.log(serializedData);
//$.post("PHP/ejemploEjer9post.php", serializedData,
$.get("PHP/ejemploEjer9post.php", serializedData,
         function(response) {
             
                $("#data").html(response);
});
});*/


let formulario=document.querySelector("#formulario");
    formulario.addEventListener("submit",async function(e){
        e.preventDefault();
        let datos=new FormData(formulario);        
        let r =await  fetch("PHP/ejemploEjer9post.php",{
            "method": "POST",               
            "body":datos
        })    
        if(r.ok){
            let respuesta=await r.json();
            document.querySelector("#data").innerHTML=respuesta;
        }         
        }
    )
/*
    .then(resp=>resp.json())
    .then(respuesta=>{
        console.log(respuesta);
        document.querySelector("#data").innerHTML=respuesta;
    })

    */
});
