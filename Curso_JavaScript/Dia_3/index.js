

let productValue = Number(prompt('Enter thr product value:'))
//console.log(typeof(productValue)) para ver o tipo 

if(productValue >= 20 ){
    document.getElementById('result').innerHTML = 'Aprovado'

}
else{
    document.getElementById('result').innerHTML = 'Reprovado'

}