---
title: OnLoad
page_title: OnLoad | UI for ASP.NET AJAX Documentation
description: OnLoad
slug: progressbar/client-side-programming/events/onload
tags: onload
published: True
position: 2
---

# OnLoad



The client-side __Load__ event is raised when the __RadProgressBar__ client-side object is fully loaded (the full	API of the control is available at this point). This article discusses the objects of the control's __Load__ event and shows	an example of how to retrieve properties when the event occurs (__Example 1__).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the	value of the the __OnLoad__ property in the control's __ClientEvents__ subtag.

## 

The client-side __OnLoad__ event handler receives one argument:

1. Sender—the [RadProgressBar object]({%slug progressbar/client-side-programming/radprogressbar-object%}) that fired the event.

__Example 1__: Handle the __RadProgressBar__'s client-side __Load__ event.

````JavaScript
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



# See Also

 * [RadProgressBar Object]({%slug progressbar/client-side-programming/radprogressbar-object%})

 * [Overview]({%slug progressbar/client-side-programming/events/overview%})
