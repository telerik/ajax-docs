---
title: Change the Mouse Cursor on Ajax Updates with the AjaxManager or AjaxPanel
page_title: Change the Mouse Cursor on Ajax Updates with the AjaxManager or AjaxPanel
description: "Learn how to change the mouse cursor on an Ajax update with the Telerik UI for ASP.NET AjaxManager or AjaxPanel."
slug: ajaxmanager/client-side-programming/how-to/change-mouse-cursor-on-ajax-update
previous_url: ajax/client-side-programming/how-to/change-mouse-cursor-on-ajax-update, controls/ajaxmanager/client-side-programming/how-to/change-mouse-cursor-on-ajax-update
tags: telerik, asp, net, ajax, manager, panel, client, side, programming, change, mouse, cursor, on, updates
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

How can I change the mouse cursor on an Ajax update with the Telerik UI for ASP.NET AjaxManager or AjaxPanel? 

## Solution

To achieve the desired behavior, use the client-side event of AjaxManager or AjaxPanel. The following snippet shows the events script you need.

````JavaScript
<script type="text/javascript">
	        function OnRequestStart(sender, args) {
	            document.body.style.cursor = "wait";
	        }
	        function OnResponseEnd(sender, args) {
	            document.body.style.cursor = "default";
	        }
</script>
````



Alternatively, you can use additional CSS classes as demonstrated in the following example.

````JavaScript
<script type="text/javascript">
	        function RequestStart(sender, args) {
	            document.body.className = document.body.className.replace("Normal", "Wait");
	        }
	        function ResponseEnd(sender, args) {
	            document.body.className = document.body.className.replace("Wait", "Normal");
</script>
````



````CSS
<style type="text/css">
	        .Wait
	        {
	        }
	        .Normal
	        {
	        }
	        /* override input cursors with a more specific CSS selector */.Wait INPUT
	        {
	            cursor: wait;
	        }
	        .Normal INPUT
	        {
	            cursor: default;
	        }
	        /* override grid cursors with a more specific CSS selector */.Wait TABLE
	        {
	            cursor: wait;
	        }
	        .Normal TABLE
	        {
	            cursor: default;
	        }
</style>
````


