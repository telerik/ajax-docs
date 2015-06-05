---
title: OnScroll
page_title: OnScroll | RadGrid for ASP.NET AJAX Documentation
description: OnScroll
slug: grid/client-side-programming/events/onscroll
tags: onscroll
published: True
position: 72
---

# OnScroll



## 

Telerik.Web.UI.GridScrollEventArgs OnScroll Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when you scroll the grid.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |scrollTop - the vertical position of the scrollscrollLeft - the horizontal position of the scrollscrollControl - the div element of the scrollisOnTop - whether the scroll is on topisOnBottom - whether the scroll is on bottom|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnScroll="Scroll" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function Scroll(sender, eventArgs) {
    alert(eventArgs.get_scrollTop());
    alert(eventArgs.get_scrollLeft());
    alert(eventArgs.get_scrollControl());
    alert(eventArgs.get_isOnTop());
    alert(eventArgs.get_isOnBottom());
}
````


