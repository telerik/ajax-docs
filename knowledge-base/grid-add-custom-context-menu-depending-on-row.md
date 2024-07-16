---
title: Adding a Custom Context Menu to a RadGrid Row
description: Learn how to implement a custom context menu for rows in RadGrid, showing items depending on the row.
type: how-to
page_title: How to Add a Custom Context Menu depending on the row
slug: grid-add-custom-context-menu-depending-on-row
tags: radgrid, asp.net ajax, context menu, custom menu, cell click
res_type: kb
ticketid: 1658426
---

## Environment

| Product | Version |
| --- | --- |
| RadGrid for ASP.NET AJAX | All|

## Description

I want to add a custom context menu to a Grid row. Additionally, I need the ability to show or hide items in the menu based on the contents of the row.

This KB article also answers the following questions:

- How can I display a context menu on clicking a RadGrid row?
- How to customize the items in a RadGrid context menu based on the row?
- How to implement dynamic visibility for context menu items in RadGrid?

## Solution

To add a custom context menu to a RadGrid and dynamically control the visibility of menu items based on the content, follow these steps:

1. Add a `RadGrid` and define its columns.
2. Add a `RadContextMenu` with predefined items.
3. Use the `OnRowContextMenu` client-side event to show the context menu on right-click and customize its items based on conditions.
4. Implement the `RadGrid1_NeedDataSource` server-side event to bind data to the RadGrid.

### Step-by-step Implementation

#### Define the RadGrid with the context menu:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" HeaderText="OrderID" ReadOnly="True" UniqueName="OrderID" />
            <telerik:GridDateTimeColumn DataField="OrderDate" HeaderText="OrderDate" UniqueName="OrderDate" />
            <telerik:GridNumericColumn DataField="Freight" HeaderText="Freight" UniqueName="Freight" />
            <telerik:GridBoundColumn DataField="ShipName" HeaderText="ShipName" UniqueName="ShipName" />
            <telerik:GridBoundColumn DataField="ShipCountry" HeaderText="ShipCountry" UniqueName="ShipCountry" />
        </Columns>
    </MasterTableView>
    <ClientSettings>
        <ClientEvents OnRowContextMenu="onRowContextMenu" />
    </ClientSettings>
</telerik:RadGrid>

<telerik:RadContextMenu ID="RadMenu1" runat="server">
    <Items>
        <telerik:RadMenuItem Text="Delete" Value="Delete" />
        <telerik:RadMenuItem Text="Rename" Value="Rename" />
        <telerik:RadMenuItem Text="Create Folder" Value="Create Folder" />
        <telerik:RadMenuItem Text="Properties" Value="Properties" />
        <telerik:RadMenuItem Text="Download" Value="Download" />
    </Items>
</telerik:RadContextMenu>
````

#### Implement the client-side logic to customize context menu items:

````JavaScript
function onRowContextMenu(sender, eventArgs) {
    var menu = $find("<%=RadMenu1.ClientID %>");
    var event = eventArgs.get_domEvent();

    if (event.target.tagName == "INPUT" || event.target.tagName == "A") {
        return;
    }

    var index = eventArgs.get_itemIndexHierarchical();

    var grid = $find("<%=RadGrid1.ClientID %>");
    var masterTable = grid.get_masterTableView();
    var dataItem = masterTable.get_dataItems()[index];

    var menuItems = menu.get_allItems();

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].hide();
    }

    if (index == 0 || index == 2) {
        var item = menu.findItemByText("Delete");
        item.show();
        item = menu.findItemByText("Rename");
        item.show();
    }

    if (index == 1 || index == 4) {
        var item = menu.findItemByText("Create Folder");
        item.show();
    }

    if (index == 3) {
        var item = menu.findItemByText("Properties");
        item.show();
        item = menu.findItemByText("Download");
        item.show();
    }

    menu.show(event);

    event.cancelBubble = true;
    event.returnValue = false;

    if (event.stopPropagation) {
        event.stopPropagation();
        event.preventDefault();
    }
}
````

#### Server-side data source binding:

````C#
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

    for (int i = 0; i < 5; i++)
    {
        DataRow row = dt.NewRow();
        row["OrderID"] = i + 1;
        row["OrderDate"] = DateTime.Now.Date.AddDays(i + 1);
        row["Freight"] = (i + 1) * 0.01;
        row["ShipName"] = "Name " + (i + 1);
        row["ShipCountry"] = "Country " + (i + 1);
        dt.Rows.Add(row);
    }

    return dt;
}
````

### See Also

- [Ajax-enabled Context Menu for RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/how-to/common/ajax-enabled-context-menu)
- [How to Add Custom Item to Context Menu in RadGrid](https://www.telerik.com/forums/how-to-add-custom-item-to-context-menu-in-rad-grid)
- [Context Menu Problem in RadGrid](https://www.telerik.com/forums/context-menu-problem-243159400176)
