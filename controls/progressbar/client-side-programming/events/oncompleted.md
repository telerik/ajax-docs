---
title: OnCompleted
page_title: OnCompleted | UI for ASP.NET AJAX Documentation
description: OnCompleted
slug: progressbar/client-side-programming/events/oncompleted
tags: oncompleted
published: True
position: 5
---

# OnCompleted



The client-side __Completed__ event is raised when the __RadProgressBar__ reaches its max value.	This article discusses the objects of the control's __Completed__ event and shows	an example of how to retrieve properties when the event occurs (__Example 1__).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the	value of the the __OnCompleted__ property in the control's __ClientEvents__ subtag.

## 

The client-side __OnCompleted__ event handler receives one argument:

1. Sender—the [RadProgressBar object]({%slug progressbar/client-side-programming/radprogressbar-object%}) that fired the event.

__Example 1__: Handle the __RadProgressBar__'s client-side __Completed__ event.

````JavaScript
			<telerik:RadProgressBar runat="server" ID="RadProgressBar5" Value="30">
				<ClientEvents OnCompleted="onCompleted"/>
			</telerik:RadProgressBar>
			<asp:Button ID="Button3" runat="server" Text="Change Value" OnClientClick="updateValue(); return false;" />
			
			<script>
				function updateValue() {
					$find("<%=RadProgressBar5.ClientID%>").set_value(100);
				}
				function onCompleted(sender, args) {
					alert("The progress of a ProgressBar with ID " + sender.get_id() + " was completed. Its value reached " + sender.get_value() + ".");
				}
			</script>
````



# See Also

 * [RadProgressBar Object]({%slug progressbar/client-side-programming/radprogressbar-object%})

 * [Overview]({%slug progressbar/client-side-programming/events/overview%})
