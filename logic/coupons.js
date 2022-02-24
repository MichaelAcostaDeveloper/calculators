function calculatePriceTotal(precio, descuento,cupon){
    const t_descuentos=100-(descuento+cupon);
    return (precio*t_descuentos)/100;
}

function select_coupon(){
    var opcion = document.getElementById("bx");
    opcion.addEventListener("change", function() {
        console.log(opcion.value)
        var resultado=document.getElementById("coupon_selected");
        resultado.innerHTML=opcion.value;
    });
}