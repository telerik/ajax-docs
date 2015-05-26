---
title: OnColumnMovingToRight
page_title: OnColumnMovingToRight | RadGrid for ASP.NET AJAX Documentation
description: OnColumnMovingToRight
slug: grid/client-side-programming/events/oncolumnmovingtoright
tags: oncolumnmovingtoright
published: True
position: 18
---

# OnColumnMovingToRight



## 

Sys.EventArgs OnColumnMovingToRight Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before a column is moved right.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **gridColumn** - returns a reference to the clicked[GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})object **domEvent** - returns the DOM event that was raised for the current event|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings AllowColumnsReorder="true" ReorderColumnsOnClient="true" ColumnsReorderMethod="Reorder">
        <ClientEvents OnColumnMovingToRight="ColumnMovingToRight" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function ColumnMovingToRight(sender, eventArgs) {
    alert("Moving column with index: " + eventArgs.get_gridColumn().get_element().cellIndex + " to right");
}
//OR
function ColumnMovingToRight(sender, eventArgs) {
    eventArgs.set_cancel(true) //cancel event
}
````


