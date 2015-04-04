---
title: Implementing Drill-Down Functionality
page_title: Implementing Drill-Down Functionality | UI for ASP.NET AJAX Documentation
description: Implementing Drill-Down Functionality
slug: htmlchart/application-scenarios/implementing-drill-down-functionality
tags: implementing,drill-down,functionality
published: True
position: 0
---

# Implementing Drill-Down Functionality



In this article you’ll see the basic of how to use the drill-down functionality of a __RadHtmlChart__ and working through the online demo, apply examples to make a drill-down Column chart.

## 

You can implement drill-down functionality for the __RadHtmlChart__ control by incorporating its Client-side API and updating the chart via AJAX.	This will allow you to display more detailed data on the chart control by clicking on a specific series item.

The online demo	[Drill-Down Chart](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/drilldownchart/defaultcs.aspx),shows how o use the drill-down functionality of the chart. (You should view this drill-down chart in a browser, clicking on it to drillinto the pieces, as you read this article.)On the first chart, the data is grouped by the greatest time span, which is year. The year is divided into quarters.Click on an item on the chart to "drill down" and see the values corresponding to the quarters of the selected year.Each quarter consists of three months. After clicking to "drill down" into a quarter for the selected year, you can see the values for each monthin the selected quarter.

__Example 1:__ The following steps describe the approach for implementing the drill-down functionality with code snippets from the online	drill-down demo previously reffered to.

1. Handle the [OnClientSeriesClicked]({%slug htmlchart/client-side-programming/events/onclientseriesclicked(deprecated)%}) client-side event (__Example 1.1__) in order	to send to the server information about the clicked series item via an AJAX request. The request is not initiated if the currently displayed data is from the mostdetailed level of presentation (in our case this is the data presented by months):__Example 1.1__: Send information about the clicked series to the Server.

````ASPNET
	        <script type="text/javascript">
	        	function OnClientSeriesClicked(sender, args) {
	        		if (args.get_seriesName() != "Months") $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest(args.get_category());
	        	}
	        </script>
````



1. On the server-side, handle the AJAX request an, depending on the current level of data presentation and the clicked series item, change	the data source and the settings of __RadHtmlChart__. As shown in __Example 1.2__, if the	current name of the series is "Years", the year	corresponding to the clicked series item is retrieved and it is used as a parameter for the __RadHtmlChart__ data source, as the new data	should be from the selected year. Also, the properties of the chart control are modified to match the new level of presentation and	a new data source that will provide the new data is specified.__Example 1.2__: RadHtmlChart updated on Ajax request.

>tabbedCode

````C#
		protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
		{
			string seriesName = RadHtmlChart1.PlotArea.Series[0].Name;
	
			if (seriesName == "Years")
			{
	
				Year = int.Parse(e.Argument);
				SqlDataSource2.SelectParameters[0].DefaultValue = Year.ToString();
				RadHtmlChart1.PlotArea.XAxis.DataLabelsField = "Quarter";
				RadHtmlChart1.PlotArea.Series[0].DataFieldY = "Rev";
				RadHtmlChart1.PlotArea.Series[0].Name = "Quarters";
				RadHtmlChart1.DataSourceID = "SqlDataSource2";
			}
			else
			{
				if (seriesName == "Quarters")
				{
					int quarter = int.Parse(e.Argument);
					SqlDataSource3.SelectParameters[0].DefaultValue = Year.ToString();
					SqlDataSource3.SelectParameters[1].DefaultValue = quarter.ToString();
					RadHtmlChart1.PlotArea.XAxis.DataLabelsField = "Month";
					RadHtmlChart1.PlotArea.Series[0].DataFieldY = "Rev";
					RadHtmlChart1.PlotArea.Series[0].Name = "Months";
					RadHtmlChart1.DataSourceID = "SqlDataSource3";
				}
			}
		}
````
````VB.NET
		Protected Sub RadAjaxManager1_AjaxRequest(sender As Object, e As AjaxRequestEventArgs)
			Dim seriesName As String = RadHtmlChart1.PlotArea.Series(0).Name
	
			If seriesName = "Years" Then
	
				Year = Integer.Parse(e.Argument)
				SqlDataSource2.SelectParameters(0).DefaultValue = Year.ToString()
				RadHtmlChart1.PlotArea.XAxis.DataLabelsField = "Quarter"
				RadHtmlChart1.PlotArea.Series(0).DataField = "Rev"
				RadHtmlChart1.PlotArea.Series(0).Name = "Quarters"
				RadHtmlChart1.DataSourceID = "SqlDataSource2"
			Else
				If seriesName = "Quarters" Then
					Dim quarter As Integer = Integer.Parse(e.Argument)
					SqlDataSource3.SelectParameters(0).DefaultValue = Year.ToString()
					SqlDataSource3.SelectParameters(1).DefaultValue = quarter.ToString()
					RadHtmlChart1.PlotArea.XAxis.DataLabelsField = "Month"
					RadHtmlChart1.PlotArea.Series(0).DataField = "Rev"
					RadHtmlChart1.PlotArea.Series(0).Name = "Months"
					RadHtmlChart1.DataSourceID = "SqlDataSource3"
				End If
			End If
		End Sub
````
>end

The AJAX requests in __Example 1__ are implemented via the __RadAjaxManager__ control. You can find more information about	it in [this](34C4A4F8-2422-41BD-80A2-1EB5034ADCBD) help article.

# See Also

 * [Demo: Drill-down Chart](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/drilldownchart/defaultcs.aspx)

 * [OnClientSeriesClicked(deprecated)]({%slug htmlchart/client-side-programming/events/onclientseriesclicked(deprecated)%})

 * [Column Chart]({%slug htmlchart/chart-types/column-chart%})
