## **O que é JavaScript**

- JavaScript é uma linguagem de programação. É o que nós chamamos de scripting.

- É ele que traz vida às páginas web, por exemplo, mas não somente a páginas, a jogos, a aplicativos, tanto para web quanto para celular.

- Três camadas do site:
  - HTML
  - CSS
  - JavaScript

-  HTML e o CSS são a parte estática de todo o site e se você quiser adicionar um dinamismo, um conteúdo mais dinâmico, vídeos rolando para cima e para baixo, animações, play books e assim por diante. Você precisa de JavaScript?

- HTML e CSS parte estática e JavaScript parte dinâmica.

## **Os arquivos**

- Existem os três arquivos mais importantes iniciais para criar as aplicações: *index.html, index.js e style.css *
    - **index.html:** as instruções da página web estática.
    - **index.js:** dinamico, arquivos javascript
    - **style.css:** trazer vida a sua aplicação ou ao seu projeto, contém tipo de fonte, as cores, ect
---
## **DIA 1 - Variáveis**

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

#### **Tipos de Variáveis**

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
---

## **DIA 2 - Operadores**

#### **Operadores Matemáticos**

````markdown
let num1 = 3
let num2 = 2
console.log(num1 + num2) // soma
console.log(num1 % num2) // resto de divisao
console.log(num1 ** num2) // exponencial
// incremento ++ e decremento --
let total = num1 + num2
console.log(total++)
console.log(total)
````

#### **Operações de Atribuição**

````markdown
let num1 = 'Eduarda'
//console.log(num1 > 0) 
//console.log(num1 < 0) 
//console.log(num1 >= 3) 
//console.log(num1 <= 3) 
console.log(num1 === 'Eduarda') 
````

#### **Operações de Igualdade**

````markdown
let num1 = '1' // string
let num2 = 1 // number
console.log(num1 === num2) 
// vai verificar se sao do mesmo tipo -> strict (T,V)
console.log(num1 == num2) 
// vai verificar se tem o mesmo valor -> loose (V)
````

#### **Operadores Ternários**

````markdown
let driver = 90
let speed = driver > 110 ? 'Above' : 'Below'
// Se a velocidade for maior que 110...
console.log(speed)
````

#### **Operadores Lógicos: and, or e not**
- and(&&): um E outro
- or(||): um OU outro
- not(!): não

````markdown
let temIdadeMinima = true
let temTituloEleitor = true

let podeVotar = temIdadeMinima && temTituloEleitor
console.log('Pode votar: ' + podeVotar)

let podeViajar = !podeVotar
console.log('Pode viajar: ' + podeViajar)
````

#### **Operadores Lógicos com Strings**

- Ao utilizar o OR vai ser verificado se a corCliente(primeiro termo) foi definido, entao vai aparecer ele primeiro, caso nao tivesse definição ia imprimir a corEstoque que é o 2 termo 
- Verifição acontece da esquerda pra direita
````markdown
let corCliente = 'branco'
let corEstoque = 'preto'
let corVendida = corCliente || corEstoque

console.log(corVendida)
````

#### **Precedência dos Operadores**

- O que é: quando tem uma expressão matemática por exemplo e vários tipos de operações no meio, qual delas vai ser executada primeira = precedência
````markdown
let num1 = 3  + 4 * 2
console.log(num1)
````
- Aqui a multiplicação tem precedência quanto a adição

- Em calculos mais simples da ora froçar uma precedencia com os parenteses

````markdown
let num2 = (3  + 4 )* 2
console.log(num2)
````
#### **Operações condicionais - if else**

````markdown
let driverSpeed = 80

if (driverSpeed > 110){
    console.log('Dirigindo muito rapido!')
  }
else if (driverSpeed > 40 && driverSpeed < 110){
    console.log('OK!')
  }
else{
    console.log('Dirigindo devagar!') 
    }
````
#### **Switch/Case**

- Trocar esse(switch) por aquele (case)
- Existem varios cases dentro do switch
````markdown
let airport ='MCO'

switch(airport){
  case 'MCO':
    console.log('Orlando')
    break
  case 'JFK':
    console.log('John F. Kennedy')
    break
  case 'SEA':
    console.log('Seatlle')
    break
    default:
    console.log('Unknown') // se nao achar cai aqui
}
````
#### **For Loop**

