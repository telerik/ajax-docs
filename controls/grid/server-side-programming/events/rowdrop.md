---
title: RowDrop
page_title: RowDrop Event - RadGrid
description: Check our Web Forms article about RowDrop Event.
slug: grid/server-side-programming/events/rowdrop
published: True
position: 50
---

# RowDrop Event

Fired when drag and drop operation is triggered from the client


### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridDragDropEventArgs)` **e**

    * Event arguments 

        * `(GridDataItem)` **e.DestDataItem**
            
            Gets the destination `GridDataItem` if the row have been dropped over a data item.

        * `(RadGrid)` **e.DestinationGrid**

            Gets the `RadGrid` in which a row have been dropped.

        * `(GridTableView)` **e.DestinationTableView**

            Contains `GridTableView` instance to which belongs the destination item.

        * `(IList<GridDataItem>)` **e.DraggedItems**

            Gets a collection of all `GridDataItem` dragged items. 

        * `(GridItemDropPosition)` **e.DropPosition**

            Gets the position aw which the user had dragged and dropped the source item(s) with regards to the destination item.

        * `(string)` **e.HtmlElement**

            Gets the HTML element id attribute of the element on which the row have been dropped.



## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnRowDrop="RadGrid1_RowDrop"">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.RowDrop += RadGrid1_RowDrop;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.RowDrop, AddressOf RadGrid1_RowDrop
End Sub
````

The event handler

````C#
protected void RadGrid1_RowDrop(object sender, GridDragDropEventArgs e)
{
        GridDataItem destinationDataItem = e.DestDataItem;
        RadGrid destinationGrid = e.DestinationGrid;
        GridTableView destinationTableView= e.DestinationTableView;
        IList<GridDataItem> draggedItems = e.DraggedItems;
        GridItemDropPosition dropPosition = e.DropPosition;
        string htmlElement= e.HtmlElement;
}
````
````VB
Protected Sub RadGrid1_RowDrop(ByVal sender As Object, ByVal e As GridDragDropEventArgs)
    Dim destinationDataItem As GridDataItem = e.DestDataItem
    Dim destinationGrid As RadGrid = e.DestinationGrid
    Dim destinationTableView As GridTableView = e.DestinationTableView
    Dim draggedItems As IList(Of GridDataItem) = e.DraggedItems
    Dim dropPosition As GridItemDropPosition = e.DropPosition
    Dim htmlElement As String = e.HtmlElement
End Sub
````

  
