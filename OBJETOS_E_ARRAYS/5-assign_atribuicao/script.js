let carro = {
    //somente atributos
    portas: 2,
    portamalas: '2501',
    motor: '2.0'
}//fim obj
console.log(carro);

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}
//adicionando novas caracteristicas ao obj carro
Object.assign(carro, adicionais);
console.log(carro);
    
