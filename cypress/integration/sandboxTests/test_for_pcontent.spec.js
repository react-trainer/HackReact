describe("check for iframe", function() {
  it("visits sandbox and checks for iframe", function() {
    cy.visit("http://localhost:3000/sandbox");
    cy.contains("<p />");
  });
});
