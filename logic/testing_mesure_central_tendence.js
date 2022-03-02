/**
 * In this section, we can calculate the mesure of central tendence.
 */
//THE MEAN OR AVERAGE
//The fisrt step is create a list.
const lista1=[
    100,
    200,
    300,
    500
];
//The second step is create the for loop
let sumaLista1=0;
for (let index = 0; index < lista1.length; index++) {
    sumaLista1=sumaLista1+lista1[index];
}
const promedioLista1=sumaLista1/lista1.length
//The third step is create a function that parameter is a list,
//The last step is create a function that parameter is another function, in this case the function is a method: reduce
function calcularMediaAritmetica(lista){
    // let sumList=0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumList=sumList+lista[i];
    //         }
    //The method reduce permits sum o multiply values of a list.
    const sumList=lista.reduce(
        function(valorAcumulado=0,nuevoValor){
            return valorAcumulado+nuevoValor;
        }
    )
    const averageList=sumList/lista.length;
    return averageList;
}
/////////////////////////////////////////////////////////////////////////////////////////////////
//THE MEDIAN OF A LIST
//Create a whatever list
const list=[
    45,
    78,
    59,
    80
]

//Create a formule that calculates the middle of the list
const mitadLista=parseInt(list.length/2)

//Create a function that indicates if a number is odd or even
function esPar(number){
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}

//Create a variable that contens the median
let mediana

//Validation if a odd or even list
if(esPar(list.length)){
    const elemento1=list[mitadLista - 1]
    const elemento2=list[mitadLista]

    const promedio_elemento1_elemento2=calcularMediaAritmetica([elemento1,elemento2])
    mediana=promedio_elemento1_elemento2
}
else{
    mediana=list[mitadLista]
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//THE MODE OF A LIST
//Create a list
const lista=[
    1,2,3,1,2,3,4,4,4,4,4,2,2,2
]


const lista1Count={}
lista.map(
    function(e){
        if(lista1Count[e]){
            lista1Count[e]=lista1Count[e] + 1
        }else{
            lista1Count[e]=1
        }
    }
)

const listaArray=Object.entries(lista1Count).sort(
    function(elementoA,elementoB){
        return elementoA[1] - elementoB[1]
        }
)

const moda=listaArray[listaArray.length - 1]