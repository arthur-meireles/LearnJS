const nome = "Otilia Meneses";
const sexo = "F";
const idade = 70;
const contribuicao = 40;

if (sexo == "M") {
  var regra = idade + contribuicao;
  if (contribuicao >= 35 || regra >= 95) {
    console.log(`${nome} você já pode se aposentar!`);
  } else {
    console.log(`${nome} você ainda não pode se aposentar!`);
  }
}
if (sexo == "F") {
  var regra = idade + contribuicao;
  if (contribuicao >= 30 || regra >= 85) {
    console.log(`${nome} você já pode se aposentar!`);
  } else {
    console.log(`${nome} você ainda não pode se aposentar!`);
  }
}
