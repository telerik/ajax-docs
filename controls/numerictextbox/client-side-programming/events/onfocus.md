---
title: OnFocus
page_title: OnFocus - RadNumericTextBox
description: Check our Web Forms article about OnFocus.
slug: numerictextbox/client-side-programming/events/onfocus
tags: onfocus
published: True
position: 8
---

# OnFocus




The **OnFocus** client-side event handler is called when the input control gets focus.

>note The **OnFocus** event is supported by all **RadInput** controls, if they are not **ReadOnly** .
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** is an instance of [Sys.EventArgs](https://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the **OnFocus** event to show an alert:

````ASPNET
<telerik:RadNumericTextBox RenderMode="Lightweight" ID="RadNumericTextBox1" runat="server">
	<ClientEvents OnFocus="Focus" />
</telerik:RadNumericTextBox>
````



````JavaScript
<script type="text/javascript">
	function Focus(sender, eventArgs)
	{
		alert(sender.get_id());
	}
</script>
````



# See Also

 * [Receiving Focus]({%slug numerictextbox/features/receiving-focus%})

 * [OnBlur]({%slug numerictextbox/client-side-programming/events/onblur%})
