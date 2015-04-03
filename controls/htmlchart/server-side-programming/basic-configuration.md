---
title: Basic Configuration
page_title: Basic Configuration | UI for ASP.NET AJAX Documentation
description: Basic Configuration
slug: htmlchart/server-side-programming/basic-configuration
tags: basic,configuration
published: True
position: 1
---

# Basic Configuration



__RadHtmlChart__ provides a rich set of properties and events which can help you configure the look and behaviour of the control. In this article you	will find a list with the available public methods and properties of the control, and the arguments they accept.

## Attribute Properties of the Main Tag


|  __Name__  |  __Description__  |
| ------ | ------ |
| __DataSourceID__ |Used to set a declarative datasource to the __RadHtmlChart__ control (e.g., SqlDataSource, LinqDataSource, EntityDataSource).|
| __DataSource__ |Used to set a programmatic datasource to the __RadHtmlChart__ control (e.g., a DataTable, List of custom objects, DataSet).|
| __Height__ |Get/set the height of the __RadHtmlChart__ control in pixels.|
| __InvokeLoadData__ |Determines when the actual data will be loaded. Takes a member of the Telerik.Web.UI.HtmlChart.LoadDataInvocation enumeration:

* AfterPageLoad - The data is loaded just after the entire page is loaded via a lightweight callback. Its effect would be noticeable in larger (slower) pages.

* FromCode - Data is loaded only when explicitly called via the[client-side API]({%slug htmlchart/client-side-programming/overview%})of the control	(the __loadData()__ method) via a lightweight callback.

* OnPageLoad - Data is loaded when the page is being loaded along with the rest of the controls. This is the only case where it is available in the page markup	and a callback is not performed.|
| __OnClientSeriesClicked__ |The name of the handler for the[OnClientSeriesClicked(deprecated)]({%slug htmlchart/client-side-programming/events/onclientseriesclicked(deprecated)%})client-side event.|
| __OnClientSeriesHovered__ |The name of the handler for the[OnClientSeriesHovered(deprecated)]({%slug htmlchart/client-side-programming/events/onclientserieshovered(deprecated)%})client-side event.|
| __Layout__ |A property indicating whether the chart will be rendered as Default, Sparkline or Stock chart.|
| __RenderAs__ |A property indicating whether the chart will be rendered as __Canvas__ , __SVG__ or __VML__ .	Setting the property to __Auto__ will instruct the chart to automatically decide how to be rendered, based on the browser. This property is available since __Q1 2015__ .|
| __Transitions__ |Get/set whether an animation is played when the chart is rendered.|
| __Width__ |Get/set the width of the control in pixels.|

## Attribute Property in Main Tag > Appearance > FillStyle


|  __Name__  |  __Description__  |
| ------ | ------ |
| __BackgroundColor__ |The background color of the main chart area. Can take a common color name or a hex value.|

## Attribute Property in Main Tag > ChartTitle


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Text__ |A string for the chart title.|

## Attribute Properties in Main Tag > ChartTitle > Appearance


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Align__ |The alignment of the title according to the chart. An enumeration ( __Telerik.Web.UI.HtmlChart.ChartTitleAlign__ )	with one of the following values: Left, Center or Right.|
| __BackgroundColor__ |The background color of the title area. Can take a common color name or a hex value.|
| __Position__ |The vertical position of the chart title. An enumeration ( __Telerik.Web.UI.HtmlChart.ChartTitlePosition__ ) with the following values: Top or Bottom.|
| __TextStyle__ |Controls the appearance of the labels in this element. See the[Labels and Titles Font Settings]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})article fordetailed information.|
| __Visible__ |Defines whether the chart title is shown. Values are True or False.|

## Attribute Properties in Main Tag > Legend > Appearance


