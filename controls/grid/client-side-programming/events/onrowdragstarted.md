---
title: OnRowDragStarted
page_title: OnRowDragStarted - RadGrid
description: Check our Web Forms article about OnRowDragStarted.
slug: grid/client-side-programming/events/onrowdragstarted
tags: onrowdragstarted
published: True
position: 60
---

# OnRowDragStarted



##   

Telerik.Web.UI.GridDataItemCancelEventArgs OnRowDragStarted Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event can be intercepted if you want to perform some conditional check and determine whether to cancel the drag operation or not. The row which is about to be dragged can be accessed through the **get_gridDataItem()** property of the second argument passed in the OnRowDragStarted handler.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **gridDataItem** - the GridDataItem which is about to be dragged - will be null if the data items have not been instantiated beforehand (see below) **domEvent** - dom event **id** - ClientID of the grid data item - use it to obtain a reference to the gridDataItem object with $find(), if get_gridDataItem() is null **itemIndexHierarchical** - the hierarchical index of the data item **tableView** - the tableview object, to which the data item belongs **args.getDataKeyValue(columnName)** - method that returns the data key value for the given data item - the columnName must be specified in the MasterTableView's ClientDataKeyNames property|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnRowDragStarted="RowDragStarted" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RowDragStarted(sender, eventArgs) {
    alert("Dragged grid row id is: " + eventArgs.get_gridDataItem().get_id());
}
//OR
function RowDragStarted(sender, eventArgs) {
    eventArgs.set_cancel(true) //cancel the event
}
````



>note get_gridDataItem() is not directly available on the client unless OnRowCreating/OnRowCreated events are hooked up. This is done for optimization purpose. If you need the rowIndex, you can use eventArgs.get_itemIndexHierarchical()
>
