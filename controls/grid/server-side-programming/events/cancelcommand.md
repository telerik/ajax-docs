---
title: CancelCommand
page_title: CancelCommand Event - RadGrid
description: Check our Web Forms article about CancelCommand Event.
slug: grid/server-side-programming/events/cancelcommand
published: True
position: 50
---

# CancelCommand Event

Fired when the Cancel button is clicked for an item in the RadGrid control.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridCommandEventArgs)` **e**

    * Event arguments 

        * `(boolean)` **e.Canceled**
            
            If set to True the event will be canceled

        * `(object)` **e.CommandArgument**

            Arguments that are set to the Button's CommandArgument property.

        * `(string)` **e.CommandName**

            Name defined in the CommandName property of the Button.

        * `(object)` **e.CommandSource**

            The Control that fired the Command for the Grid.

        * `(GridItem)` **e.Item**

            Gets the Item containing the command source. Can be any of the Grid items that Inherit the `GridItem` class (e.g. **GridDataItem**,  **GridCommandItem**, **GridHeaderItem**, **GridFilteringItem**, **GridEditFormItem**, etc...)

### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnCancelCommand="RadGrid1_CancelCommand">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.CancelCommand += RadGrid1_CancelCommand;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.CancelCommand, AddressOf RadGrid1_CancelCommand
End Sub
````

The event handler

````C#
protected void RadGrid1_CancelCommand(object sender, GridCommandEventArgs e)
{
    object commandArguments = e.CommandArgument;
    bool canceled = e.Canceled;
    string commandName = e.CommandName;
    object source = e.CommandSource;
    GridItem item = e.Item;
}
````
````VB
Protected Sub RadGrid1_CancelCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    Dim commandArguments As Object = e.CommandArgument
    Dim canceled As Boolean = e.Canceled
    Dim commandName As String = e.CommandName
    Dim source As Object = e.CommandSource
    Dim item As GridItem = e.Item
End Sub
````
 
### See Also

* [Telerik RadGrid Event Sequence]({%slug grid/control-lifecycle/event-sequence%})



  
