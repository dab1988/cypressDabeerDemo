describe('Validate Drop Down values',()=>
{    
    beforeEach(()=>
    {
        cy.on('uncaught:exception', (err, runnable) => 
            {

                return false
            })

            cy.visit(Cypress.env('hdfcBank'),{failOnStatusCode:false})
    })

    it('ValidateCreditCard',()=>
    {
        const cardTypes = ['Select Product','Digital Cards','All Credit Cards'];
        cy.get('.drp1 > .dropdown > .btn-primary').select(1);
        cy.get('.drp2 > .dropdown > .btn-primary').each(($el,index)=>
            {
                expect($el.text().trim()).to.equal(cardTypes[index]);
            })
        cy.log('Credit Card')
    })

    it('Validate All Cards',()=>
    {
        const cardTypes = ['Select Product','Credit Cards','Debit Card','Commercial Card','Forex Cards'];
        cy.get('.drp1 > .dropdown > .btn-primary').select(2);
        cy.get('.drp2 > .dropdown > .btn-primary').each(($el,index)=>
            {
                expect($el.text().trim()).to.equal(cardTypes[index]);
            })
        cy.log('All Card')
    })

    it('Validate Account',()=>
    {
        const cardTypes = ['Select Product','Saving Accounts','Current Accounts','Current Accounts','Rural Accounts'];
        cy.get('.drp1 > .dropdown > .btn-primary').select(3);
        cy.get('.drp2 > .dropdown > .btn-primary').each(($el,index)=>
            {
                expect($el.text().trim()).to.equal(cardTypes[index]);
            })
        cy.log('Account')
    })

    it('Validate Desposits',()=>
    {
        const cardTypes = ['Select Product','Fixed Deposit','Recurring Deposit','Direct Deposit FD'];
        cy.get('.drp1 > .dropdown > .btn-primary').select(4);
        cy.get('.drp2 > .dropdown > .btn-primary').each(($el,index)=>
            {
                expect($el.text().trim()).to.equal(cardTypes[index]);
            })

        cy.log('Desposits')
    })
    it('Validate Loan',()=>
    {
        const cardTypes = ['Select Product','Home Loan','Personal Loan','Loan on Credit Card','SmartEMI'];
        cy.get('.drp1 > .dropdown > .btn-primary').select(5);
        cy.get('.drp2 > .dropdown > .btn-primary').each(($el,index)=>
            {
                expect($el.text().trim()).to.equal(cardTypes[index]);
            })
        cy.log('Loan')
    })
})