---
title: Keep focus on filter TextBox after filtering is done
description: Keep focus on filter TextBox after filtering is done. Check it out now!
type: how-to
page_title: Keep focus on filter TextBox after filtering is done. | RadGrid
slug: grid-keep-focus-on-filter-textbox-after-filtering-is-done
res_type: kb
---

## Environment

<table>
    <tr>
        <td>Product</td>
        <td>Telerik WebForms Grid for ASP.NET AJAX</td>
    </tr>
</table>

## Description

When filtering, the focus of the filtered TextBox will be lost after the filter has been applied.

## Solution

The below solution will focus the filter text box after filtering is done, by doing the following: 

- In the [`PreRender`]({%slug grid/server-side-programming/events/prerender%}) event, we get the **filteringItem** and check if the **columnName** property is assgined, after which we get the filter TextBox of the corresponding column, and focus it  by calling the `Focus()` method.
- In the [`ItemCommand`]({%slug grid/server-side-programming/events/itemcommand%}) event, we check the filtering pair (consisting of filter function and column unique name), and get the unique name of the filtered column.
- In the [`ItemCreated`]({%slug grid/server-side-programming/events/itemcreated%}) event, we add an attribute to the **ShipName** columns's filter TextBox that allows us to filter with pressing a key.


````ASP.NET
<telerik:RadGrid ID="RadGrid2" runat="server" AllowPaging="True" Width="800px" AllowFilteringByColumn="true"
    OnItemCreated="RadGrid2_ItemCreated" OnPreRender="RadGrid2_PreRender" OnItemCommand="RadGrid2_ItemCommand" OnNeedDataSource="RadGrid2_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False"
        DataKeyNames="OrderID">
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
</telerik:RadGrid>
````

````JavaScript
function doFilter(sender, eventArgs) {
    var grid = $find("<%= RadGrid2.ClientID %>");
    var masterTableView = grid.get_masterTableView();
    var uniqueName = "ShipName"; // set Column UniqueName for the filtering TextBox

    if (eventArgs.key == "Enter") {
        masterTableView.filter(uniqueName, sender.value, Telerik.Web.UI.GridFilterFunction.Contains);
    }
}
````

````C#
string columnName;
protected void RadGrid2_PreRender(object sender, EventArgs e)
{
    GridFilteringItem filteringItem = (GridFilteringItem)RadGrid2.MasterTableView.GetItems(GridItemType.FilteringItem)[0]; // Get the filtering item

    if (columnName != null) // If the columnName has been assigned, focus the filter TextBox
    {
        TextBox box = filteringItem[columnName].Controls[0] as TextBox;
        box.Focus();
    }
}

protected void RadGrid2_ItemCommand(object sender, GridCommandEventArgs e)
{
    if (((Pair)(e.CommandArgument)).Second.ToString() == "OrderID") // Check if the column name of the Pair is the desired one
    {
        columnName = "OrderID";
    }
    else if (((Pair)(e.CommandArgument)).Second.ToString() == "OrderDate")
    {
        columnName = "OrderDate";
    }
    else if (((Pair)(e.CommandArgument)).Second.ToString() == "Freight")
    {
        columnName = "Freight";
    }
    else if (((Pair)(e.CommandArgument)).Second.ToString() == "ShipName")
    {
        columnName = "ShipName";
    }
    else
    {
        columnName = "ShipCountry";
    }
}

protected void RadGrid2_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridFilteringItem)
    {
        GridFilteringItem filterItem = (GridFilteringItem)e.Item;
        TextBox textBox = (TextBox)filterItem["ShipName"].Controls[0];
        textBox.Attributes.Add("onkeydown", "doFilter(this,event)"); // The "ShipName" column's filter textbox will also filter when there is a key press 
    }
}

protected void RadGrid2_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
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
 
  
   
    
