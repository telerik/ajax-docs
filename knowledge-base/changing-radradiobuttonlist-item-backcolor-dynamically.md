---
title: Setting Background Color for RadRadioButtonList Items Based on Database Values
description: Learn how to set the background color of RadRadioButtonList items based on color codes retrieved from a database.
type: how-to
page_title: Changing RadRadioButtonList Item BackColor Dynamically
meta_title: Changing RadRadioButtonList Item BackColor Dynamically
slug: changing-radradiobuttonlist-item-backcolor-dynamically
tags: ui-for-aspnet-ajax,radradiobuttonlist,background-color,client-side,onload,tooltip
res_type: kb
ticketid: 1709902
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> UI for ASP.NET AJAX RadRadioButtonList </td>
</tr>
<tr>
<td> Version </td>
<td> All </td>
</tr>
</tbody>
</table>

## Description

I want to set the background color of each RadRadioButtonList item dynamically based on a color code retrieved from a database. Each item in the RadRadioButtonList has a `plannedRefNo` value, which maps to a color code stored in the database. I tried using the `OnItemDataBound` event but couldn't access the background color property or color codes effectively within the event arguments.

This knowledge base article also answers the following questions:

- How to dynamically style RadRadioButtonList items?
- How to set background color for RadRadioButtonList items using database values?
- How to implement client-side styling for RadRadioButtonList?

## Solution

To achieve dynamic background colors for RadRadioButtonList items, use one of the following solutions:

### Solution 1: Use the `DataToolTipField` and `OnLoad` Client-Side Event

1. Assign the color code from the database to the `Tooltip` property of each item.
2. Use the `OnLoad` client-side event to set the background color based on the tooltip value.

````ASP.NET
<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server">
    <DataBindings DataValueField="plannedRefNo" DataTextField="farmDetails" DataToolTipField="ColorCode" />
    <ClientEvents OnLoad="onLoad" />
</telerik:RadRadioButtonList>
````

````JavaScript
function onLoad(sender, args) {
    let items = sender.get_items();

    items.forEach(item => {
        let colorCode = item.get_toolTip();
        item._element.style.backgroundColor = colorCode;
    });
}
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadRadioButtonList1.DataSource = GetPlannedFarmData();
        RadRadioButtonList1.DataBind();
    }
}

private DataTable GetPlannedFarmData()
{
    DataTable dt = new DataTable();

    dt.Columns.Add("plannedRefNo", typeof(string));
    dt.Columns.Add("farmDetails", typeof(string));
    dt.Columns.Add("ColorCode", typeof(string)); // Hex or color name

    dt.Rows.Add("REF001", "Green Valley Farm", "#90EE90");
    dt.Rows.Add("REF002", "Blue River Farm", "#ADD8E6");
    dt.Rows.Add("REF003", "Sunset Acres", "#FFA07A");
    dt.Rows.Add("REF004", "Golden Field Farm", "#FFD700");
    dt.Rows.Add("REF005", "Red Barn Farm", "#FFB6C1");

    return dt;
}
````

### Solution 2: Use Two Related Tables

1. Create a separate table that contains `PlannedRefNo` and `ColorCode`.
2. Use the `OnLoad` client-side event as described above.
3. Match the `PlannedRefNo` from the two tables to set the correct background color.

The implementation is similar to Solution 1, except you reference the values from the second table.

## See Also

- [RadRadioButtonList Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/radiobuttonlist/client-side-programming/events/onload#onload)
- [UI for ASP.NET AJAX RadRadioButtonList Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/radiobuttonlist/overview)
