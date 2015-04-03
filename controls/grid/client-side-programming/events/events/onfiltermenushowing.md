---
title: OnFilterMenuShowing
page_title: OnFilterMenuShowing | UI for ASP.NET AJAX Documentation
description: OnFilterMenuShowing
slug: grid/client-side-programming/events/events/onfiltermenushowing
tags: onfiltermenushowing
published: True
position: 31
---

# OnFilterMenuShowing



## 

This event is fired before the filtering menu is rendered.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __menu__ - filtering menu instance __tableView__ - filtering menu instance __gridColumn__ - current[GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})object __domEvent__ - the original browser event|
| __Can be canceled__ |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnFilterMenuShowing ="FilterMenuShowing" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function FilterMenuShowing(sender, eventArgs) {
	            if (eventArgs.get_gridColumn().get_uniqueName() == "ClientID") {
	                eventArgs.get_menu().get_element().className = "MyClass";
	            }
	            else {
	                eventArgs.get_menu().get_element().className = "";
	            }
	        }
````


