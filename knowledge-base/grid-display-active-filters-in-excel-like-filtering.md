---
title: Display Active Filters in Excel-Like Filtering
description: Learn how to show the filtered columns along with their specific values above a RadGrid control dynamically.
type: how-to
page_title: Display Active Filters in Excel-Like Filtering
slug: grid-display-active-filters-in-excel-like-filtering
tags: radgrid, asp.net ajax, filtering, display, columns, values
res_type: kb
ticketid: 1672360
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I need to display which columns in a RadGrid are being filtered and what the specific filter values are for each column. The goal is to show this information in a label or a similar control above the RadGrid to let users know what filters are currently applied.

This knowledge-base article also answers the following questions:
- How can I show the active filters of a RadGrid?
- What method can I use to display the filtered columns and their values in RadGrid?
- Is it possible to list the current filters applied to a RadGrid above it?

## Solution

To display the filtered columns and their respective values above a RadGrid control, iterate through the columns, retrieve the details of the applied filters, and then display this information:
 
1. Handle the `ItemCommand` event of the RadGrid.
2. Loop through the columns to check which ones have filters applied.
3. Retrieve the selected checkbox values for each column with Excel-like filtering.

````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.HeaderContextMenuFilterCommandName)
    {
        foreach (GridColumn column in RadGrid1.MasterTableView.Columns)
        {
            string[] filterValues = column.ListOfFilterValues;

            if (filterValues != null && filterValues.Length > 0)
            {
                string columnName = column.UniqueName;
                string selectedValues = string.Join(", ", filterValues);

                // Update your display control accordingly
                Response.Write("Column: " + columnName + ", Selected Values: " + selectedValues);
            }
        }
    }
}
````

## See Also

- [RadGrid Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [Excel-like Filtering](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/filtering/excel-like-filtering/defaultcs.aspx)
