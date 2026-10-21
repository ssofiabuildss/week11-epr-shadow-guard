# EPR Shadow Guard — Week 11

Individual ADVERSARY build for Team 8's EPR-COMPLIANCE primary vacuum. A browser-only classroom simulation; not a compliance certification tool.

## Start locally
`python3 -m http.server 8000` then open `http://localhost:8000`.

## Tests
`npm test` (Node.js 20+). Tests include one reproduced-and-corrected paper-review visibility bug.

## Stack and safety
Simulated IoT scale feed + advisory local k-nearest-neighbor ML + fictional geodata. No real personal data, persistence, authentication, third-party API calls, or keys. All records fictional.

## Packet, diagrams and evidence
- `docs/PACKET.md` — required packet created before code; includes Mermaid flow and swimlane, scope, benchmark and test plan.
- `assets/mockup.svg` — visual **programmatic wireframe**; a genuine image-generated mockup still needs to be included in the final Packet.
- `docs/IMPLEMENTATION_PROMPT.md` — small increments, acceptance gates and commit/deploy plan.
- `docs/DECISIONS.md` — real local session decisions and reproduced bug.
- `docs/PERSONA_TEST_STARTER.md` — script to conduct a real fresh-chat synthetic persona test using actual screenshots.
- `docs/VIDEO_SCRIPT.md` — walk-through and reflection script.

## To complete external evidence
1. Push repository to your own GitHub account; local commits are not remote commits.
2. Deploy on Vercel twice, saving both real URLs. A local test/fix is not a redeployment.
3. Conduct the screenshot-driven Persona Test in a new chat; log the actual confusion and apply ONE new fix; push and redeploy it.
4. Generate `PACKET_Sofia_Lopez.pdf`, `PERSONA_Sofia_Lopez.pdf`, `BUILDCHAT_Sofia_Lopez.pdf` using genuine source materials and capture `DEMO_Sofia_Lopez.mp4` from the live URL.
