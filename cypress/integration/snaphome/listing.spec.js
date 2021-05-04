/// <reference types="cypress" />

context('List Properties', () => {
  it('should list properties', () => {
    cy.intercept('GET', '**/propertys').as('getProperties')

    cy.visit('http://localhost:4200/public')
   
    cy.wait('@getProperties').its('response.statusCode').should('be.oneOf', [200, 304])
  })
})