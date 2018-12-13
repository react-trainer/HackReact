describe("The Landing Page Component", () => {
  beforeEach(() => {
    console.log("Before Each!");
  });
  beforeAll(() => {
    console.log("Before All!");
  });
  afterEach(() => {
    console.log("After Each!");
  });
  afterAll(() => {
    console.log("After All!");
  });
  it("should not regress", () => {});
  it("should display circles", () => {
    expect(2 + 2).toEqual(4);
  });
});
