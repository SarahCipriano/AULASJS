let pessoa = {
    //atributos
    nome: "Ana",
    idade: 20,
    profissao: "Programadora",

}//fim obj

console.log(pessoa.nome);
delete pessoa.nome;
console.log(pessoa.nome); //aqui undefined pq não existe atributo pessoa

pessoa.casado = false;
console.log(pessoa.casado);