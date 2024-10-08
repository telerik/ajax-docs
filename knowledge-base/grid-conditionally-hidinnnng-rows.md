---
title: Conditionally Hiding Rows in RadGrid
description: Learn how to conditionally hide rows in RadGrid based on selections from RadComboBox within the grid.
type: how-to
page_title: Conditionally Hiding Rows in RadGrid
slug: grid-conditionally-hidinnnng-rows
tags: radgrid, asp.net ajax, hide rows, conditional display, radcombobox
res_type: kb
ticketid: 1666697
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
In scenarios where RadGrid displays hierarchical data, such as Sections and Questions, you might need to dynamically show or hide certain rows based on user interactions. For instance, hiding a specific Section row when a particular answer is selected in a RadComboBox within the Questions of a preceding Section. This KB article demonstrates how to achieve this behavior using client-side events.

This KB article also answers the following questions:

- How can I hide a grid row based on a dropdown selection inside the grid?
- What's the best way to conditionally display rows in RadGrid?
- How to use client-side events in RadGrid to manipulate row visibility?

## Solution

To conditionally hide rows in a [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview), use the `OnClientSelectedIndexChanged` event of the `RadComboBox` within the GridTemplateColumn. This approach involves hiding the row by setting its display style to none based on the selected item in the RadComboBox.

Define the RadGrid with hierarchical data and include a RadComboBox in the ItemTemplate or EditItemTemplate of the GridTemplateColumn.

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="400px"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    OnDetailTableDataBind="RadGrid1_DetailTableDataBind">
    <MasterTableView Name="Orders" AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridNumericColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridNumericColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
        </Columns>
        <DetailTables>
            <telerik:GridTableView Name="OrderDetails" AutoGenerateColumns="false">
                <Columns>
                    <telerik:GridEditCommandColumn />
                    <telerik:GridNumericColumn DataField="OrderID" DataType="System.Int32"
                        FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                        ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
                    </telerik:GridNumericColumn>
                    <telerik:GridTemplateColumn>
                        <ItemTemplate>
                            <asp:Label Text="Label1" ID="Label1" runat="server" />
                        </ItemTemplate>
                        <EditItemTemplate>
                            <telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" OnClientSelectedIndexChanged="onSekectedIndexChanged">
                                <Items>
                                    <telerik:RadComboBoxItem Text="Item 1" />
                                    <telerik:RadComboBoxItem Text="Item 2" />
                                    <telerik:RadComboBoxItem Text="Item 3" />
                                </Items>
                            </telerik:RadComboBox>
                        </EditItemTemplate>
                    </telerik:GridTemplateColumn>
                </Columns>
            </telerik:GridTableView>
        </DetailTables>
    </MasterTableView>
</telerik:RadGrid>
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

        e.DetailTableView.DataSource = OrderDetailsTable().Select(string.Format("OrderID = '{0}'", orderId));
    }
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 3; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        row["OrderDate"] = DateTime.Now.Date.AddDays(index);

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

    int itemsPerOrder = 4;

    for (int rowIndex = 0; rowIndex < orders.Rows.Count; rowIndex++)
    {
        DataRow currentOrder = orders.Rows[rowIndex];

        for (int j = 0; j < itemsPerOrder; j++)
        {
            int index = j + 1;

            DataRow row = dt.NewRow();

            row["OrderID"] = currentOrder["OrderID"];

            row["UnitPrice"] = index;
            row["Quantity"] = index;
            row["Discount"] = index * 0.01;

            dt.Rows.Add(row);
        }
    }
    return dt;
}
````

Implement the client-side event handler to hide the specific row based on the selected item's text.

````JavaScript
function onSelectedIndexChanged(sender, args) {
    let selectedItemText = args.get_item().get_text();

    if (selectedItemText === "Item 2") {
        let masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
        let dataItems = masterTable?.get_dataItems();
        let rowToHide = dataItems[1].get_element(); // Index of the row you want to hide

        rowToHide.style.display = 'none';
    }
}
````

Ensure your RadGrid is properly configured to bind data for both the master and detail tables using the `OnNeedDataSource` and `OnDetailTableDataBind` events.

By following these steps, you can effectively hide specific rows in RadGrid based on user selection within a RadComboBox. This method leverages client-side programming to dynamically adjust the visibility of rows, providing a responsive and interactive user experience.

## See Also

- [RadGrid Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [RadComboBox Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/client-side-programming/overview)
- [OnClientSelectedIndexChanged Event](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/client-side-programming/events/onclientselectedindexchanged#onclientselectedindexchanged)
