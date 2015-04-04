---
title: Redirecting to Another Page
page_title: Redirecting to Another Page | UI for ASP.NET AJAX Documentation
description: Redirecting to Another Page
slug: ajax/application-scenarios/redirecting-to-another-page
tags: redirecting,to,another,page
published: True
position: 1
---

# Redirecting to Another Page



Telerik RadAjax supports two kinds of redirection:

* __Response.Redirect()__- The standard ASP.NET means of redirection.

* Generating JavaScript that sets __window.location.href__.

>caution Currently there is a security issue that prevents Response.Redirect with AJAX from working in Windows Server 2008. IIS 7 simply does not allow catching the Application events. You should be able to use the RadAjaxManager.Redirect method instead.
>


## Redirecting on the Client (JavaScript window.location.href)

__RadAjaxManager__ and __RadAjaxPanel__ also support the __Redirect()__method, which in essence adds short JavaScript code to be evaluated after the AJAX request. The JavaScript code uses the __window.location.href__ property to navigate to a new URL.

__Example 1__: Using __RadAjaxManager__ and __RadAjaxPanel__ Redirect()

>tabbedCode

````C#
	
	        RadAjaxManager1.Redirect("http://www.google.com/");
	
````
````VB.NET
	        RadAjaxManager1.Redirect("http://www.google.com/")
````
>end

or

>tabbedCode

````C#
	
	        RadAjaxPanel1.Redirect("http://www.google.com/");
	        
````
````VB.NET
	        RadAjaxPanel1.Redirect("http://www.google.com/")
````
>end

# See Also

 * [Demo: Redirect with RadAjax](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/Redirect/DefaultCS.aspx)
