---
title: OnHeaderMenuShowing
page_title: OnHeaderMenuShowing | RadGrid for ASP.NET AJAX Documentation
description: OnHeaderMenuShowing
slug: grid/client-side-programming/events/events/onheadermenushowing
tags: onheadermenushowing
published: True
position: 39
---

# OnHeaderMenuShowing



## 

This event is fired before the header context menu is rendered.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **gridColumn** - current[GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})object **domEvent** - the original browser event **menu** - header menu instance|
| **Can be canceled** |Yes|

Example:

````ASP.NET
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


