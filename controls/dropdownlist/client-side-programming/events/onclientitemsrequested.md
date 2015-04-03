---
title: OnClientItemsRequested
page_title: OnClientItemsRequested | UI for ASP.NET AJAX Documentation
description: OnClientItemsRequested
slug: dropdownlist/client-side-programming/events/onclientitemsrequested
tags: onclientitemsrequested
published: True
position: 11
---

# OnClientItemsRequested



## 

The __OnClientItemsRequested__ client-side event occurs after the the portion of items is added to the __RadDropDownList__.

The event handler receives the following parameter:

1. The instance of the __RadDropDownList__ firing the event.

````ASPNET
	        <telerik:RadDropDownList ID="RadDropDownList1" runat="server" EnableVirtualScrolling="true" DropDownHeight="150px" OnClientItemsRequested="OnClientItemsRequested">
	            <WebServiceSettings Path="WebService.asmx" Method="GetCustomerNames" />
	        </telerik:RadDropDownList>
````



````JavaScript
	    <script type="text/javascript">
	        function OnClientItemsRequested(sender, eventArgs) {
	            alert("There are " + sender.get_items().get_count() + " items.");
	        }
	    </script>
````