- dentro do for existem tres partes: *variavel; condição; encremento*

````markdown
for(i = 0; i <= 10; i++){
  console.log('Numero ', i)
}
````

#### **While Loop**

- a variável fica do lado de fora
- a condição fica dentro do while
- vantagem: utilizar variaveis ja usadas antes mas em loops diferentes

````markdown
i = 1

while(i <=10){
  console.log('Numero ', i)
  i++
}
````
#### **Do While Loop**

- começa com a variável fora
- condição vem com o while
- no 'do' fica o encremento
````markdown
i = 1
do{
  console.log('Numero', i)
  i++
} while(i <=10)
````
- While verifica antes de executar
- Do While executa para depois verificar

#### **For in Loop**

````markdown
const myCar = {
  model: 'BMW',
  year: 2025
  km: 68000 }

for(let i in myCar) //vai analisar DENTRO(in) 
  console.log(i, myCar[i])

````
#### **For Of Loop**
- dentro de um array

````markdown
const friends = ['Duda','Ana', 'Paulo']

for (let i of friends)
  console.log(i)
````
---

## **DIA 3 - Programação Orientada a Objeto**

- Um objeto pode ser qualquer coisa, ele tem propriedades, métodos (o que pode fazer). Exemplo um livro: 
  - Propriedades: titulo, autor, paginas, preço
  - Métodos: ler, vender, comprar, pedir informação

````markdown

const book = {
   bookTitle: 'Dicas de Jardinagem',
  bookAuthor: 'Euu',
  bookPages: 543,
  bookChapter: {
    chap1: 'Vasos',
    chap2: 'FLores'
  },
  printBook: function(){ // função dentro do obj
    console.log('Printing...')
  }
}


````
#### **Funções dentro do Objeto - Factory**

- Usando o exemplo de livros ainda, dentro do factory, vai emglobar varios tipos de objetos, como livros diferentes
- Usar factory para criar objetos
  
````markdown
function createBook(title, auther, pages,){
  const book = {
    Title: title,
    Author: author,
    Pages: pages,
    printBook: function(){ // função dentro do obj
    console.log('Printing...')
    }
  }
  return book
} 

const book1 = createBook('Dicas de Jardinagem','Eu',450)
const book2 = createBook('Dicas na Cozinha','Eu',350)

//Adicionando propriedades
book1.color = 'White'

console.log('Book:' + book1)
console.log('Book:' + book2)
````

#### **Criando um Construtor**
- construtor usa letra maiuscula no começo de cada palavra no nome ex: CreateBook

````markdown
function CreateBook(title, auther, pages,){
    this.Title = title;
    this.Author = author;
    this.Pages = pages
    
}
  
const book1 = new createBook('Dicas de Jardinagem','Eu',450)

console.log('Book:' + book1)
````

#### **Garbage Collector**
- coletor de lixo(?) numa tradução

#### **Obejtos Built in**
- usar objetos ja utilizados/criados
````markdown
console.log(Math.max(1,2,3,4,5,15))
````
- String: para analisar as string

````markdown
let message = 'Ola meu nome é'

console.log(message.startsWith('Ola'))
//vai verificar se a mensagem inicia com Ola

console.log(message.includes('meu'))
// verificar se existe isso na mensagem
````
#### **Template Literals**
- Usando essa ferramenta, no exemplo, pra auxiliar na formatação da mensagem, sem necessitar usar '\n' em tudo
- Apenas usando a crase
````markdown
let firstname = 'João'
const email = 'Olá' + firstname ', \nA reunição está confirmada! \nMaria'

