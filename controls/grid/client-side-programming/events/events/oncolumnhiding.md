---
title: OnColumnHiding
page_title: OnColumnHiding | UI for ASP.NET AJAX Documentation
description: OnColumnHiding
slug: grid/client-side-programming/events/events/oncolumnhiding
tags: oncolumnhiding
published: True
position: 12
---

# OnColumnHiding



## 

Telerik.Web.UI.GridColumnEventArgs OnColumnHiding Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before a column is hidden.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __gridColumn__ - returns a reference to the clicked[GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})object __domEvent__ - returns the DOM event that was raised for the current event __cancel__ - gets or sets the canceled status of the event|
| __Can be canceled__ |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnColumnHiding="ColumnHiding" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function ColumnHiding(sender, eventArgs) {
	            alert("Hiding column: " + eventArgs.get_gridColumn().get_element().cellIndex);
	        }
	        //OR
	        function ColumnHiding(sender, eventArgs) {
	            eventArgs.set_cancel(true) //cancel event
	        }
````


