---
title: OnFocus
page_title: OnFocus | RadDateInput for ASP.NET AJAX Documentation
description: OnFocus
slug: raddateinput/client-side-programming/events/onfocus
tags: onfocus
published: True
position: 8
---

# OnFocus



##

The **OnFocus** client-side event handler is called when the input control gets focus.

>note The **OnFocus** event is supported by all **RadInput** controls, if they are not **ReadOnly** .
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the **OnFocus** event to show an alert:

````ASPNET
<telerik:RadDateInput ID="RadDateInput1" runat="server">
	<ClientEvents OnFocus="Focus" />
</telerik:RadDateInput>
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

 * [Receiving Focus]({%slug raddateinput/features/receiving-focus%})

 * [OnBlur]({%slug raddateinput/client-side-programming/events/onblur%})
