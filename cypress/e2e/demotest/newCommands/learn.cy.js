
describe('new command',function()
{
     beforeEach(function()
     {
        cy.on('uncaught:exception',(err,int)=>
        {
            return false;
        })
       // cy.visit('https://www.orangehrm.com/en/30-day-free-trial',{failOnStatusCode:false});
      //  cy.viewport(1000,800);
     })
    it('children',function()
        {
            cy.get('#Form_getForm_subdomain_Holder').children().should('have.length','3');
            cy.get('.middleColumn').children('#Form_getForm_subdomain').type('temper');
                cy.get('#Form_getForm_subdomain_Holder').children('.description').then((el)=>
               {
                 var text = el.text()
                 cy.log(text)
                  expect(text).to.be.equal('Please type your username without any spaces (i.e johndoe).')
               } )
        })

        it.only('filter',function()
        {
            var list = ['Become a Seller','Electronics','About Us','Blog','Contact Us']
            cy.visit('https://demokart.com/')
            cy.get('.navigation').children().should('have.length','5');
           // //cy.get('.navigation').children('li').filter(':contains("Become a Seller")').click();
            //cy.go('back')
            cy.get('.navigation').children('li').each(($el,index,$list)=>
                {
                   // cy.log($list);
                   // var tex = ;
                    expect($el.text().trim()).to.be.equal(list[index]);

                })
        })
})