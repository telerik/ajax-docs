---
title: OnColumnHidden
page_title: OnColumnHidden | RadGrid for ASP.NET AJAX Documentation
description: OnColumnHidden
slug: grid/client-side-programming/events/events/oncolumnhidden
tags: oncolumnhidden
published: True
position: 13
---

# OnColumnHidden



## 

Telerik.Web.UI.GridColumnEventArgs OnColumnHidden Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after a column is hidden.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **gridColumn** - returns a reference to the clicked[GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})object **domEvent** - returns the DOM event that was raised for the current event|
| **Can be canceled** |No|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents  OnColumnHidden="ColumnHidden" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function ColumnHidden(sender, eventArgs) {
	            alert("Column: " + eventArgs.get_gridColumn().get_element().cellIndex + " was hidden");
	        }
````


