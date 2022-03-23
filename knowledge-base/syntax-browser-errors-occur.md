---
title: SyntaxError Occurs in the Browser
page_title: SyntaxError Occurs in the Browser
description: "Learn what to do when syntax errors occur in the Internet Explorer, Chrome, or FireFox browsers when working with Telerik UI for ASP.NET AJAX."
slug: syntax-browser-errors-occur
previous_url: ajax/troubleshooting/known-reasons-for-error-messages, controls/ajaxmanager/troubleshooting/known-reasons-for-error-messages
tags: telerik, asp, net, ajax, manager, panel, syntax, error, occurs, in, different, browsers
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

Depending on the browser, the following errors occur:

* `SyntaxError` in Internet Explorer

* `Uncaught SyntaxError: Failed to execute 'insertRule' on 'CSSStyleSheet': Failed to parse the rule'` in Chrome

* `SyntaxError: An invalid or illegal string was specified` in FireFox 

## Cause  

The cause for these errors are the commented CSS rules in the `<head>` of your page, for example, `/* .someClass { display: none; } */`. The AjaxManager and Ajaxpanel update the `<head>` of the page to enable controls to register stylesheets and scripts during an AJAX request. Such commented rules cannot be parsed by the engine.

## Solution

To solve this issue, use any of the following approaches:

* Set the `EnablePageHeadUpdate` property of the Ajax control to `false`.

* Remove the commented CSS rule or move it to a separate stylesheet file.

* Place the styles settings in external CSS files.

