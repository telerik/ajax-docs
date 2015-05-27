---
title: Session State Usage
page_title: Session State Usage | RadChart for ASP.NET AJAX Documentation
description: Session State Usage
slug: chart/advanced-topics/session-state-usage
tags: session,state,usage
published: True
position: 8
---

# Session State Usage

>caution  **RadChart** has been replaced by [RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

You may want to disable Session for a web application that contains a RadChart instance. The chart image is retrieved using **Session** so you are restricted from setting **EnableSessionState** false in your Page directive or web.config file.

To disable session state and still display the chart:

* Set the RadChart **UseSession** property to **False.**

* Create a temporary folder for the chart image.

* Verify the web application has write permissions to the temporary folder.

* Set the **RadChart TempImagesFolder** property to the path of the temporary folder.

>caution The zoom and scroll features of RadChart require session state usage.

