describe('Handle Different Alert',()=>
    {
     
      beforeEach(()=>
        {
            console.log('Execute Test')   
        }
        )
    it('normal Alert',()=>
        {
            cy.visit('https://demoqa.com/alerts/')
            cy.get('#alertButton').click()
            cy.on('window:alert',(t)=>
            {
                expect(t).to.contains('You clicked a button')
            })
         })

    it('Confirmation Alert Auto Ok handle',()=>
        {
            cy.visit('https://demoqa.com/alerts/')
        cy.get('#confirmButton').click()
        cy.wait(2000)
           cy.on('window:confirm',(confirmAlert)=>
          {
            expect(confirmAlert).to.contains('Do you confirm action?')

            cy.get('#confirmResult').should('have.text','You selected Ok')
          })
        })

        it('Confirmation Alert Cancel handle',()=>
            {
                cy.visit('https://demoqa.com/alerts/')
            cy.get('#confirmButton').click()
            cy.wait(2000)
            cy.on('window:confirm',()=> false)
            cy.get('#confirmResult').should('have.text','You selected Cancel')
           })

        it.only('prompt alert',()=>
        {
            cy.visit('https://demoqa.com/alerts/',{failOnStatusCode:false})
            cy.title().should('eq','DEMOQA')
            const mes = 'You are most welcome'
            
          cy.window().then((win)=>
            {
                cy.stub(win, 'prompt').returns(mes)
            })
          cy.get('#promtButton').click()

          cy.get('#promptResult').should('have.text','You entered '+mes)

        })
    })