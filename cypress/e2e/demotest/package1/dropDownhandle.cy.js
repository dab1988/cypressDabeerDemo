
describe('drop down list',()=>
{
   // Cypress.config('defaultCommandTimeout', 20000);
    beforeEach(()=>
        {
            cy.log('start execution')
                //cy.visit('https://demowebshop.tricentis.com/')
               // cy.visit('https://www.tricentis.com/software-testing-tool-trial-demo/tosca-trial/')
              // cy.visit('https://www.bstackdemo.com/',{failOnStatusCode:false})
        })

        it("Validate the dropdown option selection by it's value", () => {
            cy.on('uncaught:exception', (err, runnable) => 
                {

                    return false
                })
                
            cy.visit("https://www.bstackdemo.com/")
            cy
              .get('.sort > select')
              .select('lowestprice')
              .invoke('val')
              .should('eq', 'lowestprice')
           })
           it("Validate the dropdown option selection by it's text and assert the selection", () => {
            cy.visit("https://www.bstackdemo.com/")
            cy.get('select').select('Highest to lowest')
            cy
              .get('select option:selected')
              .invoke('text')
              .should('eq', 'Highest to lowest')
           })
           it('select based on condition',function()
                  {
                    cy.visit("https://www.bstackdemo.com/")
                    cy.get('select').each(($el,index,$list)=>
                        {
                            if($el.text()==='Highest to lowest')
                                {
                                    cy.get('select').select($el.text()) 
                                }
                                
                        })
                  })
        it.only('Looping concept',()=>
        {
            cy.visit("https://www.bstackdemo.com/")

            
                    cy.get(':nth-child(5) > label > .checkmark').click()
                       
            cy.get('.shelf-container').find('.shelf-item').each(($el,index,$list)=>
                {
                    const post = $el.find('.shelf-item__title').text()
                    if(post.includes('8T'))
                        {
                            $el.find('.shelf-item__buy-btn').click()
                        }
                })
        })
    it.skip('Country dropdown Handle',()=> 
    {
      //cy.contains('Register').click()
      cy.get('#Country').select('American Samoa')
        //cy.wait(1000)
    })

    it.skip('Role dropdown Handle',()=> 
        {
          //cy.contains('Register').click()
          cy.get("select[name='Role__c']").select('Student')
          .invoke('val')
          .should('have.value','Student')
           // cy.wait(1000)

        })
    it.skip('demoRegistration Test',()=>
        {

            cy.get("label[for='Email']").type('Business Demo')
            cy.get("input[name='FirstName']").type('John')
            cy.get("input[name='LastName']").type('John')
            cy.get('#Country').select('India')
            cy.get("input[name='Phone']").type('6990003884')
            cy.get("input[name='Company']").type('DATA ENGINEER')
            cy.get("select[name='Role__c']").select('Student')
          .should('have.value','Student')
          cy.xpath("//*[@id='mktoForm_411']/div[8]/div[1]/div[2]/div[1]").click()

    })
})