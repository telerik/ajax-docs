---
title: Forcing a Postback
page_title: Forcing a Postback
description: Check our Web Forms article about Forcing a Postback.
slug: ajaxpanel/client-side-programming/how-to/forcing-a-postback
tags: forcing,a,postback
published: True
position: 3
---

# Forcing a Postback



## 

If you want to perform a single postback instead of an AJAX request, **arguments.EnableAjax** should be **false** .

In the code-behind:



````C#
if (!RadAjaxPanel1.EnableAJAX)
	{
	     RadAjaxPanel1.ClientEvents.OnRequestStart = "OnRequestStart";
	}
	
````
````VB
 If Not RadAjaxPanel1.EnableAJAX Then
	    RadAjaxPanel1.ClientEvents.OnRequestStart = "OnRequestStart"
End If
````


On the client:

````JavaScript
function OnRequestStart(sender, args) {
	args.set_enableAjax(false); 
}
````



This approach is useful only when you want to perform a single postback. If you want to disable AJAX because of unsupported browsers or old versions of supported ones, we suggest you to do this on the server:



````C#
	
RadAjaxPanel1.EnableAJAX = Page.Request.Browser.SupportsXmlHttp;
	
````
````VB
RadAjaxPanel1.EnableAJAX = Page.Request.Browser.SupportsXmlHttp
````


## See Also

 * [Cancel AJAX  Request]({%slug ajaxpanel/client-side-programming/how-to/cancel-ajax--request%})

 * [OnRequestStart]({%slug ajaxpanel/client-side-programming/events/onrequeststart%})
