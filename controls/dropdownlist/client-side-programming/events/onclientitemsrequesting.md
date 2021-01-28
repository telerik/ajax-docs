---
title: OnClientItemsRequesting
page_title: OnClientItemsRequesting - RadDropDownList
description: Check our Web Forms article about OnClientItemsRequesting.
slug: dropdownlist/client-side-programming/events/onclientitemsrequesting
tags: onclientitemsrequesting
published: True
position: 10
---

# OnClientItemsRequesting



## 

The **OnClientItemsRequesting** client-side event occurs when the **RadDropDownList** is about to send a server-side request to load its items from the web service. This event fires before the items are added to the **RadDropDownList** Items collection.

The event handler receives two parameters:

1. The instance of the **RadDropDownList** firing the event.

2. An eventArgs parameter containing the following methods:

	* **get_context** returns a context object (implements **IDictionary**) that is passed to the server-side code that handles the request for items.

	* **set_cancel** lets you prevent the items request.

This event can be used to pass context information to the server for it to use in servicing the request, or to cancel the request. The following example uses the **OnClientItemsRequesting** event to sample string value to the server:

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


