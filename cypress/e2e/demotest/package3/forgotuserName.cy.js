
describe('forgotUserName',()=>
    {
        Cypress.config('defaultCommandTimeout', 15000);
        beforeEach(() => {
            cy.visit('https://euroka-accp.apps.au-1a.mendixcloud.com/')
          })
        
      it('ForgotUserNameValidation',()=>
      {
       cy.contains('Forgot username?').click()
       cy.xpath("//input[contains(@id,'textBox3')]").type('abnc@a.com')
       cy.xpath("//*[contains(@class,'actionButton1')]").click()
       }
      )
    })