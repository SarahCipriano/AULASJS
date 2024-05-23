function saudacao(nome,idade){
    if(idade === undefined){
        console.log("Olá " + nome);
    }else{
        console.log("Olá " + nome +
            " Você tem " + idade + " anos");
    }
}  

saudacao("Matheus");
saudacao("Juca",28);