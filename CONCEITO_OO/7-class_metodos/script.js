class Cachorro{
    latir(){
        console.log("latindo...");
    }
}//fim classe

Cachorro.prototype.patas = 4;

let cao_novo = new Cachorro('LABRADOR', 'ROXO');
console.log(cao_novo.patas);
cao_novo.latir();