# Baseline: original automation recordings

Run started: 14 November 2026, 23:05:10 (Asia/Singapore).

Runner totals: **45 passed, 11 failed, 0 pending, 56 total**.

Of the runner passes, **44 contain recorded commands**. `TC_LA01` has zero commands and its pass is an empty recording, not verified coverage.

## Environment and method

- Target: https://www.saucedemo.com/
- Windows, installed Chrome 156.0.8078.82 in headless mode.
- Selenium SIDE Runner 4.1.0-beta.3, Selenium WebDriver 4.52.0, Node.js 24.22.1.
- One worker. Element lookup timeout: 15 seconds. Per-recording timeout: 60 seconds. No automatic retries.
- The unchanged Selenium SIDE Runner engine was invoked through Jest's programmatic API from a temporary directory. The packaged CLI ignored its configuration arguments here, and Jest excluded the engine while it was under node_modules. No runner test-engine files or recorded commands were edited.
- The project's default suite is empty. The runner falls back to iterating all 56 project recordings.
- Original SIDE project SHA-256: `207dcc6b103a3ecd7fe4c3cd6ab6ff299374086eda4af2816aee248992398405`.

## What the results establish

The source contains 935 interaction/navigation commands and no assertion or verification commands. A playback pass means the recorded commands completed without a runner error. It does not establish that login errors, authorization, product content, cart behavior, quantities, or ratings meet their expected results. Existing manual test statuses were not changed.

`TC_PA01` records login and logout but does not attempt a protected URL after logout. `TC_PA02` records login and logout but does not invoke browser Back. These recordings therefore do not automate their named protection checks.

## Playback failures

### TC_PA02

The runner reported:

```text
Error: Operation timed out during click:css=*[data-test="logout-sidebar-link"]:
    at Timeout._onTimeout (<workspace>\work\automation-run\node_modules\@seleniumhq\side-runtime\src\playback-tree\command-node.ts:187:13)
    at listOnTimeout (node:internal/timers:685:17)
    at processTimers (node:internal/timers:618:7)
```

[Failure screenshot](Failure-Screenshots/TC_PA02_1794668765624.png)

The recorded command log timed out while clicking `css=*[data-test="logout-sidebar-link"]`. The captured page shows the inventory with the side menu closed. This is evidence of a playback failure; it does not establish an application authorization defect.

### TC_PQ01

The runner reported:

```text
Error: Operation timed out during click:css=*[data-test="back-to-products"]:
    at Timeout._onTimeout (<workspace>\work\automation-run\node_modules\@seleniumhq\side-runtime\src\playback-tree\command-node.ts:187:13)
    at listOnTimeout (node:internal/timers:685:17)
    at processTimers (node:internal/timers:618:7)
```

[Failure screenshot](Failure-Screenshots/TC_PQ01_1794668819014.png)

### TC_PQ02

The runner reported:

```text
Error: Operation timed out during click:css=*[data-test="back-to-products"]:
    at Timeout.<anonymous> (<workspace>\work\automation-run\node_modules\@seleniumhq\side-runtime\src\playback-tree\command-node.ts:187:13)
    at listOnTimeout (node:internal/timers:685:17)
    at processTimers (node:internal/timers:618:7)
```

[Failure screenshot](Failure-Screenshots/TC_PQ02_1794668835629.png)

### TC_PQ03

The runner reported:

```text
Error: Operation timed out during click:css=*[data-test="inventory-item-sauce-labs-bike-light-img"]:
    at Timeout._onTimeout (<workspace>\work\automation-run\node_modules\@seleniumhq\side-runtime\src\playback-tree\command-node.ts:187:13)
    at listOnTimeout (node:internal/timers:685:17)
    at processTimers (node:internal/timers:618:7)
```

[Failure screenshot](Failure-Screenshots/TC_PQ03_1794668857188.png)

### TC_PQ04

The runner reported:

