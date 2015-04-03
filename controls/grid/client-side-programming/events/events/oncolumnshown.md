---
title: OnColumnShown
page_title: OnColumnShown | UI for ASP.NET AJAX Documentation
description: OnColumnShown
slug: grid/client-side-programming/events/events/oncolumnshown
tags: oncolumnshown
published: True
position: 23
---

# OnColumnShown



## 

Telerik.Web.UI.GridColumnEventArgs OnColumnShowed Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after a column is shown.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __gridColumn__ - returns a reference to the clicked[GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})object __domEvent__ - returns the DOM event that was raised for the current event|
| __Can be canceled__ |No|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnColumnShown="ColumnShown" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function ColumnShown(sender, eventArgs) {
	            alert("Column: " + eventArgs.get_gridColumn().get_element().cellIndex + " was shown");
	        }
````


