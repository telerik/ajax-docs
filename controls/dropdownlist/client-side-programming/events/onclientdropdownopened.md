---
title: OnClientDropDownOpened
page_title: OnClientDropDownOpened | UI for ASP.NET AJAX Documentation
description: OnClientDropDownOpened
slug: dropdownlist/client-side-programming/events/onclientdropdownopened
tags: onclientdropdownopened
published: True
position: 2
---

# OnClientDropDownOpened



## 

The **OnClientDropDownOpened** client-side event occurs after the drop-down list has been opened.

The event handler receives two parameters:

1. The instance of the DropDownList firing the event.

1. An eventArgs parameter which does not have methods.

You can use this event to perform any client-side actions when the drop-down is completely opened:

````ASPNET
	        <script type="text/javascript">
	            function OnClientDropDownOpenedHandler(sender, eventArgs) {
	                alert("The dropdown is opened now");
	            }
	        </script>
	        <telerik:RadDropDownList
	            ID="RadDropDownList1"
	            OnClientDropDownOpened="OnClientDropDownOpenedHandler"
	            runat="server">
	        </telerik:RadDropDownList>
````


