---
title: Multiple Y-Axes
page_title: Multiple Y-Axes | RadHtmlChart for ASP.NET AJAX Documentation
description: Multiple Y-Axes
slug: htmlchart/functionality/axes/multiple-y-axes
tags: multiple,y-axes
published: True
position: 2
---

# Multiple Y-Axes

**RadHtmlChart** supports multiple Y-axes to provide an additional scale against which to plot information as of the Q2 2012 release.

>tip You can set the `Value` of the `AxisCrossingPoint` to a very high value (like `99999`) that is higher than the number of items on the x-axis to ensure it is always on the right-hand side.

To use multiple Y-axes, you add the required **telerik:AxisY** definitions in the **AdditionalYAxes** tag inside **PlotArea**. **Figure 1** shows a Column chart with an additional y-axis defined on the right. As you can see in the markup in **Example 1**, you configure the additional y-axes similar to the main YAxis, but you set the axis' **Name** property - its value is used in the series' **AxisName** property to specify which axis is used by the current series.

In **Example 2** you can see how to add and configure the **AdditionalAxis** on the server-side.

As of Q1 2014, you can use the **AxisCrossingPoints** tag to rearrange the position of the main and the additional Y-axes of the chart. **Figure 1** shows the additional y-axis repositioned on the right of the chart. The markup in Example 1 shows that the **AxisCrossingPoints** tag is defined in the **X-Axis** configuration section. The order of the **AxisCrossingPoint** properties corresponds to the Y-axes declarations and the **Value**	attribute sets the position through the X-axis.

>warning `AxisName`  property is not supported for **Radar** and **Polar** series types.

>caption Figure 1: A Column chart with an additional y-axis, which is repositioned on the right.

![htmlchart-multiple-y-axes-overview](images/htmlchart-multiple-y-axes-overview.png)

>caption Example 1: The simple markup to create **Figure 1** with the **AdditionalYAxes** and **AxisCrossingPoints** tags.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="640px" Height="480px">
	<PlotArea>
		<Series>
			<telerik:ColumnSeries Name="Total cases">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="1000" />
					<telerik:CategorySeriesItem Y="2000" />
					<telerik:CategorySeriesItem Y="2500" />
					<telerik:CategorySeriesItem Y="1750" />
				</SeriesItems>
			</telerik:ColumnSeries>
			<telerik:ColumnSeries AxisName="AdditionalAxis" Name="Outstanding Cases">
				<Appearance>
					<FillStyle BackgroundColor="Red" />
				</Appearance>
				<SeriesItems>
					<telerik:CategorySeriesItem Y="200" />
					<telerik:CategorySeriesItem Y="230" />
					<telerik:CategorySeriesItem Y="170" />
					<telerik:CategorySeriesItem Y="190" />
				</SeriesItems>
			</telerik:ColumnSeries>
		</Series>
		<YAxis Color="Orange" Width="3">
			<TitleAppearance Text="Total Cases count">
				<TextStyle Color="Black" />
			</TitleAppearance>
			<LabelsAppearance>
				<TextStyle Color="Black" />
			</LabelsAppearance>
		</YAxis>
		<AdditionalYAxes>
			<telerik:AxisY Name="AdditionalAxis" Color="Red" Width="3">
				<TitleAppearance Text="Outstanding Cases count">
					<TextStyle Color="Black" />
				</TitleAppearance>
				<LabelsAppearance>
					<TextStyle Color="Black" />
				</LabelsAppearance>
			</telerik:AxisY>
		</AdditionalYAxes>
		<XAxis>
			<LabelsAppearance DataFormatString="Quarter {0}" />
			<Items>
				<telerik:AxisItem LabelText="1" />
				<telerik:AxisItem LabelText="2" />
				<telerik:AxisItem LabelText="3" />
				<telerik:AxisItem LabelText="4" />
			</Items>
			<AxisCrossingPoints>
				<telerik:AxisCrossingPoint Value="0" />
				<telerik:AxisCrossingPoint Value="99999" />
			</AxisCrossingPoints>
		</XAxis>
	</PlotArea>
