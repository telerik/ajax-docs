---
title: OnColumnShowing
page_title: OnColumnShowing | UI for ASP.NET AJAX Documentation
description: OnColumnShowing
slug: grid/client-side-programming/events/events/oncolumnshowing
tags: oncolumnshowing
published: True
position: 22
---

# OnColumnShowing



## 

Telerik.Web.UI.GridColumnEventArgs OnColumnShowing Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before a column is shown.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __gridColumn__ - returns a reference to the clicked[GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})object __domEvent__ - returns the DOM event that was raised for the current event|
| __Can be canceled__ |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnColumnShowing="ColumnShowing" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function ColumnShowing(sender, eventArgs) {
	            alert("Showing column: " + eventArgs.get_gridColumn().get_element().cellIndex);
	        }
	        //OR
	        function ColumnShowing(sender, eventArgs) {
	            eventArgs.set_cancel(true) //cancel event
	        }
````


