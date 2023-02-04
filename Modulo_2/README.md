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

## Testes automatizados



--- 

# Commands

```
npm init

Press ^C at any time to quit.
package name: (serverrestapi) 
version: (1.0.0) 
description: Testes automatizados de API
entry point: (index.js) 
test command: test
git repository: 
keywords: test, cypress, xpeducacao
author: Alexandre Furlan
license: (ISC) 
About to write to ....
```

```
npm install cypress --save-dev
```

a instalação terá corrido

```sh
npm WARN idealTree Removing dependencies.cypress in favor of devDependencies.cypress

changed 1 package, and audited 173 packages in 25m

35 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

agora vamos abrir a aplicação 
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

added 1 package, and audited 174 packages in 2s

35 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

