---
title: OnColumnMovingToLeft
page_title: OnColumnMovingToLeft | RadGrid for ASP.NET AJAX Documentation
description: OnColumnMovingToLeft
slug: grid/client-side-programming/events/oncolumnmovingtoleft
tags: oncolumnmovingtoleft
published: True
position: 16
---

# OnColumnMovingToLeft



## 

Sys.EventArgs OnColumnMovingToLeft Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before a column is moved left.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **gridColumn** - returns a reference to the clicked [GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%}) object **domEvent** - returns the DOM event that was raised for the current event|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings AllowColumnsReorder="true" ReorderColumnsOnClient="true" ColumnsReorderMethod="Reorder">
        <ClientEvents OnColumnMovingToLeft="ColumnMovingToLeft" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function ColumnMovingToLeft(sender, eventArgs) {
    alert("Moving column with index: " + eventArgs.get_gridColumn().get_element().cellIndex + " to left");
}
//OR
function ColumnMovingToLeft(sender, eventArgs) {
    eventArgs.set_cancel(true); //cancel event
}
````


