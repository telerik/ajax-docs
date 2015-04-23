---
title: OnClientItemRequestFailed
page_title: OnClientItemRequestFailed | RadComboBox for ASP.NET AJAX Documentation
description: OnClientItemRequestFailed
slug: combobox/client-side-programming/events/onclientitemrequestfailed
tags: onclientitemrequestfailed
published: True
position: 9
---

# OnClientItemRequestFailed



## 

The **OnClientItemsRequestFailed** client-side event occurs when an error has occurred while loading elements using the load-on-demand mechanism.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following methods:

* **get_errorMessage** returns the error message.

* **set_cancel** lets you prevent the default error message from displaying.

You can use this event to hide the default error message that appears in the combobox and display your own message instead:

````ASPNET
<script language="javascript" type="text/javascript">  
function OnClientItemsRequestFailedHandler(sender, eventArgs)  
{    
	alert("My custom error message");
	// set cancel to hide the default message        
	eventArgs.set_cancel(true);
}
</script>
<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	enableloadondemand="True" 
	onitemsrequested="RadComboBox1_ItemsRequested"
	onclientitemsrequestfailed="OnClientItemsRequestFailedHandler">
</telerik:radcombobox>
````



# See Also

 * [Overview]({%slug combobox/load-on-demand/overview%})

 * [OnClientItemRequesting]({%slug combobox/client-side-programming/events/onclientitemrequesting%})

 * [OnClientItemRequested]({%slug combobox/client-side-programming/events/onclientitemrequested%})
