---
title: OnColumnMovingToLeft
page_title: OnColumnMovingToLeft | UI for ASP.NET AJAX Documentation
description: OnColumnMovingToLeft
slug: grid/client-side-programming/events/events/oncolumnmovingtoleft
tags: oncolumnmovingtoleft
published: True
position: 16
---

# OnColumnMovingToLeft



## 

Sys.EventArgs OnColumnMovingToLeft Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before a column is moved left.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __gridColumn__ - returns a reference to the clicked[GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})object __domEvent__ - returns the DOM event that was raised for the current event|
| __Can be canceled__ |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
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


