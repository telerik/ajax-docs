---
title: OnRowCreated
page_title: OnRowCreated - RadGrid
description: Check our Web Forms article about OnRowCreated.
slug: grid/client-side-programming/events/onrowcreated
tags: onrowcreated
published: True
position: 51
---

# OnRowCreated



## 

Sys.EventArgs OnRowCreated Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after a row available at client-side is created.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **id** - id of the RadGrid item that has raised the event **itemIndexHierarchical** - hierarchical index of the item that has raised the event **gridDataItem** - the corresponding data item **tableView** - owner TableView of the item that has raised the event **dataKeyValues** - data key value for the item that has raised the event **domEvent** - dom event that was raised for the current event|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnRowCreated="RowCreated" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RowCreated(sender, eventArgs) {
    alert("Row with ID: " + eventArgs.get_gridDataItem().get_element().rowIndex + " was created");
}
````


