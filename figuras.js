//codigo cuadrado:
function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
} 


//codigo triangulo:
function perimetroTriangulo (lado1,lado2,base){
    return (lado1 + lado2 + base);
}

function areaTriangulo (lado1,lado2,base){
    const sP = (lado1 + lado2 + base) / 2; 
    return Math.sqrt(sP * (sP - lado1) * (sP - lado2) * (sP - base));
} 


//codigo circulo:
const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2; 
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); 
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es:" + perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El area del cuadrado es:" + area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const area = areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es: " + area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}
