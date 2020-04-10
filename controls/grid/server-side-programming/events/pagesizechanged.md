---
title: PageSizeChanged
page_title: PageSizeChanged Event - RadGrid | UI for ASP.NET AJAX
description: PageSizeChanged Event
slug: grid/server-side-programming/events/pagesizechanged
published: True
position: 50
---

# PageSizeChanged Event

Fired when the page size is changed through the advanced pager or manually in code


### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridPageSizeChangedEventArgs)` **e**

    * Event arguments that 

        * `(boolean)` **e.Canceled**
            
            If set to True the event will be canceled.

        * `(object)` **e.CommandArgument**

            Gets the argument for the command.

        * `(string)` **e.CommandName**

            Gets the name of the command.

        * `(object)` **e.CommandSource**

            Gets the source of the commmand.

        * `(GridItem)` **e.Item**

            Gets the item containing the command.

        * `(int)` **e.NewPageSize**

            Gets the new selected page size that will be applied.


## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnPageSizeChanged="RadGrid1_PageSizeChanged">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.PageSizeChanged += RadGrid1_PageSizeChanged;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.PageSizeChanged, AddressOf RadGrid1_PageSizeChanged
End Sub
````

The event handler

````C#
protected void RadGrid1_PageSizeChanged(object sender, GridPageSizeChangedEventArgs e)
{
    bool canceled = e.Canceled;
    object commandArgs = e.CommandArgument;
    string commandName = e.CommandName;
    object commandSource = e.CommandSource;
    GridItem item = e.Item;
    int newPageSize = e.NewPageSize;
}
````
````VB
Protected Sub RadGrid1_PageSizeChanged(ByVal sender As Object, ByVal e As GridPageSizeChangedEventArgs)
    Dim canceled As Boolean = e.Canceled
    Dim commandArguments As Object = e.CommandArgument
    Dim commandName As String = e.CommandName
    Dim source As Object = e.CommandSource
    Dim item As GridItem = e.Item
    Dim newPageSize As Integer = e.NewPageSize
End Sub
````

  
