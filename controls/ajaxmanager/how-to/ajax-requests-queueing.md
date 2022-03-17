---
title: Ajax Requests Are Queueing When Using the AjaxManager
page_title: Ajax Requests Are Queueing When Using the AjaxManager
description: "Learn how to handle the scenario when using the AjaxManager, the Ajax requests are queueing in Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/how-to/ajax-requests-queueing
previous_url: ajax/how-to/ajax-requests-queueing, controls/ajaxmanager/how-to/ajax-requests-queueing
tags: telerik, asp, net, ajax, manager, requests, are, queueing
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxManager</td>
		</tr>
	</tbody>
</table>

## Description

How can I prevent the cancellation of the ongoing AJAX request when I try to initiate another request prior to receiving the response from the first one?

## Solution 

By design, the ASP.NET AJAX Framework cancels the ongoing AJAX request if you try to initiate another one prior to receiving the response from the first one. To change this behavior, set the `RequestQueueSize` property to a value greater than zero. In this way, you will enable the queueing mechanism of the `RadAjax` and will be able to complete the ongoing request and initiate the pending requests in the control queue.

If the queue size equals `RequestQueueSize`, meaning the queue is full, an attempt for new AJAX requests will be discarded. By default, the queue size value is `0` and queueing is disabled.



````C#
protected void Page_Load(object sender, EventArgs e)    
	
	{        
	    
		<RadAjaxControl>.RequestQueueSize = 3;    
	
	}
				
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	<RadAjaxControl>.RequestQueueSize = 3
End Sub
````


## See Also

* [AjaxManager Overview]({% slug ajaxmanager/overview %})

* [AjaxPanel Overview]({% slug ajaxpanel/overview %})

* [AJAX Request: Client-Side Programming Overview]({% slug ajaxmanager/client-side-programming/overview %})
