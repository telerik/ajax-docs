---
title: OnClientItemSelected
page_title: OnClientItemSelected | UI for ASP.NET AJAX Documentation
description: OnClientItemSelected
slug: dropdownlist/client-side-programming/events/onclientitemselected
tags: onclientitemselected
published: True
position: 5
---

# OnClientItemSelected



## 

The __OnClientItemSelected__ client-side event occurs immediately after certain item is selected.

The event handler receives two parameters:

1. The instance of the DropDownList firing the event.

1. An eventArgs parameter containing the following method:

* __get_item__ returns the item, that has just been selected.

Use this event to respond to the newly selected item:

````ASPNET
	
	        <script type="text/javascript">
	            function OnClientItemSelected(sender, eventArgs) {
	
	                var item = eventArgs.get_item();
	                alert("You selected " + item.get_text() + " with value " + item.get_value());
	
	            }
	        </script>
	
	        <telerik:RadDropDownList ID="RadDropDownList1" runat="server" OnClientItemSelected="OnClientItemSelected">
	            <Items>
	
	                <telerik:DropDownListItem runat="server" Text="Item 1" Value="1" />
	                <telerik:DropDownListItem runat="server" Text="Item 2" Value="2" />
	                <telerik:DropDownListItem runat="server" Text="Item 3" Value="3" />
	                <telerik:DropDownListItem runat="server" Text="Item 4" Value="4" />
	            </Items>
	        </telerik:RadDropDownList>
	
````


