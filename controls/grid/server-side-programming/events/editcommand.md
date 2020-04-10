---
title: EditCommand
page_title: EditCommand Event - RadGrid | UI for ASP.NET AJAX
description: EditCommand Event
slug: grid/server-side-programming/events/editcommand
published: True
position: 50
---

# EditCommand Event

Fired when the Edit button is clicked for an item in the RadGrid control.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridCommandEventArgs)` **e**

    * Event arguments 

        * `(boolean)` **e.Canceled**
            
            If set to True the event will be canceled.

        * `(object)` **e.CommandArgument**

            Arguments that are set to the Control's CommandName property. (Usually Button but it could be other Control in the Template)

        * `(string)` **e.CommandName**

            Name defined in the CommandName property of the Control.

        * `(object)` **e.CommandSource**

            The Control that fired the Command for the Grid.

        * `(GridItem)` **e.Item**

            Gets the Item containing the command source. Can be any of the Grid items that Inherit the `GridItem` class (e.g. **GridDataItem**,  **GridCommandItem**, **GridHeaderItem**, **GridFilteringItem**, **GridEditFormItem**, etc...)

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnEditCommand="RadGrid1_EditCommand">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.EditCommand += RadGrid1_EditCommand;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.EditCommand, AddressOf RadGrid1_EditCommand
End Sub
````

The event handler

````C#
protected void RadGrid1_EditCommand(object sender, GridCommandEventArgs e)
{
    bool canceled = e.Canceled;
    object commandArguments = e.CommandArgument;
    string commandName = e.CommandName;
    object commandSource = e.CommandSource;
    GridItem item = e.Item;
}
````
````VB
Protected Sub RadGrid1_EditCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    Dim commandArguments As Object = e.CommandArgument
    Dim canceled As Boolean = e.Canceled
    Dim commandName As String = e.CommandName
    Dim source As Object = e.CommandSource
    Dim item As GridItem = e.Item
End Sub
````


   
