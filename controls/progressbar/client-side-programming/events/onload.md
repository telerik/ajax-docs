---
title: OnLoad
page_title: OnLoad | RadProgressBar for ASP.NET AJAX Documentation
description: OnLoad
slug: progressbar/client-side-programming/events/onload
tags: onload
published: True
position: 2
---

# OnLoad

The client-side **Load** event is raised when the **RadProgressBar** client-side object is fully loaded (the full	API of the control is available at this point). This article discusses the objects of the control's **Load** event and shows	an example of how to retrieve properties when the event occurs (**Example 1**).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the	value of the the **OnLoad** property in the control's **ClientEvents** subtag.

The client-side **OnLoad** event handler receives one argument:

1. Sender—the [RadProgressBar object]({%slug progressbar/client-side-programming/radprogressbar-object%}) that fired the event.

>caption Example 1: Handle the **RadProgressBar**'s client-side **Load** event.

````ASP.NET
<telerik:RadProgressBar runat="server" ID="RadProgressBar2" Value="30">
	<ClientEvents OnLoad="onLoad" />
</telerik:RadProgressBar>

<script>
	function onLoad(sender) {
		sender.set_value(65);
		alert("A ProgressBar with ID " + sender.get_id() + " has been loaded. Its value is " + sender.get_value() + ".");
	}
</script>
````

## See Also

 * [RadProgressBar Object]({%slug progressbar/client-side-programming/radprogressbar-object%})

 * [Overview]({%slug progressbar/client-side-programming/events/overview%})
