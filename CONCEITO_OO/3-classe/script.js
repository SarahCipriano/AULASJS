let cachorro = {
    patas: 4,
    raca: 'felix',

    latir:function(){
        console.log("auuu auuu");
    }
}//fim cachorro

let labrador = Object.create(cachorro);
labrador.latir();//fazendo o cao latir

labrador.raca = "estopa"; //atribui valor para raca do cao
console.log(labrador.raca);

let pastor = Object.create(cachorro);//criamos obj cao e guardamos na variavel past
pastor.raca = "Pastor Alemão";