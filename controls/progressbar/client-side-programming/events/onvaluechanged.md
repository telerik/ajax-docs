---
title: OnValueChanged
page_title: OnValueChanged | RadProgressBar for ASP.NET AJAX Documentation
description: OnValueChanged
slug: progressbar/client-side-programming/events/onvaluechanged
tags: onvaluechanged
published: True
position: 4
---

# OnValueChanged



The client-side **ValueChanged** event is raised after the **RadProgressBar** value property has been changed.	This article discusses the objects of the control's **ValueChanged** event and shows	an example of how to retrieve properties when the event occurs (**Example 1**).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the	value of the the **OnValueChanged** property in the control's **ClientEvents** subtag.

## 

The client-side **OnValueChanged** event handler receives one argument:

1. Sender—the [RadProgressBar object]({%slug progressbar/client-side-programming/radprogressbar-object%}) that fired the event.

**Example 1**: Handle the **RadProgressBar**'s client-side **ValueChanged** event.

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
