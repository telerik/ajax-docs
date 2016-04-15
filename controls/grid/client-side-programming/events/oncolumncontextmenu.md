---
title: OnColumnContextMenu
page_title: OnColumnContextMenu | RadGrid for ASP.NET AJAX Documentation
description: OnColumnContextMenu
slug: grid/client-side-programming/events/oncolumncontextmenu
tags: oncolumncontextmenu
published: True
position: 7
---

# OnColumnContextMenu



## 

Telerik.Web.UI.GridColumnEventArgs OnColumnContextMenu Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when the user right-clicks arbitrary column header.


>caption  

|  **Fired by**  | Telerik.Web.UI.RadGrid |
| ------ | ------ |
| **Arguments** | **gridColumn** - returns a reference to the clicked [GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%}) object **domEvent** - returns the DOM event that was raised for the current event|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnColumnContextMenu="ColumnContextMenu" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function ColumnContextMenu(sender, eventArgs) {
    alert("Context menu on column-header: " + eventArgs.get_gridColumn().get_element().cellIndex);
}
````


