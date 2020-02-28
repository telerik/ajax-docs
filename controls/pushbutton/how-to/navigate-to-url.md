---
title: Navigate to Url
page_title: Navigate to Url | RadPushButton for ASP.NET AJAX Documentation
description: Navigate to Url
slug: pushbutton/how-to/navigate-to-url-with-pushbutton
tags: navigate, to, url,with,pushbutton
published: True
position: 0
---

# Navigate to Url with RadPushButton

**RadPushButton** doesn't expose a **NavigateUrl** property which is used by **RadLinkButton** for specifying a URL to redirect to.

There is a way to achieve this functionality with a **RadPushButton** as well by handling the client-side event **OnClientClicking**. In the event handler you should open with JavaScript the URL, specified in the **CommandName** property. The code below demonstrates how to implement such functionality:

````ASP.NET
<script type="text/javascript">
	function OnClientClicking(button, args) {
		window.location = button.get_commandName();
		args.set_cancel(true);
	}
</script>

<telerik:RadPushButton ID="RadPushButton" runat="server" Text="RadPushButton" CommandName="https://www.telerik.com/" OnClientClicking="OnClientClicking">
</telerik:RadPushButton>
````

>note You should cancel the click event and the post-back after the redirect, via the **set_cancel** client-side method.

## See Also

 * [OnClientClicking]({%slug pushbutton/client-side-programming/events/onclientclicking%})
 
 * [LinkButton Overview]({%slug linkbutton/overview%})
