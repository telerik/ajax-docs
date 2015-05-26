---
title: OnRowDeleted
page_title: OnRowDeleted | RadGrid for ASP.NET AJAX Documentation
description: OnRowDeleted
slug: grid/client-side-programming/events/events/onrowdeleted
tags: onrowdeleted
published: True
position: 55
---

# OnRowDeleted



## 

Telerik.Web.UI.GridDataItemCancelEventArgs OnRowDeleted Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after a row is deleted client-side (GridClientDeleteColumn).


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **id** - id of the RadGrid item that has raised the event **itemIndexHierarchical** - hierarchical index of the item that has raised the event **gridDataItem** - the corresponding data item **tableView** - owner TableView of the item that has raised the event **dataKeyValues** - data key value for the item that has raised the event **domEvent** - dom event that was raised for the current event|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnRowDeleted="RowDeleted" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RowDeleted(sender, eventArgs) {
    alert(eventArgs.getDataKeyValue("OrderID"));
}
````



To access the respective value as shown above, Grid's corresponding table property ClientDataKeyNames should be set.
