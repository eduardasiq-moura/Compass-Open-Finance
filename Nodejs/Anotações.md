# **Introdução ao Nodejs**

  *Node.js* é um ambiente de execução JavaScript de código aberto e multiplataforma, amplamente utilizado para diversos tipos de projetos.
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
--

## **Diferenças entre Node.js e o Navegador**

- Os dois usam o JavaScript como linguagem de programação.

- Criar aplicativos executados no navegador é *diferente* de criar um aplicativo Node.js.

- Aplicativos Node.js traz a vantagem de *programar o front-end e o back-end* em uma única linguagem

| Recurso                       | Node.js                                    | Navegador                                  |
|-------------------------------|--------------------------------------------|--------------------------------------------|
| Ambiente                      | Controlado, versão específica do Node.js   | Varia entre navegadores e versões         |
| Módulos                       | Suporta CommonJS e ES modules              | Suporta módulos ES (crescendo)            |
| APIs                          | APIs internas como sistema de arquivos     | APIs limitadas ao Web Platform (DOM)      |
| Suporte a JavaScript          | Suporte a ES2015+                          | Limitado pela versão do navegador         |
| Ecossistema                   | Focado em ferramentas de backend          | Focado em interações de frontend          |

---

## **The V8 JavaScript Engine**

V8 é o nome do mecanismo que alimenta o Google Chrome.
  - Pega o JS e executa enquanto navega com o Chrome.
  - Analisa e executa o JS.
- Esse recurso permitiu o surgimento do *Node.js*
- O ecossistema Node.js é enorme e graças ao V8.

### **Outros mecanismos JS**
1. *Firefox* -> SpiderMonkey
2. *Safari* -> JavaScriptCore (Nitro)
3. O *Edge* foi originalmente baseado no Chakra, mas mais recentemente foi reconstruído usando o Chromium e o motor V8.

- V8 é escrito em C++
- O JS é considerado uma linguagem interpretada  mas os mecanismos JavaScript modernos não apenas interpretam o JavaScript, eles o *compilam*.
- O JavaScript é compilado internamente pelo V8 com compilação just-in-time (JIT) para acelerar a execução.
---

## **Introdução ao pacote npm**

- `npm` é o gerenciador de pacotes padrão do Node.js.

- `npm`instala, atualiza e gerencia download

### **Instalando todas as dependências**

- Se um projeto tiver um arquivo, executando package.json.

````
1 npm install

2 nmp install <packege-name>

````
1. Instala tudo o que o projeto precisa, criando *node_modules*, se não existir
2. Instala um pacote específico. No npm 5 o comando adiciona as dependências do arquivo.

| Sinalizador        | Descrição                                                                 |
|--------------------|---------------------------------------------------------------------------|
| `--save-dev`       | Instala e adiciona a entrada ao arquivo `devDependencies` no `package.json` |
| `--no-save`        | Instala, mas não adiciona a entrada às dependências do arquivo `package.json` |
| `--save-optional`  | Instala e adiciona a entrada ao arquivo `optionalDependencies` no `package.json` |
| `--no-optional`    | Impede que dependências opcionais sejam instaladas                        |

**Diferenças:**
  - devDependencies: ferramentas de desenvolvimento, como uma biblioteca teste
  - dependencies: empacotado com o aplicativo em produção
  - optionalDependencies: a falha de compilação da dependência não fará com que a instalação falhe. Mas é responsabilidade do seu programa lidar com a falta de dependência

### **Atualização dos Pacotes**

````
1 npm update

2 npm update <packege-name>

3 npm install <packege-name>@<version>

4 npm run <task-name>
````
1. `npm` vai verificar todos os pacotes em busca de uma versão mais recente
2. especificando um único pacote para atualizar
3. para o controle de versão
4. o package.json suporta um formato para especificar tarefas de linha de comando 

**Exemplo da execução de tarefas**

````
{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
  }
}

````
No lugar de executar essas grandes linhas de códigos, da para simplificar com o `npm` e apenas usar

````
$ npm run watch
$ npm run dev
$ npm run prod
````
---

## **A diferença entre *development* e *production***

