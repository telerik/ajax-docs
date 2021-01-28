---
title: OnClientValueChanging
page_title: OnClientValueChanging - RadSlider
description: Check our Web Forms article about OnClientValueChanging.
slug: slider/client-side-programming/events/onclientvaluechanging
tags: onclientvaluechanging
published: True
position: 10
---

# OnClientValueChanging

The **OnClientValueChanging** client-side event occurs before the value property changes.

The event handler receives parameters:

1. The slider instance that fired the event.

1. Event arguments with the following properties:

	* **get_oldValue**: returns the slider value just prior to the change.

	* **get_newValue**: returns the value that will be set after the change.

	* **set_cancel**: cancel the change of the value.

	* **get_cancel**: returns a boolean that indicates whether the change of the value is cancelled.

The example below displays the new and old values.

````ASP.NET
<script type="text/javascript">
function clientBeforeValueChange(sender, eventArgs)
{ 
	var myDiv = document.getElementById("myDiv");
	myDiv.innerHTML = "Old value is:" + eventArgs.get_oldValue() + " New value:" + eventArgs.get_newValue();
	eventArgs.set_cancel(true); 
} 
</script>

<div id="myDiv">
</div>

<telerik:radslider id="RadSlider1" runat="server" onclientvaluechanging="clientBeforeValueChange" />
````


