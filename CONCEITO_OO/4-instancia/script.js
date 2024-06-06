function criaCachorro(raca, patas, cor){
   let cachorro = Object.create({});
   cachorro.raca = raca;
   cachorro.patas = patas;
   cachorro.cor = cor;
   cachorro.latir = function(){
    console.log("Au au...");
   }
}//fim instancia cachorro

let shitzu = criaCachorro('shitzu', 4,'cinza');
console.log(shitzu);
shitzu.latir();