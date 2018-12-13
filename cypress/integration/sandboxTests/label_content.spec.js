describe("label content", function() {
  it("render more info in label", function() {
    cy.visit("http://localhost:3000/sandbox");
    cy.get("label").contains("More Info");
  });
});
