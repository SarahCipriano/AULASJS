var num = 17;
var divisoes = 0
for(var i = 0;i <= num;i++){
    if(num % i == 0){
        divisoes++;
        console.log(divisoes);
    }
}
if(divisoes == 2){
    console.log(`O número ${num} é primo`);
}else {
    console.log(`O número ${num} não é primo`);
}