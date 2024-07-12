//const { should } = require("chai");

import homePage from "../../../support/PageObjectsClasses/homePage.cy";

describe('mouseEvent',()=>
    {
       // Cypress.config('defaultCommandTimeout', 20000);
        /*beforeEach(()=>
            {
                    
                    cy.visit(Cypress.env('url'),{failOnStatusCode: false})
                   // cy.visit('https://demowebshop.tricentis.com/',{failOnStatusCode: false})
                   // cy.visit('https://docs.cypress.io/faq/questions/using-cypress-faq/')
            })
let dataDriven;
            before(()=>
                {
                        cy.fixture('profile').then((dataProfile)=>
                            {
                                
                                dataDriven=dataProfile;
                                
                            })
                })*/
               const home = new homePage();
               
               cy.on('uncaught:exception', (err, runnable) => 
                {

                    return false
                })
                            before(()=>
                                {
                                    cy.fixture('newData').then(function(data)
                                    {
                                      this.data=data;  
                                    })
                                })

                                beforeEach(()=>
                                {
                                    cy.fixture('newData').as('user')
                                })
        it('dataDriven1',()=> 
        {
            cy.on('uncaught:exception', (err, runnable) => {

                 return false
                
                })
          cy.contains('Register').click()
          cy.get('#FirstName').type(dataDriven.name).screenshot()
          cy.get('#LastName').type(dataDriven.name)
          })
          it('multi Set',()=> 
            {
            cy.contains('Register').click()
            dataDriven.forEach((userData)=>
                { 
                if(userData.flag=='Y')
                    {
                        //debugger;
              cy.register(userData.id,userData.name,userData.email,userData.Password,userData.conPass)
              cy.get('#register-button').click({force: true})
              cy.get('div .result').should('have.class','result').screenshot()
              cy.get('.page-body > .buttons > .button-1').click()
              cy.get('.header-links > ul > li a[href="/customer/info"]').should('have.text',userData.email)
              cy.get('a[href="/logout"]').click()
              cy.get('a[href="/login"]').should('have.text','Log on').screenshot()
              cy.contains('Register').click()
                }
            })
        })
        it('multi Set ONE',()=> 
            {
            cy.contains('Register').click()
            dataDriven.forEach((userData)=>
                 { 
                if(userData.flag=='Y')
                {
              cy.register(userData.id,userData.name,userData.email,userData.Password,userData.conPass)
              cy.title().should('eq','Demo Web Shop. Register')
                }
            })
        })

        
        it('read Data approach#3',function()
        {
            cy.visit('https://rahulshettyacademy.com/practice-project');
          //  cy.clickElement('Courses')
        this.data.forEach((userProfile)=>
        {
            home.setName().type(userProfile.name);
            home.setEmail().type(userProfile.class);

            cy.xpath("//h2[contains(text(),'Practice')]").should('have.text','Join now to Practice');
            home.checkBox().check().should('be.checked');
            home.submitButton().click();
            cy.get('input[id="code"]').should('be.visible')
            cy.get('.top-right > :nth-child(2) > .theme-btn').click({force: true} );
            })
        })

         it.only('Approach#4',function()
         {
            cy.visit('https://rahulshettyacademy.com/practice-project');
            cy.get('@user').then((userProfile)=>
            {
                userProfile.forEach((useMe)=>
                {
                    
            home.setName().type(useMe.name);
            home.setEmail().type(useMe.class);

            cy.xpath("//h2[contains(text(),'Practice')]").should('have.text','Join now to Practice');
            home.checkBox().check().should('be.checked');
            home.submitButton().click();
            cy.get('input[id="code"]').should('be.visible')
            cy.get('.top-right > :nth-child(2) > .theme-btn').click({force: true} );

                })
            })
         })
})