---
title: OnActiveRowChanged
page_title: OnActiveRowChanged - RadGrid
description: Check our Web Forms article about OnActiveRowChanged.
slug: grid/client-side-programming/events/onactiverowchanged
tags: onactiverowchanged
published: True
position: 1
---

# OnActiveRowChanged



## 

Telerik.Web.UI.GridDataItemEventArgs OnActiveRowChanged Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after the active row is changed.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **DataKeyValue** - if the ClientDataKeyNames property of RadGrid is set, this property returns the corresponding value for the item's data key. **cancel** - gets or sets the canceled status of the event **domEvent** - returns the DOM event that was raised for the current event **gridDataItem** - returns the corresponding data item for the item that has raised the event **id** - returns the ID of the row that has raised the event **itemIndexHierarchical** - returns the hierarchical index of the grid item that has raised the event **tableView** - returns the owner TableView of the item that has raised the event|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnActiveRowChanged="ActiveRowChanged" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function ActiveRowChanged(sender, eventArgs) {
    alert("The active row is: " + eventArgs.get_gridDataItem());
}
````


