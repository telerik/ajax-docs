---
title: Ajax Requests Queueing
page_title: Ajax Requests Queueing | UI for ASP.NET AJAX Documentation
description: Ajax Requests Queueing
slug: ajax/application-scenarios/ajax-requests-queueing
tags: ajax,requests,queueing
published: True
position: 11
---

# Ajax Requests Queueing



## 

By design, the ASP.NET AJAX Framework cancels the ongoing AJAX request if you try to initiate another one prior to receiving the response from the first one.To change this behavior, you can set the __RequestQueueSize__ property to a value greater than zero, which enables the queueing mechanism of __RadAjax__, and will allow you to complete the ongoing request and then initiate the pending requests in the control queue.

If the queue is full (queue size equals __RequestQueueSize__), an attempt for new AJAX requests will be discarded.

The default value is 0 (queueing disabled).

>tabbedCode

````C#
	     
		protected void Page_Load(object sender, EventArgs e)    
	    {        
	        <RadAjaxControl>.RequestQueueSize = 3;    
	    }
				
````



````VB.NET
	    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	        <RadAjaxControl>.RequestQueueSize = 3
	    End Sub
````


>end

# See Also

 * [RadAjaxManager](http://www.telerik.com/help/aspnet-ajax/ajax-ajaxmanager.html)

 * [RadAjaxPanel](http://www.telerik.com/help/aspnet-ajax/ajax-ajaxpanel.html)

 * [AJAX Request](http://www.telerik.com/help/aspnet-ajax/ajax-client-side-api.html)
