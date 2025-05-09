---
title: Tooltips not updated with AJAX in Webkit browsers
page_title: Tooltips not updated with AJAX in Webkit browsers - RadChart
description: Check our Web Forms article about Tooltips not updated with AJAX in Webkit browsers.
slug: chart/troubleshooting/tooltips-not-updated-with-ajax-in-webkit-browsers
tags: tooltips,not,updated,with,ajax,in,webkit,browsers
published: True
position: 3
---

# Tooltips not updated with AJAX in Webkit browsers

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

The Webkit based browsers (Safari, Chrome) do not update correctly image maps with ASP.NET AJAX. As RadChart takes advantage of image maps to implement its tooltips, it suffers the same issue when updated with AJAX (ASP.NET AJAX or RadAjax). To fix this you will need to add a small client script to rename the corresponding map and set the chart image to use it:

````XML
<script type="text/javascript">
   function pageLoad()
   {
	   var img = document.getElementById("<%=RadChart1.ClientID %>").getElementsByTagName("img")[0];
	   var map;
	   if (img)
		   map = document.getElementById(img.useMap.substring(1));
	   if (img && map)
	   {
		   img.useMap = '';
		   map.name = (new Date()).getTime();
		   map.id = map.name;
		   img.useMap = '#' + map.name;
	   }
   }
</script> 	
````


