---
title: How to Show RadHtmlChart with Animation on a Click Event
description: How to Show RadHtmlChart with Animation on a Click Event. Check it now!
type: how-to
page_title: How to Show RadHtmlChart with Animation on a Click Event
slug: htmlchart-show-animation-on-a-click-event
res_type: kb
---


### PROBLEM

How to show RadHtmlChart with animation on a click event.

### DESCRIPTION

How do I show the RadHtmlChart on a page when a user clicks a button. I want the RadHtmlChart to draw with the standard animations.

### SOLUTION

The RadHtmlChart needs to be adding to the DOM during a postback to correctly register all client-side events. Initially hiding the RadHtmlChart using CSS will allow all of the client-side functions to be registered correctly. Then, the RadHtmlChart can be shown by changing the CSS *Display* property. Finially, the animation can be triggered by calling the redraw() event on the underlying KendoUI Chart elements that the RadHtmlChart utilizes.

#### Example:

Markup:

```ASP.NET
<input type="button" id="btnShowGraph" value="Show Chart" />
<div style="display: none;" id="chartHolder">
    <telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="640px" Height="400px">
        <ChartTitle Text="Some Distribution Chart">
            <Appearance>
                <TextStyle Color="Red" FontSize="18" FontFamily="Verdana" Margin="11" Padding="22" />
            </Appearance>
        </ChartTitle>
        <Legend>
            <Appearance Position="Bottom">
                <TextStyle FontSize="14" Color="Blue" FontFamily="Courier New, sans-serif" />
            </Appearance>
        </Legend>
        <PlotArea>
            <Series>
                <telerik:ColumnSeries Name="Some Count">
                    <Appearance>
                        <FillStyle BackgroundColor="Orange" />
                    </Appearance>
                    <LabelsAppearance Position="OutsideEnd" Color="#0000ff">
                        <TextStyle FontSize="12" />
                    </LabelsAppearance>
                    <SeriesItems>
                        <telerik:CategorySeriesItem Y="70" />
                        <telerik:CategorySeriesItem Y="30" />
                        <telerik:CategorySeriesItem Y="20" />
                        <telerik:CategorySeriesItem Y="10" />
                        <telerik:CategorySeriesItem Y="38" />
                        <telerik:CategorySeriesItem Y="43" />
                        <telerik:CategorySeriesItem Y="45" />
                        <telerik:CategorySeriesItem Y="66" />
                        <telerik:CategorySeriesItem Y="34" />
                    </SeriesItems>
                </telerik:ColumnSeries>
                <telerik:LineSeries AxisName="AdditionalAxis" Name="Some Percentage">
                    <Appearance>
                        <FillStyle BackgroundColor="Brown" />
                    </Appearance>
                    <LabelsAppearance Visible="false"></LabelsAppearance>
                    <SeriesItems>
                        <telerik:CategorySeriesItem Y="15" />
                        <telerik:CategorySeriesItem Y="23" />
                        <telerik:CategorySeriesItem Y="27" />
                        <telerik:CategorySeriesItem Y="30" />
                        <telerik:CategorySeriesItem Y="39" />
                        <telerik:CategorySeriesItem Y="45" />
                        <telerik:CategorySeriesItem Y="55" />
                        <telerik:CategorySeriesItem Y="71" />
                        <telerik:CategorySeriesItem Y="100" />
                    </SeriesItems>
                </telerik:LineSeries>
            </Series>
            <YAxis>
                <TitleAppearance Text="Some Count">
                    <TextStyle Color="Black" Bold="true" />
                </TitleAppearance>
                <LabelsAppearance>
                    <TextStyle Color="Black" />
                </LabelsAppearance>
                <MinorGridLines Visible="false" />
 
            </YAxis>
            <AdditionalYAxes>
                <telerik:AxisY Name="AdditionalAxis">
                    <TitleAppearance Text="Cumulative Percent of Some">
                        <TextStyle Color="Black" Bold="true" />
                    </TitleAppearance>
                    <LabelsAppearance>
                        <TextStyle Color="Black" />
                    </LabelsAppearance>
                    <MinorGridLines Visible="false" />
 
                </telerik:AxisY>
            </AdditionalYAxes>
            <XAxis>
                <Items>
                    <telerik:AxisItem LabelText="1" />
                    <telerik:AxisItem LabelText="2" />
                    <telerik:AxisItem LabelText="3" />
                    <telerik:AxisItem LabelText="4" />
                    <telerik:AxisItem LabelText="5" />
                    <telerik:AxisItem LabelText="6" />
                    <telerik:AxisItem LabelText="7" />
                    <telerik:AxisItem LabelText="8" />
                    <telerik:AxisItem LabelText="9+" />
                </Items>
                <AxisCrossingPoints>
                    <telerik:AxisCrossingPoint Value="0" />
                    <telerik:AxisCrossingPoint Value="9" />
                </AxisCrossingPoints>
                <LabelsAppearance>
                    <TextStyle Color="Black" FontFamily="Arial" FontSize="12" />
                </LabelsAppearance>
                <TitleAppearance Text="Some Opportunities">
                    <TextStyle Color="Black" FontFamily="Times New Roman" Bold="true" FontSize="12" />
                </TitleAppearance>
                <MinorGridLines Visible="false" />
                <MajorGridLines Visible="false" />
            </XAxis>
        </PlotArea>
    </telerik:RadHtmlChart>
</div>
```

```JavaScript
<script type="text/javascript">
 
    $(document).ready(function () {
 
        $("#btnShowGraph").click(function () {
 
 
 
            $("#chartHolder").css("display", "block")
                .find(".RadHtmlChart").each(function (index, elem) {
                    $telerik.$(elem).data("kendoChart").redraw();
                });
 
        });
 
    });
 
</script>
```




