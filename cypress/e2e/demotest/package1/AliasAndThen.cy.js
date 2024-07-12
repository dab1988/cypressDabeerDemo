describe ('sample',function()
{

it('aliasandhen',function()
{
    const favorites = { color: 'blue' }

cy.wrap(favorites).its('color').as('favoriteColor')

cy.then(function () {
  favorites.color = 'red'
})

cy.get('@favoriteColor').then( (aliasValue)=> {
  expect(aliasValue).to.eql('red')

  expect(this.favoriteColor).to.eql('blue')
})
}
)
})