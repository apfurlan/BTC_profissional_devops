describe('Login no Sauce Labs', () => {
  
  it('realizar login', () => {
    cy.visit('/') ;
    cy.get('[data-test="username"]').type('standard_user') ;
    cy.get('[data-test="password"]').type('secret_sauce') ;
    cy.get('[data-test="login-button"]').click() ;
  })

  it('verificar componentes da lista de produtos', () => {
    cy.get('.title').should('have.text','Products');
    cy.get('[data-test="product_sort_container"]').should('be.visible')
    cy.get('.shopping_cart_link').should('be.visible')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');
  })

})