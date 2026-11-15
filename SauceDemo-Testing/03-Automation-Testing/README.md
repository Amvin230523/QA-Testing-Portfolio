# Running the Selenium tests

Import `Selenium-IDE-Tests.side` into Selenium IDE and run **Default Suite**, or use the tested command-line setup below.

## Command line

Prerequisites: Node.js 24.22.1 or newer and Microsoft Edge installed.

From this folder:

```sh
npm ci
npm test
```

To run a focused subset:

```sh
npm test -- "^(TC_LA01|TC_PA01|TC_PA02)$"
```

Results and failure screenshots are written to a new `Results/Edge-<UTC timestamp>/` folder. Generated local runs, driver caches, engine copies, and dependencies are ignored by Git. Reviewed run reports are stored separately in dated folders.

The full suite currently returns a nonzero exit because `TC_PB02` and `TC_PB04` reproduce Sauce Demo cart behavior for `problem_user` and `error_user`. These tests have not been disabled. A test pass is limited to its actual assertions; quantity/rating and product-content coverage is incomplete.

## Latest evidence

- [Repaired Edge run: 54 passed, 2 failed](Results/2026-11-15-Edge/README.md)
- [Original Chrome baseline: 45 passed, 11 failed](Results/2026-11-14/README.md)

The fixed suite retains all 56 original test IDs, fills the formerly empty case, adds navigation waits and assertions, and includes the missing protected-URL and browser-Back actions. The downloaded source file is unchanged; the portfolio copy contains the repairs.