Não há diferençs, não tem configurações específicas que são aplicadas para funcionar uma configuração de production.

Algumas bibliotecas `npm` reconhcem o uso da variável e padronizam uma configuração.

- Porque `NODE_ENV` é antipadrão?
  - Existem quatro estágios/ambientes que um app é testado:
    - Desenvolvimento
    - Teste
    - Preparo 
    - Produção
  Problema: desenvolvedores combinando otimizações e comportamentos de software com o ambiente onde ele está sendo executado.

  ````
  if (process.env.NODE_ENV === 'development') {
  // ... }
  if (process.env.NODE_ENV === 'production') {
  // ... }
  if (['production', 'staging'].includes(process.env.NODE_ENV)) {
  // ...
  } 
  ````
  
  Isso torna os ambientes de produção e preparo diferentes, impossibilitando testes confiávies.
---

## **API Fetch com Undici no Node.js**

- Undici: biblioteca cliente HTTP que alimenta a API de busca no NOde.js
- Escrita do zero e nao depende do cliente HTTP integrado ao Node.js
- Inclui vários recursos que a tornam boa opção para aplicativos de alto desempenho.

Uso básico do GET

````
async function main() {
  // Like the browser fetch API, the default method is GET
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
  // returns something like:
  //   {
  //   userId: 1,
  //   id: 1,
  //   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //   body: 'quia et suscipit\n' +
  //     'suscipit recusandae consequuntur expedita et cum\n' +
  //     'reprehenderit molestiae ut ut quas totam\n' +
  //     'nostrum rerum est autem sunt rem eveniet architecto'
  // }
  }
  
  main().catch(console.error);
````
Uso básico do POST

````
// Data sent from the client to the server
const body = {
  title: 'foo',
  body: 'bar',
  userId: 1,
  };
  
  async function main() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'User-Agent': 'undici-stream-example',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  console.log(data);
  // returns something like:
  // { title: 'foo', body: 'bar', userId: 1, id: 101 }
  }
  
  main().catch(console.error);
````

Personalizando a API com o Undici

- Undici permite a personalização da API Fetch
- Função `fetch` usa dois argumentos
  - URL a ser buscada 
  - Obejto options é o request
  - A função retorna um Promises que é convertido a um response

Exemplo de Uso

Mandando um POST para a API Ollama com carga JSON

````
ollama run mistral
````
Ollama é uma ferramenta cliente que permite executar LLMs em localhost.

`Poll` faz reutilizar conexões com o mesmo servidor e melhora o desempelho

````
import { Pool } from 'undici';const ollamaPool = new Pool('http://localhost:11434', {
  connections: 10,
});

/**
 * Stream the completion of a prompt using the Ollama API.
 * @param {string} prompt - The prompt to complete.
 * @link https://github.com/ollama/ollama/blob/main/docs/api.md
 **/
async function streamOllamaCompletion(prompt) {
  const { statusCode, body } = await ollamaPool.request({
    path: '/api/generate',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt, model: 'mistral' }),
  });

  // You can read about HTTP status codes here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  // 200 means the request was successful.
  if (statusCode !== 200) {
    throw new Error(`Ollama request failed with status ${statusCode}`);
  }

  let partial = '';

  const decoder = new TextDecoder();
  for await (const chunk of body) {
    partial += decoder.decode(chunk, { stream: true });
    console.log(partial);
  }

  console.log('Streaming complete.');
}

try {
  await streamOllamaCompletion('What is recursion?');
} catch (error) {
  console.error('Error calling Ollama:', error);
} finally {
  console.log('Closing Ollama pool.');
  ollamaPool.close();
}

````

Streaming de respostas com Undici

`Streams` é um recurso do Node.js que permite ler e gravar trecos de dados.

````
import { stream } from 'undici';
import { Writable } from 'stream';

