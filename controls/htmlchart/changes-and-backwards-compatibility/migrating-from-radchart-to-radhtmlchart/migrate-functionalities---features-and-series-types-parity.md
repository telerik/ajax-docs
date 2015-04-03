---
title: Migrate Functionalities - Features and Series Types Parity
page_title: Migrate Functionalities - Features and Series Types Parity | UI for ASP.NET AJAX Documentation
description: Migrate Functionalities - Features and Series Types Parity
slug: htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity
tags: migrate,functionalities,-,features,and,series,types,parity
published: True
position: 0
---

# Migrate Functionalities - Features and Series Types Parity



## 

This article describes the known limitations of the features and series types in __RadHtmlChart__when migrating from __RadChart__ and provides solutions to them, when possible. Since __RadHtmlChart__ is arather new control, released in Q2 2012, compared to the __RadChart__,__RadHtmlChart__ control still lacks some features and series types.Nevertheless, the features in __RadHtmlChart__ are constantly improvingand even though the control takes advantage of some fields like polar, radar, donut, etc., series; client-side rendering;client-side data binding; hover effects and animations, etc.

## Missing Series, Features and Known Limitations in RadHtmlChat Compared to RadChart

You can find the the series types that are not supported by the __RadHtmlChart__,compared to the obsolete __RadChart__ in the __List 1__.

__List 1__: Missing series in the __RadHtmlChart__.

* Bezier

__Table 1__ lists the missing features and limitations in __RadHtmlChart__, when migrating from__RadChart__, and shows possible workarounds.


>caption Table 1: Missing features and limitations in RadHtmlChart compared to RadChart and possible workarounds.

| Feature Name | Details |
| ------ | ------ |
| __Server-side click events__ |This limitation is a sequence of the	concept of the __RadHtmlChart__ (i.e., the control renders	entirely on the client-side). Nevertheless, this behavior can be achieved by performing an	Ajax request in the client-side click, where the argument of the clicked item can be passed	to the server. See[HtmlChart - Drill-down Chart](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/drilldownchart/defaultcs.aspx)online demo.|
| __Built-in data grouping__ |You can manually group the data source prior to binding it to the chart. Such an example is illustrated in the[Group RadHtmlChart Data Source](http://www.telerik.com/support/code-library/group-radhtmlchart-data-source)CL.|
| __Export__ |This feature is not supported out of the box because the __RadHtmlChart__ renders entirely on the client as SVG via JavaScript and	therefore it is not directly available on the server for exporting. A possible workaround is to:

1. Obtain the SVG as a string and send it to the server through an Ajax request, once the chart is rendered.

1. Use third-party software that can convert and export the SVG image to a more common user format such as PNG or PDF.See an example in the[Exporting RadHtmlChart to PNG and PDF](http://www.telerik.com/community/code-library/aspnet-ajax/html-chart/exporting-radhtmlchart-to-png-and-pdf.aspx)code library.|
| __Zooming and scrolling__ | __RadHtmlChart__ let you zoom and scroll only data over time with the Data Navigation functionality. See	more details in[HtmlChart - Data Navigation](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/datanavigation/defaultcs.aspx)online demo,[Data Navigation]({%slug htmlchart/functionality/data-navigation%})help article and[ Zoom and Scroll Data Over Time with RadHtmlChart for ASP.NET AJAX](http://www.telerik.com/community/code-library/aspnet-ajax/html-chart/exporting-radhtmlchart-to-png-and-pdf.aspx)blog post.|

You can find the list of missing appearance and styling features in __RadHtmlChart__, when migrating from __RadChart__ and possible workarounds in __Table 2__.


>caption Table 2: Missing appearance and styling features in RadHtmlChart compared to RadChart and possible workarounds.

| Feature Name | Details |
| ------ | ------ |
| __Detailed customization of the elements positions__ |Positions can be chosen (e.g. bottom, left, right, top),	but exact numbers like __left=20px__ cannot be used. The exception is the legend - you can offset theX and Y coordinates of the legend in __RadHtmlChart__ through the __chartObject__ , as illustrated in[this](http://feedback.telerik.com/Project/108/Feedback/Details/67001)feedback item.|
| __Control over bars width and overlap__ |The feature is available in the __RadHtmlChart__ under the name of __gap and spacing__ . The only limitation of the feature is that bars/columns cannot be overlapped. See an example in[Gap and Spacing]({%slug htmlchart/appearance-and-styling/gap-and-spacing%})help article.|
| __Modify the legend items__ |You can modify only their appearance; the legend contents are generated	from the series collection.|
| __Custom background images__ |The chart can be wrapped in a container element that has a background image. __ChartArea__ and/or __PlotArea__ elements must also be set with transparent color.|

You can find the list of missing labels and tooltips features in __RadHtmlChart__ compared to __RadChart__,and possible workarounds in __Table 3__.


>caption Table 3: Missing labels and tooltips features in RadHtmlChart compared to RadChart and possible workarounds.

| Feature name | Details |
| ------ | ------ |
| __Automatic text wrapping__ |As a workaround you can manually split the labels with line feeds (i.e., __"\n"__ characters). See an example in the[Multiline Labels]({%slug htmlchart/functionality/multiline-labels%})help article.|
| __Intelligent labels that avoid overlap__ |The feature is not available in __RadHtmlChart__ .|

You can find the list of missing accessibility and internationalization features in __RadHtmlChart__ compared to __RadChart__, and possible workarounds in __Table 4__.


>caption Table 4: Missing accessibility and internationalization features in RadHtmlChart compared to RadChart and possible workarounds.

| Feature Name | Details |
| ------ | ------ |
| __Render the chart data as table__ |For a data-bound chart,you can use an additional control (e.g.,[RadGrid](http://demos.telerik.com/aspnet-ajax/grid/examples/overview/defaultcs.aspx)) that displays data in tabular view	and bind it to the chart's data source.|
| __Localization__ |Requires additional configuration.	You can follow the instructions in this[Localization]({%slug htmlchart/accessibility-and-internationalization/localization%})help article.|

You can find the list of missing axes features in __RadHtmlChart__ compared to __RadChart__ in __List 2__.

__List 2__: Missing axes features in __RadHtmlChart__ compared to __RadChart__.

* __Scale breaks__

* __Control over the axis labels position according to the tick__

# See Also

 * [RadHtmlChart : Known Limitations]({%slug htmlchart/troubleshooting/known-issues/known-limitations%})

 * [RadHtmlChart : Migrating Axes Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})

 * [RadHtmlChart : Migrating Data Binding Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})

 * [RadHtmlChart : Migrating Date Axis Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})

 * [RadHtmlChart : Migrating Series Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})

 * [RadHtmlChart : Localization]({%slug htmlchart/accessibility-and-internationalization/localization%})

 * [RadHtmlChart : Data Navigation]({%slug htmlchart/functionality/data-navigation%})

 * [Exporting RadHtmlChart to PNG and PDF](http://www.telerik.com/community/code-library/aspnet-ajax/html-chart/exporting-radhtmlchart-to-png-and-pdf.aspx)
