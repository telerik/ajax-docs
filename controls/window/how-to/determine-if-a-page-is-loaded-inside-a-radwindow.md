---
title: Determine if a Page is Loaded Inside a RadWindow
page_title: Determine if a Page is Loaded Inside a RadWindow | UI for ASP.NET AJAX Documentation
description: Determine if a Page is Loaded Inside a RadWindow
slug: window/how-to/determine-if-a-page-is-loaded-inside-a-radwindow
tags: determine,if,a,page,is,loaded,inside,a,radwindow
published: True
position: 7
---

# Determine if a Page is Loaded Inside a RadWindow



Sometimes it is necessary to determine whether your page is loaded inside a RadWindow so that you can, for example, redirect the whole browser and not just the RadWindow. This scenario is actually related to the way iframes work in the sense that they are a separate document and thus it also applies to RadWindow, since it uses an iframe to load external pages.

Such a check is most often necessary when the Session times out and you need the user to log in again or you are trying to show a general error page. This check is not possible on the server and can be done via JavaScript only. There are several ways to achieve it:

## A Common frame buster script

The logic behind it is simple - if this page is not displayed as a topmost page (e.g directly in the browser) but in some container (like IFRAME / RadWindow /etc.) - load it as topmost page. This way when your session is expired and you open / submit a page in a RadWindow, you'll be redirected to the login page inside the RadWindow. Because of the script above, however, the login page will be loaded as topmost - directly in the browser's window.

````JavaScript
	    <script type="text/javascript">
	        if (window != window.top) window.top.location.href = window.location.href;
	    </script>
````



## Checking whether you are in a RadWindow only

Sometimes you may be interested only if your page is inside a RadWindow and not in a general iframe tree, especially if you expect that your page may be used by another site - in that case you may not be able to use window.top due to the cross-browser scripting limitation of JavaScript. It is possible, of course, that the external site will load your page inside a RadWindow, yet this is just an example that may be useful in the internal environment. Its logic is based on the GetRadWindow() function that used to get a reference to the RadWindow from within the RadWindow.

````JavaScript
	        <script type="text/javascript">
	            function GetRadWindow()
	              { 
	                  var oWindow = null;
	                  if (window.radWindow) oWindow = window.radWindow;
	                  else if (window.frameElement && window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
	                  return oWindow;
	              }
	 
	            function CheckWnd()
	              {
	                  var wnd = GetRadWindow();
	                  if (wnd)
	                  {
	                      alert("This page is loaded in a RadWindow");
	                  }
	                  else
	                  {
	                      alert("The page is loaded in the browser");
	                  }
	              }
	
	            CheckWnd();
	      </script>
````