async function fetchGitHubRepos() {
  const url = 'https://api.github.com/users/nodejs/repos';

  const { statusCode } = await stream(
    url,
    {
      method: 'GET',
      headers: {
        'User-Agent': 'undici-stream-example',
        Accept: 'application/json',
      },
    },
    () => {
      let buffer = '';

      return new Writable({
        write(chunk, encoding, callback) {
          buffer += chunk.toString();

          try {
            const json = JSON.parse(buffer);
            console.log(
              'Repository Names:',
              json.map(repo => repo.name)
            );
            buffer = '';
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }

          callback();
        },
        final(callback) {
          console.log('Stream processing completed.');
          callback();
        },
      });
    }
  );

  console.log(`Response status: ${statusCode}`);
}

fetchGitHubRepos().catch(console.error);

````
---

## **Como ler variávies de ambiente**

O módulo process contém a propriedade env, que armazena as variáveis de ambiente definidas no momento em que o processo é iniciado.

- Exemplos para acessar variáveis como process.env.`USER_ID` e `process.env.USER_KEY`.
  
````
process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"
````


Suporte experimental para arquivos .env no Node.js 20.

- Usar o comando node --env-file=.env app.js para carregar variáveis de um arquivo .env.

- É possível passar múltiplos arquivos .env e usar `--env-file-if-exists` para evitar erros se o arquivo não existir.
---

## **Callback em Javascript**

O que é? 
- No JavaScript, callbacks são usados para lidar com operações assíncronas, como ler arquivos ou esperar por um clique do usuário.


- JavaScript executa código de forma síncrona e sequencial, mas quando há operações demoradas, utiliza callbacks para não travar o fluxo do código.
(uma coisa por vez)

Exemplo de evento click em um botão utilizando addEventListener com um callback.

````
const $botao = document.querySelector('buton')

$botao.addEventListener('click', function executaNoClick(){
  console.log('Alo')
})
````

**Pilha de Execução (Call Stack)**

- Como o JavaScript processa funções, empilhando-as na execução e liberando conforme termina.

- Exemplo de como funções empilham e travam o código quando mal estruturadas (Loop Infinito).

**Callbacks no Navegador e Node.js**

No navegador: Evento de clique no botão como exemplo de callback.

No Node.js: Exemplo de leitura de arquivos com callback para não bloquear o fluxo do programa.

**Atraso e Fluxo Assíncrono**

Uso de funções como setTimeout para emular operações assíncronas e a explicação do event loop no JavaScript.

*Diferença entre Callbacks e Promises:*

- Callbacks crescem horizontalmente, enquanto Promises crescem verticalmente.

---

## **Node.js - Controle de Fluxo Assíncrono**

O JS foi projetado para não bloquear a 'thread' principal (nela as visizalizações sao rndenizadas)

Quando a thread principal é bloqueada, resulta em 'congelamento' e nada mais é despachado -> perda de aquisição de dados

- Isso cria restições únicas que só um estilo funcional de programação pode curar -> *callbacks*
  
- Callbacks podem se tornar difíceis de lidar em procedimentos mais complicados
  - Callback Hell: onde várias funções aninhadas com clalbacks tornam o código mais difícil de ler

````
async1(function (input, result1) {
  async2(function (result2) {
    async3(function (result3) {
      async4(function (result4) {
        async5(function (output) {
          // do something with output
        });
      });
    });
  });
});
````
- Problema real: comprimento e complexidade do código

Funções que são úteis; operações mais complexas são compostas por várias funções:

1. initiator style / input:
2. middleware
3. terminator

*initiator style / input*
Primeira função na sequencia, ela aceitará a entrada original, se houver, para a operação. A operação é uma série executavel de funções e a entra original será principalmente:
- variáveis em um ambiente global
- Invocação direta com ou sem argumentos
- Valores obtidos por solicitações de sistema de arquivos ou rede

** Solicitações de rede podem ser solicitações de entrada por uma rede externa, por outro aplicativo na mesma rede ou pelo próprio aplicativo na mesma rede ou na rede externa.

*middleware*
Retorna outra função e uma função de terminador invocará o callback. Abaixo mostra o fluxo para solicitações de rede ou sistema de arquivos;

````
function final(someInput, callback) {
  callback(`${someInput} and terminated by executing callback `);
  }
  
  function middleware(someInput, callback) {
  return final(`${someInput} touched by middleware `, callback);
  }
  
  function initiate() {
  const someInput = 'hello this is a function ';
  middleware(someInput, function (result) {
    console.log(result);
    // requires callback to `return` result
  });
  
  }
  
  initiate();
