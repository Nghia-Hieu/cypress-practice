

describe('template spec', () => {
  it('Visit the page', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('focus').click();

    cy.url().should('include','/commands/actions');

    cy.get('.action-email').type('fake@gmail.com');

    cy.get('.action-email').should('have.value', 'fake@gmail.com');
  })
})