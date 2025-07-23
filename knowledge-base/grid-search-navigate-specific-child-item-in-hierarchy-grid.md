---
title: Searching and Jumping to Specific Node in Hierarchy Grid
description: Learn how to search within a hierarchy grid in UI for ASP.NET AJAX and jump to a specific node.
type: how-to
page_title: How to Search and Navigate to Specific Child Item in Hierarchy Grid
meta_title: How to Search and Navigate to Specific Child Item in Hierarchy Grid
slug: grid-search-navigate-specific-child-item-in-hierarchy-grid
tags: hierarchy, search, node, navigation, grid, ui-for-aspnet-ajax
res_type: kb
ticketid: 1694304
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Grid for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to search within a hierarchy grid and directly navigate to a specific child node. Currently, the search functionality retrieves parent and child data, but I need to enhance it to jump to the child node automatically.

This knowledge base article also answers the following questions:

- How to implement jump-to functionality in hierarchy grid?
- How to expand parent rows in hierarchy grid based on search?
- How to highlight specific child nodes after searching in hierarchy grid?

## Solution

To achieve this behavior, use the `ClientDataKeyNames` property for both parent and child grids along with the `HierarchyLoadMode` property. Implement a JavaScript function that searches for the desired item, expands the parent row if necessary, and navigates to the specific child node:

1. Define the `ClientDataKeyNames` property for both parent and child grids.
2. Set the `HierarchyLoadMode` property to `Client`.
3. Add a custom JavaScript function to search and navigate to the desired node.
4. Use the `scrollIntoView` method for smooth scrolling and highlight the found row.

````JavaScript
function jumpToOrderDetail(sender, args) {
    let orderID = 2; // ID of the item being searched

    let masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    let parentItems = masterTable.get_dataItems();

    parentItems.forEach((parentItem) => {
        let dataKey = parseInt(parentItem.getDataKeyValue("OrderID"));

        if (dataKey === orderID) {
            if (!parentItem.get_expanded()) {
                masterTable.expandItem(parentItem.get_element());
            }

            setTimeout(function () { // Wait for child table to load
                let childTableView = parentItem.get_nestedViews()[0];
                let childItems = childTableView.get_dataItems();

                childItems.forEach((childItem) => {
                    let childDataKey = parseInt(childItem.getDataKeyValue("OrderID"));

                    if (childDataKey === orderID) {
                        let childRow = childItem.get_element();
                        childRow.scrollIntoView({ behavior: "smooth", block: "center" });

                        childRow.style.backgroundColor = "#ffff99"; // Highlight the row
                    }
                });
            }, 500); // Slight delay for nested table load
        }
    });
}
````

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    OnDetailTableDataBind="RadGrid1_DetailTableDataBind">
    <MasterTableView Name="Orders" AutoGenerateColumns="False" ClientDataKeyNames="OrderID" DataKeyNames="OrderID" HierarchyLoadMode="Client">
        <Columns>
            <telerik:GridNumericColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridNumericColumn>
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
        <DetailTables>
            <telerik:GridTableView Name="OrderDetails" ClientDataKeyNames="OrderID" AutoGenerateColumns="false">
                <Columns>
                    <telerik:GridNumericColumn DataField="OrderID" DataType="System.Int32"
                        FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                        ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
                    </telerik:GridNumericColumn>
                    <telerik:GridNumericColumn DataField="UnitPrice" DataType="System.Decimal"
                        FilterControlAltText="Filter UnitPrice column" HeaderText="UnitPrice"
                        SortExpression="UnitPrice" UniqueName="UnitPrice">
                    </telerik:GridNumericColumn>
                    <telerik:GridNumericColumn DataField="Quantity" DataType="System.Int32"
                        FilterControlAltText="Filter Quantity column" HeaderText="Quantity"
                        SortExpression="Quantity" UniqueName="Quantity">
                    </telerik:GridNumericColumn>
                    <telerik:GridNumericColumn DataField="Discount" DataType="System.Decimal"
                        FilterControlAltText="Filter Discount column" HeaderText="Discount"
                        SortExpression="Discount" UniqueName="Discount">
                    </telerik:GridNumericColumn>
                </Columns>
            </telerik:GridTableView>
        </DetailTables>
    </MasterTableView>
</telerik:RadGrid>

<telerik:RadButton runat="server" ID="RadButton1" Text="Postback" AutoPostBack="false" OnClientClicked="jumpToOrderDetail" />
````

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable();
}

protected void RadGrid1_DetailTableDataBind(object sender, GridDetailTableDataBindEventArgs e)
{
    if (e.DetailTableView.Name == "OrderDetails")
    {
        GridDataItem parentItem = e.DetailTableView.ParentItem;
        int orderId = (int)parentItem.GetDataKeyValue("OrderID");
        e.DetailTableView.DataSource = OrderDetailsTable().Select($"OrderID = '{orderId}'");
    }
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

private DataTable OrderDetailsTable()
{
    DataTable dt = new DataTable();
    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("UnitPrice", typeof(decimal)));
    dt.Columns.Add(new DataColumn("Quantity", typeof(int)));
    dt.Columns.Add(new DataColumn("Discount", typeof(decimal)));

    var orders = OrdersTable();
    foreach (DataRow order in orders.Rows)
    {
        for (int i = 0; i < 4; i++)
        {
            DataRow row = dt.NewRow();
            row["OrderID"] = order["OrderID"];
            row["UnitPrice"] = i + 1;
            row["Quantity"] = i + 1;
            row["Discount"] = (i + 1) * 0.01;
            dt.Rows.Add(row);
        }
    }

    return dt;
}
````

