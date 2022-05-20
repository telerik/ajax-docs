---
title: Page Request Manager Parser Error Exception Occurs
page_title: Page Request Manager Parser Error Exception Occurs
description: "Learn what to do when the Sys.WebForms.PageRequestManagerParserErrorException error occurs when working with Telerik UI for ASP.NET AJAX."
slug: page-request-manager-parser-error-occur
tags: telerik, asp, net, ajax, manager, panel, age, request, manager, parser, error, exception, occurs
published: True
type: troubleshooting
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

A `Sys.WebForms.PageRequestManagerParserErrorException` occurs.

## Cause  

A possible cause for this error is the usage of the AjaxPanel and AjaxManager to AJAX-enable the same control at the same time. 

## Solution 

To solve this issue, refer to the article on [using controls wrapped in an AjaxPanel and added to the AjaxManager settings]({%slug ajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings%}).
