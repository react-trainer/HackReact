describe("check for correct rendering of prompt", function() {
  it("visits the sandbox page and testS for correct content to be rendering", function() {
    cy.visit("http://localhost:3000/sandbox");
    cy.contains(
      "This is the code sandbox where you can flex those new React skills! Change anything in the editor and see it rendered in real time on the right hand side."
    );
  });
});
