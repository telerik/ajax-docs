---
title: Pass Two or More Arguments in ajaxRequest and ajaxRequestWithTarget with the AjaxManager or AjaxPanel
page_title: Pass Two or More Arguments ajaxRequest and ajaxRequestWithTarget with the AjaxManager or AjaxPanel
description: "Learn how to pass two or more arguments in the ajaxRequest and ajaxRequestWithTarget functions with the Telerik UI for ASP.NET AjaxManager or AjaxPanel."
slug: ajaxmanager/client-side-programming/how-to/pass-more-than-one-argument
previous_url: ajax/client-side-programming/how-to/pass-more-than-one-argument, controls/ajaxmanager/client-side-programming/how-to/pass-more-than-one-argument
tags: telerik, asp, net, ajax, manager, panel, client, side, programming, pass, two, or, more, arguments, in, ajaxRequest, and, ajaxRequestWithTarget
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
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxPanel</td>
		</tr>
	</tbody>
</table>

## Description

How can I pass two or more arguments in the `ajaxRequest` and `ajaxRequestWithTarget` functions with the Telerik UI for ASP.NET AjaxManager or AjaxPanel? 

## Solution  

By default, the `ajaxRequest` and `ajaxRequestWithTarget` functions accept only one argument. 

To achieve the desired scenario and pass two or more arguments in the functions: 

1. Join the arguments on the client.

		````JavaScript
		var arg3 = arg1 + "," + arg2;
		ajaxManager.ajaxRequest(arg3);
		````


1. Split the arguments on the server in the `AjaxManager_AjaxRequest`.

		````C#
		private void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
		{
			string argument = (e.Argument);
			String[] stringArray = argument.Split(",".ToCharArray());
		}			
		````
		````VB.NET
		Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs) Handles RadAjaxManager1.AjaxRequest
			Dim argument As String = e.Argument
			Dim stringArray As [String]() = argument.Split(",".ToCharArray())
		End Sub
			
			
		````


## See Also

* [Client-Side Programming with the Ajax Manager Overview]({%slug ajaxmanager/client-side-programming/overview%})

* [OnAjaxRequest]({%slug ajaxmanager/server-side-programming/events/onajaxrequest%})
