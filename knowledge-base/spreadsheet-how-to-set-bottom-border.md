---
title: Setting a Bottom Border on a Cell in RadSpreadsheet for ASP.NET AJAX
description: Learn how to apply a bottom border style to a cell in RadSpreadsheet for ASP.NET AJAX using the Telerik.Web.Spreadsheet.BorderStyle.
type: how-to
page_title: How to Apply a Bottom Border to a Cell in RadSpreadsheet for ASP.NET AJAX
slug: spreadsheet-how-to-set-bottom-border
tags: radspreadsheet, aspnet-ajax, border, cell, styling
res_type: kb
ticketid: 1673328
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadSpreadsheet for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>all</td>
</tr>
</tbody>
</table>

## Description
When working with RadSpreadsheet for ASP.NET AJAX, it might be necessary to visually distinguish certain cells by applying a border. Specifically, using a bottom border for a cell can help emphasize or separate content. This knowledge base article demonstrates how to set a bottom border on a cell within the RadSpreadsheet component.

This knowledge-base article also answers the following questions:
- How do I style a cell in RadSpreadsheet with a border?
- Can I apply a custom border color and size to a cell in RadSpreadsheet?
- What is the recommended way to add a bottom border to a cell in ASP.NET AJAX RadSpreadsheet?

## Solution
To set the bottom border of a cell in the RadSpreadsheet, utilize the `BorderBottom` property. This property accepts an instance of `Telerik.Web.Spreadsheet.BorderStyle`, which allows specifying the border's color and size.

Here is a step-by-step guide on how to implement this:

1. Define a new instance of `Telerik.Web.Spreadsheet.BorderStyle`.
2. Set the desired `Color` and `Size` for the border.
3. Assign this border style to the `BorderBottom` property of the target cell.

Below is an illustrative example:

```csharp
Cell firstCell = new Cell() { Index = 0, Value = "Select Date:", Bold = true };
row.AddCell(firstCell);
var borderStyle = new Telerik.Web.Spreadsheet.BorderStyle()
{
    Color = "black",
    Size = 2
};
// if the BorderTop is null, which is the default value
firstCell.BorderTop = borderStyle;
firstCell.BorderRight = borderStyle;
firstCell.BorderBottom = borderStyle;
firstCell.BorderLeft = borderStyle;
```

**Key Points:**
- `BorderBottom`: Specifies the style for the bottom border of the cell.
- `Telerik.Web.Spreadsheet.BorderStyle`: Enables customization of the border by setting its `Color` and `Size`.

By following these steps, you can easily add a bottom border to any cell in your RadSpreadsheet, enhancing the visual appeal and clarity of your spreadsheet data.

## See Also
- [RadSpreadsheet Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/spreadsheet/overview)
- [RadSpreadsheet Server-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/spreadsheet/server-side-programming/overview)
