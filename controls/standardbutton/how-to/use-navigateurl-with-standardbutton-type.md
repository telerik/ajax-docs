---
title: Use NavigateUrl with RadStandardButton
page_title: Use NavigateUrl with RadStandardButton | RadStandardButton for ASP.NET AJAX Documentation
description: Use NavigateUrl with RadStandardButton
slug: standardbutton/how-to/use-navigateurl-with-standardbutton-type
tags: use,navigateurl,with,standardbutton,type
published: True
position: 1
---

# Use NavigateUrl with RadStandardButton

The **RadLinkButton** control has a **NavigateUrl** property which is used for specifying a URL to redirect to.

There is a way to achieve this functionality with a **RadStandardButton** as well by handling the client-side event **OnClientClicking**. In the event handler you should open with JavaScript the URL, specified in the **CommandName** property. The code below demonstrates how to implement such functionality:

````ASP.NET
<script type="text/javascript">
	function OnClientClicking(button, args) {
		window.location = button.get_commandName();
		args.set_cancel(true);
	}
</script>

<telerik:RadStandardButton ID="RadStandardButton" runat="server" Text="RadStandardButton" CommandName="http://www.telerik.com/" OnClientClicking="OnClientClicking">
</telerik:RadStandardButton>
````

>note Please note that you should cancel the click event and the post-back after the redirect, via the **set_cancel** client-side method.

## See Also

 * [OnClientClicking]({%slug standardbutton/client-side-programming/events/onclientclicking%})

 * [RadStandardButton Validation and Client-side Event Handlers]({%slug standardbutton/how-to/radstandardbutton-validation-and-client-side-event-handlers%})
