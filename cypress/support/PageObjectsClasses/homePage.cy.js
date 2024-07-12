//class class
// create individual methods for each locator and return same locator

class homePage
{

    setName()
    {
        return cy.get('#name:nth-child(1)');
    }

    setEmail()
    {
        return cy.get('#email:nth-child(1)');
    }

    checkBox()
    {
        return cy.get('input[id="agreeTerms"]');
    }

    submitButton()
    {
        return cy.get('button[id="form-submit"]:nth-child(1)')
    }

}

export default homePage;