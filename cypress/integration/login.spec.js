context("Login", () => {

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      localStorage.setItem('users', JSON.stringify(users));
    });
  });

  it("should login user", () => {
    cy.visit("/login");
    cy.get('#username').type(Cypress.config('username'));
    cy.get('#password').type(Cypress.config('password'));
    cy.get('.btn-primary').click();

    cy.get('h1').should('contain', 'Hi Michael');
  });
});
