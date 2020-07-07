const turmaA = [
  { nome: "Arthurito", especialidade: "nodeJs" },
  { nome: "Vitinho", especialidade: "Android" },
  { nome: "Dudu", especialidade: "Javascript" },
  { nome: "Nemodim", especialidade: "React-native" },
];

function retornaEspecialidade(turma) {
  for(var i = 0; i < turma.length; i++) {
      console.log(`${turma[i].nome} manja de ${turma[i].especialidade}`)
  }
}
retornaEspecialidade(turmaA);
