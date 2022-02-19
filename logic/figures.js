//Figura Cuadrado
//Cuando escribimos la variable dentro de la funcion, esta variable se llama parametro.
//Cuando usamos la funcion, esta variable se llama argumento.
console.group('Cuadrado');
function perimetroCuadrado(lado){
    return lado*4
}

function areaCuadrado(lado){
    return Math.pow(lado,2)
}

function areaRectangulo(a,b){
    return a*b
}

function perimetroRectangulo(a,b){
    return 2*a+2*b
}
console.groupEnd()

//Figura Triangulo
console.group('Triangulo')
function perimetroTriangulo(a,b,c){
    return a+b+c
}
function areaTriangulo(base,altura){
    return (base*altura)/2
}
console.groupEnd();

//Circunferencia
console.group('Circunferencia')
function diametro(radio){
    return radio*2
}
function areaCircunferencia(radio){
    return Math.PI*Math.pow(radio,2)
}
function perimetroCircunferencia(radio){
    return diametro(radio)*Math.PI
}
console.groupEnd();
//En esta seccion se establece las funciones para la app de figuras
//Aqui se ubican las funciones para el html de figuras
//FUNCIONES PARA EL CUADRADO
function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const valor=input.value;
    const area=areaCuadrado(valor);
    const resultado=document.getElementById("result");
    resultado.innerHTML="The surface is: "+area+" cm²";
}
function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const valor=input.value;
    const perimetro=perimetroCuadrado(valor);
    const resultado=document.getElementById("result");
    resultado.innerHTML="The perimeter is: "+perimetro+" cm";
}
//FUNCIONES PARA EL RECTANGULO
function calcularAreaRectangulo(){
    const inputA=document.getElementById("InputRectanguloA");
    const valorA=inputA.value;
    const inputB=document.getElementById("InputRectanguloB");
    const valorB=inputB.value;
    const area=areaRectangulo(valorA,valorB);
    const resultado=document.getElementById("resultRectangle");
    resultado.innerHTML="The surface is: "+area+" cm²";
}
function calcularPerimetroRectangulo(){
    const inputA=document.getElementById("InputRectanguloA");
    const valorA=inputA.value;
    const inputB=document.getElementById("InputRectanguloB");
    const valorB=inputB.value;
    const perimetro=perimetroRectangulo(valorA,valorB);
    const resultado=document.getElementById("resultRectangle");
    resultado.innerHTML="The perimeter is: "+perimetro+" cm";
}
//FUNCIONES PARA LA CIRCUNFERENCIA
function circulo(){
    const radio=document.getElementById("InputRadio")
    const r=Number(radio.value);
    const area=areaCircunferencia(r);
    const areaR=area.toFixed(2)
    const resultado=document.getElementById("resultCircunf")
    resultado.innerHTML="The surface is: "+areaR+" cm²"
}
function circunf(){
    const radio=document.getElementById("InputRadio")
    const r=Number(radio.value);
    const perimetro=perimetroCircunferencia(r);
    const perimetroR=perimetro.toFixed(2)
    const resultado=document.getElementById("resultCircunf")
    resultado.innerHTML="The perimeter is: "+perimetroR+" cm"
}
//FUNCIONES PARA EL TRIANGULO
//con esta función se verifica que existe el triángulo
function verificarTriangulo(a,b,c){
    if ((a+b>c) & (a+c>b) & (b+c>a)) {
        console.log("SI EXISTE EL TRIANGULO")
        return calculo_area_rectangulo(a,b,c)
    } else{
        console.log("NO EXISTE EL TRIANGULO")
        alert("Con los valores de lados de triángulo que ingresó NO se puede construir un triángulo!!!")
    }
}
//con esta función se verifica que es un triángulo rectángulo
function calculo_area_rectangulo(a,b,c){
    if(Math.pow(a,2)===Math.pow(b,2)+Math.pow(c,2)){
        console.log(`Es triangulo rectangulo y la superficie es: ${b*c/2}`)
        return b*c/2;//area del triangulo
    }else if(Math.pow(b,2)===Math.pow(a,2)+Math.pow(c,2)){
        console.log(`Es triangulo rectangulo y la superficie es: ${a*c/2}`)
        return a*c/2;//area del triangulo
    }else if(Math.pow(c,2)===Math.pow(b,2)+Math.pow(a,2)){
        console.log(`Es triangulo rectangulo y la superficie es: ${b*a/2}`)
        return a*b/2;//area del triangulo
    }else{
        return calculo_area_oblicuangulo(a,b,c)
    }
}
function calculo_area_oblicuangulo(a,b,c){
    var B=Math.acos((Math.pow(a,2)+Math.pow(c,2)-Math.pow(b,2))/(2*a*c))
    var A=Math.acos((Math.pow(b,2)+Math.pow(c,2)-Math.pow(a,2))/(2*b*c))
    var C=Math.acos((Math.pow(a,2)+Math.pow(b,2)-Math.pow(c,2))/(2*a*b))
    //evaluacion de un lado mayor y el resto diferentes o evaluacion de dos lados iguales pero mayores al tercero
    if((((a>b)&(a>c))&((b===c)||(c>b)||(b>c)))||(((a<b)&(a<c))&((b===c)||(c>b)||(b>c)))){
        altura=b*Math.sin(C)
        console.log(`Es triangulo oblicuangulo y la superficie es: ${a*altura/2}`)
        return a*altura/2;
        }
        else if((((b>c)&(b>a))&((a===c)||(c>a)||(a>c)))||((((b<c)&(b<a))&((a===c)||(c>a)||(a>c))))){
        altura=a*Math.sin(C)
        console.log(`Es triangulo oblicuangulo y la superficie es: ${b*altura/2}`)
        return b*altura/2;
        }
        else if((((c>a)&(c>b))&((b===a)||(a>b)||(b>a)))||(((c<a)&(c<b))&((b===a)||(a>b)||(b>a)))){
        altura=b*Math.sin(A)
        console.log(`Es triangulo oblicuangulo y la superficie es: ${c*altura/2}`)
        return c*altura/2;
        }
        //evaluacion de los 3 lados iguales
        else if((a===b) & (b===c)& (c===a)){
            altura=a*Math.sin(B)
            console.log(`Es triangulo oblicuangulo y la superficie es: ${a*altura/2}`)
            return a*altura/2;}
        }
function checkingTriangle(){
    var lado_a=document.getElementById("lado_a");
    var lado_a=Number(lado_a.value);
    var lado_b=document.getElementById("lado_b");
    var lado_b=Number(lado_b.value);
    var lado_c=document.getElementById("lado_c");
    var lado_c=Number(lado_c.value);
    var res=verificarTriangulo(lado_a,lado_b,lado_c);
    var resp=res.toFixed(2);
    var answer=document.getElementById("resultadoTriangulo");
    answer.innerHTML="The surface is: "+resp+" cm²";
}
function calcular_perimeter_Triangulo(a,b,c){
    return a+b+c
}
function perimeterTriangle(){
    var lado_a=document.getElementById("lado_a");
    var lado_a=Number(lado_a.value);
    var lado_b=document.getElementById("lado_b");
    var lado_b=Number(lado_b.value);
    var lado_c=document.getElementById("lado_c");
    var lado_c=Number(lado_c.value);
    var result=calcular_perimeter_Triangulo(lado_a,lado_b,lado_c);
    var respt=result.toFixed(2)
    var answer=document.getElementById("resultadoTriangulo");
    answer.innerHTML="The perimeter is: "+respt+" cm";
}