describe('Validate Drop Down values',()=>
    {    
        beforeEach(()=>
        {
               cy.on('uncaught:exception', (err, runnable) => 
                {
                    return false
                })
    
                cy.visit('https://rahulshettyacademy.com/AutomationPractice/',{failOnStatusCode:false})
        })
    
        it('ValidateCreditCard',()=>
        {
            const cardTypes = ['Select','Option1\n','Option2\n','Option3'];
            //cy.get('.drp1 > .dropdown > .btn-primary').select(1);
            cy.get('#dropdown-class-example').each(($el,index)=>
                {
                    expect($el.text().trim()).to.includes(cardTypes[index]);
                })
       // cy.get('#dropdown-class-example').select(1).should('have.attr','value')
        cy.get('#dropdown-class-example').select(1).should('have.value','option1')
        })
        

})