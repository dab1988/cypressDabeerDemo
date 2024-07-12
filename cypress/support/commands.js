import 'cypress-file-upload';

Cypress.Commands.add('clickElement',(value)=>
    {
        cy.get('.nav-outer > .main-menu > .navbar-collapse > .navigation > :nth-child(n) > a').each(($el,index,$list)=>
        {
                if($el.text().includes(value))
                    {
                        cy.wrap($el).click();
                        cy.log(cy.title());
                        cy.title().should('include','Rahul');
                        //var url = value.text()
                      
                        cy.url().should('include',value.toLowerCase());
                        
                    }
        } )
    
    })

Cypress.Commands.add('login',(username,password)=>
    {
      
        cy.xpath("//input[contains(@id,'textBox1')]").type(username)
        cy.xpath("//input[contains(@id,'textBox2')]").type(password)
        cy.xpath("//button[contains(@class,'actionButton3')]").click()

    }

)

Cypress.Commands.add('ReailerRegistration',()=>
{
    //Click Register Link
    cy.log('Click Register Link on Login Page')
    cy.xpath("//a[contains(@class,'actionButton7')]").click()
    cy.log('Click Retailer Register Link')
    cy.xpath("(//button[@type='button'])[2]").click()
})


Cypress.Commands.add('InstallerRegistration',()=>
    {
        //Click Register Link
        cy.log('Click Register Link on Login Page')
        cy.xpath("//a[contains(@class,'actionButton7')]").click()
        cy.log('Click Retailer Register Link')
        cy.xpath("//button[contains(@class,'actionButton1')]").click()
    })
    Cypress.Commands.add('SCCRegistration',()=>
        {
            //Click Register Link
            cy.log('Click Register Link on Login Page')
            cy.xpath("//a[contains(@class,'actionButton7')]").click()
            cy.log('Click Retailer Register Link')
            cy.xpath("(//button[@type='button'])[2]").click()
        })
Cypress.Commands.add('register',(id,name,email,Password,conPass)=>
{
    cy.get('#gender-male').click()
    cy.get('#FirstName').type(id)
    cy.get('#LastName').type(name)
    cy.get('#Email').type(email)
    cy.get('#Password').type(Password)
    cy.get('#ConfirmPassword').type(conPass)
})