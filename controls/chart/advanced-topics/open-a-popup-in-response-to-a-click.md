---
title: Open a Popup in Response to a Click
page_title: Open a Popup in Response to a Click | RadChart for ASP.NET AJAX Documentation
description: Open a Popup in Response to a Click
slug: chart/advanced-topics/open-a-popup-in-response-to-a-click
tags: open,a,popup,in,response,to,a,click
published: True
position: 2
---

# Open a Popup in Response to a Click

>caution  **RadChart** has been replaced by [RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

To open a window in response to a click you can use the [ActiveRegion]({%slug chart/advanced-topics/image-maps%})Url property and assign a javascript that will in turn open the window:

* In the ASP.NET HTML markup define a JavaScript method that will display the popup window:

````JavaScript
function ShowPopUpDialog(url) {
	window.open(url, 'MyPopUpWindow', 'height = 300px, width = 300px', true);
}
````

* Locate a [ActiveRegion]({%slug chart/advanced-topics/image-maps%}) property, e.g. from a chart series item and assign a call to the JavaScript using the [ActiveRegion]({%slug chart/advanced-topics/image-maps%})Url property:

````C#
RadChart1.Series[0].Items[0].ActiveRegion.Url =  "javascript:ShowPopUpDialog('SalesDetail.aspx');";		
````
````VB	
RadChart1.Series(0).Items(0).ActiveRegion.Url =  "javascript:ShowPopUpDialog('SalesDetail.aspx');"
````







