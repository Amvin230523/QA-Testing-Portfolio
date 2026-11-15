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

## Automation results

[Latest Edge run (54 passed, 2 failed)](Results/2026-11-15-Edge/README.md)
