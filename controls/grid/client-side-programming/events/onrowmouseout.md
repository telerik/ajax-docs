---
title: OnRowMouseOut
page_title: OnRowMouseOut | RadGrid for ASP.NET AJAX Documentation
description: OnRowMouseOut
slug: grid/client-side-programming/events/onrowmouseout
tags: onrowmouseout
published: True
position: 64
---

# OnRowMouseOut



## 

Telerik.Web.UI.GridDataItemEventArgs OnRowMouseOut Property

>tip To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when the mouse leaves a row.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **id** - id of the RadGrid item that has raised the event **itemIndexHierarchical** - hierarchical index of the item that has raised the event **gridDataItem** - the corresponding data item **tableView** - owner TableView of the item that has raised the event **dataKeyValues** - data key value for the item that has raised the event **domEvent** - dom event that was raised for the current event|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnRowMouseOut="RowMouseOut" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RowMouseOut(sender, eventArgs) {
    alert("Mouse is out row: " + eventArgs.get_itemIndexHierarchical());
}
````



>tip get_gridDataItem() is not directly available on the client unless OnRowCreating/OnRowCreated events are hooked up. This is done for optimization purpose. If you need the rowIndex, you can use eventArgs.get_itemIndexHierarchical()
>

