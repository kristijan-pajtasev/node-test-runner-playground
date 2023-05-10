import {it, describe} from 'node:test';
import assert from 'node:assert';

describe("Assertion", () => {

  describe("equality", () => {
    it("equal", () => {
      assert.equal(1, "1");
    });

    it("not equal", () => {
      assert.notEqual(1, 2);
    });

    it("strict equal", () => {
      assert.strictEqual(1, 1);
    });

    it("strict not equal", () => {
      assert.notStrictEqual(1, "1");
    });

    it("deep equal", () => {
      const result = { a: 1, b: { c: 2 }};
      const expected = { a: 1, b: { c: 2 }};
      assert.deepStrictEqual(result, expected);
    });

    it("not deep equal", () => {
      const result = { a: 1, b: { c: 2 }};
      const expected = { a: 1, b: { c: 3 }};
      assert.notDeepStrictEqual(result, expected);
    });

    // deepStrictEqual notDeepStrictEqual

  })
})