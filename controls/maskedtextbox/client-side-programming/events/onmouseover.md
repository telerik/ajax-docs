---
title: OnMouseOver
page_title: OnMouseOver | RadMaksedTextBox for ASP.NET AJAX Documentation
description: OnMouseOver
slug: radmaskedtextbox/client-side-programming/events/onmouseover
tags: onmouseover
published: True
position: 12
---

# OnMouseOver




The **OnMouseOver** client-side event handler is called when the mouse moves over the input area of the control.


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the **OnMouseOver** event to display an alert:

````ASPNET
<telerik:RadMaskedTextBox ID="RadMaskedTextBox1" runat="server">
	<ClientEvents OnMouseOver="MouseOver" />
</telerik:RadMaskedTextBox>
````



````JavaScript
<script type="text/javascript">
	function MouseOver(sender, eventArgs)
	{
		alert(sender.get_id());
	}
</script>
````



# See Also

 * [OnMouseOut]({%slug radmaskedtextbox/client-side-programming/events/onmouseout%})
