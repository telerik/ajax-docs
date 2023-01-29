---
title: Clear the chart on the client-side
description: Learn how to clear the series of RadHtmlChart for ASP.NET AJAX
type: troubleshooting
page_title: Hide chart series with JavaScript
slug: htmlchart-clear-chart-series-on-the-client
position: 
tags: 
ticketid: 1581442
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadHtmlChart for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Learn how to clear the series of RadHtmlChart for ASP.NET AJAX on the client.

## Solution
You can try:

````ASP.NET
<script>
var chart = $find("RadHtmlChart1").get_kendoWidget()
chart.options.series[0].visible = false;
chart.refresh();
</script>
````

Other options are:

* [Update the DataSource]({%slug htmlchart/client-side-programming/overview%}#modify-the-radhtmlcharts-data-source-on-the-client)
* [Destroy the chart](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/methods/destroy#destroy)
* or [Clear it in on the server](https://www.telerik.com/forums/how-do-i-clear-reset-a-chart) 

   
