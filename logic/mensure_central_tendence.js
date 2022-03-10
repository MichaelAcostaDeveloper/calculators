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
//creacion de una function para definir si un numero es par o impar
function esPar(numero){
    if(numero%2==0){
        return true
    }
    else{
        return false
    }
}
//function evaluacion de vacios en labels
function vacio(lista){
    if (lista==0)
    return true
    else{
        return false
    }
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
        weights_scores.push(s.p);//coloca pesos de notas en el arreglo
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
    //METODO TRADICIONAL PARA SUMAR UNA LISTA DE DATOS
    // var sumaTotal=0;
    // if (list_scores.length==0){
    //     alert('No exiten valores registrados!!!')

    // }else
    // {
    // for (let index = 0; index < list_scores.length; index++) {
    //     sumaTotal = sumaTotal + list_scores[index];
    // }
    // const mean=(sumaTotal/list_scores.length).toFixed(2);
    // const valor=document.getElementById("resultados");
    // valor.innerHTML="The mean of the data registrated is: "+ mean + ".";
    // console.log(mean);
    if(vacio(list_scores.length)){
        alert("No exiten registros!!!")
    }else{
          //NUEVO METoDO PARA REALIZAR UNA SUMA ITERATIVA
    const sumList=list_scores.reduce(
        function(valorAcumulado=0,nuevoValor){
            return valorAcumulado+nuevoValor;
        }
    )
    const mean=(sumList/list_scores.length).toFixed(2);
    const valor=document.getElementById("resultados");
    valor.innerHTML="The mean of the data registrated is: "+ mean + ".";
    console.log(mean);

    }

}

//function to calculate de median
function calcular_median(){
    if (vacio(list_scores.length)){
        alert("No exiten registros!!!")
    }
    else{
        //ordenacion de la lista del mayor al menor
        var array_ordenado=list_scores.sort(
            function(elementoA,elementoB){
                return elementoA - elementoB
                }
        );
        //creacion de un numero que indique la posicion intermedia de una lista
        var mitadLista=parseInt(array_ordenado.length/2);
    if(esPar(array_ordenado.length)){
        var v1=array_ordenado[mitadLista-1];
        var v2=array_ordenado[mitadLista];
        var median=(v1+v2)/2;
    }
    else{
        median=array_ordenado[mitadLista];
    }
    const valor=document.getElementById("resultados");
    valor.innerHTML="The median of the data registrated is: "+ median + " .";
    console.log(median);
    console.log(array_ordenado);

    }
}

//function to create the mode
function calcular_moda(){
    if(vacio(list_scores)){
        alert("No exiten registros")
    }else{
        //crear un objeto
        const objetoLista={}
        //uso del metodo map para recorrer  la lista a objeto
        list_scores.map(
            function(elemento){
                if(objetoLista[elemento]){
                    objetoLista[elemento]=objetoLista[elemento] + 1
                }else{
                    objetoLista[elemento]=1
                }
            }
        )
        //transformacion del objeto creado anteriormente a un array.
        //en este codigo se ordena de menor a mayor repeticiones
        const arrayLista=Object.entries(objetoLista).sort(
            function(elementoA,elementoB){
                return elementoA[1] - elementoB[1]
                }
        )
        //extraciones del numero moda
        const moda=arrayLista[arrayLista.length - 1];
        const moda_valor=moda[0]
        const valor=document.getElementById("resultados");
        valor.innerHTML="The mode of the data registrated is: "+ moda_valor + " .";
        console.log(moda);
    }
}

function calcular_promedio_ponderado(){
if(vacio(signatures_all)){
    alert("No existen registros!!!")
}else{
    //uso de map para recorrer el arreglo de objetos
    var recorrido_producto_notas_pesos=signatures_all.map(
        function(elemento){
            return elemento.n*elemento.p;
        }
    )
    //uso de reduce para sumar los productos anteriormente calculados
    var producto_notas_pesos=recorrido_producto_notas_pesos.reduce(
        function(suma=0, elemento){
            return suma + elemento
        }
    )
    //uso de reduce para sumar todos los pesos
    var suma_pesos=weights_scores.reduce(
        function(suma=0,elemento){
            return suma + elemento
        }
    )
    if (suma_pesos>100){
        alert("No se puede calcular el promedio ponderado, por que la suma de pesos no debe exceder a 100");
    }else{
        var mean_ponderado=(producto_notas_pesos/suma_pesos).toFixed(2);
        const valor=document.getElementById("resultados");
        valor.innerHTML="The weighted average is: "+ mean_ponderado + ".";
        console.log(mean_ponderado);
    }
}
}