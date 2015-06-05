---
title: OnColumnMouseOut
page_title: OnColumnMouseOut | RadGrid for ASP.NET AJAX Documentation
description: OnColumnMouseOut
slug: grid/client-side-programming/events/oncolumnmouseout
tags: oncolumnmouseout
published: True
position: 14
---

# OnColumnMouseOut



## 

Telerik.Web.UI.GridColumnEventArgs OnColumnMouseOver Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when the mouse leaves a column.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **gridColumn** - returns a reference to the clicked [GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%}) object **domEvent** - returns the DOM event that was raised for the current event|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnColumnMouseOut="ColumnMouseOut" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function ColumnMouseOut(sender, eventArgs) {
    alert("Mouse is out column-header: " + eventArgs.get_gridColumn().get_element().cellIndex);
}
````


