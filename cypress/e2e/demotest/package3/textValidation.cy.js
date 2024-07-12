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
                const expectedTitle = 'Practice Page'
                cy.title().should('eq',expectedTitle)
                cy.log(cy.title())
                cy.get('#select-class-example > fieldset > legend').invoke('text').then((text1)=>
            {
                expect(text1).to.be.eq('Suggession Class Example')
            })
                
            })
    })