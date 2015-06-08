---
title: OnRowDeleting
page_title: OnRowDeleting | RadGrid for ASP.NET AJAX Documentation
description: OnRowDeleting
slug: grid/client-side-programming/events/onrowdeleting
tags: onrowdeleting
published: True
position: 54
---

# OnRowDeleting



## 

Telerik.Web.UI.GridDataItemCancelEventArgs OnRowDeleting Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when a row is going to be deleted client-side (GridClientDeleteColumn).


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **id** - id of the RadGrid item that has raised the event **itemIndexHierarchical** - hierarchical index of the item that has raised the event **gridDataItem** - the corresponding data item **tableView** - owner TableView of the item that has raised the event **dataKeyValues** - data key value for the item that has raised the event **domEvent** - dom event that was raised for the current event|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnRowDeleting="RowDeleting" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RowDeleting(sender, eventArgs) {
    alert(eventArgs.getDataKeyValue("OrderID"));
}
````



>note get_gridDataItem() is not directly available on the client unless OnRowCreating/OnRowCreated events are hooked up. This is done for optimization purpose. If you need the rowIndex, you can use eventArgs.get_itemIndexHierarchical()
>

