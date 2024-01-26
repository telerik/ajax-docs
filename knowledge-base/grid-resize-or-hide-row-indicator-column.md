---
title: Resize or hide row indicator column
description: Learn how to resize or hide the row indicator column
type: how-to
page_title: Resize or hide row indicator column. | RadGrid
slug: grid-resize-or-hide-row-indicator-column
res_type: kb
tags: grid, row indicator column, resize column, hide column
ticketid: 1638098
---

## Environment

<table>
    <tr>
        <td>Product</td>
        <td>Telerik WebForms Grid for ASP.NET AJAX</td>
    </tr>
</table>

## DESCRIPTION

When the **AllowRowResize** property of the Grid is set to ***true***, RadGrid automatically a column of type **GridRowIndicatorColumn**, to make it easier for users to resize rows. 
Depending on certain conditions, one might want to reduce its width or hide it.

## SOLUTION

If you wish to resize the column, you can utilize the following CSS rule: 

````CSS
<style>
    .RadGrid col:first-child {
        width: 5px !important;
    }
</style>
````

If you wish to completely hide the column, you can do so by setting the **ShowRowIndicatorColumn** property to ***false***:

````ASPX
<Resizing AllowColumnResize="true" AllowRowResize="true" ShowRowIndicatorColumn="false" />
````

  