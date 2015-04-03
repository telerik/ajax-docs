---
title: OnClientItemsRequesting
page_title: OnClientItemsRequesting | UI for ASP.NET AJAX Documentation
description: OnClientItemsRequesting
slug: dropdownlist/client-side-programming/events/onclientitemsrequesting
tags: onclientitemsrequesting
published: True
position: 10
---

# OnClientItemsRequesting



## 

The __OnClientItemsRequesting__ client-side event occurs when the __RadDropDownList__ is about to send a server-side request to load its items from the web service. This event fires before the items are added to the __RadDropDownList__ Items collection.

The event handler receives two parameters:

1. The instance of the __RadDropDownList__ firing the event.

1. An eventArgs parameter containing the following methods:

* __get_context__ returns a context object (implements __IDictionary__) that is passed to the server-side code that handles the request for items.

* __set_cancel__ lets you prevent the items request.

This event can be used to pass context information to the server for it to use in servicing the request, or to cancel the request. The following example uses the __OnClientItemsRequesting__ event to sample string value to the server:

````JavaScript
	        <script type="text/javascript">
	            //Put your JavaScript code here.
	            function clientItemRequesting(sender, eventArgs) {
	                var context = eventArgs.get_context();
	                context["FilterString"] = "value sent to server";
	            }
	        </script>
	        <telerik:raddropdownlist id="RadDropDownList1" runat="server" emptyselectionmessage="Select" onclientitemsrequesting="clientItemRequesting">
	                 <WebServiceSettings Path="WebService.asmx" Method="GetCustomerNames" />
	        </telerik:raddropdownlist>
````