```text
Error: Operation timed out during click:css=*[data-test="back-to-products"]:
    at Timeout._onTimeout (<workspace>\work\automation-run\node_modules\@seleniumhq\side-runtime\src\playback-tree\command-node.ts:187:13)
    at listOnTimeout (node:internal/timers:685:17)
    at processTimers (node:internal/timers:618:7)
```

[Failure screenshot](Failure-Screenshots/TC_PQ04_1794668873750.png)

### TC_PQ05

The runner reported:

```text
Error: Operation timed out during click:css=*[data-test="back-to-products"]:
    at Timeout._onTimeout (<workspace>\work\automation-run\node_modules\@seleniumhq\side-runtime\src\playback-tree\command-node.ts:187:13)
    at listOnTimeout (node:internal/timers:685:17)
    at processTimers (node:internal/timers:618:7)
```

[Failure screenshot](Failure-Screenshots/TC_PQ05_1794668890519.png)

### TC_PB01

The runner reported:

```text
Error: Operation timed out during click:css=*[data-test="remove"]:
    at Timeout._onTimeout (<workspace>\work\automation-run\node_modules\@seleniumhq\side-runtime\src\playback-tree\command-node.ts:187:13)
    at listOnTimeout (node:internal/timers:685:17)
    at processTimers (node:internal/timers:618:7)
```

[Failure screenshot](Failure-Screenshots/TC_PB01_1794668907104.png)

### TC_PB02

The runner reported:

```text
Error: Operation timed out during click:css=*[data-test="add-to-cart"]:
    at Timeout.<anonymous> (<workspace>\work\automation-run\node_modules\@seleniumhq\side-runtime\src\playback-tree\command-node.ts:187:13)
    at listOnTimeout (node:internal/timers:685:17)
    at processTimers (node:internal/timers:618:7)
```

[Failure screenshot](Failure-Screenshots/TC_PB02_1794668923687.png)

### TC_PB03

The runner reported:

```text
Error: Operation timed out during click:css=*[data-test="add-to-cart"]:
    at Timeout.<anonymous> (<workspace>\work\automation-run\node_modules\@seleniumhq\side-runtime\src\playback-tree\command-node.ts:187:13)
    at listOnTimeout (node:internal/timers:685:17)
    at processTimers (node:internal/timers:618:7)
```

[Failure screenshot](Failure-Screenshots/TC_PB03_1794668950360.png)

### TC_PB04

The runner reported:

```text
Error: Operation timed out during click:css=*[data-test="add-to-cart"]:
    at Timeout._onTimeout (<workspace>\work\automation-run\node_modules\@seleniumhq\side-runtime\src\playback-tree\command-node.ts:187:13)
    at listOnTimeout (node:internal/timers:685:17)
    at processTimers (node:internal/timers:618:7)
```

[Failure screenshot](Failure-Screenshots/TC_PB04_1794668967068.png)

### TC_PB05

The runner reported:

```text
Error: Operation timed out during click:css=*[data-test="remove"]:
    at Timeout._onTimeout (<workspace>\work\automation-run\node_modules\@seleniumhq\side-runtime\src\playback-tree\command-node.ts:187:13)
    at listOnTimeout (node:internal/timers:685:17)
    at processTimers (node:internal/timers:618:7)
```

[Failure screenshot](Failure-Screenshots/TC_PB05_1794668983648.png)

## All recording results

