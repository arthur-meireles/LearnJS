const eu = {
  nome: "Arthur",
  idade: 21,
  tecnologias: [
    { nome: "nodeJs", especialidade: "Web" },
    { nome: "react-native", especialidade: "Mobile" },
  ],
};

console.log(`${eu.nome} tem ${eu.idade} anos, e usa as tecnologias 
${eu.tecnologias[0].nome} e ${eu.tecnologias[1].nome}. 
Desenvolvendo para ${eu.tecnologias[0].especialidade} e ${eu.tecnologias[1].especialidade} `);
