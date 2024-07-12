
describe ('Back And Forth Browser', ()=>{

it('BackAndForth',()=> {

cy.visit('https://docs.cypress.io/',{failOnStatusCode:false})
const title = cy.title()
console.log(title)
 cy.contains('Examples').click()
 const title1 = cy.title()
cy.reload()
})

})
