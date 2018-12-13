describe("Checking the functionality of dropdown", function() {
  it("tests dropdown menu", function() {
    cy.visit("http://localhost:3000/sandbox");
    cy.get("button").should("be.visible");
  });
});
