describe('mouseEvent',()=>
    {
        Cypress.config('defaultCommandTimeout', 20000);
        beforeEach(()=>
            {
                    cy.visit('https://demowebshop.tricentis.com/')
                   // cy.visit('https://docs.cypress.io/faq/questions/using-cypress-faq/')
            })
    
        it('MOUSEHOVER',()=> 
        {
          //cy.contains('Computers').trigger('mouseover')
          //cy.contains('Desktops').click()
          cy.get('.top-menu > :nth-child(2) > ul > li > a[href="/desktops"]').invoke('show').click({force: true});
          cy.get('#products-orderby').then((dropList)=>
          {
            cy.wrap(dropList).select(4)
            //cy.wrap(dropList).url().should('include','orderby=10')
              //cy.wrap(dropList).find("option[value='https://demowebshop.tricentis.com/desktops?orderby=10&pagesize=4']")
                //        .should('be.selected')
          })
          //cy.get('#products-orderby').select(3);
        });

        it('validate Drop Down',()=>{
          cy.get('.top-menu > :nth-child(2) > ul > li > a[href="/desktops"]')
                                                            .invoke('show').click({force: true});
          cy.get('#products-pagesize')
                      .then((pageSize)=>
                        {
                          const actualValues = [...pageSize].map((o) => o.value);
                          const size =[4,8,12]
                          expect(actualValues).to.deep.eq(size);
                        });
        });
        it.skip('Keyboard Actions',()=>
        {
            //cy.get(':nth-child(1) > label').trigger('contextmenu',{force:true})
          cy.get('a[href="https://www.cypress.io/features"]').scrollIntoView()
          cy.get('a[href="https://www.cypress.io/features"]').invoke('removeAttr', 'target').click()
        //   cy.get('a[href="https://www.cypress.io/features"]').click()
        //cy.contains('Browser Testing').should('have.text','Browser Testing')
        //cy.contains('Delightful Experience').should('have.text','Delightful Experience')
        //cy.get('a[href="#delightful_experience"]').first().click()    
           cy.go('back')
        } )
    })