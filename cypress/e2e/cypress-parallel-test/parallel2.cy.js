
describe("third try", () => {

    const getID = ()=> Cypress._.random(10000,99999)
    const userID = getID();
    it(`account`, () => {
        cy.visit("https://ezycal-staging.goldenowl.asia/users/sign_up");
        cy.get('#user_full_name').type(`Iris${userID}`);
        cy.get('#user_email').type(`Iris${userID}@gmail.com`);
        cy.get('#user_password').type("123456",{log: false});
        cy.get('#user_password_confirmation').type("12345", {log: false});
        cy.get('.sign-up-btn').click();
        cy.url().should('include', '/onboarding');
      });
});