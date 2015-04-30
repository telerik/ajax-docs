---
title: OnInitialize
page_title: OnInitialize | RadProgressBar for ASP.NET AJAX Documentation
description: OnInitialize
slug: progressbar/client-side-programming/events/oninitialize
tags: oninitialize
published: True
position: 1
---

# OnInitialize

The client-side **Initialize** event is raised when the **RadProgressBar** client-side object is initialized. This article	discusses the objects of the control's **Initialize** event and shows	an example of how to retrieve properties when the event occurs (**Example 1**).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the	value of the the **OnInitialize** property in the control's **ClientEvents** subtag.

The client-side **OnInitialize** event handler receives one argument:

1. Sender—the [RadProgressBar object]({%slug progressbar/client-side-programming/radprogressbar-object%}) that fired the event.

>caption Example 1: Handle the **RadProgressBar**'s client-side **Initialize** event.

````ASP.NET
<telerik:RadProgressBar runat="server" ID="RadProgressBar1" Value="30">
	<ClientEvents OnInitialize="onInitialize" />
</telerik:RadProgressBar>

<script>
	function onInitialize(sender) {
		alert("A ProgressBar with ID " + sender.get_id() + " has been initialized.");
	}
</script>
````


## See Also

 * [RadProgressBar Object]({%slug progressbar/client-side-programming/radprogressbar-object%})

 * [Overview]({%slug progressbar/client-side-programming/events/overview%})
