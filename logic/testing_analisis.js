//crear un arreglo de solo numeros(salarios) a partir de otro arreglo de objetos.
const salariosEc=ecuador.map(
    function(person){
        return person.salary;
    }
);
//ordenacion de un arreglo de menor a mayor
const salariosOrdenados=salariosEc.sort(
    function(a,b){
        return a-b;
    }
);
//creacion de una funcion para demostrar si un numero es par o impar
function esPar(numero){
    return (numero%2===0);
};
//funcion para calcular la media aritmetica.
function calcularMediaAritmetica(lista){
  //The method reduce permits sum o multiply values of a list.
    const sumList=lista.reduce(
        function(valorAcumulado=0,nuevoValor){
            return valorAcumulado+nuevoValor;
        }
    )
    const averageList=sumList/lista.length; 
    return averageList;
};
//funcion para calcular la mediana de un conjunto de datos ordenados
function medianaSalarios(lista){
    const mitad=parseInt(lista.length/2);

    if(esPar(lista.length)){
        const salario_1=lista[mitad-1];
        const salario_2=lista[mitad];
        const mediana=calcularMediaAritmetica([salario_1,salario_2]);
        return mediana;

    }else{
        const salarioMitad=lista[mitad];
        return salarioMitad;
    }
};
//impresion en pantalla.
console.log(medianaSalarios(salariosOrdenados))
console.log(salariosEc)
console.log(salariosOrdenados)
//CALCULO DE LA MEDIANA GENERAL DEL TOP 10%
const medianaGeneral=medianaSalarios(salariosOrdenados);
//separar el top 10%
const spliceStart=(salariosOrdenados.length*90 )/100;
const spliceCount=salariosOrdenados.length-spliceStart;
const salariosTop10=salariosOrdenados.splice(
    spliceStart,
    spliceCount,);
const medianaTop10=medianaSalarios(salariosTop10);
console.log(medianaTop10);
console.log(medianaGeneral);