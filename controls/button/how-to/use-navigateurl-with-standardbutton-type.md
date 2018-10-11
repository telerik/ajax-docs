---
title: Use NavigateUrl with StandardButton Type
page_title: Use NavigateUrl with StandardButton Type | RadButton for ASP.NET AJAX Documentation
description: Use NavigateUrl with StandardButton Type
slug: button/how-to/use-navigateurl-with-standardbutton-type
tags: use,navigateurl,with,standardbutton,type
published: True
position: 1
---

# Use NavigateUrl with StandardButton Type

The **RadButton** control has a **NavigateUrl** property which is used for specifying a URL to redirect to, when the button is set to **ButtonType=LinkButton**.

There is a way to achieve this functionality with a **RadButton** configured as **StandardButton** by handling the client-side event **OnClientClicking**. In the event handler you should open with JavaScript the URL, specified in the **NavigateUrl** property. The code below demonstrates how to implement such functionality:

````ASP.NET
<script type="text/javascript">
	function OnClientClicking(button, args) {
		window.location = button.get_navigateUrl();
		args.set_cancel(true);
	}
</script>

<telerik:RadButton RenderMode="Lightweight" ID="RadButton" runat="server" Text="RadButton" NavigateUrl="http://www.telerik.com/" OnClientClicking="OnClientClicking">
</telerik:RadButton>
````

>tip Please note that you should cancel the click event and the post-back after the redirect, via the **set_cancel** client-side method.

## See Also

 * [OnClientClicking]({%slug button/client-side-programming/events/onclientclicking%})

 * [RadButton Validation and Client-side Event Handlers]({%slug button/how-to/radbutton-validation-and-client-side-event-handlers%})
