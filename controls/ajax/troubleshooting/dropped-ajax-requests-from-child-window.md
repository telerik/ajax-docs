---
title: Dropped AJAX Requests from Child Window
page_title: Dropped AJAX Requests from Child Window | RadAjax for ASP.NET AJAX Documentation
description: Dropped AJAX Requests from Child Window
slug: ajax/troubleshooting/dropped-ajax-requests-from-child-window
tags: dropped,ajax,requests,from,child,window
published: True
position: 4
---

# Dropped AJAX Requests from Child Window



## 

In Internet Explorer, windows opened using **window.open** from another window, exist in the same thread as the parent window.This is not true for Mozilla and Safari because there all child windows are opened in different threads. Thus when you initiate an AJAX request inthe child window and close this window, it will be aborted in Mozilla, because closing the window destroys the thread which is running the AJAX request.This worked in IE because the child window runs in the same thread as the parent and it does not destroy the AJAX request when it closes.

To resolve this issue you need to create AJAX requests in the context of the parent window and apply a slight timeout on it as shown in **Example 1** .

````JavaScript
<script type="text/javascript">
	    function OnClickHandler() {
	            var thisWindow = window;
	            var parentWindow = window.opener;
	            parentWindow.setTimeout(function () { UpdateData(thisWindow, parentWindow) }, 0);
	    }
	
	        //this is executed in the parent window context
	    function UpdateData(childWindow, parentWindow) {
	            var radAjaxManagerObject = parentWindow["RadAjaxManager1"];
	            radAjaxManagerObject.AjaxRequest(params);
	            childWindow.close();
	    }
	 
</script>
````





You should use a similar technique when using the Telerik **RadWindow** control. You still need to force the execution in the **parentWindow**, otherwise, the request will be cancelled, once the window is closed. You can see this technique in **Example 2** .

````JavaScript
<script type="text/javascript">
	    //This code is mandatory if any interaction with the "parent" RadWindow object is needed
	    function GetRadWindow() {
	            var oWindow = null;
	            if (window.radWindow) oWindow = window.radWindow;
	            else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
	            return oWindow;
	    }
	    function Cancel_Clicked() {
	            GetRadWindow().Close();
	    }
	    function DoParentCallback() {
	            var parentWindow = window.parent;
	            parentWindow.setTimeout(function () {
	                var radAjaxManagerObject = parentWindow["RadAjaxManager1"];
	                radAjaxManagerObject.AjaxRequest();
	            }, 0);
	            Cancel_Clicked();
	    }
</script>
````



Note that **Example 2** uses setTimeout to force execution in the **parentWindow's** context since it will not get closed. Another thing to keep in mind is that one should not reference the child window in your setTimeout-invoked code as it might have already been destroyed.

## See Also

 * [Known Reasons for Error Messages]({%slug ajax/troubleshooting/known-reasons-for-error-messages%})
