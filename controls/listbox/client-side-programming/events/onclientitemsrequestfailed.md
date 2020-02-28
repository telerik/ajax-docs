---
title: OnClientItemsRequestFailed
page_title: OnClientItemsRequestFailed | RadListBox for ASP.NET AJAX Documentation
description: OnClientItemsRequestFailed
slug: listbox/client-side-programming/events/onclientitemsrequestfailed
tags: onclientitemsrequestfailed
published: True
position: 16
---

# OnClientItemsRequestFailed

## 

The **OnClientItemsRequestFailed** client-side event occurs when an error has occurred while loading elements using the load-on-demand mechanism.

The event handler receives two parameters:

1. The instance of the listbox firing the event.

1. An eventArgs parameter containing the following methods:

* **get_errorMessage** returns the error message.

* **set_cancel** lets you prevent the default error message from displaying.

You can use this event to display the default error message, or to cancel the event, in order to display a custom error message.

````JavaScript
<script type="text/javascript">
	function OnClientItemsRequestFailed(sender, eventArgs) {
		alert(eventArgs.get_errorMessage());
	}
</script>
````

# See Also

 * [Load On Demand Demo](https://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/loadondemand/defaultcs.aspx)
