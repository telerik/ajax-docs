---
title: An Ajaxified Control Still Makes Postbacks
page_title: An Ajaxified Control Still Makes Postbacks
description: "Learn what to do when an ajaxified control still makes postbacks in Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/troubleshooting/ajaxified-control-still-makes-postbacks
previous_url: ajax/radajaxmanager/troubleshooting/ajaxified-control-still-makes-postbacks, controls/ajaxmanager/troubleshooting/ajaxified-control-still-makes-postbacks
tags: telerik, asp, net, ajax, troubleshooting, ajaxmanager, ajaxified, control, still, makes, postbacks
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

What can I do when an ajaxified control still makes postbacks?

## Solution

If you have added the `AjaxSetting` for a control that will be ajaxified, but it still makes regular postbacks, use any of the following approaches to handle this issue:

* If your `AjaxSettings` are defined in ASPX, verify whether the control `ID` completely matches the corresponding `AjaxSetting`. Also, check whether the AjaxManager designer shows your control as ajaxified, which will ensure that the manager will find and ajaxify the control at runtime.

* If your `AjaxSettings` are defined in the code-behind, check if you are adding your `AjaxSettings` on the event-handler of each control. `AjaxSettings` are not preserved in the `ViewState` so you have to add them on each `PageLoad`. In such cases, you may find your ajaxified control making a postback on the first try.
