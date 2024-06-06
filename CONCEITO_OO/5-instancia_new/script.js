function criaCachorro(raca, patas, cor){//metodo construtor 
    //aqui que vai mudar!!! let cachorro = Object.create({});

    this.raca = raca;
    this.patas = patas;
    this.cor = cor;

    cachorro.prototype.latir = function(){
        console.log("Au au...");
    }

}//fim instancia cachorro
let husky = new cachorro('Huskyyy', 4, 'cinza');
husky.latir();
