---
title: OnFocus
page_title: OnFocus | RadMaksedTextBox for ASP.NET AJAX Documentation
description: OnFocus
slug: radmaskedtextbox/client-side-programming/events/onfocus
tags: onfocus
published: True
position: 8
---

# OnFocus



The **OnFocus** client-side event handler is called when the input control gets focus.


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


 * [OnBlur]({%slug radmaskedtextbox/client-side-programming/events/onblur%})
