---
title: Applying a Yellow Background to a Column and Its Header in RadGrid
description: Learn how to set a yellow background color for both the header and data cells of a specific column in RadGrid for ASP.NET AJAX.
type: how-to
page_title: How to Set a Yellow Background for RadGrid Column and Header
slug: grid-yellow-background-column-header
tags: radgrid, asp.net ajax, background color, column, header
res_type: kb
ticketid: 1665545
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
<td>all</td>
</tr>
</tbody>
</table>

## Description

I want to apply a yellow background color to both the header and the data cells of a specific column in the RadGrid. How can I achieve this?

This KB article also answers the following questions:
- How can I change the background color of a RadGrid column?
- How to apply CSS styles to RadGrid columns?
- How to use ItemStyle and HeaderStyle properties in RadGrid?

## Solution

To color the "Freight" column and its header with a yellow background in RadGrid, use a combination of CSS and the `ItemStyle`/`HeaderStyle` properties. Follow the steps below to implement the solution:

1. Define a CSS class for the yellow background and apply it to the "Freight" column header through code-behind during the `ItemCreated` event.
2. Directly set the background color for the data cells using the `ItemStyle` and `HeaderStyle` properties in the ASPX markup.

### ASPX

```aspx
<style>
    .yellow-column {
        background-color: yellow !important; /* Applies the yellow background */
        background-image: none !important; /* Removes Telerik's default background-image from the column header cell */
    }
</style>

<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource" OnItemCreated="RadGrid1_ItemCreated">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                SortExpression="Freight" UniqueName="Freight">
                <ItemStyle BackColor="Yellow" />
                <HeaderStyle BackColor="Yellow" />
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry"
                FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
                SortExpression="ShipCountry" UniqueName="ShipCountry">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
```

### ASPX.CS

```csharp
    protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
    {
        if (e.Item is GridHeaderItem)
        {
            // Color the "Freight" header cell
            GridHeaderItem headerItem = (GridHeaderItem)e.Item;
            headerItem["Freight"].CssClass = "yellow-column";

        }
    }

    protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
    {
        (sender as RadGrid).DataSource = OrdersTable(); 
    }

    private DataTable OrdersTable()
    {
        DataTable dt = new DataTable();

        dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
        dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
        dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
        dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
        dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

        dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

        for (int i = 0; i < 70; i++)
        {
            int index = i + 1;

            DataRow row = dt.NewRow();

            row["OrderID"] = index;
            row["OrderDate"] = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index);
            row["Freight"] = index * 0.1 + index * 0.01;
            row["ShipName"] = "Name " + index;
            row["ShipCountry"] = "Country " + index;

            dt.Rows.Add(row);
        }

        return dt;
    }
```

### More Details

- **ItemStyle and HeaderStyle**: These properties allow you to apply the background color directly through declarative means for both the header and the data cells in the "Freight" column.
- **CSS Solution**: The `.yellow-column` class is applied in the `ItemCreated` event to ensure the yellow background is enforced, while also removing any default background-image applied by Telerik.

By following these steps, the "Freight" column in the RadGrid will have a yellow background for both the header and data cells.

## See Also

- [Change the background color of a RadGrid column](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/grid-change-column-background-color)
