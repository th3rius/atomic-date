import { describe, it } from "node:test";
import assert from "node:assert";
import { AtomicDate } from "./atomic-date.js";

describe("AtomicDate", () => {
  it("should be represented as a number correctly", () => {
    const atomicDate = new AtomicDate("2026-01-11");
    assert.strictEqual(Number(atomicDate), 20260111);
  });

  it("should be represented as NaN when date is invalid", () => {
    const atomicDate = new AtomicDate("miau miau");
    // Explicitly convert to number first to verify that date depresentation
    // logic works correctly. Note that `NaN` is never equal to itself.
    assert(isNaN(Number(atomicDate)));
  });
});