|  __Name__  |  __Description__  |
| ------ | ------ |
| __BackgroundColor__ |The background color of the legend area. Can take a common color name or a hex value.|
| __Position__ |The position of the chart legend relative to the plot area. An enumeration (Telerik.Web.UI.HtmlChart.ChartLegendPosition)	with the following values: Bottom, Left, Right, Top.|
| __TextStyle__ |Controls the appearance of the labels in this element. See the[Labels and Titles Font Settings]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})articlefor detailed information.|
| __Visible__ |Defines whether the chart legend is shown. Values are True or False.|

## Attribute Property in Main Tag > PlotArea > Appearance > FillStyle


|  __Name__  |  __Description__  |
| ------ | ------ |
| __BackgroundColor__ |The background color of the plot area. Can take a common color name or a hex value.|

## Attribute Properties in Main Tag > PlotArea > Appearance > TextStyle


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Margin__ |Takes from one to four integers that specify all the margins the PlotArea will have in pixels. For example:

*  __Margin="15"__ —all four margins are 15px.

*  __Margin="15 30"__ —top and bottom margins are 15px; right and left margins are 30px.

*  __Margin="15 30 45"__ —top margin is 15px; right and left margins are 30px;	bottom margin is 45px.

*  __Margin="15 30 45 60"__ —top margin is 15px; right margin is 30px;	bottom margin is 45px; left margin is 60px;|

## Attribute Properties in Main Tag > PlotArea > CommonTooltipsAppearance


|  __Name__  |  __Description__  |
| ------ | ------ |
| __BackgroundColor__ |The background color of the tooltips for the items from this series. Can take a common color name or a hex value.	If it is not set explicitly the control will pick one according to currenly used Skin.|
| __Color__ |The text color of the tooltips for the items from this series. Can take a common color name or a hex value.	If it is not set explicitly the control will pick one according to the currently used Skin.|
| __ClientTemplate__ |A string for the client template that will be applied to the tooltips when they render.	It can use any column from the data source given to the chart through the following syntax: __#=dataItem.ColumnName#__ where the string delimited inside #=.....#	is the expression to be evaluated. The tooltips are HTML so HTML can be used outside of the expression tags.	See[here]({%slug htmlchart/functionality/clienttemplate/overview%})for more information.|
| __DataFormatString__ |The format string that will form the labels' text. The __{0}__ placeholder is	used to denote the __Y__ value of the item. For the __ScatterSeries__ and __ScatterLineSeries__ you can use __{1}__ for the __X__ value.	Although __CandlestickSeries__ ToolTips have already predefined pattern by design	it can be modified through __{0}__ , __{1}__ , __{2}__ , __{3}__ and __{4}__ placeholders that denotes accordingly the Open, High, Low, Close and	the corresponding XAxis item's value.|
| __Shared__ |Defines whether the chart will display a single tooltip for every category. Values are True or False.|
| __SharedTemplate__ |A string for the shared template that will be applied to the tooltips when they render. It can use the __points__ (the category points) and __category__ (the category name) fields through the following syntax: __#= category #, #= points[0].series.name#, #= points[0].value #__ where the string delimited inside #=.....#	is the expression to be evaluated. The tooltips are HTML so HTML can be used outside of the expression tags.	See[here]({%slug htmlchart/functionality/clienttemplate/overview%})for more information.|
| __Visible__ |Defines whether the tooltips will be shown. Values are True or False.|

# See Also

 * [Visual Structure of the RadHtmlChart Control’s Tag Hierarchy]({%slug htmlchart/server-side-programming/overview%})

 * [Configuring Tags in the RadHtmlChart Series]({%slug htmlchart/server-side-programming/series-configuration%})

 * [Configuring Tags in the RadHtmlChart Series]({%slug htmlchart/server-side-programming/series-items-configuration%})

 * [Configuring PlotArea Element Axes of the RadHtmlChart]({%slug htmlchart/server-side-programming/axes-configuration%})

 * [Labels and Titles Font Settings in RadHtmlChart]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})
