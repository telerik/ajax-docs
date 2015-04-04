---
title: Forcing a Postback
page_title: Forcing a Postback | UI for ASP.NET AJAX Documentation
description: Forcing a Postback
slug: ajax/client-side-programming/how-to/forcing-a-postback
tags: forcing,a,postback
published: True
position: 3
---

# Forcing a Postback



## 

If you want to perform a single postback instead of an AJAX request, __arguments.EnableAjax__ should be __false__.

In the code-behind:



````C#
	        if (!RadAjaxManager1.EnableAJAX)
	        {
	            RadAjaxManager1.ClientEvents.OnRequestStart = "OnRequestStart";
	        }
	
````
````VB
	        If Not RadAjaxManager1.EnableAJAX Then
	            RadAjaxManager1.ClientEvents.OnRequestStart = "OnRequestStart"
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
	
	        RadAjaxManager1.EnableAJAX = Page.Request.Browser.SupportsXmlHttp;
	
````
````VB
	        RadAjaxManager1.EnableAJAX = Page.Request.Browser.SupportsXmlHttp
````


# See Also

 * [Cancel AJAX  Request]({%slug ajax/client-side-programming/how-to/cancel-ajax--request%})

 * [OnRequestStart]({%slug ajax/client-side-programming/events/onrequeststart%})
