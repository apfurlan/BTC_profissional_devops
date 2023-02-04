import { createNewEmail, createNewName } from '../support/utils';

let email, nome, userID;

describe('Cadastro simples de Usuário', () => {

  email = createNewEmail();
  nome = createNewName();


  it('Cadastrar usuário', () => {
    cy.request({
      method: 'POST',
      url: '/usuarios',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: {
        nome: nome,
        email: email,
        password: 'password123',
        administrador: 'true'
      },
    }).should((response) => {
      userID = response.body._id;
      cy.log(userID);
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
    })
  })

  //Buscar usuário e verificar se ele está cadastrado
  it('Buscar usuario por ID', () => {
    cy.log(userID);

    cy.request({
      method: 'GET',
      url: '/usuarios/${userID}',
      headers: {
          'Accept': 'application/json'
      },
    }).should((response) => {
      userID = response.body._id;
      cy.log(userID);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('nome', nome);
      expect(response.body).to.have.property('email', email);
      expect(response.body).to.have.property('administrador', 'true');
      expect(response.body).to.have.property('_id');
    })
  
  })

  //Atualizar o usuário
  it('Atualizar usuario por ID', () => {
    
    cy.request({
      method: 'PUT',
      url: '/usuarios/${userID}',
      headers: {
          'Content-Type' : 'application/json',
          'Accept': 'application/json'
      },
      body: {
         nome:nome,
         email:email,
         password: 'novaSenha',
         administrador: 'false'
      },
    }).should((response) => {
      expect(response.status).to.eq(200) ;
      expect(response.body).to.have.property('message', 'Registro alterado com sucesso');
    })

  })


//Buscar usuário e verificar se ele foi atualizado
it('Atualizar usuario por ID e verificar se ele foi atualizado', () => {
 cy.request({
    method: 'GET',
    url: '/usuarios/${userID}',
    headers: {
        'Accept': 'application/json'
    },
  }).should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('nome', nome);
    expect(response.body).to.have.property('email', email);
    expect(response.body).to.have.property('password', 'novaSenha');
    expect(response.body).to.have.property('administrador', 'false');
    expect(response.body).to.have.property('_id');
  })

})

  

  //Excluir usuario
  it('Excluir usuario por ID', () => {
    cy.request({
      method: 'DELETE',
      url: '/usuarios/${userID}',
      headers: {
          'Accept': 'application/json'
      },
    }).should((response) => {
      expect(response.status).to.eq(200) ;
      expect(response.body).to.have.property('message', 'Registro excluído com sucesso ');
    })
  })

  //Buscar o usuario e verificar que ele nao esta mais cadastrado
  it('Buscar usuario por ID e verificar se ele foi excluído', () => {
    cy.request({
      method: 'GET',
      url: '/usuarios/${userID}',
      headers: {
          'Accept': 'application/json'
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('message', 'Usuário não encontrado');
    })
  })

})