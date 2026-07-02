import { describe, expect, it } from "vitest";
import { assertTransition } from "../src/machine.js";

describe("assertTransition", () => {
  it("allows legal moves", () => {
    expect(assertTransition("open", "screening")).toBeNull();
    expect(assertTransition("screening", "resolved")).toBeNull();
  });

  it("blocks skipping screening", () => {
    expect(assertTransition("open", "resolved")).toEqual({
      code: "illegal_transition",
      from: "open",
      to: "resolved",
    });
  });
});