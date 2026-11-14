# Screenshot evidence

Captured on 14 November 2026 using the current https://www.saucedemo.com/ site in the ChatGPT in-app desktop browser. Most images reuse the existing captures. Five product-detail images were recaptured before publication to replace clipped screenshots; the automation suite was not rerun.

| Test case | Screenshots |
| --- | --- |
| TC_LA03 | [Successful Login](TC_LA03_Successful_Login.png) |
| TC_LA04 | [Locked Out User Error](TC_LA04_Locked_Out_User_Error.png) |
| TC_LA09 | [Invalid Username Error](TC_LA09_Invalid_Username_Error.png) |
| TC_LA10 | [Invalid Password Error](TC_LA10_Invalid_Password_Error.png) |
| TC_LA11 | [Both Fields Empty Error](TC_LA11_Both_Fields_Empty_Error.png) |
| TC_LA12 | [Username Required Error](TC_LA12_Username_Required_Error.png) |
| TC_LA13 | [Password Required Error](TC_LA13_Password_Required_Error.png) |
| TC_LO01 | [Successful Logout](TC_LO01_Successful_Logout.png) |
| TC_PA01 | [Protected URL After Logout](TC_PA01_Protected_URL_After_Logout.png) |
| TC_PA02 | [Browser Back After Logout](TC_PA02_Browser_Back_After_Logout.png) |
| TC_PD01 | [Product Names Standard User](TC_PD01_Product_Names_Standard_User.png) |
| TC_PD02 | [Product Names Problem User](TC_PD02_Product_Names_Problem_User.png) |
| TC_PD03 | [Product Names Performance Glitch User](TC_PD03_Product_Names_Performance_Glitch_User.png) |
| TC_PD04 | [Product Names Error User](TC_PD04_Product_Names_Error_User.png) |
| TC_PD05 | [Product Names Visual User](TC_PD05_Product_Names_Visual_User.png) |
| TC_PD06 | [Product Descriptions Standard User](TC_PD06_Product_Descriptions_Standard_User.png) |
| TC_PD07 | [Product Descriptions Problem User](TC_PD07_Product_Descriptions_Problem_User.png) |
| TC_PD08 | [Product Descriptions Performance Glitch User](TC_PD08_Product_Descriptions_Performance_Glitch_User.png) |
| TC_PD09 | [Product Descriptions Error User](TC_PD09_Product_Descriptions_Error_User.png) |
| TC_PD10 | [Product Descriptions Visual User](TC_PD10_Product_Descriptions_Visual_User.png) |
| TC_PD15 | [Product Prices After Reload](TC_PD15_Product_Prices_After_Reload.png) / [Product Prices Before Reload](TC_PD15_Product_Prices_Before_Reload.png) |
| TC_PD17 | [Incorrect Product Images Problem User](TC_PD17_Incorrect_Product_Images_Problem_User.png) |
| TC_PD20 | [Incorrect Product Images Visual User](TC_PD20_Incorrect_Product_Images_Visual_User.png) |
| TC_PQ01 | [Missing Quantity Controls Standard User](TC_PQ01_Missing_Quantity_Controls_Standard_User.png) |
| TC_PQ02 | [Missing Quantity Controls Problem User](TC_PQ02_Missing_Quantity_Controls_Problem_User.png) |
| TC_PQ03 | [Missing Quantity Controls Performance Glitch User](TC_PQ03_Missing_Quantity_Controls_Performance_Glitch_User.png) |
| TC_PQ04 | [Missing Quantity Controls Error User](TC_PQ04_Missing_Quantity_Controls_Error_User.png) |
| TC_PQ05 | [Missing Quantity Controls Visual User](TC_PQ05_Missing_Quantity_Controls_Visual_User.png) |
| TC_PB02 | [Add To Cart After Click Problem User](TC_PB02_Add_To_Cart_After_Click_Problem_User.png) / [Add To Cart Before Click Problem User](TC_PB02_Add_To_Cart_Before_Click_Problem_User.png) |
| TC_PB04 | [Add To Cart After Click Error User](TC_PB04_Add_To_Cart_After_Click_Error_User.png) / [Add To Cart Before Click Error User](TC_PB04_Add_To_Cart_Before_Click_Error_User.png) |
| TC_RS01 | [Missing Product Ratings Standard User](TC_RS01_Missing_Product_Ratings_Standard_User.png) |
| TC_RS02 | [Missing Product Ratings Problem User](TC_RS02_Missing_Product_Ratings_Problem_User.png) |
| TC_RS03 | [Missing Product Ratings Performance Glitch User](TC_RS03_Missing_Product_Ratings_Performance_Glitch_User.png) |
| TC_RS04 | [Missing Product Ratings Error User](TC_RS04_Missing_Product_Ratings_Error_User.png) |
| TC_RS05 | [Missing Product Ratings Visual User](TC_RS05_Missing_Product_Ratings_Visual_User.png) |

## Interpretation

- `TC_LA11`: both empty fields produce only "Username is required", which differs from the BRD combined-field message.
- `TC_PD17` and `TC_PD20`: incorrect product images were captured.
- `TC_PB02` and `TC_PB04`: clicking Add to cart for Sauce Labs Bolt T-Shirt left the button and cart unchanged.
- `TC_PD15`: backpack price changed from $58.54 before reload to $96.77 after reload.
- Product names and descriptions contain programming-themed copy. Screenshots alone do not establish that this copy is incorrect.
- Quantity controls and product ratings are not specified in the supplied login/logout BRD. Their screenshots show absence, but this is not automatically a BRD defect.
- Some files intentionally reuse a capture for multiple test cases.
