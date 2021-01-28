---
title: PageIndexChanged
page_title: PageIndexChanged Event - RadGrid
description: Check our Web Forms article about PageIndexChanged Event.
slug: grid/server-side-programming/events/pageindexchanged
published: True
position: 50
---

# PageIndexChanged Event

Fired when one of the page selection elements is clicked.


### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridPageChangedEventArgs)` **e**

    * Event arguments that 

        * `(boolean)` **e.Canceled**
            
            If set to True the event will be canceled

        * `(object)` **e.CommandArgument**

            Gets the argument for the command.

        * `(string)` **e.CommandName**

            Gets the name of the command.

        * `(object)` **e.CommandSource**

            Gets the source of the commmand

        * `(GridItem)` **e.Item**

            Gets the item containing the command

        * `(int)` **e.NewPageIndex**

            Gets the new page index the Grid will go on.


## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnPageIndexChanged="RadGrid1_PageIndexChanged">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.PageIndexChanged += RadGrid1_PageIndexChanged;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.PageIndexChanged, AddressOf RadGrid1_PageIndexChanged
End Sub
````

The event handler

````C#
protected void RadGrid1_PageIndexChanged(object sender, GridPageChangedEventArgs e)
{
    bool canceled = e.Canceled;
    object commandArguments = e.CommandArgument;
    string commandName = e.CommandName;
    object source = e.CommandSource;
    GridItem item = e.Item;
    int newPageIndex = e.NewPageIndex;
}
````
````VB
Protected Sub RadGrid1_PageIndexChanged(ByVal sender As Object, ByVal e As GridPageChangedEventArgs)
    Dim canceled As Boolean = e.Canceled
    Dim commandArguments As Object = e.CommandArgument
    Dim commandName As String = e.CommandName
    Dim source As Object = e.CommandSource
    Dim item As GridItem = e.Item
    Dim newPageIndex As Integer = e.NewPageIndex
End Sub
````

  
