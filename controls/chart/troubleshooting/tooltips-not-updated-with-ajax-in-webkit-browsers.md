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

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

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


