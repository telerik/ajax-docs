---
title: Getting Visible Columns in RadGrid for ASP.NET AJAX
description: Learn how to retrieve only the visible columns selected via the column chooser in RadGrid for ASP.NET AJAX.
type: how-to
page_title: How to Retrieve Visible Columns Selected in RadGrid for ASP.NET AJAX
slug: retrieve-visible-columns-radgrid-aspnet-ajax
tags: radgrid, asp.net ajax, visible columns, column chooser, client-side events
res_type: kb
ticketid: 1690144
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

I want to retrieve only the columns that are currently visible in the RadGrid after selection via the column chooser. The visibility of columns is controlled on the client side, and I need a solution to pass the list of visible columns to the server for further processing, such as exporting the data.

This knowledge base article also answers the following questions:
- How can I track visible columns in RadGrid for ASP.NET AJAX?
- How to send visible columns from RadGrid to the server-side code?
- What is the best way to handle visible columns for exporting in RadGrid?

## Solution

To achieve this, use the `OnColumnHidden` client-side event to track hidden columns and determine the currently visible columns. Then, send the list of visible columns to the server using AJAX requests. Below is the implementation:

````JavaScript
let hiddenColumnArray = []; // Array to track hidden columns

function onColumnHidden(sender, args) {
    let hiddenColumn = args.get_gridColumn(); // Get the hidden column
    hiddenColumnArray.push(hiddenColumn); // Add the column to the tracking array

    let ajaxManager = $find("<%= RadAjaxManager1.ClientID %>"); // Reference to RadAjaxManager
    let columns = sender.get_masterTableView().get_columns(); // Get all columns
    let columnNameArray = []; // Array for visible column names

    let visibleColumns = columns.filter((col) => col.get_visible() === true); // Filter visible columns
    visibleColumns.forEach((col) => columnNameArray.push(col.get_uniqueName())); // Add visible column names

    if (hiddenColumnArray.length >= 3) { // Trigger AJAX request after 3 columns are hidden
        ajaxManager.ajaxRequest(columnNameArray); // Send visible column names
    }
}
````

````C#
List<GridBoundColumn> columnsList = new List<GridBoundColumn>();
protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
{
    string[] uniqueNames = e.Argument.Split(',');

    foreach (string uniqueName in uniqueNames)
    {
        GridBoundColumn column = RadGrid1.MasterTableView.GetColumn(uniqueName) as GridBoundColumn;
        columnsList.Add(column);
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
    dt.Columns.Add(new DataColumn("Freight", typeof(double)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 100; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        row["OrderDate"] = DateTime.Now.Date.AddDays(index);
        row["Freight"] = index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;

        dt.Rows.Add(row);
    }

    return dt;
}
````

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadGrid1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" EnableHeaderContextMenu="true" OnNeedDataSource="RadGrid1_NeedDataSource">
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
    <ClientSettings>
        <ClientEvents OnColumnHidden="onColumnHidden" />
    </ClientSettings>
</telerik:RadGrid>
````

## See Also

- [OnColumnHidden Event Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/client-side-programming/events/oncolumnhidden#oncolumnhidden)
- [RadAjaxManager ajaxRequest Method Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/ajaxmanager/client-side-programming/methods/ajaxrequest#ajaxrequest-method)
- [RadGrid Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/overview)
