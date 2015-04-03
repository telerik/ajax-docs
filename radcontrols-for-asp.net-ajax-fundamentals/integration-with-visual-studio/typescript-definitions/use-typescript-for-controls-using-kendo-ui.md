---
title: Use TypeScript for Controls Using Kendo UI
page_title: Use TypeScript for Controls Using Kendo UI | UI for ASP.NET AJAX Documentation
description: Use TypeScript for Controls Using Kendo UI
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/typescript-definitions/use-typescript-for-controls-using-kendo-ui
tags: use,typescript,for,controls,using,kendo,ui
published: True
position: 4
---

# Use TypeScript for Controls Using Kendo UI



This article explains how to use the __Kendo TypeScript definitions__	with controls from the UI for ASP.NET AJAX suite that use __Kendo UI__ widgets.

## Getting a Reference to the Client-side Object of Kendo Widgets

By design, every control from the UI for ASP.NE T AJAX suite thatintegrates a __Kendo__ widget, exposes the client-side __get_kendoWidget__ method,which returns a reference to the widget object.

>note Exception to that rule is[RadClientDataSource](1ef67ca5-56c3-42a5-acd9-d4add74507c7)in versions prior to __Q2 2015__ .	In older version it exposes the __get_dataSourceObject__ method to return the reference to the __Kendo__ DataSource object.
>


## How to use Intellisense

The __get_kendoWidget__ method returns an object of type *`Object`*.In order to have the __Kendo__ intellisense, you should cast it to the proper type.

````JavaScript
					var sparklineChart = <Telerik.Web.UI.RadHtmlChart>$find("SparklineChart");
					var kendoSparkline = <kendo.dataviz.ui.Sparkline>sparklineChart.get_kendoWidget();
````


>caption Figure 1: Using the Kendo Sparkline chart’s intellisense with an object returned by a RadHtmlChart.

![typescript-using-kendo-intellisense](images/typescript-using-kendo-intellisense.png)

Once the type casting is done, you can utilize anyavailable client-side method exposed by the __Kendo__ widget.You can find more details about the widgets’ API in the [Kendo API reference](http://docs.telerik.com/kendo-ui/introduction).

# See Also

 * [Add TypeScript Definitions for Controls Using Kendo UI]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/typescript-definitions/add-typescript-definitions-for-controls-using-kendo-ui%})

 * [Kendo API reference](http://docs.telerik.com/kendo-ui/introduction)
