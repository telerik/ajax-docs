---
title: Session State Usage
page_title: Session State Usage - RadChart
description: Check our Web Forms article about Session State Usage.
slug: chart/advanced-topics/session-state-usage
tags: session,state,usage
published: True
position: 8
---

# Session State Usage

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

You may want to disable Session for a web application that contains a RadChart instance. The chart image is retrieved using **Session** so you are restricted from setting **EnableSessionState** false in your Page directive or web.config file.

To disable session state and still display the chart:

* Set the RadChart **UseSession** property to **False.**

* Create a temporary folder for the chart image.

* Verify the web application has write permissions to the temporary folder.

* Set the **RadChart TempImagesFolder** property to the path of the temporary folder.

>caution The zoom and scroll features of RadChart require session state usage.

