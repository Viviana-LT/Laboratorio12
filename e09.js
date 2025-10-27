const calcularDescuento = function(precio,porcentaje){
    return precio-precio*porcentaje/100;
}
let pre=100, por=18;
alert("El precio final sería: "+calcularDescuento(pre,por));