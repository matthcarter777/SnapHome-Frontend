/// <reference types="cypress" />

context('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')

    cy.wait(3000)

    cy.get('.email').type('m@m.com.br')
    cy.get('.password').type('123456')

    cy.intercept('POST', '**/login').as('getLogin')

    cy.get('.btn-submit').click()

    cy.wait('@getLogin').its('response.statusCode').should('be.oneOf', [200])
  })

  it('should able to visit public page', () => {

    cy.get('.public').click()
  })
})