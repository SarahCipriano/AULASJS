 /*
var numero = '12';
numero = numero.toString();
var outroNumero = 2.2;
outroNumero = outroNumero.toString (); 
var resultado = numero + outroNumero;
document.write("Tipo do dado " + numero + " = " + typeof(numero));
document.write("Tipo do dado " + outroNumero + " = " + typeof(outroNumero));
document.write("Resultado: " + resultado);
*/

/*
var salarioMensal = 1000;
var salarioAnual = 13*salarioMensal + salarioMensal*0.10;
console.log(salarioAnual);
*/
 
/*
var tipoDoFuncionario = "estagiario";
salarioMensal=700;
if (tipoDoFuncionario == "estagiario" || tipoDoFuncionario == "clt") {
  if(salarioMensal > 0 && salarioMensal < 1000) {
    var salarioAnual = 13*salarioMensal + salarioMensal*0.05;
    console.log(salarioAnual);
  
  }else{
    if(salarioMensal < 2000){
        var salarioAnual = 13*salarioMensal + salarioMensal*0.10;
        console.log(salarioAnual);
    }
  }
}
*/

/*
var dia;
switch (new Date() .getDay()) {
    case 0:
    dia = "domingo"; break;
    case1:
    dia = "segunda"; break;
    case 2:
        dia = "terça"; break;
    case 3:
        dia = "quarta"; break;
    case 4:
        dia = "quinta"; break;
    case 5:
        dia = "sexta"; break;
    case 6:
        dia = "sábado"; break;
}
console.log("Hoje é " + dia);
*/ 

//exemplo for
/*
 const carro = ["Fiat", "Volvo","BMW"];
 for (var i=0;i<carro.length;i++){
  document.write(carro[i] + "<br>");
 }
 document.getElementById("demo").innerHTML = carro;
 */

 /*
 var txt = "";
 var pessoa = {fname:"John", name:"José", idade:25}
 for (var x in pessoa){
  txt = txt + " " + pessoa[x];
 }
 */

 /*
 var somapares = 0;
 var i = 1;

 while(true) {
  if (i % 2 != 0)
    continue;
  somapares +=i;
  if (i == 10)
    break;
  i++;
 }
 */