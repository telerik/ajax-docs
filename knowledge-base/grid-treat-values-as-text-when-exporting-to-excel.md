---
title: Treat values as Text when Exporting to Excel
description: Set the DataFormatString property of the GridColumn to make RadGrid specify the cell data type as Text.
type: how-to
page_title: Treat values as Text when Exporting to Excel - RadGrid
slug: grid-treat-values-as-text-when-exporting-to-excel
res_type: kb
---

## DESCRIPTION

Set the **DataFormatString** property of the `GridColumn` to make RadGrid specify the cell data type as Text.

When exporting to Excel, RadGrid will set the Excel's Cell value according to the original values. However, Microsoft Office Excel has a smart functionality that will automatically treat values as different Data types when the Excel document is opened. 

String values that contain only numbers will be treated as the respective Type.

Scenarios:

- String values containing only numbers **"001"** will loose their leading zeroes resulting in **"1"** in the excel.
- String values containing a few pairs of numbers e.g. **"01 01 05"** they may be treated as Dates **"01/01/2005"** in excel.


## SOLUTION

To ensure that the String values will be treated as Text, set the DataFormatString property of the `GridColumn` to **{0:@}**, where the **@** sign will indicate that the value is of type text.

````ASP.NET
<telerik:GridBoundColumn DataFormatString="{0:@}">
````

## See Also

- [Leading Zero's - Export to Excel](https://www.telerik.com/forums/leading-zero-s---export-to-excel#4519284)
- [Exporting grid to excel](https://www.telerik.com/forums/exporting-grid-to-excel-450744f95856#4390404)

