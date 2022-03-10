const salariosEc=ecuador.map(
    function(person){
        return person.salary;
    }
);

const salariosOrdenados=salariosEc.sort(
    function(a,b){
        return a-b;
    }
);

function esPar(numero){
    return (numero%2===0);
};

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

console.log(medianaSalarios(salariosOrdenados))
console.log(salariosEc)
console.log(salariosOrdenados)