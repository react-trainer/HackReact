describe("Daniels fourth test", function() {
  it("tests if back button functions", function() {
    cy.visit("http://localhost:3000/sandbox");

    cy.get("button").click();
  });
});
