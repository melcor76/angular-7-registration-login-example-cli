context("Register", () => {
  it("should register user", () => {
    cy.visit("/register");
    cy.get('#firstName').type('Michael');
    cy.get('#lastName').type('K');
    cy.get('#username').type(Cypress.config('username'));
    cy.get('#password').type(Cypress.config('password'));
    cy.get('.btn-primary').click();

    cy.url().should('include', '/login');
    cy.get('.alert').should('contain', 'successful');
  });
});
