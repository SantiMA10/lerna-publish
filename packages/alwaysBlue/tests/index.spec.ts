import { alwaysBlue } from "../src/alwaysBlue";

describe("index", () => {
  describe("#alwaysBlue", () => {
    it("should return blue", () => {
      expect(alwaysBlue()).toEqual("blue");
    });
  });
});
