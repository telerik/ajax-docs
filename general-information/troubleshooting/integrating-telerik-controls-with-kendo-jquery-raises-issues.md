---
title: Issues Occur When Integrating Telerik Controls with Kendo UI for jQuery Widgets
page_title: Issues Occur When Integrating Telerik Controls with Kendo UI for jQuery Widgets
description: "When trying to integrate Telerik UI for ASP.NET AJAX controls with Kendo UI for jQuery widgets, issues occur."
slug: integrating-telerik-controls-with-kendo-jquery-raises-issues
tags: telerik, asp, net, ajax, troubleshooting, issues, occur, when, integrating, controls, with, kendo, jquery, widgets
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

When trying to integrate Telerik UI for ASP.NET AJAX controls with Kendo UI for jQuery widgets, issues occur.

## Cause

Certain Telerik UI for ASP.NET AJAX controls are ASP.NET WebForms server-side wrappers of Kendo UI widgets. These controls already load jQuery- and Kendo UI- widget specific JavaScript files and you need to ensure tat no script conflicts arise from using the same jQuery and Kendo UI versions for both suites.

## Solution

To solve this issue, refer to the article on [integrating the HtmlChart with Kendo UI widgets]({%slug htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets%}).

Also, the following list specifies the controls that are ASP.NET WebForms server-side wrappers of Kendo UI widgets:

* Chat
* ClientDataSource
* ClientExportManager
* Diagram
* Gantt
* Gauge
* HtmlChart
* Map
* MultiColumnComboBox
* Spreadsheet
* TreeMap
