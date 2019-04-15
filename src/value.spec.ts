import { Value } from "./index";

describe("A suite", () => {
  it("contains spec with an expectation", () => {
    const v = new Value();

    expect(v.getValue()).toBe(10);
  });
});
