function esMultiplo(a, b) {
    if(a%b === 0) return true;
    else return false;
}
let num1 = 24;
let num2 = 6;

alert("¿"+num1+" es múltiplo de "+num2+"? "+esMultiplo(num1,num2));