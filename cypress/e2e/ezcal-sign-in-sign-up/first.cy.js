


describe("Login try", () => {
  before("do first", () => {
    cy.visit(`${Cypress.env("host")}/users/sign_up`);
  });

  const userEmail = `Iris114@gmail.com`;
  it(`account`, () => {
    cy.visit(`${Cypress.env("host")}/users/sign_in`);
    cy.get("#user_email").type(userEmail);
    cy.get("#user_password").type(`${Cypress.env("cPassword")}114`);
    cy.get("#new_user").within( ($form)=>{
        cy.wrap($form).should('have.class', 'login-form')
        
    })

  });
});
