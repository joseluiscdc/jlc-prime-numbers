const validator = require("../service/parameterValidator");

describe("validate that it only receives positive integers", () => {
  it("matches with a positive number", () => {
    expect(validator.validateParameter(7)).toEqual(true);
  });

  it("does not matches with a not positive number -7", () => {
    expect(validator.validateParameter(-7)).not.toEqual(true);
  });

  it("does not match a fraction 1/7", () => {
    expect(validator.validateParameter("1/7")).toEqual(false);
  });

  it("does not match a fraction 1/9", () => {
    expect(validator.validateParameter("1/9")).toEqual(false);
  });

  it("match a edge case", () => {
    expect(validator.validateParameter(98989959595959595959595998989)).toEqual(
      true
    );
  });
});
