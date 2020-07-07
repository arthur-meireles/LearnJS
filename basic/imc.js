const nome = "Arthur";
const peso = "84";
const altura = "1.74";

const imc = peso / (altura * altura);

if(imc >= 30){
    console.log("Ops, voce está acima do peso");
}if(imc <=29.9){
    console.log("Bom, voce nao está acima do peso");
}


console.log("Resultado do IMC: " + imc);