| Recording | Commands | Runner result | Interpretation |
| --- | ---: | --- | --- |
| TC_LA02 | 6 | passed | Commands completed; no assertions |
| TC_LA01 | 0 | passed | Empty recording; no coverage |
| TC_LA03 | 15 | passed | Commands completed; no assertions |
| TC_LA04 | 15 | passed | Commands completed; no assertions |
| TC_LA05 | 15 | passed | Commands completed; no assertions |
| TC_LA06 | 14 | passed | Commands completed; no assertions |
| TC_LA09 | 14 | passed | Commands completed; no assertions |
| TC_LA10 | 11 | passed | Commands completed; no assertions |
| TC_LA11 | 4 | passed | Commands completed; no assertions |
| TC_LA12 | 11 | passed | Commands completed; no assertions |
| TC_LA13 | 9 | passed | Commands completed; no assertions |
| TC_LA14 | 15 | passed | Commands completed; no assertions |
| TC_LO01 | 16 | passed | Commands completed; no assertions |
| TC_LO02 | 16 | passed | Commands completed; no assertions |
| TC_LO03 | 16 | passed | Commands completed; no assertions |
| TC_PA01 | 16 | passed | Commands completed; no assertions |
| TC_LA07 | 14 | passed | Commands completed; no assertions |
| TC_LA08 | 14 | passed | Commands completed; no assertions |
| TC_LO04 | 17 | passed | Commands completed; no assertions |
| TC_LO05 | 16 | passed | Commands completed; no assertions |
| TC_PA02 | 15 | failed | Playback failure; inspect log |
| TC_PD01 | 16 | passed | Commands completed; no assertions |
| TC_PD02 | 14 | passed | Commands completed; no assertions |
| TC_PD03 | 14 | passed | Commands completed; no assertions |
| TC_PD04 | 14 | passed | Commands completed; no assertions |
| TC_PD05 | 14 | passed | Commands completed; no assertions |
| TC_PD06 | 14 | passed | Commands completed; no assertions |
| TC_PD07 | 14 | passed | Commands completed; no assertions |
| TC_PD08 | 14 | passed | Commands completed; no assertions |
| TC_PD09 | 14 | passed | Commands completed; no assertions |
| TC_PD10 | 14 | passed | Commands completed; no assertions |
| TC_PD11 | 14 | passed | Commands completed; no assertions |
| TC_PD12 | 14 | passed | Commands completed; no assertions |
| TC_PD13 | 14 | passed | Commands completed; no assertions |
| TC_PD014 | 14 | passed | Commands completed; no assertions |
| TC_PD15 | 14 | passed | Commands completed; no assertions |
| TC_PD16 | 14 | passed | Commands completed; no assertions |
| TC_PD17 | 14 | passed | Commands completed; no assertions |
| TC_PD019 | 14 | passed | Commands completed; no assertions |
| TC_PD18 | 14 | passed | Commands completed; no assertions |
| TC_PD20 | 14 | passed | Commands completed; no assertions |
| TC_PQ01 | 32 | failed | Playback failure; inspect log |
| TC_PQ02 | 32 | failed | Playback failure; inspect log |
| TC_PQ03 | 32 | failed | Playback failure; inspect log |
| TC_PQ04 | 32 | failed | Playback failure; inspect log |
| TC_PQ05 | 32 | failed | Playback failure; inspect log |
| TC_PB01 | 37 | failed | Playback failure; inspect log |
| TC_PB02 | 15 | failed | Playback failure; inspect log |
| TC_PB03 | 37 | failed | Playback failure; inspect log |
| TC_PB04 | 23 | failed | Playback failure; inspect log |
| TC_PB05 | 37 | failed | Playback failure; inspect log |
| TC_RS01 | 15 | passed | Commands completed; no assertions |
| TC_RS02 | 15 | passed | Commands completed; no assertions |
| TC_RS04 | 15 | passed | Commands completed; no assertions |
| TC_RS05 | 15 | passed | Commands completed; no assertions |
| TC_RS03 | 15 | passed | Commands completed; no assertions |

## Artifacts

- [Full runner JSON](results.json), with local workspace paths redacted.
- [Command execution log](execution.log), with local workspace paths redacted.
- Failure screenshots are linked above.

Runner reference: [Selenium IDE command-line runner](https://www.selenium.dev/selenium-ide/docs/en/introduction/command-line-runner).
