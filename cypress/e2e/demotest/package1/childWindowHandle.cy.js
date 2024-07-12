    import 'cypress-iframe'
    describe('childWindowHandle',()=>
    {

    it.skip('Approach#1',()=>
    {

        cy.visit('https://toolsqa.com/selenium-webdriver/alerts-in-selenium/')
        cy.get('.navbar__links > :nth-child(3) > a').invoke('removeAttr', 'target').click();
        cy.url().should('include','https://demoqa.com')
        cy.contains('Elements').click()
        
    

    })

    it('Approach#2',()=>
        {
        
            cy.visit('https://toolsqa.com/selenium-webdriver/alerts-in-selenium/')
            cy.window().then((win) => {
                cy.stub(win, 'open').as('windowOpen');
            });
            cy.get('.navbar__links > :nth-child(3) > a').click();
            
        
            cy.window().then((win) => {
                // Your code here to work with the parent window
                // For example, you might want to assert something about the parent window
                cy.wrap(win).should('have.property', 'title', 'How to handle PopUps and Alerts in Selenium with examples?');
            
            cy.contains('Selenium Training').click()
                })
        
        
        })

    })