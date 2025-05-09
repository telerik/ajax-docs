---
title: Binding to XML Directly at Run-Time
page_title: Binding to XML Directly at Run-Time - RadChart
description: Check our Web Forms article about Binding to XML Directly at Run-Time.
slug: chart/building-radcharts/binding-to-xml-directly-at-run-time
tags: binding,to,xml,directly,at,run-time
published: True
position: 17
---

# Binding to XML Directly at Run-Time

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

To bind to the data in code at runtime to the XML file directly, use the [Server.MapPath](https://msdn2.microsoft.com/en-us/library/ms524632.aspx) property to locate the XML on disk. The example code below has code that assigns the data and data labels columns as well as massaging the general appearance of the chart.The two critical lines of code that you must have to minimally bind to the XML file are the assignment of the DataSource and the call to DataBind().

````C#
// assign the data source
RadChart1.DataSource = Server.MapPath("-/Products.xml");
RadChart1.Series[0].DataYColumn = "QuantityInStock";
RadChart1.PlotArea.XAxis.DataLabelsColumn = "Name";

// assign appearance related properties
RadChart1.PlotArea.XAxis.Appearance.LabelAppearance.RotationAngle = 300;
RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Font =
 new System.Drawing.Font("Verdana", 6, System.Drawing.FontStyle.Bold);
RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Color =
 System.Drawing.Color.BlueViolet;
RadChart1.PlotArea.Appearance.Dimensions.Margins.Bottom =
 Telerik.Charting.Styles.Unit.Percentage(20);

// bind to the chart
RadChart1.DataBind(); 
	
````
````VB	
' assign the data source
RadChart1.DataSource = Server.MapPath("-/Products.xml")
RadChart1.Series(0).DataYColumn = "QuantityInStock"
RadChart1.PlotArea.XAxis.DataLabelsColumn = "Name"
' assign appearance related properties
RadChart1.PlotArea.XAxis.Appearance.LabelAppearance.RotationAngle = 300
RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Font = New System.Drawing.Font("Verdana", 6, System.Drawing.FontStyle.Bold)
RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Color = System.Drawing.Color.BlueViolet
RadChart1.PlotArea.Appearance.Dimensions.Margins.Bottom = Telerik.Charting.Styles.Unit.Percentage(20)
' bind to the chart
RadChart1.DataBind()				
````

````C#	
// assign the data source
RadChart1.DataSource = Server.MapPath("-/Products.xml");
RadChart1.Series[0].DataYColumn = "QuantityInStock";
RadChart1.PlotArea.XAxis.DataLabelsColumn = "Name";

// assign appearance related properties
RadChart1.PlotArea.XAxis.Appearance.LabelAppearance.RotationAngle = 300;
RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Font =
 new System.Drawing.Font("Verdana", 6, System.Drawing.FontStyle.Bold);
RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Color =
 System.Drawing.Color.BlueViolet;
RadChart1.PlotArea.Appearance.Dimensions.Margins.Bottom =
 Telerik.Charting.Styles.Unit.Percentage(20);

// bind to the chart
RadChart1.DataBind(); 
````
````VB	     
' assign the data source
RadChart1.DataSource = Server.MapPath("-/Products.xml")
RadChart1.Series(0).DataYColumn = "QuantityInStock"
RadChart1.PlotArea.XAxis.DataLabelsColumn = "Name"
' assign appearance related properties
RadChart1.PlotArea.XAxis.Appearance.LabelAppearance.RotationAngle = 300
RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Font = New System.Drawing.Font("Verdana", 6, System.Drawing.FontStyle.Bold)
RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Color = System.Drawing.Color.BlueViolet
RadChart1.PlotArea.Appearance.Dimensions.Margins.Bottom = Telerik.Charting.Styles.Unit.Percentage(20)
' bind to the chart
RadChart1.DataBind()				
````

The running application looks something like the figure shown below.

![Binding to XML Data](images/radchart-building015.png)

# See Also

 * [Data Binding RadChart to an XML file]({%slug chart/building-radcharts/data-binding-radchart-to-an-xml-file%})

 * [Binding to XML at Design-Time using an XMLDataSource]({%slug chart/building-radcharts/binding-to-xml-at-design-time-using-an-xmldatasource%})
