# Reproduced cart issues

Observed on 15 November 2026 in headless Microsoft Edge 157.0.4341.60 against https://www.saucedemo.com/. These are external demo-application behaviors, not changes to the portfolio code. Both reproduced in the full repaired run and a separate recheck.

## TC_PB02: problem_user

1. Sign in with the public demo account `problem_user` / `secret_sauce`.
2. Click the Backpack image link.
3. Observe that the Fleece Jacket detail opens, then click Add to cart.

Expected: the selected product opens, Add to cart changes to Remove, and the cart reflects the added item.

Actual: the jacket detail opens and Add to cart remains unchanged; the cart remains empty. The automated wait for Remove times out.

[Failure screenshot](../03-Automation-Testing/Results/2026-11-15-Edge/Failure-Screenshots/TC_PB02_Cart_State_Failure.png)

## TC_PB04: error_user

1. Sign in with `error_user` / `secret_sauce`.
2. Open the Backpack detail and click Add to cart.
3. After Remove appears, click Remove.

Expected: Add to cart reappears and the item is removed from the cart.

Actual: Remove remains visible and the cart badge remains 1. The automated wait for Add to cart times out.

[Failure screenshot](../03-Automation-Testing/Results/2026-11-15-Edge/Failure-Screenshots/TC_PB04_Cart_State_Failure.png)

[Full execution report and independent recheck](../03-Automation-Testing/Results/2026-11-15-Edge/README.md)
