---
title: OnLoad
page_title: OnLoad | RadNumericTextBox for ASP.NET AJAX Documentation
description: OnLoad
slug: numerictextbox/client-side-programming/events/onload
tags: onload
published: True
position: 10
---

# OnLoad



The **OnLoad** client-side event handler is called when the input control is loaded on the client.

>note The **OnLoad** event is supported by all **RadInput** controls.
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following RadNumericTextBox uses the **OnLoad** event to change the background color of a text box:

````ASPNET
<telerik:RadNumericTextBox RenderMode="Lightweight" ID="RadNumericTextBox1" runat="server">
	<ClientEvents OnLoad="Load" />
</telerik:RadNumericTextBox>
````



````JavaScript
<script type="text/javascript">
	function Load(sender)
	{
		sender.get_styles().EnabledStyle[0] += "background-color: lemonchiffon;";
		sender.updateCssClass();
	}
</script>
````


