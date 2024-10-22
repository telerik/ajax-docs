---
title: Implementing Instant Cell Update in RadGrid Batch Edit Mode
description: This article demonstrates how to configure Telerik's RadGrid for ASP.NET AJAX to update cells immediately upon losing focus without requiring a manual save action.
type: how-to
page_title: How to Enable Instant Cell Updates in RadGrid with Batch Editing
slug: grid-instant-cell-update-batch-edit
tags: radgrid, asp.net ajax, batch edit, cell update, onbatcheditcellvaluechanged, client-side api
res_type: kb
ticketid: 1668183
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

When working with the [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview) component in batch edit mode, there's a requirement to update data immediately after a cell loses focus without the need for pressing a "save" button. This behavior closely resembles how changes are handled in spreadsheet software, providing a more seamless experience for users who wish to edit grid data.

This KB article also answers the following questions:

- How can I update a cell in RadGrid without clicking save?
- Is it possible to auto-save changes in RadGrid batch edit mode on cell blur?
- How to use the OnBatchEditCellValueChanged event to save changes immediately in RadGrid?

## Solution

To achieve immediate cell updates in the RadGrid's batch edit mode upon losing focus, utilize the `OnBatchEditCellValueChanged` client-side event in conjunction with the Batch Editing Client-side API. This setup allows for automatic saving of changes without additional user interaction.

Define the RadGrid with Batch Editing enabled and specify the `OnBatchEditCellValueChanged` event:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource" OnBatchEditCommand="RadGrid1_BatchEditCommand">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID" CommandItemDisplay="Top" EditMode="Batch">
        <BatchEditingSettings HighlightDeletedRows="true" EditType="Cell" />
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
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
        <ClientEvents OnBatchEditCellValueChanged="onBatchEditCellValueChanged" />
    </ClientSettings>
</telerik:RadGrid>
````

Implement the `onBatchEditCellValueChanged` JavaScript function to save changes immediately:

````JavaScript
    function onBatchEditCellValueChanged(sender, args) {
        let batchEditingManager = sender.get_batchEditingManager();
        batchEditingManager.saveAllChanges();
    }
````

Implement server-side logic for handling data operations such as insert, update, and delete within the `RadGrid1_BatchEditCommand` event handler.

````C#
#region Datasource stored in Session
public DataTable SessionDataSource
{
    get
    {
        string sessionKey = "SessionDataSource";

        DataTable dt = Session[sessionKey] as DataTable;

        if (dt == null || !IsPostBack)
        {
            dt = new DataTable();

            dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
            dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
            dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
            dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

            dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

            for (int i = 0; i < 20; i++)
            {
                int index = i + 1;

                DataRow row = dt.NewRow();

                row["OrderID"] = index;
                row["Freight"] = index * 0.1 + index * 0.01;
                row["ShipName"] = "Name " + index;
                row["ShipCountry"] = "Country " + index;

                dt.Rows.Add(row);
            }

            Session[sessionKey] = dt;
        }
        return dt;
    }
}
#endregion

#region Data-binding
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = SessionDataSource;
}
#endregion

#region Insert/Update/Delete operations

protected void RadGrid1_BatchEditCommand(object sender, GridBatchEditingEventArgs e)
{
    foreach (GridBatchEditingCommand command in e.Commands)
    {
        Hashtable oldValues = command.OldValues;
        Hashtable newValues = command.NewValues;

        if (command.Type == GridBatchEditingCommandType.Insert)
        {
            newValues["OrderID"] = CreateNewOrderId();

            DataRow rowToCreate = SessionDataSource.NewRow();

            foreach (string key in newValues.Keys)
            {
                rowToCreate[key] = newValues[key];
            }

            SessionDataSource.Rows.Add(rowToCreate);
        }
        else if (command.Type == GridBatchEditingCommandType.Update)
        {
            DataRow rowToUpdate = GetRowById((int)newValues["OrderID"]);

            foreach (string key in newValues.Keys)
            {
                rowToUpdate[key] = newValues[key];
            }
        }
        else if (command.Type == GridBatchEditingCommandType.Delete)
        {
            DataRow rowToDelete = GetRowById((int)newValues["OrderID"]);

            if (rowToDelete != null)
            {
                SessionDataSource.Rows.Remove(rowToDelete);
            }
        }
    }
}
#endregion

#region Helper Methods
private int CreateNewOrderId()
{
    int orderId = 1;

    if (SessionDataSource.Rows.Count > 0)
    {
        orderId = (int)SessionDataSource.Select("OrderID = MAX(OrderID)").FirstOrDefault()["OrderID"] + 1;
    }

    return orderId;
}

private DataRow GetRowById(int orderId)
{
    return SessionDataSource.Select(string.Format("OrderID='{0}'", orderId)).FirstOrDefault();
}
#endregion
````

By following these steps, the RadGrid component will update and save cell changes immediately when the user navigates away from the editing cell, enhancing the data entry process by eliminating the need to manually trigger a save operation.

## See Also

- [RadGrid Batch Editing Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/overview)
- [RadGrid Batch Editing Client-side API](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/client-side-api)
- [RadGrid Client-side Programming Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/client-side-programming/overview)
