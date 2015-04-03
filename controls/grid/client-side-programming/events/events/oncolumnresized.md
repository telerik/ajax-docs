---
title: OnColumnResized
page_title: OnColumnResized | UI for ASP.NET AJAX Documentation
description: OnColumnResized
slug: grid/client-side-programming/events/events/oncolumnresized
tags: oncolumnresized
published: True
position: 21
---

# OnColumnResized



## 

Sys.EventArgs OnColumnResized Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after a column is resized.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __gridColumn__ - returns a reference to the clicked[GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})object __domEvent__ - returns the DOM event that was raised for the current event|
| __Can be canceled__ |No|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <Resizing AllowColumnResize="true" />
	            <ClientEvents OnColumnResized="ColumnResized" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function ColumnResized(sender, eventArgs) {
	            alert("Column with Index: " + eventArgs.get_gridColumn().get_element().cellIndex + " was resized, width: " + eventArgs.get_gridColumn().get_element().offsetWidth);
	        }
````


