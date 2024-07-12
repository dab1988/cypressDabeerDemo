describe('handle Different Checkboxes',()=>
    {
        
        beforeEach(()=>{
            cy.on('uncaught:exception', (err, runnable) => 
                {
                    //expect('a').to.be.equals('')
                    return false
                })
            cy.visit(Cypress.env('url1'),{failOnStatusCode:false})
        })
        it('handle Odd Check boxes',()=>
            {
                cy.get("#hide-textbox").click()
                cy.get("#displayed-text").invoke('show').type('demo');
            })
    
        

    })