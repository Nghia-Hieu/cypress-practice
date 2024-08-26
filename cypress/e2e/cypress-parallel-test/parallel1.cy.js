describe("Hello1",()=>{
    it("Check parallel",()=>{
        cy.visit("https://ezycal-staging.goldenowl.asia/users/sign_in");
        cy.root();
        cy.get('#user_email').type("Helloworld@gmail.com");
        cy.get('#user_password').type(`Iris114{Enter}`);
        //cy.get('.login-btn').click();
        //cy.url().should('include', '/onboarding');    
    })
})