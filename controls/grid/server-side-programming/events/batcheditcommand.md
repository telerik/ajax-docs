---
title: BatchEditCommand
page_title: BatchEditCommand Event - RadGrid | UI for ASP.NET AJAX
description: BatchEditCommand Event
slug: grid/server-side-programming/events/batcheditcommand
published: True
position: 50
---

# BatchEditCommand Event

Event fired when saving the Changes for RadGrid with [Batch Editing]({%slug grid/data-editing/edit-mode/batch-editing/overview%}) and [Server-Side binding]({%slug grid/data-binding/understanding-data-binding/server-side-binding/programmatic-databinding-using-needdatasource-event%}).

## Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridBatchEditingEventArg)` **e**

    * Event arguments 

        * `(boolean)` **e.Canceled**
            
            If set to True the event will be canceled

        * `(List<GridBatchEditingCommand>)` **e.Commands**

            The collection of commands that will be executed. One command will be executed for each modified row, either inserted, updated or deleted.

        * `(GridItem)` **e.Item**

            Gets the Item that initiated the command. Can be any of the Grid items that Inherit the `GridItem` class (e.g. *GridDataItem*,  *GridCommandItem*, *GridHeaderItem*, *GridFilteringItem*, *GridEditFormItem*, etc...)

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnBatchEditCommand="RadGrid1_BatchEditCommand">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.BatchEditCommand += RadGrid1_BatchEditCommand;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.BatchEditCommand, AddressOf RadGrid1_BatchEditCommand
End Sub
````

The event handler and objects references

````C#
protected void RadGrid1_BatchEditCommand(object sender, GridBatchEditingEventArgs e)
{
    var batchEditingCommands = (List<GridBatchEditingCommand>)e.Commands;

    foreach (GridBatchEditingCommand batchCommand in batchEditingCommands)
    {
        bool canceled = batchCommand.Canceled;
        //If set to false, the operation on this command will be cancelled
        GridDataItem item = batchCommand.Item;
        //Grid row that is being edited/deleted. This property returns null if the item is being inserted.
        Hashtable oldValues = batchCommand.OldValues;
        //Hashtable containing the original values
        Hashtable newValues = batchCommand.NewValues;
        //Hashtable containing the records of all cells in this command.  including the changes
        GridTableView tableView = batchCommand.OwnerTableView;
        //Get reference to the current table the affeccted grid item belongs to.
        GridBatchEditingCommandType commandType = batchCommand.Type;
        //Type of the command that could be for the Insert, Update or Delete operation.
    }
}
````
````VB
Protected Sub RadGrid1_BatchEditCommand(ByVal sender As Object, ByVal e As GridBatchEditingEventArgs)
    Dim batchEditingCommands = CType(e.Commands, List(Of GridBatchEditingCommand))

    For Each batchCommand As GridBatchEditingCommand In batchEditingCommands
        Dim canceled As Boolean = batchCommand.Canceled
        'If set to false, the operation on this command will be cancelled
        Dim item As GridDataItem = batchCommand.Item
        'Grid row that is being edited/deleted. This property returns null if the item is being inserted.
        Dim oldValues As Hashtable = batchCommand.OldValues
        'Hashtable containing the original values.
        Dim newValues As Hashtable = batchCommand.NewValues
        'Hashtable containing the records of all cells in this command.  including the changes.
        Dim tableView As GridTableView = batchCommand.OwnerTableView
        'Get reference to the current table the affeccted grid item belongs to.
        Dim commandType As GridBatchEditingCommandType = batchCommand.Type
        'Type of the command that could be for the Insert, Update or Delete operation.
    Next
End Sub
````
 
