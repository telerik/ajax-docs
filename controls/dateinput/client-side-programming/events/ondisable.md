---
title: OnDisable
page_title: OnDisable | RadDateInput for ASP.NET AJAX Documentation
description: OnDisable
slug: raddateinput/client-side-programming/events/ondisable
tags: ondisable
published: True
position: 4
---

# OnDisable




The **OnDisable** client-side event handler is called when the input control is disabled.

>tip The **OnDisable** event is supported by all **RadInput** controls.
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the **OnDisable** event to enable another control when the input control is disabled:

````ASPNET
<telerik:RadDateInput RenderMode="Lightweight" ID="RadDateInput1" runat="server" ShowButton="True">
	<ClientEvents OnDisable="EnableOtherInput" OnButtonClick="ToggleEnabled" />
</telerik:RadDateInput>
<telerik:RadNumericTextBox RenderMode="Lightweight" ID="RadNumericTextBox1" runat="server" Enabled="False" ShowButton="True">
	<Clientevents ondisable="EnableOtherInput" onbuttonclick="ToggleEnabled" />
</telerik:RadNumericTextBox>
````



````JavaScript
<script type="text/javascript">
	function EnableOtherInput(sender, eventArgs)
	{
		if (sender.get_id() == "<%= RadDateInput1.ClientID %>")
		{
			var other = $find("<%= RadNumericTextBox1.ClientID %>");
			other.enable();
		}
		else if (sender.get_id() == "<%= RadNumericTextBox1.ClientID %>")
		{
			var other = $find("<%= RadDateInput1.ClientID %>");
			other.enable();
		}
	}
	function ToggleEnabled(sender, eventArgs)
	{
		if (sender.get_enabled())
			sender.disable();
		else
			sender.enable();
	}
</script>
````



# See Also

 * [OnEnable]({%slug raddateinput/client-side-programming/events/onenable%})
