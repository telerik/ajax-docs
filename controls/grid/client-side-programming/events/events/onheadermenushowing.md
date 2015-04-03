---
title: OnHeaderMenuShowing
page_title: OnHeaderMenuShowing | UI for ASP.NET AJAX Documentation
description: OnHeaderMenuShowing
slug: grid/client-side-programming/events/events/onheadermenushowing
tags: onheadermenushowing
published: True
position: 39
---

# OnHeaderMenuShowing



## 

This event is fired before the header context menu is rendered.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __gridColumn__ - current[GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})object __domEvent__ - the original browser event __menu__ - header menu instance|
| __Can be canceled__ |Yes|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnHeaderMenuShowing ="HeaderMenuShowing" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function HeaderMenuShowing(sender, eventArgs) {
	            if (eventArgs.get_gridColumn().get_uniqueName() == "ContactName") {
	                //hide the Clear sorting option from the header context menu of the column with name ContactName
	                eventArgs.get_menu().get_items().getItem(2).get_element().style.display = "none";
	            }
	        }
````


