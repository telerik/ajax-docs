---
title: Basic Configuration
page_title: Basic Configuration | RadHtmlChart for ASP.NET AJAX Documentation
description: Basic Configuration
slug: htmlchart/server-side-programming/basic-configuration
tags: basic,configuration
published: True
position: 1
---

# Basic Configuration

**RadHtmlChart** provides a rich set of properties and events which can help you configure the look and behaviour of the control. In this article you	will find a list with the available public methods and properties of the control, and the arguments they accept.

## Attribute Properties of the Main Tag

|  **Name**  |  **Description**  |
| ------ | ------ |
| **DataSourceID** |Used to set a declarative data source to the **RadHtmlChart** control (e.g., SqlDataSource, LinqDataSource, EntityDataSource).|
| **DataSource** |Used to set a programmatic data source to the **RadHtmlChart** control (e.g., a DataTable, List of custom objects, DataSet).|
| **Height** |Get/set the height of the **RadHtmlChart** control in pixels.|
| **InvokeLoadData** |Determines when the actual data will be loaded. Takes a member of the Telerik.Web.UI.HtmlChart.LoadDataInvocation enumeration: **AfterPageLoad** - The data is loaded just after the entire page is loaded via a lightweight callback. Its effect would be noticeable in larger (slower) pages; - **FromCode** - Data is loaded only when explicitly called via the [client-side API]({%slug htmlchart/client-side-programming/overview%}) of the control	(the **loadData()** method) via a lightweight callback; - **OnPageLoad** - Data is loaded when the page is being loaded along with the rest of the controls. This is the only case where it is available in the page markup	and a callback is not performed.|
| **OnClientSeriesClicked** |The name of the handler for the [OnClientSeriesClicked(deprecated)]({%slug htmlchart/client-side-programming/events/onclientseriesclicked(deprecated)%}) client-side event.|
| **OnClientSeriesHovered** |The name of the handler for the [OnClientSeriesHovered(deprecated)]({%slug htmlchart/client-side-programming/events/onclientserieshovered(deprecated)%}) client-side event.|
| **Layout** |A property indicating whether the chart will be rendered as Default, Sparkline or Stock chart.|
| **RenderAs** |A property indicating whether the chart will be rendered as **Canvas**, **SVG** or **VML** . Setting the property to **Auto** will instruct the chart to automatically decide how to be rendered, based on the browser. This property is available since **Q1 2015** .|
| **Transitions** |Get/set whether an animation is played when the chart is rendered.|
| **Width** |Get/set the width of the control in pixels.|

## Attribute Property in Main Tag > Appearance > FillStyle

|  **Name**  |  **Description**  |
| ------ | ------ |
| **BackgroundColor** |The background color of the main chart area. Can take a common color name or a hex value.|

## Attribute Property in Main Tag > ChartTitle

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Text** |A string for the chart title.|

## Attribute Properties in Main Tag > ChartTitle > Appearance

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Align** |The alignment of the title according to the chart. An enumeration ( **Telerik.Web.UI.HtmlChart.ChartTitleAlign** )	with one of the following values: Left, Center or Right.|
| **BackgroundColor** |The background color of the title area. Can take a common color name or a hex value.|
| **Position** |The vertical position of the chart title. An enumeration ( **Telerik.Web.UI.HtmlChart.ChartTitlePosition** ) with the following values: Top or Bottom.|
| **TextStyle** |Controls the appearance of the labels in this element. See the [Labels and Titles Font Settings]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%}) article for detailed information.|
| **Visible** |Defines whether the chart title is shown. Values are True or False.|

## Attribute Properties in Main Tag > Legend > Appearance


|  **Name**  |  **Description**  |
| ------ | ------ |
| **BackgroundColor** |The background color of the legend area. Can take a common color name or a hex value.|
| **Position** |The position of the chart legend relative to the plot area. An enumeration (Telerik.Web.UI.HtmlChart.ChartLegendPosition)	with the following values: Bottom, Left, Right, Top.|
| **TextStyle** |Controls the appearance of the labels in this element. See the [Labels and Titles Font Settings]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%}) article for detailed information.|
| **Visible** |Defines whether the chart legend is shown. Values are True or False.|

## Attribute Property in Main Tag > PlotArea > Appearance > FillStyle


|  **Name**  |  **Description**  |
| ------ | ------ |
| **BackgroundColor** |The background color of the plot area. Can take a common color name or a hex value.|

## Attribute Properties in Main Tag > PlotArea > Appearance > TextStyle


|  **Name**  |  **Description**  |
| ------ | ------ |
| **Margin** |Takes from one to four integers that specify all the margins the PlotArea will have in pixels.|

For example:

*  **Margin="15"** —all four margins are 15px.

*  **Margin="15 30"** —top and bottom margins are 15px; right and left margins are 30px.

*  **Margin="15 30 45"** —top margin is 15px; right and left margins are 30px;	bottom margin is 45px.

*  **Margin="15 30 45 60"** —top margin is 15px; right margin is 30px;	bottom margin is 45px; left margin is 60px;

## Attribute Properties in Main Tag > PlotArea > CommonTooltipsAppearance


|  **Name**  |  **Description**  |
| ------ | ------ |
| **BackgroundColor** |The background color of the tooltips for the items from this series. Can take a common color name or a hex value.	If it is not set explicitly the control will pick one according to currenly used Skin.|
| **Color** |The text color of the tooltips for the items from this series. Can take a common color name or a hex value.	If it is not set explicitly the control will pick one according to the currently used Skin.|
| **ClientTemplate** |A string for the client template that will be applied to the tooltips when they render.	It can use any column from the data source given to the chart through the following syntax: **#=dataItem.ColumnName#** where the string delimited inside #=.....#	is the expression to be evaluated. The tooltips are HTML so HTML can be used outside of the expression tags. See [here]({%slug htmlchart/functionality/clienttemplate/overview%}) for more information.|
| **DataFormatString** |The format string that will form the labels' text. The **{0}** placeholder is	used to denote the **Y** value of the item. For the **ScatterSeries** and **ScatterLineSeries** you can use **{1}** for the **X** value.	Although **CandlestickSeries** ToolTips have already predefined pattern by design	it can be modified through **{0}** , **{1}** , **{2}** , **{3}** and **{4}** placeholders that denotes accordingly the Open, High, Low, Close and	the corresponding XAxis item's value.|
| **Shared** |Defines whether the chart will display a single tooltip for every category. Values are True or False.|
| **SharedTemplate** |A string for the shared template that will be applied to the tooltips when they render. It can use the **points** (the category points) and **category** (the category name) fields through the following syntax: **#= category #, #= points[0].series.name#, #= points[0].value #** where the string delimited inside #=.....#	is the expression to be evaluated. The tooltips are HTML so HTML can be used outside of the expression tags.	See [here]({%slug htmlchart/functionality/clienttemplate/overview%}) for more information.|
| **Visible** |Defines whether the tooltips will be shown. Values are True or False.|

## See Also

 * [Visual Structure of the RadHtmlChart Control’s Tag Hierarchy]({%slug htmlchart/server-side-programming/overview%})

 * [Configuring Tags in the RadHtmlChart Series]({%slug htmlchart/server-side-programming/series-configuration%})

 * [Configuring Tags in the RadHtmlChart Series]({%slug htmlchart/server-side-programming/series-items-configuration%})

 * [Configuring PlotArea Element Axes of the RadHtmlChart]({%slug htmlchart/server-side-programming/axes-configuration%})

 * [Labels and Titles Font Settings in RadHtmlChart]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})
