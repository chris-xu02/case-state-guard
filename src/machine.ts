export type CaseState = "open" | "screening" | "escalated" | "resolved";

const allowed: Record<CaseState, CaseState[]> = {
  open: ["screening"],
  screening: ["escalated", "resolved"],
  escalated: ["resolved"],
  resolved: [],
};

export type TransitionError = { code: "illegal_transition"; from: CaseState; to: CaseState };

export function assertTransition(
  from: CaseState,
  to: CaseState,
): TransitionError | null {
  if (!allowed[from].includes(to)) {
    return { code: "illegal_transition", from, to };
  }
  return null;
}