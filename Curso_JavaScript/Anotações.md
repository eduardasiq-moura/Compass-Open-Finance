## O que é JavaScript

- JavaScript é uma linguagem de programação. É o que nós chamamos de scripting.

- É ele que traz vida às páginas web, por exemplo, mas não somente a páginas, a jogos, a aplicativos, tanto para web quanto para celular.

- Três camadas do site:
  - HTML
  - CSS
  - JavaScript

-  HTML e o CSS são a parte estática de todo o site e se você quiser adicionar um dinamismo, um conteúdo mais dinâmico, vídeos rolando para cima e para baixo, animações, play books e assim por diante. Você precisa de JavaScript?

- HTML e CSS parte estática e JavaScript parte dinâmica.

## Os arquivos

- Existem os três arquivos mais importantes iniciais para criar as aplicações: *index.html, index.js e style.css *
    - **index.html:** as instruções da página web estática.
    - **index.js:** dinamico, arquivos javascript
    - **style.css:** trazer vida a sua aplicação ou ao seu projeto, contém tipo de fonte, as cores, ect

## Variáveis

- usado o 'let' no lugar de 'var' para declarar variáveis
- nao pode começar com numero
- nao pode começar com espaço, 
- começa com letra minuscula e segundo nome com maiuscula. ex: firstName
- ex: FirstName e firstName não são reconhecidos como a mesma coisa

```bash

let firstname = 'Eduarda'; //let usada para armz variavel
let lastname = 'Moura';
console.log(firstname);
console.log(lastname);

const price = 30;
//price = 20;
console.log(price);
```

*Tipos de Variáveis*

- primitivo: string, numero, boolean, undefined, null
  
```bash
let itemName = 'caneta' //string
let itemPrice = 3 // numerico
let ItemAvailable = true //boolen
let itemColor // nao foi definada
//null é o valor vazio
```

- referencia: objetos, array e funções
  - objects:
```bash
let pen = { 
    itemName: 'Pen',
    itemPrice: 3,
    ItemAvailable: true,
    itemColor: 'red' }

console.log(pen)

pen.itemColor = 'blue'; //alterar
```
dentro dos objectos ficam suas propriedades
  - Arrays
```bash
let friends = ['Maria', 'João', 'Carlos']
//lista de item, podem ser string, num, boolean

friends[1] = 'Fabio' //para substituir 

console.log(friends[2]) // mostra o Carlos
```

  - Funções: grupos de instruções, tarefas que da para criar, exemplo uma operação matemática
 ```bash 
function saleStatus(status, total) { //parametro
    console.log('Transaction ' + status + '! Valor Total: $' + total)
}
saleStatus('Aprovado', 30) //argumento
function percentual10(price){
    price - (price * 10/100)
}
// Outra função
let total = percentual10(20)
console.log(total)

// pode ser assim também
console.log(percentual10(40))

```