</telerik:RadHtmlChart>
````
>caption Example 2: Create **AdditionalYAxes** and **AxisCrossingPoints** in the code-behing
````ASP.NET
        <telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="640px" Height="480px">
            <PlotArea>
                <Series>
                    <telerik:ColumnSeries Name="Total cases">
                        <SeriesItems>
                            <telerik:CategorySeriesItem Y="1000" />
                            <telerik:CategorySeriesItem Y="2000" />
                            <telerik:CategorySeriesItem Y="2500" />
                            <telerik:CategorySeriesItem Y="1750" />
                        </SeriesItems>
                    </telerik:ColumnSeries>
                    <telerik:ColumnSeries AxisName="AdditionalAxis" Name="Outstanding Cases">
                        <Appearance>
                            <FillStyle BackgroundColor="Red" />
                        </Appearance>
                        <SeriesItems>
                            <telerik:CategorySeriesItem Y="200" />
                            <telerik:CategorySeriesItem Y="230" />
                            <telerik:CategorySeriesItem Y="170" />
                            <telerik:CategorySeriesItem Y="190" />
                        </SeriesItems>
                    </telerik:ColumnSeries>
                </Series>
                <YAxis Color="Orange" Width="3">
                    <TitleAppearance Text="Total Cases count">
                        <TextStyle Color="Black" />
                    </TitleAppearance>
                    <LabelsAppearance>
                        <TextStyle Color="Black" />
                    </LabelsAppearance>
                </YAxis>
                <XAxis>
                    <LabelsAppearance DataFormatString="Quarter {0}" />
                    <Items>
                        <telerik:AxisItem LabelText="1" />
                        <telerik:AxisItem LabelText="2" />
                        <telerik:AxisItem LabelText="3" />
                        <telerik:AxisItem LabelText="4" />
                    </Items>
                </XAxis>
            </PlotArea>
        </telerik:RadHtmlChart>
````

````C#
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            CreateAdditonalAxis();
        }
    }

    private void CreateAdditonalAxis()
    {
        AxisY secondAxis = new AxisY();
        secondAxis.Name = "AdditionalAxis";
        secondAxis.Color = System.Drawing.Color.Red;
        secondAxis.Width = System.Web.UI.WebControls.Unit.Pixel(3);
        secondAxis.TitleAppearance.Text = "Outstanding Cases count";
        secondAxis.TitleAppearance.TextStyle.Color = System.Drawing.Color.Black;
        secondAxis.LabelsAppearance.TextStyle.Color = System.Drawing.Color.Black;

        AxisCrossingPoint leftCrossingPoint = new AxisCrossingPoint();
        leftCrossingPoint.Value = 0;

        AxisCrossingPoint rightCrossingPoint = new AxisCrossingPoint();
        rightCrossingPoint.Value = 99999; //choose some big number in order to show it after all items on the right

        RadHtmlChart1.PlotArea.AdditionalYAxes.Add(secondAxis);
        RadHtmlChart1.PlotArea.XAxis.AxisCrossingPoints.Add(leftCrossingPoint);
        RadHtmlChart1.PlotArea.XAxis.AxisCrossingPoints.Add(rightCrossingPoint);
    }
````
````VB
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        If Not IsPostBack Then
            CreateAdditonalAxis()
        End If
    End Sub

    Private Sub CreateAdditonalAxis()
        Dim secondAxis As AxisY = New AxisY()
        secondAxis.Name = "AdditionalAxis"
        secondAxis.Color = System.Drawing.Color.Red
        secondAxis.Width = System.Web.UI.WebControls.Unit.Pixel(3)
        secondAxis.TitleAppearance.Text = "Outstanding Cases count"
        secondAxis.TitleAppearance.TextStyle.Color = System.Drawing.Color.Black
        secondAxis.LabelsAppearance.TextStyle.Color = System.Drawing.Color.Black
        
        Dim leftCrossingPoint As AxisCrossingPoint = New AxisCrossingPoint()
        leftCrossingPoint.Value = 0
        
        Dim rightCrossingPoint As AxisCrossingPoint = New AxisCrossingPoint()
        rightCrossingPoint.Value = 99999
        RadHtmlChart1.PlotArea.AdditionalYAxes.Add(secondAxis)
        RadHtmlChart1.PlotArea.XAxis.AxisCrossingPoints.Add(leftCrossingPoint)
        RadHtmlChart1.PlotArea.XAxis.AxisCrossingPoints.Add(rightCrossingPoint)
    End Sub
````

## See Also

 * [RadHtmlChart Structure]({%slug htmlchart/radhtmlchart-structure%})
