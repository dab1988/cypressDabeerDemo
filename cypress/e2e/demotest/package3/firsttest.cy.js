
/// <reference types="cypress" />

    describe('My First Test', () => {
        it('Does not do much!', () => {
            cy.visit('https://docs.cypress.io/')
            cy.contains('FAQ')
            cy.contains('FAQ').click()
            cy.contains('Cloud').click()
            
        })
      })