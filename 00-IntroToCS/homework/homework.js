'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 var numero=0;
for (let i=0 ; i<num.length ; i++){
numero= numero + num[i] *2 ** (num.length-1-i);
}
return numero;
}


function DecimalABinario(num) {
  // tu codigo aca
  var resultado= '';
while (num/2>0){
  resultado=num%2+resultado;
  num=Math.floor(num/2)
}
return resultado;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}