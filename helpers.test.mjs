import {addNumbers} from "./helpers.mjs";
import {test, describe} from 'node:test';
import assert from 'node:assert';


describe("helpers function addNumbers", function () {
  test("adds two numbers", function () {
    assert.strictEqual(addNumbers(1, 1), 2);
    assert.strictEqual(addNumbers(1, 2), 3);
    assert.strictEqual(addNumbers(1, 3), 4);
  })

  test("throws error when first parameter invalid", function () {
    assert.throws(() => {
      addNumbers("invalid value", 2)
    }, {message: "Invalid first parameter type"});
  })

  test("throws error when second parameter invalid", function () {
    assert.throws(() => {
      addNumbers(1, "2")
    }, {message: "Invalid second parameter type"});
  })
})
