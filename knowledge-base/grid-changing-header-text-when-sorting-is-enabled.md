---
title: Changing Column Header Text when Sorting is Enabled
description: Changing Column Header Text when Sorting is Enabled
type: how-to
page_title: Changing Column Header Text when Sorting is Enabled - RadGrid
slug: grid-changing-header-text-when-sorting-is-enabled
res_type: kb
---


## DESCRIPTION

It is possible to get the GridHeaderItem instance during the PreRender event handler of the grid and change the text of any cell using the ***headerItem["ColumnName"].Text = "New Value"*** approach: [https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/how-to/Common/using-the--getitems-getcolumn-and-getcolumnsafe-methods#items](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/how-to/Common/using-the--getitems-getcolumn-and-getcolumnsafe-methods#items)
     
However, when the **AllowSorting** setting is enabled, changing the Text property of the cell directly breaks the sorting functionality of the column, because it clears the inner controls within the given cell.

## SOLUTION

You can use one of the following approaches to resolve the issue:  

1. In DataBinding event

    ````C#
    protected void RadGrid1_DataBinding(object sender, EventArgs e)
    {
        RadGrid1.MasterTableView.GetColumn("ShipName").HeaderText = "Success";
    }
    ````


1. In PreRender event

    ````C#
    protected void RadGrid1_PreRender(object sender, EventArgs e)
    {
        TableCell cell = RadGrid1.MasterTableView.GetHeaderCellByColumnUniqueName("ShipName");
        (cell.Controls[0] as LinkButton).Text = "Success";
    }
    ````
 
