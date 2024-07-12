
describe('',()=>
{

    it('child window',()=>
    {

                cy.visit('https://docs.cypress.io/examples/recipes#Testing-the-DOM')

                cy.get(':nth-child(8) > tbody > :nth-child(1) > :nth-child(1) > a')
                    	                                    
                .invoke('attr','href')
                                                                                    .then(href=>
                                                                                        {
                                                                                            cy.visit(String(href))
                                                                                            
                                                                                        }
                                                                                    )

    })

    

})