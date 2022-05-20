---
title: State Information Is Invalid for This Page Error Occurs
page_title: State Information Is Invalid for This Page Error Occurs
description: "Learn what to do when the state information is invalid for this page and might be corrupted error occurs when working with Telerik UI for ASP.NET AJAX."
slug: state-information-invalid-for-this-page
tags: telerik, asp, net, ajax, manager, panel, state, information, invalid, for, this, page, error, exception, occurs
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

A `The state information is invalid for this page and might be corrupted` error occurs. 

## Cause  

Firefox version 1.5 and later use in-memory caching for entire web pages, including their JavaScript states, for a single browser session. Going backward and forward between visited pages requires no page loading and the JavaScript states are preserved. This feature, referred to by some as bfcache (for "Back-Forward Cache"), makes page navigation very fast. The caching state is preserved until the user closes the browser. 

## Solution 

To work around this issue, refer to the article on [using Ajax, ViewState, and Firefox]({%slug ajaxpanel/troubleshooting/firefox-specifics%}).