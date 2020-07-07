const usuarios = [
  { nome: "Cleitinho", tecnologias: ["HTML", "CSS", "javascript"] },
  { nome: "Clebinho", tecnologias: ["Java", "Angular"] },
  { nome: "Clovis", tecnologias: ["nodeJS", "javascript"] },
];

function jogaNaTela(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(`${array[i].nome} trabalha com ${array[i].tecnologias}`);
  }
}

jogaNaTela(usuarios);

