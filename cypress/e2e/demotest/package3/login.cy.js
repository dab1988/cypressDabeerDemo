/// <reference types="cypress" />
describe('Test ViewPort', ()=>
    {
        Cypress.config('defaultCommandTimeout', 10000);
    it('first Test', ()=>
        {
        cy.visit('https://euroka-test.apps.au-1a.mendixcloud.com/')
        cy.xpath("//input[contains(@id,'textBox1')]").type('backofficeopearation7')
        cy.xpath("//input[contains(@id,'textBox2')]").type('Telus@2022')
        cy.xpath("//button[contains(@class,'actionButton3')]").click()
        }
    )
    
    })