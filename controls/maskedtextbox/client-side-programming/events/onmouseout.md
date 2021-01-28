---
title: OnMouseOut
page_title: OnMouseOut - RadMaksedTextBoxxtBox
description: Check our Web Forms article about OnMouseOut.
slug: radmaskedtextbox/client-side-programming/events/onmouseout
tags: onmouseout
published: True
position: 11
---

# OnMouseOut




The **OnMouseOut** client-side event handler is called when the mouse moves off the input area of the control.

Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** is an instance of [Sys.EventArgs](https://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the **OnMouseOut** event to display an alert:

````ASPNET
<telerik:RadMaskedTextBox RenderMode="Lightweight" ID="RadMaskedTextBox1" runat="server">
	<ClientEvents OnMouseOut="MouseOut" />
</telerik:RadMaskedTextBox>
````



````JavaScript
<script type="text/javascript">
	function MouseOut(sender, eventArgs)
	{
		alert(sender.get_id());
	}
</script>
````



# See Also

 * [OnMouseOver]({%slug radmaskedtextbox/client-side-programming/events/onmouseover%})
