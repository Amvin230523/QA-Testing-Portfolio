# Automation results

Run started: 15 November 2026, 12:07:19 (Asia/Singapore).

**54 passed, 2 failed, 0 skipped, 56 total.** Both cart failures reproduced in a separate check.

## Changes verified

- Replaced the empty `TC_LA01` with checks for the username, password, and Login controls.
- Populated Default Suite with all 56 existing test IDs. No tests were removed or skipped.
- Used the stable parent image links for product navigation, and the Back button instead of its decorative image.
- Added explicit waits after login, logout, product navigation, and cart changes.
- Added assertions for entered credentials, login results, login-error text, password masking, and navigation state.
- `TC_PA01` now attempts the protected inventory URL after logout and checks the denial message.
- `TC_PA02` now invokes browser Back after logout and checks the denial message.
- Corrected the recording names `TC_PD014` to `TC_PD14` and `TC_PD019` to `TC_PD19`, and removed the accidental leading space from the performance-glitch username.
- Added a portable npm runner pinned to the tested Selenium version. It preserves nonzero exits for failed tests.

## Browser and runner diagnosis

Chrome 156 intermittently reported successful WebDriver clicks without delivering the expected click event. The same sequence completed in Edge 157. [Archived Chrome baseline](../../Archive/2026-11-14/README.md)

The official runner CLI also failed to apply its Jest configuration here. `run-tests.cjs` invokes the unchanged official engine through Jest, and copies it outside node_modules because Jest excludes engine tests in that location. Generated engine files and caches are ignored by Git.

## Remaining application failures

### TC_PB02: problem_user Add to cart

The recording clicks the Backpack image link. Sauce Demo opens the Fleece Jacket detail page for this account. Clicking Add to cart leaves the button unchanged and the cart empty; the expected Remove state never appears. This behavior repeated in the separate recheck.

[Failure screenshot](Failure-Screenshots/TC_PB02_Cart_State_Failure.png)

### TC_PB04: error_user Remove

Adding the Backpack changes the button to Remove and the cart badge to 1. Clicking Remove does not restore Add to cart; the screenshot still shows Remove and the cart badge remains 1. This behavior repeated in the separate recheck.

[Failure screenshot](Failure-Screenshots/TC_PB04_Cart_State_Failure.png)

These failures were retained. Fixing the external Sauce Demo application is outside this repository.

## Coverage limits

A pass only covers the recorded commands and assertions. Product-name correctness, descriptions, prices, image correctness, quantities, and ratings are not fully verified by the current assertions. The quantity and rating recordings now navigate reliably but still do not validate those features; neither feature is specified in the supplied login/logout BRD.

`TC_LA11` checks the observed "Username is required" message for empty inputs. This retains a known wording difference from the BRD combined-field example; a passing script does not close that requirement discrepancy. Existing manual workbook statuses remain unchanged.

## Validation evidence

The fixed project has 1383 commands, including 136 explicit assertion commands. Per-recording counts are in the CSV below. A negative-control copy changed the expected locked-out error to a deliberately wrong message: the assertion failed. The portfolio source was not mutated for that check.

The complete repaired suite ran in headless Edge 157.0.4341.60 with Node.js 24.22.1 and Selenium SIDE Runner 4.1.0-beta.3. One worker, 15-second element timeout, 60-second per-test timeout, and no automatic retries. The portable runner was separately checked with one passing recording and the two reproduced failures.

- [Full results JSON](results.json)
- [Full command log](execution.log)
- [Per-recording CSV](recording-results.csv)
- [Run metadata and source hashes](run-metadata.json)
- [Independent cart recheck JSON](cart-recheck.json) and [log](cart-recheck.log)
- [Negative-control result](negative-control.json)

Local workspace paths have been redacted from exported logs/results. The source SHA-256 uses the LF file stored in Git; metadata also records the local CRLF hash.

## All recording results

| Recording | Commands | Explicit assertions | Result |
| --- | ---: | ---: | --- |
| TC_LA02 | 8 | 2 | passed |
| TC_LA01 | 4 | 2 | passed |
| TC_LA03 | 17 | 1 | passed |
| TC_LA04 | 17 | 1 | passed |
| TC_LA05 | 17 | 1 | passed |
| TC_LA06 | 16 | 1 | passed |
| TC_LA09 | 16 | 1 | passed |
| TC_LA10 | 13 | 1 | passed |
| TC_LA11 | 6 | 1 | passed |
| TC_LA12 | 13 | 1 | passed |
| TC_LA13 | 11 | 1 | passed |
| TC_LA14 | 16 | 1 | passed |
| TC_LO01 | 21 | 2 | passed |
| TC_LO02 | 21 | 2 | passed |
| TC_LO03 | 21 | 2 | passed |
| TC_PA01 | 25 | 4 | passed |
| TC_LA07 | 16 | 1 | passed |
| TC_LA08 | 16 | 1 | passed |
| TC_LO04 | 22 | 2 | passed |
| TC_LO05 | 21 | 2 | passed |
| TC_PA02 | 26 | 4 | passed |
| TC_PD01 | 19 | 1 | passed |
| TC_PD02 | 16 | 1 | passed |
| TC_PD03 | 16 | 1 | passed |
| TC_PD04 | 16 | 1 | passed |
| TC_PD05 | 16 | 1 | passed |
| TC_PD06 | 16 | 1 | passed |
| TC_PD07 | 16 | 1 | passed |
| TC_PD08 | 16 | 1 | passed |
| TC_PD09 | 16 | 1 | passed |
| TC_PD10 | 16 | 1 | passed |
| TC_PD11 | 16 | 1 | passed |
| TC_PD12 | 16 | 1 | passed |
| TC_PD13 | 16 | 1 | passed |
| TC_PD14 | 16 | 1 | passed |
| TC_PD15 | 16 | 1 | passed |
| TC_PD16 | 16 | 1 | passed |
| TC_PD17 | 16 | 1 | passed |
| TC_PD19 | 16 | 1 | passed |
| TC_PD18 | 16 | 1 | passed |
| TC_PD20 | 16 | 1 | passed |
| TC_PQ01 | 66 | 9 | passed |
| TC_PQ02 | 66 | 9 | passed |
| TC_PQ03 | 66 | 9 | passed |
| TC_PQ04 | 66 | 9 | passed |
| TC_PQ05 | 66 | 9 | passed |
| TC_PB01 | 75 | 7 | passed |
| TC_PB02 | 21 | 2 | failed |
| TC_PB03 | 75 | 7 | passed |
| TC_PB04 | 41 | 4 | failed |
| TC_PB05 | 75 | 7 | passed |
| TC_RS01 | 20 | 2 | passed |
| TC_RS02 | 20 | 2 | passed |
| TC_RS04 | 20 | 2 | passed |
| TC_RS05 | 20 | 2 | passed |
| TC_RS03 | 20 | 2 | passed |
