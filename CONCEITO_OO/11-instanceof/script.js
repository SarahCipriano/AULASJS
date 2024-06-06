class cachorro extends Mamifero{ //herança
       constructor(patas, raca){
        super(patas, patas);//buscando atributo do super class
        this.raca = raca;//buscando atr. da propria classe
       }

       latir(){
        console.log("latindo sem parar...");
       }
}//fim cachorro

let pug = new Cachorro(4, "PuGGG");
console.log(pug.patas);
pug.latir();

console.log(new Cachorro instanceof Mamifero);