---
title: OnFocus
page_title: OnFocus - RadTextBox
description: Check our Web Forms article about OnFocus.
slug: radtextbox/client-side-programming/events/onfocus
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
<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" runat="server">
	<ClientEvents OnFocus="Focus" />
</telerik:RadTextBox>
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

 * [Receiving Focus]({%slug radtextbox/features/receiving-focus%})

 * [OnBlur]({%slug radtextbox/client-side-programming/events/onblur%})
