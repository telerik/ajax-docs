---
title: Known Limitations
page_title: Known Limitations | RadHtmlChart for ASP.NET AJAX Documentation
description: Known Limitations
slug: htmlchart/troubleshooting/known-issues/known-limitations
tags: known,limitations
published: True
position: 1
---

# Known Limitations

This article lists some of the known limitations of using the **RadHtmlChart** and presents some workarounds.

## OnDataBound Server-side Event Is Not Available

**RadHtmlChart** does not implement the server-side **OnDataBound** event because it uses client-side data binding and rendering. This is a paradigm of the control itself and therefore the server-side **OnDataBound** event could not fit in the main concept of the **RadHtmlChart**.You can find more information in this [Overview]({%slug htmlchart/overview%}) help article.

The **OnDataBound** event is present in the Intellisense because it **is inherited from	System.Web.UI.WebControls.WebControl**. It cannot be used because no information is sent to it.

## Data Bound Series Items Cannot Be Accessed or Modified in the Code-behind

* Items of a data bound series cannot be accessed or modified on the server-side. This is also a consequence of the client-side data binding and rendering of the control (no **OnDataBound** event) which is described in the above section.

* Items of a data bound series can only be modified through the values in their corresponding data source columns.

* Items of declaratively or programmatically created series can be accessed and modified in the code-behind because these items are sever-side .NET objects. You can see and example in the [Using Multiple Custom Colors to Create Charts]({%slug htmlchart/how-to/using-multiple-custom-colors-to-create-charts%}) help article.

## Chart Title, Axes Titles, Series Names and Series Labels do Not Accept HTML Elements

The text in the chart title, axes titles, series names and series labels is rendered as an SVG Text element. Therefore, these elements do not accept any style or HTML tags.

>tip The series tooltips are HTML elements and can, therefore, accept HTML strings, e.g., a `<br />` tag to create a new line.
>
>Line breaking in labels is made with the **"\n"** line feed characters. See an example in the [HtmlChart - Multiline Labels](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/multiline-labels/defaultcs.aspx) demo.


>tip You can use the [TextStyle]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%}) property to style chart title, chart legend, axes titles, axes labels and series labels with the options it provides

## See Also

 * [RadHtmlChart: Migrating Functionalities - Features and Series Types Parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})

 * [RadHtmlChart: Overview of Main Features]({%slug htmlchart/overview%})

 * [Labels and Titles Font Settings in RadHtmlChart]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})

 * [Using Multiple Custom Colors to Create Charts]({%slug htmlchart/how-to/using-multiple-custom-colors-to-create-charts%})

 * [HtmlChart - Multiline Labels](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/multiline-labels/defaultcs.aspx)

 * [SVG Specification from W3C](https://www.w3.org/TR/SVG11/text.html#Introduction)
