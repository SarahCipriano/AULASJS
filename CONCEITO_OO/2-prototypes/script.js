const cachorro = {
    raca: 'SRD',

    uivar: function(){
        console.log("auuuuu");
    },
    //set e get
    setRaca: function(raca){
        this.raca = raca;
    },

    getRaca: function(){
        return "A raça do cão é: " + this.raca;
    }
}//fim do obj cachorro
console.log(cachorro.raca);//acesso direto ao atributo
cachorro.setRaca('Scooby');
console.log(cachorro.raca);
console.log(cachorro.getRaca()); 

//vamos criar um obj pessoa
const pessoa = {
    maos: 2,
    olhos: 2
}//fim pessoa

const novaPessoa = Object.create(pessoa);
console.log(novaPessoa.maos);
console.log(novaPessoa.olhos);

console.log(novaPessoa.hasOwnProperty('maos'));
console.log(Object.getOwnPrototypeOf(novaPessoa) === pessoa);