````
A latência é 0 pois todos esses valores estão disponíveis na memória

*State Management - Gestão de estado*

As funções podem ou não ser state dependent. Essa dependencia vai surgir quando a entrada ou outra variável de uma função depende de uma função externa

Existem duas estratégias principais:
1. Passando variáveis diretamente para uma função 
2. Adquirir um valor de variável de um cache, sessão, arquivo, banco de dados, rede ou outra fonte externa.

** Sobre variável global -> gerenciar o state com elas costuma ser antipadrão que torna dif´cil ou impossivel garantir o state.

**Fluxo de Controle**

Se um objeto estiver disponível na memoria, a iteração será possivel e não terá alteração no fluxo de controle

````
function getSong() {
  let _song = '';
  let i = 100;
  for (i; i > 0; i -= 1) {
    _song += `${i} beers on the wall, you take one down and pass it around, ${
      i - 1
    } bottles of beer on the wall\n`;
    if (i === 1) {
      _song += "Hey let's get some more beer";
    }
  }

  return _song;
  }
  
  function singSong(_song) {
  if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
  console.log(_song);
  }
  
  const song = getSong(); // this will work
  singSong(song);

````
Mas se os dados existirem fora da memória, a iteração nao funcionará mais

````
function getSong() {
  let _song = '';
  let i = 100;
  for (i; i > 0; i -= 1) {
    /* eslint-disable no-loop-func */
    setTimeout(function () {
      _song += `${i} beers on the wall, you take one down and pass it around, ${
        i - 1
      } bottles of beer on the wall\n`;
      if (i === 1) {
        _song += "Hey let's get some more beer";
      }
    }, 0);
    /* eslint-enable no-loop-func */
  }

  return _song;
  }
  
  function singSong(_song) {
  if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
  console.log(_song);
  }
  
  const song = getSong('beer'); // this will not work
  singSong(song);
  // Uncaught Error: song is '' empty, FEED ME A SONG!
````
Isso aconteceu pq instrui a CPU a armazenar as instruções em outro lugar do barramento e instrui que os dados sejam agendados para coleta posteriormente.

Existe três padrões que podem realizar as operações:

- **Em série:** as funções serão executadas em uma ordem sequencial estrita, esta é mais semelhante aos loops `for`
````
// operations defined elsewhere and ready to execute
const operations = [
  { func: function1, args: args1 },
  { func: function2, args: args2 },
  { func: function3, args: args3 },
  ];
  
  function executeFunctionWithArgs(operation, callback) {
  // executes function
  const { args, func } = operation;
  func(args, callback);
  }
  
  function serialProcedure(operation) {
  if (!operation) process.exit(0); // finished
  executeFunctionWithArgs(operation, function (result) {
    // continue AFTER callback
    serialProcedure(operations.shift());
  });
  }
  
  serialProcedure(operations.shift());
````
- **Limitado em série:** as funções serão executadas em uma ordem sequencial estrita, mas com um limite no número de execuções. Útil quando você precisa processar uma lista grande, mas com um limite para o número de itens processados com êxito.
````
  let successCount = 0;

  function final() {
  console.log(`dispatched ${successCount} emails`);
  console.log('finished');
  }
  
  function dispatch(recipient, callback) {
  // `sendEmail` is a hypothetical SMTP client
  sendMail(
    {
      subject: 'Dinner tonight',
      message: 'We have lots of cabbage on the plate. You coming?',
      smtp: recipient.email,
    },
    callback
  );
  }
  
  function sendOneMillionEmailsOnly() {
  getListOfTenMillionGreatEmails(function (err, bigList) {
    if (err) throw err;

    function serial(recipient) {
      if (!recipient || successCount >= 1000000) return final();
      dispatch(recipient, function (_err) {
        if (!_err) successCount += 1;
        serial(bigList.pop());
      });
    }

    serial(bigList.pop());
  });
  }
  
  sendOneMillionEmailsOnly();
