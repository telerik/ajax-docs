---
title: Creating RadChart Programmatically
page_title: Creating RadChart Programmatically | UI for ASP.NET AJAX Documentation
description: Creating RadChart Programmatically
slug: chart/building-radcharts/creating-radchart-programmatically
tags: creating,radchart,programmatically
published: True
position: 3
---

# Creating RadChart Programmatically



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

The steps below show how to create a minimal RadChart programmatically.

See the "[create a more complex chart programmatically]({%slug chart/building-radcharts/creating-radchart-programmatically---more-complex-example%})" topic to see how multiple series are created and how appearance can be tailored at run-time.

See the topic "[Multiple Chart Types in a Single Chart]({%slug chart/advanced-topics/multiple-chart-types-in-a-single-chart%})" to see how multiple series area created programmatically and given different ChartSeriesTypes.

Once the chart is created, the critical steps are creating the [ChartSeries]({%slug chart/understanding-radchart-elements/series-overview%}) and [ChartSeriesItem]({%slug chart/understanding-radchart-elements/series-items%}) collections. There are two approaches to creating chart series objects. One is to use the default [ChartSeries]({%slug chart/understanding-radchart-elements/series-overview%}) constructor and assign its properties.A second route is to use the RadChart CreateSeries() method to set a number of important properties at once and return the constructed chart series.

1. First add the namespaces that support the objects to be referenced. The Telerik.WebWinControls.UI namespace supports the RadChart declaration and the Telerik.Charting namespace supports the other RadChart objects, e.g. [ChartSeries]({%slug chart/understanding-radchart-elements/series-overview%}) and [ChartSeriesItem]({%slug chart/understanding-radchart-elements/series-items%}).

>tabbedCode

````C#
	     
	using Telerik.Web.UI;
	using Telerik.Charting;
				
````



````VB.NET
	
	
	    Imports Telerik.Web.UI
	    Imports Telerik.Charting
	
````


>end

1. Next construct the RadChart itself.To the RadChart instance, assign the chart title using the ChartTitle.TextBlock.Text property.

>tabbedCode

````C#
	     
	RadChart radChart = new RadChart();
	radChart.ChartTitle.TextBlock.Text = "My RadChart";
				
````



````VB.NET
	
	    Dim radChart As New RadChart()
	    radChart.ChartTitle.TextBlock.Text = "My RadChart"
	
````


>end

1. Construct a new [ChartSeries]({%slug chart/understanding-radchart-elements/series-overview%}) object. Assign a name to the [ChartSeries.]({%slug chart/understanding-radchart-elements/series-overview%}) Set the ChartSeries.Type to be __Bar__. Using the ChartSeries.AddItem() method, add a series of [ChartSeriesItem]({%slug chart/understanding-radchart-elements/series-items%}) objects to the series Items collection. AddItem() takes as parameters a double "Value" and a string "Label".

>tabbedCode

````C#
	     
	// Create a ChartSeries and assign its name and chart type
	ChartSeries chartSeries = new ChartSeries();
	chartSeries.Name = "Sales";
	chartSeries.Type = ChartSeriesType.Bar;
	// add new items to the series,
	// passing a value and a label string
	chartSeries.AddItem(120, "Internet");
	chartSeries.AddItem(140, "Retail");
	chartSeries.AddItem(35, "Wholesale");
				
````



````VB.NET
	
	    ' Create a ChartSeries and assign its name and chart type
	    Dim chartSeries As New ChartSeries()
	    chartSeries.Name = "Sales"
	    chartSeries.Type = ChartSeriesType.Bar
	    ' add new items to the series,
	    ' passing a value and a label string
	    chartSeries.AddItem(120, "Internet")
	    chartSeries.AddItem(140, "Retail")
	    chartSeries.AddItem(35, "Wholesale")
	
````


>end

1. Finally, add the [ChartSeries]({%slug chart/understanding-radchart-elements/series-overview%}) to the RadChart Series____collection and add the RadChart to the page.

>tabbedCode

````C#
	
	// add the series to the RadChart Series collection
	    radChart.Series.Add(chartSeries);
	// add the RadChart to the page.
	    this.Page.Controls.Add(radChart);
				
````



````VB.NET
	
	    ' add the series to the RadChart Series collection
	    radChart.Series.Add(chartSeries)
	    ' add the RadChart to the page.
	    Me.Page.Controls.Add(radChart) 
	
````


>end

1. The finished chart in the running project should look like this example:
>caption 

![Programmatically Created Chart at Runtime](images/radchart-building006.png)



The alternative to using the [ChartSeries]({%slug chart/understanding-radchart-elements/series-overview%}) object constructor and assigning properties is to use the RadChart CreateSeries() method that lets you pass several properties in the call, including Name, MainColor, SecondColor and ChartSeriesType.

>tabbedCode

````C#
	   
	ChartSeries chartSeries = radChart.CreateSeries("Sales",
	   System.Drawing.Color.RoyalBlue,
	   System.Drawing.Color.LightSteelBlue,
	   ChartSeriesType.Bar);
				
````



````VB.NET
	
	    Dim chartSeries As ChartSeries = radChart.CreateSeries("Sales", System.Drawing.Color.RoyalBlue, System.Drawing.Color.LightSteelBlue, ChartSeriesType.Bar)
	
````


>end



# See Also

 * [Building RadCharts]({%slug chart/building-radcharts/building-radcharts%})

 * [Populate RadChart at Design-Time]({%slug chart/building-radcharts/populate-radchart-at-design-time%})

 * [Creating RadChart Declaratively]({%slug chart/building-radcharts/creating-radchart-declaratively%})

 * [Creating RadChart Programmatically - more complex example]({%slug chart/building-radcharts/creating-radchart-programmatically---more-complex-example%})
