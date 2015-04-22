---
title: Redirecting to Another Page
page_title: Redirecting to Another Page | RadAjax for ASP.NET AJAX Documentation
description: Redirecting to Another Page
slug: ajax/how-to/redirecting-to-another-page
tags: redirecting,to,another,page
published: True
position: 1
---

# Redirecting to Another Page



Telerik RadAjax supports two kinds of redirection:

* **Response.Redirect()**- The standard ASP.NET means of redirection.

* Generating JavaScript that sets **window.location.href**.

>caution Currently there is a security issue that prevents Response.Redirect with AJAX from working in Windows Server 2008. IIS 7 simply does not allow catching the Application events. You should be able to use the RadAjaxManager.Redirect method instead.
>


## Redirecting on the Client (JavaScript window.location.href)

**RadAjaxManager** and **RadAjaxPanel** also support the **Redirect()**method, which in essence adds short JavaScript code to be evaluated after the AJAX request. The JavaScript code uses the **window.location.href** property to navigate to a new URL.

**Example 1**: Using **RadAjaxManager** and **RadAjaxPanel** Redirect()



````C#
	
	        RadAjaxManager1.Redirect("http://www.google.com/");
	
````
````VB.NET
	        RadAjaxManager1.Redirect("http://www.google.com/")
````


or



````C#
	
	        RadAjaxPanel1.Redirect("http://www.google.com/");
	        
````
````VB.NET
	        RadAjaxPanel1.Redirect("http://www.google.com/")
````


# See Also

 * [Demo: Redirect with RadAjax](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/Redirect/DefaultCS.aspx)