````
- **Paralelo completo:** quando o pedido não é um problema, como enviar por e-mail uma lista de 1.000.000 de destinatários de e-mail.
````
  let count = 0;
  let success = 0;
  const failed = [];
  const recipients = [
  { name: 'Bart', email: 'bart@tld' },
  { name: 'Marge', email: 'marge@tld' },
  { name: 'Homer', email: 'homer@tld' },
  { name: 'Lisa', email: 'lisa@tld' },
  { name: 'Maggie', email: 'maggie@tld' },
  ];
  
  function dispatch(recipient, callback) {
  // `sendEmail` is a hypothetical SMTP client
  sendMail(
    {
      subject: 'Dinner tonight',
      message: 'We have lots of cabbage on the plate. You coming?',
      smtp: recipient.email,
    },
    callback
  );
  }
  
  function final(result) {
  console.log(`Result: ${result.count} attempts \
      & ${result.success} succeeded emails`);
  if (result.failed.length)
    console.log(`Failed to send to: \
        \n${result.failed.join('\n')}\n`);
        }
        
  recipients.forEach(function (recipient) {
  dispatch(recipient, function (err) {
    if (!err) {
      success += 1;
    } else {
      failed.push(recipient.name);
    }
    count += 1;

    if (count === recipients.length) {
      final({
        count,
        success,
        failed,
      });
    }
  });
});
````
- Cada um tem seus casos de uso, benefícios e problemas.
---

## **Diferenças entre o *Blocking* e o *Non-Blocking***

**Blocking**
Ocorre quando a execução de JavaScript adicional no processo do Node.js deve esperar até que uma operação não-JavaScript seja concluída.

O loop de eventos não pode continuar executando JavaScript durante uma operação bloqueante.​
Node.js — Run JavaScript Everywhere

Métodos síncronos na biblioteca padrão do Node.js que utilizam o libuv são exemplos comuns de operações bloqueantes.​
- Módulos nativos também podem ter métodos bloqueantes.​
- 
Todos os métodos de E/S na biblioteca padrão do Node.js oferecem versões assíncronas (não bloqueantes) que aceitam funções de callback.​

Alguns métodos possuem contrapartes bloqueantes, cujos nomes terminam com Sync.​
Node.js — Run JavaScript Everywhere

**Comparação de Código**

Os métodos de blocking são executados de *forma síncrona* e os métos non-blocking são de *forma assíncrona*

- Exemplo de arquivo síncrono

````
const fs = require('node:fs');

const data = fs.readFileSync('/file.md'); // blocks here until file is read
````
Utiliza fs.readFileSync('/file.md'), que bloqueia a execução até que o arquivo seja lido completamente.

- Exemplo de arquivo assíncrono
````
  const fs = require('node:fs');

  fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  });
````
Utiliza fs.readFile('/file.md', (err, data) => { ... }), permitindo que outras operações JavaScript sejam executadas enquanto o arquivo é lido.

**Simultaneidade e taxa de transferência**

O Node.js executa JavaScript em uma única thread.

A simultaneidade no Node.js depende do loop de eventos processar callbacks após a conclusão de outras operações.

O uso de operações assíncronas e não bloqueantes no Node.js permite maior eficiência no processamento simultâneo de requisições, aproveitando melhor os tempos de espera de operações de E/S.


- Importância do Loop de Eventos:

- Para garantir a simultaneidade, o código deve permitir que o loop de eventos continue rodando enquanto operações não-JavaScript (como E/S) ocorrem.

Exemplo de Benefício de Operações Não Bloqueantes:

Se uma solicitação a um servidor leva 50ms e 45ms são gastos em E/S de banco de dados assíncrona, esses 45ms podem ser usados para processar outras requisições.

Isso aumenta a capacidade do servidor sem precisar de mais threads.

- Diferença em Relação a Outras Linguagens:

Em muitas linguagens, múltiplas threads são usadas para lidar com tarefas simultâneas.

No Node.js, o loop de eventos gerencia isso sem criar novas threads para cada requisição.

**Perigos de misturar blocking e non-blocking**

