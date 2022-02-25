/*variables*/
var opcion = document.getElementById("bx");

function select_coupon(){
    opcion.addEventListener("change", function() {
        console.log(opcion.value)
        var resultado=document.getElementById("coupon_selected");
        resultado.innerHTML=opcion.value;
    });
}

function calculatePriceTotal(precio,descuento,cupon){
    var t_descuentos=100-(descuento+cupon)
    return (precio*t_descuentos)/100
}


function calculate_new_price(){
var precio=Number((document.getElementById("price_product")).value);
var descuento=Number((document.getElementById("discount")).value);
    switch(opcion.value){
        case "You do not have coupons":
            console.log(0,precio,descuento)
            var answer=Number(calculatePriceTotal(precio,descuento,0)).toFixed(2)
        break;
        case "Your coupon is the 10%":
            console.log(10,precio,descuento)
            var answer=Number(calculatePriceTotal(precio,descuento,10)).toFixed(2)
        break;
        case "Your coupon is the 15%":
            console.log(15,precio,descuento)
            var answer=Number(calculatePriceTotal(precio,descuento,15)).toFixed(2)
        break;
        case "Your coupon is the 20%":
            console.log(20,precio,descuento)
            var answer=Number(calculatePriceTotal(precio,descuento,20)).toFixed(2)
        break;
        case "Your coupon is the 30%":
            console.log(30,precio,descuento)
            var answer=Number(calculatePriceTotal(precio,descuento,30)).toFixed(2)
        break;
        default:
            console.log('nothing')

    }
    var r=document.getElementById("resultados")
    r.innerHTML="Su valor a pagar es: $"+answer;
}