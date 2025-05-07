---
title: Sorting RadDropDownList Numerically by Value
description: Learn how to sort items in a RadDropDownList numerically by their values using code-behind logic in ASP.NET AJAX.
type: how-to
page_title: Sorting RadDropDownList Items by Numeric Value in ASP.NET AJAX
slug: dropdownlist-sorting-numerically-by-value
tags: asp.net ajax, dropdownlist, sorting, numeric, code-behind
res_type: kb
ticketid: 1686740
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadDropDownList for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to sort the items of a [RadDropDownList](https://docs.telerik.com/devtools/aspnet-ajax/controls/dropdownlist/overview) numerically based on their `Value` property instead of the `Text` property. By default, the control sorts items by `Text`. Is there a way to sort the RadDropDownList by numeric values programmatically?

This knowledge base article also answers the following questions:

- How can I sort RadDropDownList items by value in ASP.NET AJAX?
- Is it possible to perform numeric sorting on RadDropDownList?
- How to sort RadDropDownList using code-behind?

## Solution

To sort the RadDropDownList items numerically by their `Value`, you can perform custom sorting in the code-behind. The following example demonstrates how to achieve this:

### Code Example

````
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        // Define RadDropDownList items
        List<DropDownListItem> tourItems = new List<DropDownListItem>
        {
            new DropDownListItem("Alps Tour", "100"),
            new DropDownListItem("Desert Safari", "25"),
            new DropDownListItem("Island Escape", "7"),
            new DropDownListItem("Mountain Hike", "50"),
            new DropDownListItem("City Lights", "300")
        };

        // Sort by Value numerically
        List<DropDownListItem> sortedItems = tourItems.OrderBy(item => int.Parse(item.Value)).ToList();

        // Clear existing items and add sorted items
        RadDropDownList1.Items.Clear();
        foreach (DropDownListItem item in sortedItems)
        {
            RadDropDownList1.Items.Add(item);
        }
    }
}
````

Explanation

1. **Sorting Items**: The code uses LINQ to sort the items based on their numeric `Value`. The `int.Parse` method is used to ensure the sorting is numerical rather than alphabetical.
2. **Re-adding Items**: After sorting, the existing items are cleared using `RadDropDownList1.Items.Clear()`. The sorted items are then added back to the control.

Notes

- Ensure that all `Value` properties can be parsed into integers. If the values are non-integer, adjust the parsing logic accordingly.
- This approach is ideal when you need to customize sorting behavior for RadDropDownList items.

## See Also

- [RadDropDownList Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/dropdownlist/overview)
- [RadComboBox vs RadDropDownList](https://docs.telerik.com/devtools/aspnet-ajax/controls/dropdownlist/dropdownlist-vs-radcombobox)
- [Sorting Items in RadComboBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
