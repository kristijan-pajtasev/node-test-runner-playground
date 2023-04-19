import {addNumbers} from "./helpers.mjs";
import test from 'node:test';
import assert from 'node:assert';

test("adds two numbers", function() {
  assert.strictEqual(addNumbers(1, 1), 2);
  assert.strictEqual(addNumbers(1, 2), 3);
})

test("adds two numbers", function() {
  assert.notEqual(addNumbers(1, 1), 3);
})