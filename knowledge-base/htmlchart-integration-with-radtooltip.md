---
title: Wiring RadToolTip with RadHtmlChart in UI for ASP.NET AJAX
description: Learn how to integrate RadToolTip with RadHtmlChart in UI for ASP.NET AJAX to display custom tooltips during chart interactions.
type: how-to
page_title: Integrating RadToolTip with RadHtmlChart for Custom Tooltips
meta_title: Integrating RadToolTip with RadHtmlChart for Custom Tooltips
slug: htmlchart-integration-with-radtooltip
tags: radtooltip, radhtmlchart, chart, tooltip, ui-for-asp.net-ajax
res_type: kb
ticketid: 1712936
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> 
RadHtmlChart for UI for ASP.NET AJAX, <br/>
RadToolTip for UI for ASP.NET AJAX
</td>
</tr>
<tr>
<td> Version </td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to wire up a [RadToolTip](https://docs.telerik.com/devtools/aspnet-ajax/controls/tooltip/overview) with a [RadHtmlChart](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview) and display custom tooltips when interacting with the chart. I need a working example demonstrating this integration.

This knowledge base article also answers the following questions:

- How to show a RadToolTip on RadHtmlChart interactions?
- How to customize tooltips for RadHtmlChart series?
- How to implement tooltips in UI for ASP.NET AJAX charts?

## Solution

To connect and display a RadToolTip during RadHtmlChart interactions, follow these steps:

1. Add a `RadToolTip` to the page and set its `TargetControlID` to the ID of the RadHtmlChart.
2. Define a `RadHtmlChart` with client-side events such as `OnSeriesHover` to trigger the tooltip.
3. Implement a JavaScript function to handle the `OnSeriesHover` event and show the tooltip with custom content.

Below is an example:

````ASP.NET
<telerik:RadToolTip ID="RadToolTip1" runat="server" TargetControlID="ColumnChart" ShowCallout="false" />

<telerik:RadHtmlChart runat="server" ID="ColumnChart" Width="800" Height="500" Transitions="true">
    <ClientEvents OnSeriesHover="onSeriesHover" />
    <PlotArea>
        <Series>
            <telerik:ColumnSeries Name="Wooden Table" Stacked="false" Gap="1.5" Spacing="0.4">
                <Appearance>
                    <FillStyle BackgroundColor="#d5a2bb"></FillStyle>
                </Appearance>
                <LabelsAppearance DataFormatString="{0} sales" Position="OutsideEnd"></LabelsAppearance>
                <TooltipsAppearance DataFormatString="{0} sales" Color="White"></TooltipsAppearance>
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="25000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="12000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="39000"></telerik:CategorySeriesItem>
                </SeriesItems>
            </telerik:ColumnSeries>
            <telerik:ColumnSeries Name="Lounge">
                <Appearance>
                    <FillStyle BackgroundColor="#850071"></FillStyle>
                </Appearance>
                <LabelsAppearance DataFormatString="{0} sales" Position="OutsideEnd"></LabelsAppearance>
                <TooltipsAppearance DataFormatString="{0} sales" Color="White"></TooltipsAppearance>
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="15000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="23000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="10000"></telerik:CategorySeriesItem>
                </SeriesItems>
            </telerik:ColumnSeries>
            <telerik:ColumnSeries Name="Grey Sofa">
                <Appearance>
                    <FillStyle BackgroundColor="#620055"></FillStyle>
                </Appearance>
                <LabelsAppearance DataFormatString="{0} sales" Position="OutsideEnd"></LabelsAppearance>
                <TooltipsAppearance DataFormatString="{0} sales" Color="White"></TooltipsAppearance>
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="35000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="10000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="20000"></telerik:CategorySeriesItem>
                </SeriesItems>
            </telerik:ColumnSeries>
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
````

````JavaScript
function onSeriesHover(sender, args) {
    let toolTip = $find("<%=RadToolTip1.ClientID%>");
    let content = "Series: " + sender.series.name + "<br/>Value: " + sender.value;

    toolTip.set_text(content);
    toolTip.show();
}
````

````CSS
html body .k-chart-tooltip {
    display: none !important;
}
````

### Key Notes

- The `ClientEvents` property in RadHtmlChart is used to define the `OnSeriesHover` event.
- The JavaScript function `onSeriesHover` dynamically sets the tooltip content and displays it.
- The CSS rule hides the built-in chart tooltips to avoid conflicts.
