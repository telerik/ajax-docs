---
title: OnEnable
page_title: OnEnable | RadMaksedTextBox for ASP.NET AJAX Documentation
description: OnEnable
slug: radmaskedtextbox/client-side-programming/events/onenable
tags: onenable
published: True
position: 5
---

# OnEnable



The **OnEnable** client-side event handler is called when the input control is enabled.

>note The **OnEnable** event is supported by all **RadInput** controls.
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** is an instance of [Sys.EventArgs](https://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the **OnEnable** event to disable another control when the input control is enabled:

````ASPNET
<telerik:RadMaskedTextBox RenderMode="Lightweight" ID="RadMaskedTextBox1" runat="server" ShowButton="True">
	<ClientEvents OnEnable="DisableOtherInput" OnButtonClick="ToggleEnabled" />
</telerik:RadMaskedTextBox>
<telerik:RadNumericTextBox RenderMode="Lightweight" ID="RadNumericTextBox1" runat="server" Enabled="False" ShowButton="True">
		<ClientEvents onenable="DisableOtherInput" onbuttonclick="ToggleEnabled" />
</telerik:RadNumericTextBox>
````



````JavaScript
<script type="text/javascript">
	function DisableOtherInput(sender, eventArgs)
	{
		if (sender.get_id() == "<%= RadMaskedTextBox1.ClientID %>")
		{
			var other = $find("<%= RadNumericTextBox1.ClientID %>");
			other.disable();
		}
		else if (sender.get_id() == "<%= RadNumericTextBox1.ClientID %>")
		{
			var other = $find("<%= RadMaskedTextBox1.ClientID %>");
			other.disable();
		}
	}
	function ToggleEnabled(sender, eventArgs)
	{
		if (sender.get_enabled()) sender.enable();
		else sender.enable();
	}
</script>
````



# See Also

 * [OnDisable]({%slug radmaskedtextbox/client-side-programming/events/ondisable%})
