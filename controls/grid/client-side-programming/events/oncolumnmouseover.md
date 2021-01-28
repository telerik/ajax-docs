---
title: OnColumnMouseOver
page_title: OnColumnMouseOver - RadGrid
description: Check our Web Forms article about OnColumnMouseOver.
slug: grid/client-side-programming/events/oncolumnmouseover
tags: oncolumnmouseover
published: True
position: 15
---

# OnColumnMouseOver



## 

Telerik.Web.UI.GridColumnEventArgs OnColumnMouseOver Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when the mouse hovers a column.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **gridColumn** - returns a reference to the clicked [GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%}) object **domEvent** - returns the DOM event that was raised for the current event|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnColumnMouseOver="ColumnMouseOver" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function ColumnMouseOver(sender, eventArgs) {
    alert("Mouse is over column-header: " + eventArgs.get_gridColumn().get_element().cellIndex);
}
````