- Blocking
````
  const fs = require('node:fs');

  fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
  });
fs.unlinkSync('/file.md');
````
Se ocorrer um erro, ele deve ser tratado para evitar que o processo falhe.

A execução de moreWork() ocorre após a leitura do arquivo e o console.log(data).

- Non-Blocking
  
````
  const fs = require('node:fs');
  fs.readFile('/file.md', (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  fs.unlink('/file.md', unlinkErr => {
    if (unlinkErr) throw unlinkErr;
  });
  });
````

O tratamento de erros é responsabilidade do desenvolvedor.

moreWork() é chamado antes de console.log(data), pois a leitura do arquivo é não bloqueante.

---

## **Programação assíncrona e CallBacks**

Assíncrono -> as coisas podem acontecer independente do fluxo principal do programa.

Nos computadores atuais, cada programa é executado por um intervalo de tempo definifo e depois sua execução pe interrompida para outro programa ser executado.

    - ocorre tão rápido que é impossível de perceber
    - os programas parecem serem executados simultaneamente mas não
    - os programas usam interrupções internamente, um sinal é emitido para o processador para chamar a atenção do sistema.

Normalmente, as linguagens de programação são síncronas e algumas fornecem uma maneira de gerenciar a assincronicidade na linguagem ou por meio de bibliotecas. 

**JavaScript**

É síncrono por padrão e de thread única

O código não pode criar novas threads e ser executado em paralelo

````
  const a = 1;
  const b = 2;
  const c = a * b;
  console.log(c);
  doSomething();
````
O JS nasceu dentro do navegador, sua principal função, inicialmente era *responder às ações do usuário*

**Callbacks**

Não da para saber quando um usuário vai clicar em um botão. 

É definido um manipulador de eventos para o evento de clique. E

sse manipulador de eventos aceita uma função, que será chamada quando o evento for disparado:

````
  document.getElementById('button').addEventListener('click', () => {
  // item clicked
  });

````
Isso é chamdo de *callbacks*

Callbacks é uma função simples que é passada como VALOR para outra função e será executada quando a AÇÃO acontecer

- **Tratamento de Erros em Callbacks**

É comum que funções assíncronas utilizem callbacks que seguem o padrão de erro como primeiro argumento. 
 
Nesse padrão, o primeiro parâmetro do callback é reservado para um objeto de erro, enquanto os parâmetros subsequentes contêm os dados resultantes da operação bem-sucedida.

````
  const fs = require('node:fs');

  fs.readFile('/file.json', (err, data) => {
  if (err) {
    // handle error
    console.log(err);
    return;
  }

  // no errors, process data
  console.log(data);
});
````
A função `readFile` tenta ler um arquivo e, em seguida, executa o callback fornecido.

Se ocorrer um erro durante a leitura, o objeto erro conterá informações sobre o problema, permitindo que você lide com ele de maneira adequada. 

Caso contrário, os dados do arquivo serão processados conforme necessário.

---

## **Node.js - Event Loop**

Permite ao Node.js realizar operações de I/O não bloqueantes, mesmo utilizando uma única thread em JavaScript.

Ele delega operações ao kernel do sistema sempre que possível, aproveitando a capacidade dos kernels modernos de lidar com múltiplas operações em segundo plano. 

Quando uma dessas operações é concluída, o kernel notifica o Node.js para que o callback apropriado seja executado. 

- Fases do Loop de Eventos: é divido em várias fases, cada uma com uma fila de callbacks a serem executados
1. **Timers:** Executa callbacks agendados por setTimeout() e setInterval() cujos tempos de espera foram concluídos.​
2. **Pending Callbacks:** Processa callbacks de operações do sistema que estão aguardando para serem executados.​
3. **Idle, Prepare:** Fases internas usadas para operações específicas.​
4. **Poll:** Aguarda e executa eventos de I/O, retornando à fase de timers se necessário.​
5. **Check:** Executa callbacks agendados por setImmediate().​
6. **Close Callbacks:** Executa callbacks de eventos de fechamento, como o encerramento de sockets.​

`process.nextTick()` vs. `setImmediate()`

