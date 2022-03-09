---
title: Telerik Control Stylesheet Is Not Registered after an AJAX Request
page_title: Telerik Control Stylesheet Is Not Registered after an AJAX Request
description: "When working with Telerik UI for ASP.NET AJAX and the control is not initially visible on the page, the Telerik control stylesheet is not registered after an AJAX request (inside MS UpdatePanel)."
slug: control-stylesheet-not-registered-after-ajax-request
tags: telerik, asp, net, ajax, troubleshooting, control, stylesheet, not, registered, after, ajax, request
type: troubleshooting
category: knowledge-base
res_type: kb
published: True
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

When working with Telerik UI for ASP.NET AJAX and the control is not initially visible on the page, the Telerik control stylesheet is not registered after an AJAX request (inside MS UpdatePanel).

## Solution

If the control is initially invisible and is shown after an ASP.NET AJAX update, manually register all the required CSS files in the `head` tag of your page as shown below. Otherwise the control will not be displayed correctly.

````HTML
<link href="<my_path_to_stylesheet>" rel="stylesheet" runat="server" >
````

Alternatively, replace the MS UpdatePanel with `RadAjaxPanel` or ajaxify the control with the `RadAjaxManager`. Thus, the stylesheet will be applied properly after an AJAX request even if the Telerik control is initially invisible.
