# QA Testing Portfolio

Arvin Isturis's Sauce Demo testing portfolio, containing business requirements, manual test cases, Selenium IDE recordings, and screenshot evidence.

## Sauce Demo testing

| Folder | Contents |
| --- | --- |
| [01-Requirements](SauceDemo-Testing/01-Requirements/) | [Login functionality BRD](SauceDemo-Testing/01-Requirements/Login-Functionality-BRD.pdf) |
| [02-Manual-Testing](SauceDemo-Testing/02-Manual-Testing/) | [Excel test cases](SauceDemo-Testing/02-Manual-Testing/Test-Cases.xlsx), with links to separate PNG evidence |
| [03-Automation-Testing](SauceDemo-Testing/03-Automation-Testing/) | [Selenium IDE project](SauceDemo-Testing/03-Automation-Testing/Selenium-IDE-Tests.side), containing 56 recorded test flows |
| [04-Test-Evidence](SauceDemo-Testing/04-Test-Evidence/) | [Evidence index](SauceDemo-Testing/04-Test-Evidence/README.md): 38 PNGs for 35 test cases |
| [05-Bug-Reports](SauceDemo-Testing/05-Bug-Reports/) | Reserved for standalone bug reports; none have been added yet |

## Review the manual tests

1. Download this repository using **Code > Download ZIP**, then extract the complete folder.
2. Open `SauceDemo-Testing/02-Manual-Testing/Test-Cases.xlsx` in desktop Excel.
3. Use the **Evidence** column in **US TC** or the **Evidence** worksheet to open the PNG files in `04-Test-Evidence`.

Keep the folder structure intact so relative screenshot links continue to work. GitHub's file preview does not execute Excel hyperlinks; the evidence index above provides browser-friendly links.

## Review the automation

Open `SauceDemo-Testing/03-Automation-Testing/Selenium-IDE-Tests.side` in Selenium IDE. The supplied project contains 56 recorded flows against `https://www.saucedemo.com/`. Its commands perform navigation and interactions; no assertion or verification commands are present. The recordings have not been rerun or modified for this portfolio.

## Scope and evidence notes

- The BRD covers login and logout and references the older `/v1` site. The manual workbook and screenshot captures use the current Sauce Demo site.
- Existing test results and browser status columns are preserved. Screenshot capture used the ChatGPT in-app browser and does not establish Edge, Chrome, Firefox, Safari, or mobile compatibility.
- Evidence was captured on 14 November 2026. Five clipped product-detail images were recaptured before publication. Some screenshots are shared by multiple cases; before/after pairs are included for the cart and price checks.
- Product quantity and rating checks are outside the supplied BRD. Programming-themed names and descriptions require an agreed content specification before being classified as defects.
- Hidden reporting-template sheets contain pre-existing broken references. They were preserved, and their summaries should not be treated as validated test metrics.

This portfolio is an educational testing exercise on Sauce Demo. Test credentials refer to the site's public demonstration accounts.
