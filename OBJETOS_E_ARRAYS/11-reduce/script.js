let array = [1, 2, 3, 4, 5];
let novo_array = array.reduce((acc, element) => {
    if(element !== 3){
        acc.push(element);
    }
    return acc;
}, []);

//constroi novo vetor excluindo elemento desejado!
console.log(novo_array);