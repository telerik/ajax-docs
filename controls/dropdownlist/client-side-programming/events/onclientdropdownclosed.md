---
title: OnClientDropDownClosed
page_title: OnClientDropDownClosed | UI for ASP.NET AJAX Documentation
description: OnClientDropDownClosed
slug: dropdownlist/client-side-programming/events/onclientdropdownclosed
tags: onclientdropdownclosed
published: True
position: 0
---

# OnClientDropDownClosed



## 

The **OnClientDropDownClosed** client-side event occurs after the drop-down list has been closed.

The event handler receives two parameters:

1. The instance of the DropDownList firing the event.

1. An eventArgs parameter which does not have methods.

You can use this event to perform any client-side actions when the drop-down is completely closed:

````ASPNET
	        <script type="text/javascript">
	            function OnClientDropDownClosedHandler(sender, eventArgs) {
	                alert("Dropdown is closed now");
	            }
	        </script>
	
	        <telerik:RadDropDownList
	            ID="RadDropDownList1"
	            OnClientDropDownClosed="OnClientDropDownClosedHandler"
	            runat="server">
	            <Items>
	                <telerik:DropDownListItem Text="Item 1" />
	                <telerik:DropDownListItem Text="Item 2" />
	                <telerik:DropDownListItem Text="Item 3" />
	                <telerik:DropDownListItem Text="Item 4" />
	            </Items>
	        </telerik:RadDropDownList>
````


