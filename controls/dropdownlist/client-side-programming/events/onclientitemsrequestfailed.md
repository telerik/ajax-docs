---
title: OnClientItemsRequestFailed
page_title: OnClientItemsRequestFailed | RadDropDownList for ASP.NET AJAX Documentation
description: OnClientItemsRequestFailed
slug: dropdownlist/client-side-programming/events/onclientitemsrequestfailed
tags: onclientitemsrequestfailed
published: True
position: 9
---

# OnClientItemsRequestFailed



## 

The **OnClientItemsRequestFailed** client-side event occurs when an error has occurred while loading elements using the load-on-demand mechanism.

The event handler receives two parameters:

1. The instance of the **RadDropDownList** firing the event.

2. An eventArgs parameter containing the following methods:

	* **set_cancel** lets you prevent the default error message from displaying.

You can use this event to hide the default error message that appears in the **RadDropDownList** and display your own message instead:

````ASPNET
<script type="text/javascript">
    //Put your JavaScript code here.
    function ClientItemsRequestFailed(sender, eventArgs) {
        alert("My custom error message");
        // set cancel to hide the default message        
        eventArgs.set_cancel(true);
    }
</script>
<telerik:RadDropDownList ID="RadDropDownList1" runat="server" EmptySelectionMessage="Select" OnClientItemsRequestFailed="ClientItemsRequestFailed">
         <WebServiceSettings Path="WebService.asmx" Method="LoadItems" />
</telerik:RadDropDownList> 
````


