describe('Handle Alert',()=>
{

it('Java Script Pop Up Handle',()=>
{
    cy.visit('https://euroka-test.apps.au-1a.mendixcloud.com/')
    cy.login('Cristinapalomares','CristinaPalomares123!')
    cy.contains('User Permission Management').click()
   // cy.contains('Add member').click()
    cy.get('.col-lg-2 > .btn').rightclick()
    cy.log('First Name')
    cy.xpath("//input[contains(@id,'UserPermission_New.textBox1')]").type('Add')
    console.log('Last Name')
    cy.xpath("//input[contains(@id,'UserPermission_New.textBox4')]").type('Last')
    console.log('Email')
    const email = 'Add@aa.com'
    cy.xpath("//input[contains(@id,'UserPermission_New.textBox2')]").type(email)
    console.log('Phone')
    cy.xpath("//input[contains(@id,'UserPermission_New.textBox3')]").type('040398766')
    console.log('Business Role')
    cy.xpath("//input[contains(@id,'UserPermission_New.textBox5')]").type('Add')
    console.log('Select All Permission')
    cy.xpath("//input[contains(@type,'checkbox')]").check()
    console.log('Click Send Invitation')
    cy.contains('Send Invitation').click()
    cy.on('window:alert',(tap)=>
    {
        expect(tap).to.contains('Invitation sent.')
        expect(tap).to.contains('Information')
    })
    cy.get('.modal-footer > .btn').click()
    cy.xpath("//div[contains(@class,'dropDown2')]/select").select('Email')
    cy.xpath("//div[contains(@class,'textBox1')]/input").type(email)
})
})