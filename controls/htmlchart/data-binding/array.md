---
title: Array
page_title: Array | RadHtmlChart for ASP.NET AJAX Documentation
description: Array
slug: htmlchart/data-binding/array
tags: array
published: True
position: 7
---

# Array



## 

This help article describes which properties to use to bind a **RadHtmlChart** to an **Array** andpresents a code example. To bind a **RadHtmlChart** to an **Array** object, you assignthe **RadHtmlChart DataSource** property to the array and then call the **RadHtmlChart DataBind**() method.	The y-axis automatically adjusts to accomodate the values and its appearance can be controlled more precisely via its properties.	**Example 1** demonstrates data binding to an array of doubles.

**Example 1**: The **RadHtmlChart** markup that is bound to an array of doubles in **Example 2**.

````ASPNET
	    <telerik:RadHtmlChart runat="server" ID="RadHtmlChart1">
	        <PlotArea>
	            <Series>
	                <telerik:LineSeries Name="2011">
	                    <TooltipsAppearance DataFormatString="{0}%" />
	                    <LabelsAppearance Visible="false" />
	                </telerik:LineSeries>
	            </Series>
	            <XAxis>
	                <Items>
	                    <telerik:AxisItem LabelText="January" />
	                    <telerik:AxisItem LabelText="Februrary" />
	                    <telerik:AxisItem LabelText="March" />
	                    <telerik:AxisItem LabelText="April" />
	                    <telerik:AxisItem LabelText="May" />
	                    <telerik:AxisItem LabelText="June" />
	                    <telerik:AxisItem LabelText="July" />
	                    <telerik:AxisItem LabelText="August" />
	                    <telerik:AxisItem LabelText="September" />
	                    <telerik:AxisItem LabelText="October" />
	                    <telerik:AxisItem LabelText="November" />
	                    <telerik:AxisItem LabelText="December" />
	                </Items>
	            </XAxis>
	            <YAxis>
	                <LabelsAppearance DataFormatString="{0}%" />
	            </YAxis>
	        </PlotArea>
	        <Legend>
	            <Appearance Visible="false" />
	        </Legend>
	        <ChartTitle Text="IE market share in 2011">
	        </ChartTitle>
	    </telerik:RadHtmlChart>
````



**Example 2**: Binding the chart from **Example 1** to an array of doubles.



````C#
		protected void Page_Load(object sender, System.EventArgs e)
		{
			double[] ValuesArray = { 26.6, 26.5, 25.8, 24.3, 24.9, 23.2, 22.0, 22.4, 22.9, 21.7, 21.2, 20.2 };
			RadHtmlChart1.DataSource = ValuesArray;
			RadHtmlChart1.DataBind();
		}
````
````VB.NET
		Protected Sub Page_Load(sender As Object, e As System.EventArgs)
			Dim ValuesArray As Double() = {26.6, 26.5, 25.8, 24.3, 24.9, 23.2, _
			 22.0, 22.4, 22.9, 21.7, 21.2, 20.2}
			RadHtmlChart1.DataSource = ValuesArray
			RadHtmlChart1.DataBind()
		End Sub
````


# See Also

 * [RadHtmlChart Line Series]({%slug htmlchart/chart-types/line-chart%})

 * [RadHtmlChart Array Demo](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/bindtoarray/defaultcs.aspx)
