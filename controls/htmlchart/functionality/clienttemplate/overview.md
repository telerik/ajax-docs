---
title: ClientTemplate Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: htmlchart/functionality/clienttemplate/overview
tags: overview
published: True
position: 0
---

# ClientTemplate Overview



## 

As of Q3 2012, __RadHtmlChart__ offers client-side templates for the labels and tooltipsused in the series. This Help article will discuss using client-side templates, connecting them to a data source and review the most used properties.

The composite property that controls this functionality is __ClientTemplate__ which is exposed in the __LabelsAppearance__and __TooltipsAppearance__ tags for each series. You can use the __ClientTemplate__ element to allow for runtimeevaluation of the __dataItem__ object and other fields associated with each series item. This means that additional columns from thedata source and other fields like category, series name/type/stack can be displayed as the content instead of only a string formatted around the value.

__Figure 1__ shows an example of using the __ClientTemplate__ composite property.

>note You can use number formats inside __Client Templates__ . You can find more information in[this Formatting Numbers]({%slug htmlchart/appearance-and-styling/format-numbers%})article in the section called *Formatting Labels and Tooltips by Using their Client Templates.* 
>


## Showing Database Values Using a ClientTemplate

In order to return the original data item used to construct the point (an object that exposes all fields from the data source) you must use a__dataItem__ object. If the chart is bound to an array the __dataItem__ object will expose only asingle field that contains the current value of the series item.

>important You must bind the __RadHtmlChart__ to a data source in order for the __dataItem__ object to be	available (tooltips and labels cannot be set programmatically for each item).
>


You use a simple evaluation clause to set the dateItem column: __#= dataItem.<columnName> #__. As the markup in__Example 1__ shows, you can concatenate a few evaluation clauses to get the data from several columns. You can also addcustom content between these clauses.

__Example 1__: The template to set the dataItem for the __ClientTemplate__ property is easy to code.

````ASPNET
			<telerik:radhtmlchart runat="server" id="RadHtmlChart1">
			<PlotArea>
				<Series>
					<telerik:BarSeries DataFieldY="data">
						<LabelsAppearance Position="InsideEnd">
							<ClientTemplate>
								#=dataItem.SecondColumn#
							</ClientTemplate>
						</LabelsAppearance>
						<TooltipsAppearance>
							<ClientTemplate>
								#=dataItem.SecondColumn#<br />
								#=dataItem.ThirdColumn#
							</ClientTemplate>
						</TooltipsAppearance>
					</telerik:BarSeries>
				</Series>
				<XAxis DataLabelsField="SecondColumn"></XAxis>
			</PlotArea>
		</telerik:radhtmlchart>
````



__Example 2__ shows how to set and get a simple data source for __RadHtmlChart__ to workwith the __ClientTemplate__ composite property.

__Example 2__: Setting a DataTable as the data source for the Bar chart shown in __Figure 1__.

>tabbedCode

````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			if (!IsPostBack)
			{
				RadHtmlChart1.DataSource = GetData();
				RadHtmlChart1.DataBind();
			}
		}
	
		protected DataTable GetData()
		{
			DataTable tbl = new DataTable();
			tbl.Columns.Add(new DataColumn("data"));
			tbl.Columns.Add(new DataColumn("SecondColumn"));
			tbl.Columns.Add(new DataColumn("ThirdColumn"));
			tbl.Rows.Add(new object[] { 1, "aaaa", "first row, item 3" });
			tbl.Rows.Add(new object[] { 2, "bbbb", "second row, item 3" });
			tbl.Rows.Add(new object[] { 2, "cccc", "third row, item 3" });
			tbl.Rows.Add(new object[] { 3, "dddd", "fourth row, item 3" });
			return tbl;
		}
````



````VB.NET
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			If Not IsPostBack Then
				RadHtmlChart1.DataSource = GetData()
				RadHtmlChart1.DataBind()
			End If
		End Sub
	
		Protected Function GetData() As DataTable
			Dim tbl As New DataTable()
			tbl.Columns.Add(New DataColumn("data"))
			tbl.Columns.Add(New DataColumn("SecondColumn"))
			tbl.Columns.Add(New DataColumn("ThirdColumn"))
			tbl.Rows.Add(New Object() {1, "aaaa", "first row, item 3"})
			tbl.Rows.Add(New Object() {2, "bbbb", "second row, item 3"})
			tbl.Rows.Add(New Object() {2, "cccc", "third row, item 3"})
			tbl.Rows.Add(New Object() {3, "dddd", "fourth row, item 3"})
			Return tbl
		End Function
````


>end

__Figure 1__: A Bar chart with the tooltip for the third item based on the __ClientTemplate__ composite property set in__Example 1__.![htmlchart-client Templates-example-usage](images/htmlchart-clientTemplates-example-usage.png)

Note how the labels for each series, the labels for the x-axis and the first row of the tooltips have the same data because the same column is used.

## Main Properties Used in a ClientTemplate

You can set the following properties for a __ClientTemplate__:

