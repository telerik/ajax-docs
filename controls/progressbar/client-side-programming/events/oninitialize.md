---
title: OnInitialize
page_title: OnInitialize | UI for ASP.NET AJAX Documentation
description: OnInitialize
slug: progressbar/client-side-programming/events/oninitialize
tags: oninitialize
published: True
position: 1
---

# OnInitialize



The client-side __Initialize__ event is raised when the __RadProgressBar__ client-side object is initialized. This article	discusses the objects of the control's __Initialize__ event and shows	an example of how to retrieve properties when the event occurs (__Example 1__).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the	value of the the __OnInitialize__ property in the control's __ClientEvents__ subtag.

## 

The client-side __OnInitialize__ event handler receives one argument:

1. Sender—the [RadProgressBar object]({%slug progressbar/client-side-programming/radprogressbar-object%}) that fired the event.

__Example 1__: Handle the __RadProgressBar__'s client-side __Initialize__ event.

````JavaScript
			<telerik:RadProgressBar runat="server" ID="RadProgressBar1" Value="30">
				<ClientEvents OnInitialize="onInitialize" />
			</telerik:RadProgressBar>
	
			<script>
				function onInitialize(sender) {
					alert("A ProgressBar with ID " + sender.get_id() + " has been initialized.");
				}
			</script>
````



# See Also

 * [RadProgressBar Object]({%slug progressbar/client-side-programming/radprogressbar-object%})

 * [Overview]({%slug progressbar/client-side-programming/events/overview%})
