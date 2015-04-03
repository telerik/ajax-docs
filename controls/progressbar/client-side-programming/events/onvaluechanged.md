---
title: OnValueChanged
page_title: OnValueChanged | UI for ASP.NET AJAX Documentation
description: OnValueChanged
slug: progressbar/client-side-programming/events/onvaluechanged
tags: onvaluechanged
published: True
position: 4
---

# OnValueChanged



The client-side __ValueChanged__ event is raised after the __RadProgressBar__ value property has been changed.	This article discusses the objects of the control's __ValueChanged__ event and shows	an example of how to retrieve properties when the event occurs (__Example 1__).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the	value of the the __OnValueChanged__ property in the control's __ClientEvents__ subtag.

## 

The client-side __OnValueChanged__ event handler receives one argument:

1. Sender—the [RadProgressBar object]({%slug progressbar/client-side-programming/radprogressbar-object%}) that fired the event.

__Example 1__: Handle the __RadProgressBar__'s client-side __ValueChanged__ event.

````JavaScript
			<telerik:RadProgressBar runat="server" ID="RadProgressBar4" Value="30">
				<ClientEvents OnValueChanged="onValueChanged" />
			</telerik:RadProgressBar>
			<asp:Button ID="Button2" runat="server" Text="Change Value" OnClientClick="updateValue(); return false;" />
			
			<script>
				function updateValue() {
					$find("<%=RadProgressBar4.ClientID%>").set_value(65);
				}
				function onValueChanged(sender, args) {
					alert("The value of a ProgressBar with ID " + sender.get_id() + " was changed. Its new value is " + sender.get_value() + ".");
				}
			</script>
````



# See Also

 * [RadProgressBar Object]({%slug progressbar/client-side-programming/radprogressbar-object%})

 * [Overview]({%slug progressbar/client-side-programming/events/overview%})