* __category__ - Returns the category name of the hovered series item.

* __BubbleSeries__ - Returns the value set in the __Tooltip__ property of the series item for a non-data bound chart and the corresponding value from the __DataFieldTooltip__ column of the data source for a data bound chart.

* __Area__, __Candlestick__, __Column__,__Bar__ and __Line Series__ - Returns the label text from the corresponding axis item.

* __PieSeries/DonutSeries__ - Returns the value set in the __Name__ property of the series item for a non-data bound chart and the corresponding value from the __NameField__ column of the data source for a data bound chart.

````ASPNET
			<labelsappearance>
				<ClientTemplate>
					Category: #=category#
				</ClientTemplate>
			</labelsappearance>
			<tooltipsappearance>
				<ClientTemplate>
					Category: #=category#
				</ClientTemplate>
			</tooltipsappearance>
````



* __dataItem__ - Returns the original data item used to construct the point. You can seemore information about using the __dataItem__ object in a __ClientTemplate__ in the previous section of this article —*Showing DataBase Values Using a ClientTemplate*.

* __percentage__ - Returns the point value represented as a percentage value. Available for donut and pie series. You can seemore information about using the percentage field in the [Display HTML and Execute JavaScript]({%slug htmlchart/functionality/clienttemplate/display-html-and-execute-javascript%}) article in the section called*Execute JavaScript*.

* __series__ - Returns the data series information. You can use the __series__ propertyto obtain the name, type and the stack group name (applicable for stacked series clustered in groups) of the series:

* __name__ - Returns the name of the hovered series. It corresponds to the __Name__ property of the series. If the series does not have a name set, "undefined" text will be returned.For example,- __ClientTemplate = "text #=series.name# more text"__ will return "text undefined more text".

* __type__ - Returns the type of the hovered series (for example Bar, Pie, ScatterLine, etc.).

* __stack__ - Returns the stack status of the hovered series. A stack can have the following values:

* __true__ - When the __Stack__ property of the series is set to __true__.

* __false__ - When the __Stack__ property of the series is set to __false__.

* __custom string__ - The string set in the __GroupName__ property thatclusters series in stacked groups.

````ASPNET
			<labelsappearance>
				<ClientTemplate>
					Series Name: #=series.name# , Series Type: #=series.type# , Series Stack Status: #=series.stack #
				</ClientTemplate>
			</labelsappearance>
			<tooltipsappearance>
				<ClientTemplate>
					Series Name: #=series.name# <br/> 
					Series Type: #=series.type# </br> 
					Series Stack Status: #=series.stack #
				</ClientTemplate>
			</tooltipsappearance>
````



* __value__ - Returns the point value (either a number or an object).

* __BubbleSeries__ - Returns an object that exposes three fields: x, y and size.

````ASPNET
			<labelsappearance>
				<ClientTemplate>
					X Value: #=value.x# , Y Value: #=value.y# , Size Value: #=value.size #
				</ClientTemplate>
			</labelsappearance>
			<tooltipsappearance>
				<ClientTemplate>
					X Value: #=value.x# <br/> 
					Y Value: #=value.y# <br/> 
					Size Value: #=value.size #
				</ClientTemplate>
			</tooltipsappearance>
````



* __CandlestickSeries__ - Returns an object that exposes four fields: open, high, low and close.

````ASPNET
			<tooltipsappearance>
				<ClientTemplate>
					Open Value: #=value.open# <br/> 
					High Value: #=value.high# <br/> 
					Low Value: #=value.low # <br/> 
					Close Value: #=value.close #
				</ClientTemplate> 
			</tooltipsappearance>
````



* __ScatterSeries and ScatterLineSeries__ - Returns an object that exposes the x and y fields for the X-value and the Y-value of the item.

````ASPNET
			<labelsappearance>
				<ClientTemplate>
					X Value: #=value.x# , Y Value: #=value.y#
				</ClientTemplate>
			</labelsappearance>
			<tooltipsappearance>
				<ClientTemplate>
					X Value: #=value.x# <br/> 
					Y Value: #=value.y#
				</ClientTemplate>=""
			</tooltipsappearance>
````



* __Other Series Types__ - Returns the Y value of the hovered series Item.

````ASPNET
			<labelsappearance>
				<ClientTemplate>
					Y Value: #=value#
				</ClientTemplate>
			</labelsappearance>
			<tooltipsappearance>
				<ClientTemplate>
					Y Value: #=value#
				</ClientTemplate> 
			</tooltipsappearance>
````



# See Also

 * [Format Numbers]({%slug htmlchart/appearance-and-styling/format-numbers%})

 * [Format Dates]({%slug htmlchart/appearance-and-styling/format-dates%})

 * [Display HTML and Execute JavaScript]({%slug htmlchart/functionality/clienttemplate/display-html-and-execute-javascript%})

 * [Shared Template for ToolTips]({%slug htmlchart/functionality/clienttemplate/shared-template-for-tooltips%})
