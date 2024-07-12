

describe('Job Creation', ()=>
    {
        Cypress.config('defaultCommandTimeout', 15000);
    it('Select By Index', ()=>
        {
        cy.visit('https://euroka-test.apps.au-1a.mendixcloud.com/',{failOnStatusCode:false})
     
            cy.xpath("//input[contains(@id,'textBox1')]").type('confor123456')
            cy.xpath("//input[contains(@id,'textBox2')]").type('Telus@2022')
            cy.xpath("//button[contains(@class,'actionButton3')]").click()
            cy.contains('User Permission Management').click()
            cy.xpath("//select[contains(@id,'dropDown2')]").select(2).should('have.value','Name')
            cy.contains('Add member').click()
            cy.xpath("//input[@type='checkbox']").check()
            cy.xpath("//input[@type='checkbox']").uncheck()
        
        })
    })