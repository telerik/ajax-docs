---
title: Tooltips not updated with AJAX in Webkit browsers
page_title: Tooltips not updated with AJAX in Webkit browsers | RadChart for ASP.NET AJAX Documentation
description: Tooltips not updated with AJAX in Webkit browsers
slug: chart/troubleshooting/tooltips-not-updated-with-ajax-in-webkit-browsers
tags: tooltips,not,updated,with,ajax,in,webkit,browsers
published: True
position: 3
---

# Tooltips not updated with AJAX in Webkit browsers

>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.

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


