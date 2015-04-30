---
title: Migrate Functionalities - Features and Series Types Parity
page_title: Migrate Functionalities - Features and Series Types Parity | RadHtmlChart for ASP.NET AJAX Documentation
description: Migrate Functionalities - Features and Series Types Parity
slug: htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity
tags: migrate,functionalities,-,features,and,series,types,parity
published: True
position: 0
---

# Migrate Functionalities - Features and Series Types Parity

This article describes the known limitations of the features and series types in **RadHtmlChart**when migrating from **RadChart** and provides solutions to them, when possible. Since **RadHtmlChart** is a rather new control, released in Q2 2012, compared to the **RadChart**, **RadHtmlChart** control still lacks some features and series types.Nevertheless, the features in **RadHtmlChart** are constantly improving and even though the control takes advantage of some fields like polar, radar, donut, etc., series; client-side rendering;client-side data binding; hover effects and animations, etc.

## Missing Series, Features and Known Limitations in RadHtmlChat Compared to RadChart

You can find the the series types that are not supported by the **RadHtmlChart**,compared to the obsolete **RadChart** in the **List 1**.

>caption List 1: Missing series in the **RadHtmlChart**.

* Bezier

**Table 1** lists the missing features and limitations in **RadHtmlChart**, when migrating from**RadChart**, and shows possible workarounds.

>caption Table 1: Missing features and limitations in RadHtmlChart compared to RadChart and possible workarounds.

| Feature Name | Details |
| ------ | ------ |
| **Server-side click events** |This limitation is a sequence of the	concept of the **RadHtmlChart** (i.e., the control renders	entirely on the client-side). Nevertheless, this behavior can be achieved by performing an	Ajax request in the client-side click, where the argument of the clicked item can be passed	to the server. See [HtmlChart - Drill-down Chart](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/drilldownchart/defaultcs.aspx) online demo.|
| **Built-in data grouping** |You can manually group the data source prior to binding it to the chart. Such an example is illustrated in the [Group RadHtmlChart Data Source](http://www.telerik.com/support/code-library/group-radhtmlchart-data-source) CL.|
| **Export** |This feature is not supported out of the box because the **RadHtmlChart** renders entirely on the client as SVG via JavaScript and therefore it is not directly available on the server for exporting. A possible workaround is to either obtain the SVG as a string and send it to the server through an Ajax request, once the chart is rendered, or to use third-party software that can convert and export the SVG image to a more common user format such as PNG or PDF.See an example in the [Exporting RadHtmlChart to PNG and PDF](http://www.telerik.com/community/code-library/aspnet-ajax/html-chart/exporting-radhtmlchart-to-png-and-pdf.aspx) code library.|
| **Zooming and scrolling** | **RadHtmlChart** let you zoom and scroll only data over time with the Data Navigation functionality. See	more details in[HtmlChart - Data Navigation](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/datanavigation/defaultcs.aspx)online demo,[Data Navigation]({%slug htmlchart/functionality/data-navigation%})help article and[ Zoom and Scroll Data Over Time with RadHtmlChart for ASP.NET AJAX](http://www.telerik.com/community/code-library/aspnet-ajax/html-chart/exporting-radhtmlchart-to-png-and-pdf.aspx)blog post.|

You can find the list of missing appearance and styling features in **RadHtmlChart**, when migrating from **RadChart** and possible workarounds in **Table 2**.

>caption Table 2: Missing appearance and styling features in RadHtmlChart compared to RadChart and possible workarounds.

| Feature Name | Details |
| ------ | ------ |
| **Detailed customization of the elements positions** |Positions can be chosen (e.g. bottom, left, right, top), but exact numbers like **left=20px** cannot be used. The exception is the legend - you can offset the X and Y coordinates of the legend in **RadHtmlChart** through the **chartObject**, as illustrated in [this](http://feedback.telerik.com/Project/108/Feedback/Details/67001) feedback item.|
| **Control over bars width and overlap** |The feature is available in the **RadHtmlChart** under the name of **gap and spacing**. The only limitation of the feature is that bars/columns cannot be overlapped. See an example in [Gap and Spacing]({%slug htmlchart/appearance-and-styling/gap-and-spacing%}) help article.|
| **Modify the legend items** |You can modify only their appearance; the legend contents are generated	from the series collection.|
| **Custom background images** |The chart can be wrapped in a container element that has a background image. **ChartArea** and/or **PlotArea** elements must also be set with transparent color.|

You can find the list of missing labels and tooltips features in **RadHtmlChart** compared to **RadChart**, and possible workarounds in **Table 3**.

>caption Table 3: Missing labels and tooltips features in RadHtmlChart compared to RadChart and possible workarounds.

| Feature name | Details |
| ------ | ------ |
| **Automatic text wrapping** |As a workaround you can manually split the labels with line feeds (i.e., **"\n"** characters). See an example in the[Multiline Labels]({%slug htmlchart/functionality/multiline-labels%})help article.|
| **Intelligent labels that avoid overlap** |The feature is not available in **RadHtmlChart** .|

You can find the list of missing accessibility and internationalization features in **RadHtmlChart** compared to **RadChart**, and possible workarounds in **Table 4**.

>caption Table 4: Missing accessibility and internationalization features in RadHtmlChart compared to RadChart and possible workarounds.

| Feature Name | Details |
| ------ | ------ |
| **Render the chart data as table** |For a data-bound chart,you can use an additional control (e.g.,[RadGrid](http://demos.telerik.com/aspnet-ajax/grid/examples/overview/defaultcs.aspx)) that displays data in tabular view	and bind it to the chart's data source.|
| **Localization** |Requires additional configuration.	You can follow the instructions in this[Localization]({%slug htmlchart/accessibility-and-internationalization/localization%})help article.|

You can find the list of missing axes features in **RadHtmlChart** compared to **RadChart** in **List 2**.

>caption List 2: Missing axes features in **RadHtmlChart** compared to **RadChart**.

* **Scale breaks**

* **Control over the axis labels position according to the tick**

## See Also

 * [RadHtmlChart : Known Limitations]({%slug htmlchart/troubleshooting/known-issues/known-limitations%})

 * [RadHtmlChart : Migrating Axes Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})

 * [RadHtmlChart : Migrating Data Binding Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})

 * [RadHtmlChart : Migrating Date Axis Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})

 * [RadHtmlChart : Migrating Series Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})

 * [RadHtmlChart : Localization]({%slug htmlchart/accessibility-and-internationalization/localization%})

 * [RadHtmlChart : Data Navigation]({%slug htmlchart/functionality/data-navigation%})

 * [Exporting RadHtmlChart to PNG and PDF](http://www.telerik.com/community/code-library/aspnet-ajax/html-chart/exporting-radhtmlchart-to-png-and-pdf.aspx)
