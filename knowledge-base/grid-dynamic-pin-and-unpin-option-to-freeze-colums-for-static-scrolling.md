---
title: Dynamic pin/unpin option to freeze columns for static scrolling
description: Dynamic pin/unpin option to freeze columns for static scrolling. Check it now!
type: how-to
page_title: Dynamic pin/unpin option to freeze columns for static scrolling
slug: grid-dynamic-pin-and-unpin-option-to-freeze-colums-for-static-scrolling.md
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

This sample demonstrates a convenient functionality to provide the end user with dynamic arrangement of the frozen columns.

## Solution

Markup of the Grid, be sure to set the **AllowScroll**, **UseStaticHeaders** and **FrozenColumnsCount** properties:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
    OnItemCreated="RadGrid1_ItemCreated" OnNeedDataSource="RadGrid1_NeedDataSource">
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
        <Scrolling AllowScroll="true" UseStaticHeaders="true" ScrollHeight="400px" FrozenColumnsCount="1" />
    </ClientSettings>
</telerik:RadGrid>
````

This [`ItemCreated`]({%slug grid/server-side-programming/events/itemcreated%}) event is executed when each item in the Grid is created. It is used to add custom controls (pin/unpin buttons) to the header cells:

- Check if the item is a header item
- Get the header item and columns
- Iterate through each column and create a pin/unpin button 
- Creates a RadButton for each column with two toggle states (pin and unpin).
- The button's checked state is determined during the PreRender event based on whether the column is frozen.
- Adds a client-side click event (OnClientClicked) that calls the pinButtonClick JavaScript function with the column index and table view ID as parameters.
- Adds the button to the header cell.

````C#
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridHeaderItem)
    {
        GridHeaderItem headerItem = e.Item as GridHeaderItem;
        GridColumn[] cols = headerItem.OwnerTableView.RenderColumns;

        foreach (GridColumn col in cols)
        {
            RadButton button = new RadButton()
            {
                ID = "RadGridPinButton" + col.UniqueName,
                ButtonType = RadButtonType.ToggleButton,
                ToggleType = ButtonToggleType.CheckBox,
                Width = 14,
                Height = 14,
                AutoPostBack = false
            };
            button.ToggleStates.Add(new RadButtonToggleState()
            {
                ImageUrl = "pin.png",
                Text = "Pin"
            });
            button.ToggleStates.Add(new RadButtonToggleState()
            {
                ImageUrl = "unpin.png",
                Text = "Unpin",
            });
            button.PreRender += (s, a) =>
            {
                button.Checked = col.OrderIndex < RadGrid1.ClientSettings.Scrolling.FrozenColumnsCount + 2;
            };

            button.Style["float"] = "right";
            button.OnClientClicked = "function(s,a){pinButtonClick(s,a,"
                + col.OrderIndex + ",\"" + headerItem.OwnerTableView.ClientID + "\");}";

            headerItem[col.UniqueName].Controls.Add(button);
        }
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

This `pinButtonClick` function handles the client-side logic when a pin/unpin button is clicked:

- Retrieves the GridTableView object using the tableViewID.
- Determines the new count of frozen columns based on whether the button is checked (pin) or unchecked (unpin).
- Updates the FrozenColumnsCount property.
- Iterates through the columns to update the checked state of other pin buttons accordingly.

````JavaScript
function pinButtonClick(sender, args, index, tableViewID) {
    debugger;
    var tableView = $find(tableViewID);
    var delta = sender.get_checked() ? 1 : 2;
    tableView.get_owner().ClientSettings.Scrolling.FrozenColumnsCount = index - delta;

    var cols = tableView.get_columns();
    for (var i = 0; i < cols.length; i++) {
        if (i != index - 2) {
            var button = $telerik.findControl(cols[i].get_element(),
                "RadGridPinButton" + cols[i].get_uniqueName());
            button.set_checked(i < index - 1);
        }
    }
}
````


