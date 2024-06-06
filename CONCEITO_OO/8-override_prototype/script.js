class Cachorro{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

latir(){
    console.log("latindo pq invoquei esse metodo");
}
}//fim classe

Cachorro.prototype.raca = 'caramelo';
Cachorro.prototype.patas = 4;

let cao1 = new Cachorro('Labrador', 'marrom' );
console.log(cao1.patas);
cao1.latir();
console.log(Cachorro.prototype.raca);
console.log(cao1.raca);