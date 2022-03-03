
//first step, we have to create an objects array
signatures_all=[];

function registro(m,n,p){
    this.m=m;
    this.n=n;
    this.p=p;
}
var materia=document.getElementById("curso");
var m=materia.value;

//funcion que construye un arreglo de objetos
function ingresar_registro(){
    //Pasa los valores de ingreso al arreglo
    var materia=document.getElementById("curso").value;
    var nota=Number(document.getElementById("nota").value);
    var ponderacion=Number(document.getElementById("ponderacion").value);
    if(materia===""||nota===""||ponderacion===""){
        alert("Ingrese valores en los campos!")
    }else{
        var s=new registro(materia,nota,ponderacion);
        signatures_all.unshift(s);
        console.log(signatures_all);
        alert("registro ingresado correctamente!");
        document.getElementById('curso').value = '';
        document.getElementById('nota').value = '';
        document.getElementById('ponderacion').value = '';
}

}