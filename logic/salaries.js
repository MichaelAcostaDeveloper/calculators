let elemento1=document.getElementById("edu");
let elemento2=document.getElementById("vestido");
let elemento3=document.getElementById("salud");
let elemento4=document.getElementById("comida");
let elemento5=document.getElementById("servicio");
let elemento6=document.getElementById("transporte");

let checkbox1=document.getElementById("clikear1");
let checkbox2=document.getElementById("clikear2");
let checkbox3=document.getElementById("clikear3");
let checkbox4=document.getElementById("clikear4");
let checkbox5=document.getElementById("clikear5");
let checkbox6=document.getElementById("clikear6");

let sueldo=document.getElementById("sueldo");
let r=document.getElementById("resultados")

function mostrar(){
    if(checkbox1.checked){
        elemento1.disabled=false
    }else{
        elemento1.disabled=true
    }
    if(checkbox2.checked){
        elemento2.disabled=false
    }else{
        elemento2.disabled=true
    }
    if(checkbox3.checked){
        elemento3.disabled=false
    }else{
        elemento3.disabled=true
    }
    if(checkbox4.checked){
        elemento4.disabled=false
    }else{
        elemento4.disabled=true
    }
    if(checkbox5.checked){
        elemento5.disabled=false
    }else{
        elemento5.disabled=true
    }
    if(checkbox6.checked){
        elemento6.disabled=false
    }else{
        elemento6.disabled=true
    }
}

function calculate_capacity(){

    let sum=Number(elemento1.value)+
            Number(elemento2.value)+
            Number(elemento3.value)+
            Number(elemento4.value)+
            Number(elemento5.value)+
            Number(elemento6.value);
    let answer=Number(sueldo.value)-sum;
    answer=answer*0.38;
    console.log(sum);
    console.log(answer);

    if(answer > 0){
        r.innerHTML="Your borrowing capacity is around: $"+answer;
    }else{
        r.innerHTML="STOP, you do not have enough money!";
    }
        }
