---
title: Accessing Child Row DataKeyName From ComboBox in RadGrid for ASP.NET AJAX
description: This article demonstrates how to retrieve the DataKeyName value of a child row in RadGrid during the ComboBox's OnClientItemsRequesting event.
type: how-to
page_title: How to Access Child Row DataKeyName in RadGrid for ASP.NET AJAX From the ComboBox's OnClientItemsRequesting Event
slug: grid-how-to-access-child-row-datakeyname-from-combobox
tags: radgrid, asp.net ajax, datakeyname, onclientitemsrequesting, hierarchical grid, batch editing
res_type: kb
ticketid: 1685179
---

## Description
When working with a hierarchical RadGrid with batch editing enabled for the child table, there may be a need to access the DataKeyName value of a child row within the `OnClientItemsRequesting` event. This is particularly useful for passing the DataKeyName to the context, allowing the `OnItemsRequested` event handler to use it for populating the ComboBox datasource. This knowledge base article also answers the following questions:
- How can I retrieve a child row's DataKeyName in RadGrid for ASP.NET AJAX?
- What is the process to access hidden DataKeyNames in a RadGrid's child table?
- How to use the OnClientItemsRequesting event to get DataKeyName from a child row in RadGrid?

## Environment
<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for ASP.NET AJAX</td>
</tr>
</tbody>
</table>

## Solution
To access the `OrderDetailID` DataKeyName value from the detail table in the `OnClientItemsRequesting` event, even if it's not a displayed column, set the `DataKeyNames` attribute to "OrderDetailID" and use the `ClientDataKeyNames` to access the value on the front-end. Here is the approach to achieve this:

1. Ensure the `DataKeyNames` and `ClientDataKeyNames` attributes are correctly set in your RadGrid definition.

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" Width="400" OnNeedDataSource="RadGrid1_NeedDataSource" OnDetailTableDataBind="RadGrid1_DetailTableDataBind">
    <MasterTableView Name="Orders" AutoGenerateColumns="False" DataKeyNames="OrderID" EditMode="Batch">
        <Columns>
            ...
        </Columns>
        <DetailTables>
            <telerik:GridTableView Name="OrderDetails" AutoGenerateColumns="false" EditMode="Batch" ClientDataKeyNames="OrderDetailID" DataKeyNames="OrderDetailID">
                <Columns>
                    ...
                </Columns>
            </telerik:GridTableView>
        </DetailTables>
    </MasterTableView>
</telerik:RadGrid>
````

2. Adjust the JavaScript function to find the correct data item and access the `OrderDetailID`.

````JavaScript
function onClientItemsRequested(sender, args) {
    let comboElement = sender.get_element(); // Get the ComboBox element
    let rowElement = $(comboElement).closest("tr.rgRow, tr.rgAltRow")[0];

    if (rowElement) {
        let detailTables = $find("<%=RadGrid1.ClientID %>").get_detailTables(); // Get the Detail Tables

        let currentDetailTable = Array.from(detailTables).find((table) => {
            let editedComboBox = table.get_element().querySelector(".rgBatchCurrent .rgBatchContainer .RadComboBox");
            return editedComboBox && comboElement.id === editedComboBox.id;
        }); // Find the currently edited Detail Table

        if (currentDetailTable) {
            let dataItem = currentDetailTable.get_dataItems()[rowElement.rowIndex]; // Get the DataItem
            let orderDetailID = parseInt(dataItem.getDataKeyValue("OrderDetailID")); // Find the detail order id
            console.log(orderDetailID);
        }
    }
}
````

By utilizing the `find` method to match the currently edited ComboBox, you ensure that you are accessing the detail table corresponding to the row you are interacting with. This method allows you to retrieve the `OrderDetailID` of the correct row effectively.

## See Also
- [RadGrid for ASP.NET AJAX Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [Client-Side Programming Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/client-side-programming/overview)
