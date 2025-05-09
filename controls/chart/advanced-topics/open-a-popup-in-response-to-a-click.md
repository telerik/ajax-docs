---
title: Open a Popup in Response to a Click
page_title: Open a Popup in Response to a Click - RadChart
description: Check our Web Forms article about Open a Popup in Response to a Click.
slug: chart/advanced-topics/open-a-popup-in-response-to-a-click
tags: open,a,popup,in,response,to,a,click
published: True
position: 2
---

# Open a Popup in Response to a Click

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

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







