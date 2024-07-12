

describe('Job Creation', ()=>
    {
        Cypress.config('defaultCommandTimeout', 15000);
    it('Registration', ()=>
        {
        cy.visit('https://euroka-test.apps.au-1a.mendixcloud.com/',{failOnStatusCode:false})
     
            cy.login('Cristinapalomares','CristinaPalomares123!')
            cy.contains('Create New Job').click()
            cy.xpath("/html/body/div[1]/div/div/div/div[2]/div/table/tbody/tr/td[2]/div/div[2]/div/div/div/div/div[3]/div/div/div[3]/div/div[1]/div/div[2]/div/div[1]/div/input").type('Test')
            cy.xpath("//input[contains(@id,'textBox7')]").type('Test')
            cy.xpath("//input[contains(@id,'textBox4')]").type('908765')
            cy.xpath("//input[contains(@id,'textBox5')]").type('Test@a.com')
            cy.xpath("//div[contains(@class,'textBox12')]/input").type('Sydney')
            
            cy.xpath("//div[contains(@class,'listView1')]").find('li').contains('159').click()
            cy.wait(1500)
            cy.xpath("//button[contains(@class,'actionButton9')]").click()
            
        })
    })