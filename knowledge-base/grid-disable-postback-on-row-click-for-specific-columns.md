---
title: Disable postback on row click for specific columns
description: Learn how to disable postback on row click for specific columns
type: how-to
page_title: Disable postback on row click for specific columns. | RadGrid
slug: grid-disable-postback-on-row-click-for-specific-columns
res_type: kb
ticket-id: 1645757
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Grid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## DESCRIPTION

Sometimes, you might want to disable the **EnablePostBackOnRowClick** property when clicking on a cell, which is located in a specific column. 

![Disable EnablePostBackOnRowClick for specific columns](images/grid-disable-postback.gif "Disable EnablePostBackOnRowClick for specific columns")

## SOLUTION

To do that, you can utilize the [`OnCellSelecting`]({%slug grid/client-side-programming/events/oncellselecting%}) event, and in it, check for the unique name of the column of the currently clicked cell.

````JavaScript
function onCellSelecting(sender, args) {
    var columnName = args.get_column().get_uniqueName();

    if (columnName == "OrderID") { 
        sender.ClientSettings.EnablePostBackOnRowClick = false;
        args.set_cancel(true);
    }
    else {
        sender.ClientSettings.EnablePostBackOnRowClick = true;
    }
}
````

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="400px" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
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
    <ClientSettings EnablePostBackOnRowClick="true">
        <Selecting CellSelectionMode="SingleCell"/>
        <ClientEvents OnCellSelecting="onCellSelecting" />
    </ClientSettings>
</telerik:RadGrid>
````

 