`process.nextTick()`: Adiciona o callback à fila "next tick queue", que é processada imediatamente após a conclusão da operação atual, antes de continuar o loop de eventos. Isso garante que o código seja executado antes de qualquer I/O pendente. ​

`etImmediate()`: Agenda a execução de um callback no final da fase de poll, ou seja, na fase de check. Embora semelhante a setTimeout(() => {}, 0), setImmediate() é projetado para ser executado após a conclusão da fase de poll, enquanto setTimeout depende do temporizador. ​

Diferenças entre `setImmediate()` e `setTimeout()`

Embora ambos possam ser usados para agendar a execução de callbacks
- `setImmediate()` é especificamente projetado para ser executado imediatamente após a fase de poll,
-  `setTimeout()` agenda a execução após um período mínimo especificado. A ordem de execução entre eles pode variar dependendo do contexto em que são chamados. 
---

## **Node.js - Event Emitter**

No Node.js, o módulo events permite a implementação de um sistema de eventos semelhante ao do JavaScript no navegador. 

A classe `EventEmitter` é central nesse módulo, fornecendo a capacidade de criar, disparar e ouvir eventos personalizados. 

**Inicialização do `EventEmitter`**

Para utilizar o `EventEmitter`, primeiro é necessário importá-lo e instanciar um objeto:

````
  const EventEmitter = require('node:events');
  const eventEmitter = new EventEmitter();
````
**Métodos Principais**

`on(evento, listener)`: Adiciona um listener para o evento especificado.​

`emit(evento, [...args])`: Dispara o evento especificado, passando argumentos opcionais para os listeners.

**Exemplo de Uso**

````
eventEmitter.on('start', () => {
  console.log('iniciado');
});

eventEmitter.emit('start');
````

Ao executar eventEmitter.emit('start');, a função de callback associada ao evento 'start' é chamada, resultando na saída: 'iniciado'.​

**Passagem de Argumentos para Listeners**

É possível passar argumentos adicionais ao disparar um evento:​

````
eventEmitter.on('start', (numero) => {
  console.log(`iniciado ${numero}`);
});

eventEmitter.emit('start', 23);
````

Neste exemplo, a saída será: 'iniciado 23'.​

**Outros Métodos Úteis**

`once(evento, listener)`: Adiciona um listener que será executado apenas uma vez para o evento especificado.​

`removeListener(evento, listener)` ou `off(evento, listener)`: Remove um listener específico de um evento.​

`removeAllListeners(evento)`: Remove todos os listeners de um evento específico.​


O EventEmitter chama todos os listeners de um evento de forma síncrona, na ordem em que foram registrados. Isso garante a sequência adequada dos eventos e ajuda a evitar condições de corrida e erros lógicos. Quando apropriado, as funções de listener podem alternar para um modo de operação assíncrono usando os métodos `setImmediate()` ou `process.nextTick()`. ​

---

## **Não Bloqueie o Loop de Eventos**

Evitar operações que bloqueiem o loop de eventos ou a pool de trabalhadores para garantir o desempenho e a escalabilidade das aplicações

- Arquitetura do Node.js

Loop de Eventos e Pool de Trabalhadores: O Node.js utiliza uma única thread para o loop de eventos e uma pool de k trabalhadores para tarefas intensivas. Se uma thread fica ocupada por muito tempo, outras requisições podem ser prejudicadas. ​
Node.js — Run JavaScript Everywhere

- Evitar Bloqueios

Impacto no Desempenho e Segurança: Operações bloqueantes podem reduzir o throughput do servidor e, se exploradas por usuários mal-intencionados, podem levar a ataques de negação de serviço (DoS). ​

- Boas Práticas

Callbacks Rápidos: Certifique-se de que cada callback seja concluído rapidamente para não bloquear o loop de eventos.​
Reddit

Uso de APIs Assíncronas: Utilize APIs assíncronas para operações de I/O, evitando que o loop de eventos seja bloqueado.​

Delegação de Tarefas Intensivas: Para tarefas que exigem uso intensivo de CPU, considere delegá-las para a pool de trabalhadores ou utilize técnicas como worker threads ou clusters.
---
