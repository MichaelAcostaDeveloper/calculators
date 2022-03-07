
//first step, we have to create an objects array
let signatures_all=[];
//second step, we have to create a list only to scores
let list_scores=[];
//thir step, we have to create a list only weights of the scores
let weights_scores=[];

//function  constructura
function registro(m,n,p){
    this.m=m;
    this.n=n;
    this.p=p;
}

//funcion que construye un arreglo de objetos
function ingresar_registro(){
    //Pasa los valores de ingreso al arreglo
    var materia=document.getElementById("curso").value;
    var nota=Number(document.getElementById("nota").value);
    var ponderacion=Number(document.getElementById("ponderacion").value);
    if(materia===""||nota===""||ponderacion===""){
        alert("Ingrese valores en los campos!")
    }else{
        var s=new registro(materia,nota,ponderacion);//creacion del objeto
        signatures_all.unshift(s); //coloca objetos en el arreglo de objetos
        list_scores.push(s.n);//coloca numeros en el arreglo
        weights_scores.push((s.p)/100);//coloca pesos de notas en el arreglo
        console.log(signatures_all);
        console.log(list_scores);
        console.log(weights_scores);
        alert("registro ingresado correctamente!");
        //para limpiar los campos de los label
        document.getElementById('curso').value = '';
        document.getElementById('nota').value = '';
        document.getElementById('ponderacion').value = '';
}
}

//function to calculate the mean of the data
function calcular_mean(){
    var sumaTotal=0;
    for (let index = 0; index < list_scores.length; index++) {
        sumaTotal = sumaTotal + list_scores[index];
    }
    const mean=sumaTotal/list_scores.length;
    const valor=document.getElementById("resultados");
    valor.innerHTML="The mean of the data registrated is: "+ mean + ".";
    console.log(mean);
}
