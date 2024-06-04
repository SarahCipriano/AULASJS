//objeto
let cachorro = {
    //atributos
    patas: 4,
    nome: 'dog',
    raca: 'caramelo',
    //metodo(ação)
    latir: function(){
        console.log("Au Au Au");
    },
    brincar: function(){
        console.log("brincando...");
     }
}
//acabou o objeto
console.log(cachorro.patas);
console.log(cachorro.nome);
console.log(cachorro.raca);
cachorro.latir();
cachorro.brincar();