# DECISIONS — Week 11 EPR Shadow Guard

## Session 1 — Packet-before-code
- Selected exact Blueprint slice: EPR Shadow Guard (ADVERSARY, Condition 6).
- Chose free, static fictional-data implementation to avoid storing real people’s information.
- Chose Dragon Stack: simulated IoT weight feed + local ML anomaly indicator + fictional geodata.
- Rejected automatic recycling certification and real collector profiles.
- **Next first move:** implement a small claims-review interface with an explicit evidence boundary; do not describe simulated signals as verification.

## SESSION CLOSE (to complete after each real work session)
- What changed:
- Test result:
- Known unresolved issues:
- Next session's first move:
- Commit hash and push:

## Session 2 — Actual mechanical bug reproduction and fix
- **Bug discovered during test:** The paper receipt `RC-103` showed only `BLOCKED` when its recovery claim lacked downstream proof. Although the written reason mentioned paper review, the status failed to expose that nondigital evidence still had a human-review route, potentially suggesting exclusion.
- **Failing test before fix:** `paper evidence with blocked recovery claim still exposes its human review queue`: expected `BLOCKED · PAPER REVIEW PENDING`, received `BLOCKED` (8 pass, 1 fail). Evidence saved in `docs/mechanical-test-before-fix.txt`.
- **Fix:** Keep the recycling claim blocked and separately expose the paper-review pending state in the visible status label. This never approves recycling.
- **Retest:** 9 tests passing after fix.
- **Next session's first move:** Publish the first/second real Vercel deployments, take screenshots, run the fresh-chat Persona Test, fix its worst demonstrated confusion, then push real commits.
- **Honesty note:** A local test/fix cycle has occurred; no production redeployment is claimed at this point.

## Session 3 — October 21, 2026 — Mechanical test and production redeployment

- Mechanical test: 9 passed, 0 failed.
- Test evidence: docs/mechanical-test-after-fix.txt.
- Evidence commit: 683e01e81787a94c083170b6559abfd14a72b7a0.
- Second production deployment: https://week11-epr-shadow-guard-5plkbdr1m-ssofia1.vercel.app
- Vercel deployment ID: dpl_AfxrGzELZCr7kgyLP3MBPSXTu6eS.
- Deployment state: READY.
- Production alias: https://week11-epr-shadow-guard.vercel.app
- Production HTML retrieved using authenticated Vercel CLI.
- Limitation: Browser interactions and independent Persona Test have not yet been validated.
- Deployment Protection remains enabled.
- ADVERSARY decision: Preserve the existing evidence guards rather than adding unvalidated automation.
- Rejected alternative: Treating simulated IoT, ML or geodata as proof of recycling.
- Risk: Unsupported environmental claims or exclusion of informal collectors.
- Blueprint alignment: Condition 6 — SHADOW CLAUSE.
- Next move: Verify browser access and complete independent Persona Test preparation.

## Session 4 — October 21, 2026 — Public browser interaction test

- Test environment: https://week11-epr-shadow-guard.vercel.app
- Tested record: RC-103 — Collector paper receipt — nondigital evidence.
- Test method: Manual interaction on the deployed application.
- Evidence: User-reported actual browser test and screenshot capture.
- Observed status: BLOCKED · PAPER REVIEW PENDING.
- Observed reason: Independent downstream acceptance evidence missing.
- Observed safeguard: Nondigital paper receipt retained for human review, not automatically rejected.
- Recycling independently verified: NO.
- Result: The specific RC-103 interaction behaved as intended.
- ADVERSARY decision: Preserve the distinction between blocked recycling claims and inclusive human evidence review.
- Rejected alternative: Automatically approving recovery or excluding paper evidence.
- Limitation: This test does not validate real recycling outcomes, reviewer decisions, or worker protection.
- Blueprint alignment: Condition 6 — SHADOW CLAUSE.
- Next move: Commit the verified interaction evidence and prepare independent Persona Test materials.
