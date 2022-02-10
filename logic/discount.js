
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioDescuento)/100;
    return precioConDescuento;
    }
    function calculate_precio(){
        var price_product=Number((document.getElementById("price_product")).value);
        var discount=Number((document.getElementById("discount")).value);
        var result=(calcularPrecioConDescuento(price_product,discount)).toFixed(2);
        var resultados=document.getElementById("resultados");
        resultados.innerHTML="Su valor a pagar es: $"+result;
    
    }