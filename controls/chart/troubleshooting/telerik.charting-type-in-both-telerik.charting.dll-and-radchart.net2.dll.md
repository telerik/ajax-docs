---
title: Telerik.Charting.<type> in both Telerik.Charting.dll and RadChart.Net2.dll
page_title: Chart Image is not displayed in the page - RadChart
description: Check our Web Forms article about Telerik.Charting.<type> in both Telerik.Charting.dll and RadChart.Net2.dll.
slug: chart/troubleshooting/telerik.charting-type-in-both-telerik.charting.dll-and-radchart.net2.dll
tags: chart,type,both,telerik.charting.dll,radchart.net2.dll
published: True
position: 1
---

# Telerik.Charting.&lt;type&gt; in both Telerik.Charting.dll and RadChart.Net2.dll

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

When upgrading existing Telerik UI applications (which include RadChart) to Telerik® UI for ASP.NET AJAX you may get the following error:

`Error 1 The type 'Telerik.Charting.<SomeType> exists in both 'c:\WINDOWS\assembly\GAC_MSIL\Telerik.Charting\...\Telerik.Charting.dll' and 'c:\WINDOWS\Microsoft.NET\Framework\v2.0.50727\Temporary ASP.NET Files\...\RadChart.Net2.DLL'`

The reason for this error is because RadChart (3.x and later) and Telerik® UI for ASP.NET AJAX Chart use shared code.he shared code is in the form of Telerik.Charting.dll assembly which is ILMerged in the RadChart.Net2.dll for backwards compatibility reasons and is shipped separately for Telerik® UI for ASP.NET AJAX. 

The error will manifest itself whenever you attempt to reference BOTH RadChart.Net2.dll and Telerik.Charting.dll. There are two ways to resolve the issue:


1. If you are migrating your projects to use Telerik® UI for ASP.NET AJAX you may initially want to remove the reference to the Telerik.Charting.dll from your Web.config file. In this case you will be using the old ASP.NET Chart and will not need the Telerik.Charting.dll that comes with the suite. The Telerik.Charting.dll is NOT required for the operation of the for ASP.NET AJAX controls other than Chart.


1. If you are already using RadChart for ASP.NET AJAX then you will need to remove the reference to RadChart.Net2.dll and continue using Telerik.Charting.dll

Please have in mind that RadChart for ASP.NET AJAX and RadChart 4.x have 99% identical functionality. It is up to your personal preference to decide which one you would like to use. The most significant difference is the assembly name and the fact that RadChart for ASP.NET AJAX uses an HttpHandler to display images and RadChart 4.x still uses RadControls\Image.aspx for backwards compatibility reasons.

