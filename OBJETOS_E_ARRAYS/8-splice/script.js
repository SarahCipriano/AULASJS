//splice: remover/alterar elementos adicionando novos elem.
let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3);//retorna o indice desse elem.
if(index > -1){
    array.splice(index,2)//remove o elem a partir do imd encontrado
}

console.log(array)