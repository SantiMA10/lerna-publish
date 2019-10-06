import { mayTheForce } from "../src/mayTheForce";

describe("index", () => {
  describe("#mayTheForce", () => {
    it("should return 'beWithYou'", () => {
      expect(mayTheForce()).toEqual("beWithYou");
    });
  });
});
