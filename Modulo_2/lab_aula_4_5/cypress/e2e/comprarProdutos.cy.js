describe('Login no Sauce Labs', () => {
  
  Cypress.session.clearAllSavedSessions()

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('/')
      cy.get('[data-test="username"]').type('standard_user') ;
      cy.get('[data-test="password"]').type('secret_sauce') ;
      cy.get('[data-test="login-button"]').click() ;
    })
    cy.restoreLocalStorage() ;
    // Cypress.Cookies.preserveOnce('session_id','session-username');
  });

  afterEach(() => {
    cy.restoreLocalStorage();
  });


  it('realizar login', () => {
    cy.visit('/') ;
    cy.get('[data-test="username"]').type('standard_user') ;
    cy.get('[data-test="password"]').type('secret_sauce') ;
    cy.get('[data-test="login-button"]').click() ;
  })
  
  //Adicionar produtos ao carrinho e clicar no carrinho
  it('adicionar produtos ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() ;
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click() ;
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click() ;
    cy.get('.shopping_cart_link').click() ;
  })

  
  //clicar no botão de checkout
  it('realizar checkout', () => {
    cy.get('[data-test="checkout"]').click() ;
  })

  //Preencher os dados do cliente e clicar em Continue
  it('informar dados do cliente', () => {
    cy.get('[data-test="firstName"]').type('Alexandre') ;
    cy.get('[data-test="lastName"]').type('Furlan') ;
    cy.get('[data-test="postalCode"]').type('56432634') ;
    cy.get('[data-test="continue"]').click() ;

  })

  //Verificar os dados de pagamento 
  it('verificar os dados de pagamento', () => {
    cy.get('[data-test="finish"]').click() 
  })


  // Verificar a Thank you Page
  it('verificar pagina de confirmação', () => {
    cy.get('.complete-header').should('be.visible')
  })

    
})