const emailw = `Olá ${firstname}, 
A reunição está confirmada! 
Maria´ 

console.log(email)
console.log(email2)
````
---

## **DIA 4 - Array**

- *O que é um Array:* é  um objeto que você pode adicionar multiplos valores
````markdown
const friends = ['Ana', 'Maria', 'João']
const num = [1, 2, 3, 4, true]
console.log(friends)
console.log(num)
````
#### **Adicionar valores a Array**
 ````markdown 
const num = [2, 3, 4]
num.push(10, 11, 12)
//adiciona elementos no final da array
num.unshift(5, 6, 7)
//adiciona no começo
num.splice(2, 0, 8, 9)
//ele vai começar a adicionar a partir do index 3(num 4), sem deletar nenhum index e vai adicionar os numeros 8 e 9

console.log(num)
````

#### **Localizar itens primitivos**

````markdown
const num = [ 6, 7, 8, 9]
console.log(num.indexPf(8)) //mostrou a posição
console.log(num.includes(7))// se inclui
````

#### **Localizar itens de referência**
````markdown
const movie = [
  {id:1, movieName:'Senhor dos Anéis'},
  {id:2, movieName:'Harry Potter'},
  {id:3, movieName:'Jogos Vorazes'}
]

console.log(movies.find(function(movie){
  return movie.movieName == 'Senhor dos Anéis'
}))
````
- Usa o Find se for uma Array de referencia, com multiplos valores, é necessário criar uma função

#### **Arrow Function**

````markdown
const movie = [
  {id:1, movieName:'Senhor dos Anéis'},
  {id:2, movieName:'Harry Potter'},
  {id:3, movieName:'Jogos Vorazes'}
]

console.log(movies.find(movie => movie.movieName == 'Senhor dos Anéis'))
````
- Na flecha esta incluso a function e return, mais simples que a de cima

#### **Removendo itens de Array**
````markdown
const num = [1, 2 , 3, 4]
const final = num.pop()// tira o ultimo numero
.shift() // tira o primeiro
.splice(1,2)//tira a partir do index 1 sai o index 2

console.log(num)
console.log(final)
````
#### **Esvaziando uma Array**
````markdown
let num = [5, 6, 7, 8]

n um = []

num.length = 0

num.splice(0,num.length)
````

#### **Concatenando uma Array**

````markdown
let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters) // juntou os array
half = all.slice(3,5)
//vai pegar só uma porção, uma nova array

console.log(all)
console.log(half)
````
#### **Join Array**
  
````markdown
let clients = ['ana','maria,'joao']

console.log(clients)
let clientsJoin = clients.join(',')

console.log(clientsJoin)
````
- Serve para adicionar qualquer coisa dentro da Array

#### **Revertendo a Array**
````markdown
let clients = ['ana','maria,'joao']
clients.sort() //organizou em ordem 
clients.reverse()// fez o contrario 
console.log(clients)
````
Verificando elementos dentro de uma Array

````markdown
const tempLondon = [18, 13, 8, 2]
const tempPositive = tempLondon.every(function(value){
  return value >= 0
})

console.log(tempPositive)
//vai verificar todos os valores dentro da array se são poitivos nesse caso - true/false

````

- Filtrando uma Array com |FIlter

````markdown
onst tempLondon = [18, 13, 8, -2]
const tempPositive = tempLondon.filter(function(value){
  return value >= 0
}) //vai retornar só os positivos

const tempPositive2 = tempLondon.filter(value =>
  value >= 0)
//mais limpo

console.log(tempPositive)
````
---
## **DIA 5 - Tipos de Funções**


````markdown
//Function Declaration

function movie(){
  console.log('Senhor dos Anéis')
}
movie()

//Function Expression
const car = function(){
  console.log('Tesla)
}

car()
````
- São dois tipos de chamar uma função, uma pelo nome da função e outra pelo nome da variável
  - Function Declaration: colocar a função movie() antes da função, irá funcionar o código 
  - Function Expression: colocar a variável car() antes da função, o código não vai funcionar

- Hoisting: ele ta incluso ja dentro da Declaration, então ele vai automaticamente fazer a função ser executada primeiro.
  - No caso da Expression, ela está associada a uma variável, então nao existe hoisting, assim vai ficar na ordem que foi escrita o codigo - isso que o JS vê

#### **Usando argumentos em funções**
````markdown
function price(a, b){ //argumentos
  return total = 0
  for (let value of arguments)
    total += value
  return total
}

console.log(10, 20, 30, 40)
````
- Parametros Default

````markdown
function carLoan(loan, rate, years){
  return (loan * rate / 100 * year) + loan
}

console.log(carLoan(20000,2.5, 5))
````


````markdown

````


````markdown

````












````markdown

````