//JSON
let pessoa = {
    "nome": "Juca",
    "idade": 28
}
console.log(pessoa.nome);
console.log(pessoa.idade);

//usando json p/ string
let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);



//fazendo parse para retornar c dados do obj

let pessoal = {
    "nome": "Juca",
    "idade": 28,
    "profissoes": "cozinheiro",
    "hobbies": ["video game", "ler", "correr"]
}

let pessoaTexto2 = JSON.stringify(pessoa1);
console.log(pessoaTexto2);

let pessoaJSON2 = JSON.parse(pessoaTexto2);
console.log(pessoaJSON2);

console.log(pessoaJSON2.hobbies[2]);