---
title: ItemCommand
page_title: ItemCommand Event - RadGrid | UI for ASP.NET AJAX
description: ItemCommand Event
slug: grid/server-side-programming/events/itemcommand
published: True
position: 50
---

# ItemCommand Event

Fired when any button is clicked in the RadGrid control. All bubbled events from grid items fire **RadGrid.ItemCommand**. Those like - *Edit*, *Delete*, or *Update* command events can be used to handle custom data-editing in RadGrid. Expand/Collapse items in the hierarchy or GridGroupHeaderItem -s (if grid displays grouped items), also fired after binding of detail tables, etc.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridCommandEventArgs)` **e**

    * Event arguments that 

        * `(boolean)` **e.Canceled**
            
            If set to True the event will be canceled

        * `(object)` **e.CommandArgument**

            Arguments that are set to the Control's CommandName property. (Usually Button but it could be other Control in the Template)

        * `(string)` **e.CommandName**

            Name defined in the CommandName property of the Control.

        * `(object)` **e.CommandSource**

            The Control that fired the Command for the Grid.

        * `(GridItem)` **e.Item**

            Gets the Item that initiated the command. Can be any of the Grid items that Inherit the `GridItem` class (e.g. *GridDataItem*,  *GridCommandItem*, *GridHeaderItem*, *GridFilteringItem*, *GridEditFormItem*, etc...)

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnItemCommand="RadGrid1_ItemCommand">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.ItemCommand += RadGrid1_ItemCommand;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.ItemCommand, AddressOf RadGrid1_ItemCommand
End Sub
````

The event handler

````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
        object commandArguments = e.CommandArgument;
        bool canceled = e.Canceled;
        string commandName = e.CommandName;
        object source = e.CommandSource;
        GridItem item = e.Item;
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    Dim commandArguments As Object = e.CommandArgument
    Dim canceled As Boolean = e.Canceled
    Dim commandName As String = e.CommandName
    Dim source As Object = e.CommandSource
    Dim item As GridItem = e.Item
End Sub
````

### Examples

## Capturing commands

Grid known Commands

````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.InitInsertCommandName)
    {
        // Clicking on the "Add New Record" button to make the grid enter into insert mode
    }
    else if (e.CommandName == RadGrid.PerformInsertCommandName)
    {
        // When clicking on the Insert button after the values have been defined
    }
    else if (e.CommandName == RadGrid.EditCommandName)
    {
        // When clicking on the Edit button to put the Grid into edit mode
    }
    else if (e.CommandName == RadGrid.UpdateCommandName)
    {
        // When clicking on the Update button after the changes are done
    }
    else if (e.CommandName == RadGrid.DeleteCommandName)
    {
        // When the delete button is clicked for an item
    }
    else if (e.CommandName == RadGrid.PageCommandName)
    {
        // When Paging back and forth
    }
    else if (e.CommandName == RadGrid.SortCommandName)
    {
        // When sorting
    }
    else if (e.CommandName == RadGrid.FilterCommandName)
    {
        // When filtering
    }
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    If e.CommandName = RadGrid.InitInsertCommandName Then
        'Clicking on the "Add New Record" button to make the grid enter into insert mode
    ElseIf e.CommandName = RadGrid.PerformInsertCommandName Then
        'When clicking on the Insert button after the values have been defined
    ElseIf e.CommandName = RadGrid.EditCommandName Then
        'When clicking on the Edit button to put the Grid into edit mode
    ElseIf e.CommandName = RadGrid.UpdateCommandName Then
        'When clicking on the Update button after the changes are done
    ElseIf e.CommandName = RadGrid.DeleteCommandName Then
        'When the delete button is clicked for an item
    ElseIf e.CommandName = RadGrid.PageCommandName Then
        'When Paging back and forth
    ElseIf e.CommandName = RadGrid.SortCommandName Then
        'When sorting
    ElseIf e.CommandName = RadGrid.FilterCommandName Then
        'When filtering
    End If
End Sub
````

## Custom Commands

The name defined in the CommandName property of the Button can be captured as follows

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnItemCommand="RadGrid1_ItemCommand">
    <MasterTableView>
        <Columns>
            <telerik:GridTemplateColumn>
                <ItemTemplate>
                    <telerik:RadButton runat="server" ID="RadButton1" Text="Custom Command 1" CommandName="MyCustomCommand1" AutoPostBack="true" />
                    <telerik:RadButton runat="server" ID="RadButton2" Text="Custom Command 2" CommandName="MyCustomCommand2" AutoPostBack="true" />
                </ItemTemplate>
            </telerik:GridTemplateColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    if (e.CommandName == "MyCustomCommand1")
    {
        // execute some logic
    }
    else if (e.CommandName == "MyCustomCommand2")
    {
        // execute some logic
    }
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    If e.CommandName = "MyCustomCommand1" Then
        'execute some logic
    ElseIf e.CommandName = "MyCustomCommand2" Then
        'execute some logic
    End If
End Sub
````

  
