---
title: OnValueChanging
page_title: OnValueChanging | UI for ASP.NET AJAX Documentation
description: OnValueChanging
slug: progressbar/client-side-programming/events/onvaluechanging
tags: onvaluechanging
published: True
position: 3
---

# OnValueChanging



The client-side __ValueChanging__ event is raised just before the __RadProgressBar__ value property is	changed. You can handle this event in case you want to prevent the current value from changing. This article	discusses the objects of the control's __ValueChanging__ event and shows	an example of how to retrieve properties when the event occurs (__Example 1__).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the	value of the the __OnValueChanging__ property in the control's __ClientEvents__ subtag.

## 

The client-side __OnValueChanging__ event handler receives two arguments:

1. Sender—the [RadProgressBar object]({%slug progressbar/client-side-programming/radprogressbar-object%}) that fired the event.

1. Event arguments—an event arguments object that exposes the following methods:


>caption OnValueChanging Event Arguments Object

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|get_cancel()||Boolean|Gets a value that indicates whether the event is cancelled.|
|get_value()||Numeric|Returns the current progress value. Undefined means indeterminate state.|
|set_cancel(value)|Boolean||Sets whether the event will be cancelled (if true is passed).|
|set_value(value)|Numeric, Boolean||Sets new progress value to the control. If set to undefined/false or no parameter is passed, the state of the control becomes indeterminate.|

__Example 1__: Handle the __RadProgressBar__'s client-side __ValueChanging__ event.

````JavaScript
			<telerik:RadProgressBar runat="server" ID="RadProgressBar3" Value="30">
				<ClientEvents OnValueChanging="onValueChanging" />
			</telerik:RadProgressBar>
			<asp:Button ID="Button1" runat="server" Text="Change Value" OnClientClick="updateValue(); return false;" />
			
			<script>
				function updateValue() {
					$find("<%=RadProgressBar3.ClientID%>").set_value(65);
				}
				function onValueChanging(sender, args) {
					alert("The value of a ProgressBar with ID " + sender.get_id() + " is about to be changed. Its current value is " + sender.get_value() +
						", while the new one will be " + args.get_value() + ".");
					args.set_cancel() //cancel the event
				}
			</script>
````



# See Also

 * [RadProgressBar Object]({%slug progressbar/client-side-programming/radprogressbar-object%})

 * [Overview]({%slug progressbar/client-side-programming/events/overview%})
