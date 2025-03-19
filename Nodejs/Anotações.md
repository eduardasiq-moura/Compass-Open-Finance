# **Introdução ao Nodejs**

- *Node.js* é um ambiente de execução JavaScript de código aberto e multiplataforma, amplamente utilizado para diversos tipos de projetos.
  -  Ele executa o motor V8 do Google Chrome fora do navegador, o que contribui para seu alto desempenho.

### **Aplicação do Nodejs**
- Opera em um único processo, sem criar novas threads para cada requisição.
-  Ela utiliza primitivas de I/O assíncronas que evitam o bloqueio do código JavaScript. 
-  Geralmente, as bibliotecas no Node.js são escritas usando paradigmas não bloqueantes, tornando o comportamento de bloqueio uma exceção.
- Ao realizar operações de I/O, como leitura de rede, acesso a banco de dados ou ao sistema de arquivos, o Node.js não bloqueia a thread principal aguardando a resposta. 
- Em vez disso, ele retoma as operações quando a resposta é recebida. 
- Isso permite que o Node.js gerencie milhares de conexões concorrentes com um único servidor, sem a complexidade de gerenciar múltiplas threads, o que poderia ser uma fonte significativa de bugs.

### **Vantagens dessa Aplicação**
- Milhões de desenvolvedores frontend que escrevem JavaScript para o navegador agora podem escrever código do lado do servidor sem a necessidade de aprender uma linguagem completamente diferente. 
- Novos padrões ECMAScript podem ser usados sem problemas, já que não é necessário esperar que todos os usuários atualizem seus navegadores. 
- O desenvolvedor tem o controle de decidir qual versão do ECMAScript utilizar, alterando a versão do Node.js, e também pode habilitar recursos experimentais específicos executando o Node.js com flags apropriadas.

### *Exemplo de Aplicação*
````markdown
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

````
---

## **O que precisa saber de JS antes de mergulhar no Nodejs**
