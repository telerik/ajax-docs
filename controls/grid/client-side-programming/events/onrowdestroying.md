---
title: OnRowDestroying
page_title: OnRowDestroying | RadGrid for ASP.NET AJAX Documentation
description: OnRowDestroying
slug: grid/client-side-programming/events/onrowdestroying
tags: onrowdestroying
published: True
position: 58
---

# OnRowDestroying



## 

Sys.EventArgs OnRowDestroying Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when a row object is destroyed.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **id** - id of the RadGrid item that has raised the event **itemIndexHierarchical** - hierarchical index of the item that has raised the event **gridDataItem** - the corresponding data item **tableView** - owner TableView of the item that has raised the event **dataKeyValues** - data key value for the item that has raised the event **domEvent** - dom event that was raised for the current event|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnRowDestroying="RowDestroying" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RowDestroying(sender, eventArgs) {
    alert("Destroying row");
}
````


