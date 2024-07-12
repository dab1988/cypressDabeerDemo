
describe('User Registration', ()=>
    {
        Cypress.config('defaultCommandTimeout', 25000);
        beforeEach(()=>
        {
            cy.visit('https://euroka-test.apps.au-1a.mendixcloud.com/',{failOnStatusCode:false})
            cy.url().should('include','/p/login')
            cy.xpath("//*[contains(@id,'label5')]").should('have.text','Username')
            cy.xpath("//*[contains(@id,'label7')]").should('have.text','Password')
        }
        )
    it('Retailer Registration', ()=>
        {

        cy.ReailerRegistration()
        cy.xpath("//input[contains(@id,'textBox37')]").type('Test')
        cy.xpath("//input[contains(@id,'textBox49')]").type('TestUser')
        cy.xpath("//input[contains(@id,'textBox52')]").type('Cypress Test')
        cy.xpath("//input[contains(@id,'textBox56')]").type('9087675')
        cy.xpath("//input[contains(@id,'textBox51')]").type('TestUser966@cy.co')
        cy.xpath("//button[text()='Next']").click()
        cy.xpath("//input[contains(@id,'textBox66')]").type("Cypress Business Retailer")
        cy.xpath("//input[contains(@id,'textBox68')]").type("90876543213")
        })

        it('SCC Registration', ()=>
            {
    
            cy.SCCRegistration()
            cy.xpath("//input[contains(@id,'textBox37')]").type('Test')
            cy.xpath("//input[contains(@id,'textBox49')]").type('TestUser')
            cy.xpath("//input[contains(@id,'textBox52')]").type('Cypress Test')
            cy.xpath("//input[contains(@id,'textBox56')]").type('9087675')
            cy.xpath("//input[contains(@id,'textBox51')]").type('TestUser966@cy.co')
            cy.xpath("//button[text()='Next']").click()
            cy.xpath("//input[contains(@id,'textBox66')]").type("Cypress Business Retailer")
            cy.xpath("//input[contains(@id,'textBox680')]").type("90876543213")
            })

            it('Installer Registration', ()=>
                {
                cy.InstallerRegistration()
                cy.xpath("//input[contains(@id,'textBox37')]").type('Test')
                cy.xpath("//input[contains(@id,'textBox49')]").type('TestUser')
                cy.xpath("//input[contains(@id,'textBox56')]").type('9087675')
                cy.xpath("//input[contains(@id,'textBox51')]").type('TestUser966@cy.co')
                cy.contains('Next').click()
                cy.contains('Next').click()
                cy.xpath("//input[contains(@id,'textBox7')]").type('Sydney')
                cy.xpath("//div[contains(@class,'listView2')]//ul//li").first().click()
                cy.wait(1500)
                cy.contains('Next').click()
                cy.contains('Next').click()
                cy.xpath("//input[contains(@id,'checkBox6')]").first().click()
                const fileName = 'Schedule.png'
                cy.xpath("//*[contains(@class,'fileDropper5')]").attachFile(fileName,{  subjectType: 'drag-n-drop'})
                cy.wait(2500)
            })
    })