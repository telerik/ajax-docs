---
title: Truncate Labels (set Max Length)
description: Truncate Labels (set Max Length). Check it now!
type: how-to
page_title: Truncate Labels (set Max Length)
slug: htmlchart-truncate-labels
res_type: kb
---


#### HOW TO

How to truncate the text of a chart labels and set max length to their strings.

#### SOLUTION

If changing the data source to reflect the desired state of the texts is not an option, you can use the [ClientTemplate](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/functionality/clienttemplate/overview) of the labels (or other elements) and create a JavaScript function that will truncate the text as desired.

Here is a basic example:

```ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="500px" Height="400px">
    <PlotArea>
        <Series>
            <telerik:PieSeries>
                <LabelsAppearance>
                    <ClientTemplate>#=truncateLabels(dataItem.category)#</ClientTemplate>
                </LabelsAppearance>
                <SeriesItems>
                    <telerik:PieSeriesItem Y="1" Name="some very long name that you want to have truncated" />
                    <telerik:PieSeriesItem Y="3" Name="another very long name that you want to have truncated" />
                    <telerik:PieSeriesItem Y="5" Name="a short name" />
                </SeriesItems>
            </telerik:PieSeries>
        </Series>
    </PlotArea>
    <Legend>
        <Appearance Visible="false"></Appearance>
    </Legend>
</telerik:RadHtmlChart>
<script>
    function truncateLabels(text) {
        //implement actual logic that will shorten texts
        if (text.length > 10) {
            return text.substring(0, 10) + "...";
        }
        return text;
    }
</script>
```






