const list = [{"email": "Iris1@gmail.com"}, {"email": "Iris2@gmail.com"}, {"email": "Iris3@gmail.com"}]

describe("Second try", () => {

    before('do first',()=>{
        cy.visit(`${Cypress.env('host')}/users/sign_up`)
    })

    for(var i = 0; i<list.length; i++){
        const userEmail = list[i].email;
        it(`account${i}`, () => {
            cy.visit(`${Cypress.env('host')}/users/sign_in`);
            cy.root();
            cy.get('#user_email').type(userEmail);
            cy.get('#user_password').type(`${Cypress.env('cPassword')}114 {Enter}`);
            //cy.get('.login-btn').click();
            cy.url().should('include', '/onboarding');
          });
    }
  
});
