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

  it('should able to create property', () => {
    cy.visit('http://localhost:4200/propertys')

    cy.get('.btn-create').click()

    cy.wait(3000)

    cy.get('#title').type('Teste de titulo')
    cy.get('#address').type('Teste de endereco')
    cy.get('#city').type('Teste de cidade')
    cy.get('#state').type('Teste de estado')
    cy.get('#price').type('99999')
    cy.get('#description').type('Teste de description')

    cy.intercept('POST', '**/propertys').as('getProperty')

    cy.get('.btn-save').click()

    cy.wait('@getProperty').its('response.statusCode').should('be.oneOf', [200])
  })
})