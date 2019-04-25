context("First test", () => {
  it("should visit login page", () => {
    cy.visit("/login");
    cy.get('.btn-link').click();
    cy.url().should('include', '/register');
  });
});
