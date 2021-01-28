---
title: Responding to Server Events
page_title: Responding to Server Events - RadChart
description: Check our Web Forms article about Responding to Server Events.
slug: chart/advanced-topics/responding-to-server-events
tags: responding,to,server,events
published: True
position: 3
---

# Responding to Server Events

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

Use the **RadChart OnClick** event to handle server postbacks caused by clicking on areas of the chart. Elements of the chart that have an ActiveRegion property can be used for information inside the **OnClick** event handler. The example below shows some of the commonly used chart elements that react to clicks including the chart title, x and y axis labels, series legends and items. The code example below shows a RadChart OnClick event handler evaluating the **ChartClickEventArgs** "Args" parameter. Use the Args.Element.ActiveRegion property to access the ToolTip, Url and Attributes for the ActiveRegion.

![](images/radchart-advanced001.png)

````C#
private void radChart1_Load(object sender, EventArgs e)
{
	radChart1.ChartTitle.ActiveRegion.Click += new RegionClickEventHandler(Region_Click);
	foreach (ChartSeries series in radChart1.Series) { foreach (ChartSeriesItem item in series.Items) { item.ActiveRegion.Click += new RegionClickEventHandle(Region_Click); } }
}
void Region_Click(object sender, RegionClickEventArgs args)
{
	string logFormat = "Item Class:{0} - \"{1}\"" + Environment.NewLine;
	if (sender is ChartTitle) { tbLog.Text += String.Format(logFormat, sender.GetType().Name, (sender as ChartTitle).TextBlock.Text); } else if (sender is ChartSeriesItem) { tbLog.Text += String.Format(logFormat, sender.GetType().Name, (sender as ChartSeriesItem).Name); }
}
````
````VB	
Private Sub radChart1_Load(ByVal sender As Object, ByVal e As EventArgs)
	AddHandler radChart1.ChartTitle.ActiveRegion.Click, AddressOf Region_Click
	For Each series As ChartSeries In radChart1.Series
		For Each item As ChartSeriesItem In series.Items
			AddHandler item.ActiveRegion.Click, AddressOf Region_Click
		Next
	Next
End Sub
Sub Region_Click(ByVal sender As Object, ByVal args As RegionClickEventArgs)
	Dim logFormat As String = "Item Class:{0} - ""{1}""" + Environment.NewLine
	If TypeOf sender Is ChartTitle Then
		tbLog.Text += [String].Format(logFormat, sender.[GetType]().Name, (TryCast(sender, ChartTitle)).TextBlock.Text)
	ElseIf TypeOf sender Is ChartSeriesItem Then
		tbLog.Text += [String].Format(logFormat, sender.[GetType]().Name, (TryCast(sender, ChartSeriesItem)).Name)
	End If
End Sub
````

To react to server events in RadChart handle the Click event for a report item ActiveRegion in code. Determine the type of the clicked object by checking the "sender" object passed to the event handler. Cast "sender" to that type to use its properties and methods. See the code example below. In the radChart1_Load the ChartTitle and ChartSeriesItems both have ActiveRegion properties. The ActiveRegion.Click is assigned the "Region_Click" event handler. In "Region_Click" the Sender class is determined. For example if Sender is a ChartTitle type, Sender is cast to be a ChartTitle and its **TextBlock.Text** property is accessed.

![](images/radchart-advanced002.png)

````C#
private void radChart1_Load(object sender, EventArgs e)
{
	radChart1.ChartTitle.ActiveRegion.Click += new RegionClickEventHandler(Region_Click);
	foreach (ChartSeries series in radChart1.Series) { foreach (ChartSeriesItem item in series.Items) { item.ActiveRegion.Click += new RegionClickEventHandler(Region_Click); } }
}
void Region_Click(object sender)
{
	string logFormat = "Item Class:{0} - \"{1}\"" + Environment.NewLine;
	if (sender is ChartTitle) { tbLog.Text += String.Format(logFormat, sender.GetType().Name, (sender as ChartTitle).TextBlock.Text); } else if (sender is ChartSeriesItem) { tbLog.Text += String.Format(logFormat, sender.GetType().Name, (sender as ChartSeriesItem).Name); }
}
````
````VB	
Private Sub radChart1_Load(ByVal sender As Object, ByVal e As EventArgs)
	AddHandler radChart1.ChartTitle.ActiveRegion.Click, AddressOf Region_Click
	For Each series As ChartSeries In radChart1.Series
		For Each item As ChartSeriesItem In series.Items
			AddHandler item.ActiveRegion.Click, AddressOf Region_Click
		Next
	Next
End Sub
Sub Region_Click(ByVal sender As Object, ByVal args As RegionClickEventArgs)
	Dim logFormat As String = "Item Class:{0} - ""{1}""" + Environment.NewLine
	If TypeOf sender Is ChartTitle Then
		tbLog.Text += [String].Format(logFormat, sender.[GetType]().Name, (TryCast(sender, ChartTitle)).TextBlock.Text)
	ElseIf TypeOf sender Is ChartSeriesItem Then
		tbLog.Text += [String].Format(logFormat, sender.[GetType]().Name, (TryCast(sender, ChartSeriesItem)).Name)
	End If
End Sub
````



