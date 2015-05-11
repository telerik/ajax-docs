---
title: Firefox Specifics
page_title: Firefox Specifics | RadAjax for ASP.NET AJAX Documentation
description: Firefox Specifics
slug: ajax/troubleshooting/firefox-specifics
tags: firefox,specifics
published: True
position: 5
---

# Firefox Specifics



## 

Firefox 1.5 and up uses in-memory caching for entire web pages, including their JavaScript states, for a single browser session. Going backward and forward between visited pages requires no page loading and the JavaScript states are preserved. This feature, referred to by some as *bfcache* (for "Back-Forward Cache"), makes page navigation very fast. This caching state is preserved until the user closes the browser.

However, this Firefox feature caches the page viewstate field as well thus breaking the asynchronous postback calls to the server in some scenarios (page refreshes, Back button navigation). For example the problem is evident if you refresh a page in Firefox with the F5 button and not with the Ctrl+F5 combination (the former does not clear the form values, whereas the latter does clear them) and then try to perform an AJAX request. The result you would most certainly get is a "The state information is invalid for this page and might be corrupted" page exception.

The [Mozilla Development Center](http://developer.mozilla.org/en/docs/Using_Firefox_1.5_caching) states that setting *"cache-control: no-store"* in the response header of the page prevents Firefox from caching the page so you could use the following code snippet to add a *cache-control: no-store *response header to any page requested by any browser that is not Internet Explorer:



````C#
	
protected void Page_Load(object sender, EventArgs e)
	{
	        if (Request.Browser.MSDomVersion.Major == 0) // Non IE Browser?
	        {
	            Response.Cache.SetNoStore(); // No client side cashing for non IE browsers
	        }
	}
				
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	        ' Non IE Browser?
	        If (Request.Browser.MSDomVersion.Major = 0) Then
	            Response.Cache.SetNoStore() ' No client side cashing for non IE browsers End IfEnd Sub
	        End If
End Sub
````

