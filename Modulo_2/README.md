# **Módulo 2 - A Primeira Maneira: Os Princípios do Fluxo**


## Princípios da primeira maneira
[Aula 1.1](https://www.youtube.com/watch?v=TDlVMDy5D88) - Os principios \
[Aula 1.2](https://www.youtube.com/watch?v=fYM2dQQ1rRY) - Metodologias que ajudam a reduzir os desperdícios  


## Pipelines de Implantação

[Aula 2.1](https://www.youtube.com/watch?v=DhhVzBanVMI) - Fluxos de valor e elementos de um pipeline \
[Aula 2.2](https://www.youtube.com/watch?v=HTDPQX2iHRg) - Integração contínua/continuous integration (CI) \
[Aula 2.3.1](https://www.youtube.com/watch?v=mIF8qf4W0ro) - Implantação contínua/continuous deployment (CD) \
[Aula 2.3.2](https://www.youtube.com/watch?v=09QYIGOrmvY) - Implantação contínua - etapas \
[Aula 2.4](https://www.youtube.com/watch?v=DfjZUxIGX0A) - Entrega contínua/continuous delivery (CD)


## Controles de versão

[Aula 3.1](https://www.youtube.com/watch?v=qZZojdheLSA) - Conceitos básicos \
[Aula 3.2](https://www.youtube.com/watch?v=XSb3OkllynU) - Manipulando arquivos e sincronizando \
[Aula 3.3](https://www.youtube.com/watch?v=-uT7ykMb7Bg) - Tags, branches, merging

## Testes automatizados

[Aula 4.1](https://www.youtube.com/watch?v=1GxPPG5_P7A) - Tipos de testes e níveis de testes \
[Aula 4.2](https://www.youtube.com/watch?v=r_DaHr-91_U) - Abordagens de desenvolvimento orientadas a testes \
[Aula 4.3](https://www.youtube.com/watch?v=61FpcWwM4Hs) - Pirâmides de testes \
[Aula 4.4](https://www.youtube.com/watch?v=tkf_gbmLJTg) - Hands-on criando testes de API \
[Aula 4.5](https://www.youtube.com/watch?v=ea5pbGqzLCw) - Hands-on criando testes de UI \


## Honds-On 

### aula 4.4

Nesta aula fizemos um lab implementando um teste de API com o cypress. 
Segue abaixo as instalações necessárias para a realização do exercício. 


```
npm init
```

```
npm install cypress --save-dev
```

Para abrir a aplicação 

```
npx cypress open
```

```
git clone https://github.com/ServeRest/ServeRest.git
```

```
cd ServeRest
npm install
```
```
npm run dev
```

```
npm install unique-names-generator --save-dev
```

---

### aula 4.5

Criar um conjunto de passos com uma automação mínima para 
posteriomente implantá-lo em um servidor de Integração contínua. 

Instalações iniciais
```
npm init
```
```
npm install cypress --sabe-dev
```

A aplicação base será : 
- https://www.saucedemo.com/

Adicionar no cypress.config.js : 
    - baseUrl : 'https://www.saucedemo.com' , 
    - chromeWebSecurity : false

Os arquivos importantes deste lab estaão em cypress/e2e. Nele
estão os arquivos que dão origem aos dois testes realizados 
no Cypress. 