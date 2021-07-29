---
title: Create custom aggregate functions
description: Create custom aggregate functions - RadGrid
type: how-to
page_title: Create custom aggregate functions
slug: grid-create-custom-aggregate-functions
res_type: kb
---

## DESCRIPTION

Create custom aggregate functions for the page data, and differentiate between columns, total footers and group footers.

## SOLUTION

To implement custom footer aggregates, you need the following:

1. set the **Aggregate** of the **column** to **Custom**
2. handle the **CustomAggregate event **of the grid
3. check the **item type** that fired the event (**GridGroupFooterItem** or **GridFooterItem**)
4. check the column that fired the event
5. loop through the **corresponding grid items collection** to implement the desired aggregate (**all grid items** for the **total footer** and the **child items** from the corresponding **header** for the **group footer**)


You can find an example attached below.

- [DOWNLOAD Sample](files/grid-custom-aggregate-example.zip) 

 
 