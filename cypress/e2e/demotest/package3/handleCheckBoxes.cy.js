
describe('handle Different Checkboxes',()=>
{
    
    beforeEach(()=>{
        cy.on('uncaught:exception', (err, runnable) => 
            {
    
                return false
            })
        cy.visit(Cypress.env('url1'))
    })
    it('handle Odd Check boxes',()=>
    {
        cy.get("input[type='checkbox']").each(($el,index)=>
            {
                if(index%2==0)
                    {
                        cy.wrap($el).check({ force: true }).should('be.checked')
                        cy.wrap($el).uncheck({ force: true }).should('not.be.checked')
                    }
            })
    })
    it('smart Search',function()
        {
            cy.get('#autocomplete').type('al')
                cy.get('ul .ui-menu-item div').each(($lis,index,$list)=>
                    {
                   // const val = $list.find('ui-menu-item').text();
                            if($lis.text()==="Algeria")
                                {
                                    cy.wrap($lis).click({force:true})
                                }
                    })
        })

        it.only('window handle approach 1',()=>
        {
            cy.get('a[id="opentab"]').should('have.class','btn-style class1 class2')
            cy.get('a[id="opentab"]').invoke('attr','href').then((uri)=>
            {
                cy.visit(uri,{failOnStatusCode:false})
            })
            cy.go('back')

        })

})