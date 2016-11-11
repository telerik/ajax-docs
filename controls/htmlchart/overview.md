---
title: Overview
page_title: RadHtmlChart Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: htmlchart/overview
tags: overview
published: True
position: 0
---

# Chart (HTML5) Overview

**RadHtmlChart** for ASP.NET AJAX is a control powered by the Kendo UI Data Visualization Chart widget. The control provides a powerful charting mechanism based on [SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics) when shown in modern browsers like Firefox, Chrome, IE9+, Opera and [VML](http://en.wikipedia.org/wiki/Vector_Markup_Language) fallback for older browsers like IE8 and below. It was added to the Telerik UI for ASP.NET AJAX suite in Q2 2012. **RadHtmlChart** is the successor to **RadChart**.

This article provides a brief overview of the main features of the **RadHtmlChart** control.

* pure **client-side rendering** through JavaScript which reduces the amount of work the server has to do—only serialized data is sent to the client instead of rendering the entire image and sending markup

* a variety of **different series types**:

	* [Area Chart]({%slug htmlchart/chart-types/area-chart%})

	* [Bar Chart]({%slug htmlchart/chart-types/bar-chart%})

	* [Box Plot Chart]({%slug htmlchart/chart-types/box-plot-chart%})

	* [Bubble Chart]({%slug htmlchart/chart-types/bubble-chart%})

	* [Bullet Chart]({%slug htmlchart/chart-types/bullet-chart%})

	* [Vertical Bullet Chart]({%slug htmlchart/chart-types/vertical-bullet-chart%})

	* [Candlestick Chart]({%slug htmlchart/chart-types/candlestick-chart%})

	* [Column Chart]({%slug htmlchart/chart-types/column-chart%})

	* [Donut Chart]({%slug htmlchart/chart-types/donut-chart%})

	* [Line Chart]({%slug htmlchart/chart-types/line-chart%})

	* [Funnel Chart]({%slug htmlchart/chart-types/funnel-chart%})

	* [Pie Chart]({%slug htmlchart/chart-types/pie-chart%})

	* [Polar Chart]({%slug htmlchart/chart-types/polar-chart%})

	* [Radar Chart]({%slug htmlchart/chart-types/radar-chart%})

	* [Range Bar Chart]({%slug htmlchart/chart-types/range-bar-chart%})

	* [Range Column Chart]({%slug htmlchart/chart-types/range-column-chart%})

	* [Scatter Chart]({%slug htmlchart/chart-types/scatter-chart%})

	* [ScatterLine Chart]({%slug htmlchart/chart-types/scatterline-chart%})

	* [Sparkline Chart]({%slug htmlchart/chart-types/sparkline-chart%})

	* [Spline Chart]({%slug htmlchart/chart-types/spline-chart%})

	* [Step Line Chart]({%slug htmlchart/chart-types/step-line-chart%})

	* [Waterfall Chart]({%slug htmlchart/chart-types/waterfall-chart%})

	* [Horizontal Waterfall Chart]({%slug htmlchart/chart-types/horizontal-waterfall-chart%})

	* including [stackable charts]({%slug htmlchart/functionality/stacked-series%})—Bar and Column

* Support for various **server datasources**—Out of the box compatibility with the major declarative data sources([SqlDataSource]({%slug htmlchart/data-binding/sqldatasource%}), [LinqDataSource]({%slug htmlchart/data-binding/linqdatasource%}),[EntityDataSource]({%slug htmlchart/data-binding/entitydatasource%}), any **IEnumerable collection**, etc.).

* [Client-side databinding](http://demos.telerik.com/aspnet-ajax/HtmlChart/Examples/clientsidedatabinding/defaultcs.aspx)—Use a JSON string or an array of JSON objects to set a new data source for the chart.

* [DateTime support]({%slug htmlchart/functionality/axes/date-axis%})—The chart can be bound to a data source that contains DateTime objects or strings. Dates in labels and tooltips can be formatted.

* [Data Navigation]({%slug htmlchart/functionality/data-navigation%}) for data displayed over time.

* **Animation effects** when it is being rendered.

* **Interactive charts**—**RadHtmlChart** offers animated transitions and hover effects:

	* [Client-side events]({%slug htmlchart/client-side-programming/events/overview%}) allow the developer to react to the user actions.

	* Hovering or clicking on the series name in the legend will highlight and toggle the visibility of the series.

* [Intuitive markup]({%slug htmlchart/server-side-programming/overview%}) structure to make configuration easier - the code structure resembles the [actual chart]({%slug htmlchart/radhtmlchart-structure%}).

* [Design time configurator]({%slug htmlchart/design-time/configuration-wizard%}) for even easier setup in design-time mode in Visual Studio.

# See Also

 * [RadHtmlChart Online Demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)

 * [Using the Visual Designer to configure a datasource and series]({%slug htmlchart/design-time/configuration-wizard%})

 * [RadHtmlChart Element Structure]({%slug htmlchart/radhtmlchart-structure%})

 * [Server-side API overview]({%slug htmlchart/server-side-programming/overview%})
