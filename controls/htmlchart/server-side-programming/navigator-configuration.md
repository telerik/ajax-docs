---
title: Navigator Configuration
page_title: Navigator Configuration | UI for ASP.NET AJAX Documentation
description: Navigator Configuration
slug: htmlchart/server-side-programming/navigator-configuration
tags: navigator,configuration
published: True
position: 2
---

# Navigator Configuration



__Data Navigator__ is part of the [Stock chart layout]({%slug htmlchart/functionality/data-navigation%}) of RadHtmlChart, used to	__zoom__ and __scroll__	particular time intervals of __DateTime__ data. The feature is available since __Q3 2013__. Please find below all the corresponding properties:

## Attribute properties in the Navigator tag


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Visible__ |Defines whether the Navigator is shown. True or false.|

## Attribute properties in Navigator > RangeSelector


|  __Name__  |  __Description__  |
| ------ | ------ |
| __From__ |The lower boundary of the selected range. Takes a string in a date format (e.g. "yyyy/MM/dd") when declared in the markup and	a DateTime object when set in the code behind.|
| __To__ |The upper boundary of the selected range. Takes a string in a date format (e.g. "yyyy/MM/dd") when declared in the markup and	a DateTime object when set in the code behind.|

## Attribute properties in Navigator > SelectionHint


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Visible__ |Defines whether the Selection Hint is displayed when moving the Range Selector. True or false.|
| __DataFormatString__ |The format string that will form the Selection Hint text. The {0} placeholder is used to denote the __From__ date	while {1} placeholder is used to denote the __To__ date (e.g. DataFormatString="From {0} to {1}"). More details on how	to format dates is available[Date Axis]({%slug htmlchart/functionality/axes/date-axis%})help article.|

## Attribute properties in Navigator > Series

The type of the series which can be used in the __Navigator__ is[Area Series]({%slug htmlchart/chart-types/area-chart%}),[Column Series]({%slug htmlchart/chart-types/column-chart%}),[Line Series]({%slug htmlchart/chart-types/line-chart%}) and[Candlestick Series]({%slug htmlchart/chart-types/candlestick-chart%}).

All the listed properties in [Configuring Series]({%slug htmlchart/server-side-programming/series-configuration%})help article which are related to the above series types are also available and optional for the Navigator > Series.The exceptions are:


|  __Name__  |  __Comment__  |
| ------ | ------ |
| __DataFieldY__  *(Area, Column and Line Series specific)* , __DataOpenField, DataHighField, DataHighField, DataLowField__  *(Candlestick Series specific)* .|Required|
| __AxisName, GroupName, Name, NameField, Stacked, StartAngle, SeriesItems,LabelsAppearance, TooltipsAppearance__ |Not Supported|

## Attribute properties in Navigator > XAxis

All the listed properties in [Configuring Axes]({%slug htmlchart/server-side-programming/axes-configuration%})help article which are related to the XAxis are also available and optional for the Navigator > XAxis.The exceptions are:


|  __Name__  |  __Comment__  |
| ------ | ------ |
| __DataFieldY__  *(Area, Column and Line Series specific)* , __DataOpenField, DataHighField, DataHighField, DataLowField__  *(Candlestick Series specific)* .|Required|
| __Type__ |Takes only "Date" value.|
| __AxisCrossingValue, DataLabelsField, Name, TitleAppearance, Items__ |Not Supported|

# See Also

 * [Overview]({%slug htmlchart/server-side-programming/overview%})

 * [Basic Configuration]({%slug htmlchart/server-side-programming/basic-configuration%})

 * [Series Configuration]({%slug htmlchart/server-side-programming/series-configuration%})

 * [Series Items Configuration]({%slug htmlchart/server-side-programming/series-items-configuration%})

 * [Axes Configuration]({%slug htmlchart/server-side-programming/axes-configuration%})
