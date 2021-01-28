---
title: Redirecting to Another Page
page_title: Redirecting to Another Page
description: Check our Web Forms article about Redirecting to Another Page.
slug: ajaxpanel/how-to/redirecting-to-another-page
tags: redirecting,to,another,page
published: True
position: 1
---

# Redirecting to Another Page


There are two basic kinds of redirection to a new page from the server:

* **Response.Redirect()** - The standard ASP.NET means of redirection.

* Generating JavaScript that sets **window.location.href** .

In case `Response.Redirect()` does not work for you (for example, if called during partial rendering), you can use the script generation approach through a `RadAjaxControl.Redirect()` server method exposed by `RadAjaxManager` and `RadAjaxPanel`.

This Telerik method registers JavaScript code that uses the **window.location.href** property to navigate to a new URL, while providing you with the convenience of using a simple server method.

>caption **Example 1**: Using **RadAjaxManager** Redirect()



````C#
	
RadAjaxManager1.Redirect("http://www.google.com/");
//or
RadAjaxManager.GetCurrent(Page).Redirect("http://www.google.com/");
	
````
````VB
RadAjaxManager1.Redirect("http://www.google.com/")
'or
RadAjaxManager.GetCurrent(Page).Redirect("http://www.google.com/")
````


>caption **Example 1**: Using **RadAjaxPanel** Redirect()


````C#
	
RadAjaxPanel1.Redirect("http://www.google.com/");
	        
````
````VB
RadAjaxPanel1.Redirect("http://www.google.com/")
````


## See Also

 * [Demo: Redirect with RadAjax](https://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/Redirect/DefaultCS.aspx)
