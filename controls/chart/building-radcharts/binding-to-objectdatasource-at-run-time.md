---
title: Binding to ObjectDataSource at Run-Time
page_title: Binding to ObjectDataSource at Run-Time - RadChart
description: Check our Web Forms article about Binding to ObjectDataSource at Run-Time.
slug: chart/building-radcharts/binding-to-objectdatasource-at-run-time
tags: binding,to,objectdatasource,at,run-time
published: True
position: 13
---

# Binding to ObjectDataSource at Run-Time

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

Once a business object with appropriate attributes has been created you can bind to it in code at run-time. The steps are:

* Set the [ObjectDataSource](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx)[TypeName](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.typename.aspx) property to name of the object class, in this example "RadChartBinding.ProductsBO" (Be sure to qualify the class name with the namespace).

* Set the [SelectMethod](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.selectmethod.aspx) to the method marked by the [DataObjectMethodAttribute](https://msdn2.microsoft.com/en-us/library/system.componentmodel.dataobjectmethodattribute.aspx).

The code below demonstrates binding to an [ObjectDataSource](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx) that consumes an example object defined in the topic "[Creating an Object that can be consumed by ObjectDataSource]({%slug chart/building-radcharts/creating-an-object-that-can-be-consumed-by-objectdatasource%})".

````C#   
ObjectDataSource ods = new ObjectDataSource();
ods.SelectMethod = "GetProducts";
ods.TypeName = "RadChartBinding.ProductsBO";
RadChart1.DataSource = ods.Select();
RadChart1.Series[0].DataYColumn = "QuantityInStock";
RadChart1.PlotArea.XAxis.DataLabelsColumn = "Name";
RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Font = new System.Drawing.Font("Arial", 8);

RadChart1.DataBind();			
````
````VB	
	Dim ods As New ObjectDataSource()
	ods.SelectMethod = "GetProducts"
	ods.TypeName = "RadChartBinding.ProductsBO"
	RadChart1.DataSource = ods.[Select]()
	RadChart1.Series(0).DataYColumn = "QuantityInStock"
	RadChart1.PlotArea.XAxis.DataLabelsColumn = "Name"
	RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Font = New System.Drawing.Font("Arial", 8)
	RadChart1.DataBind()				
````

# See Also

 * [Data Binding RadChart to an ObjectDataSource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%})

 * [Creating an Object that can be Consumed by ObjectDataSource]({%slug chart/building-radcharts/creating-an-object-that-can-be-consumed-by-objectdatasource%})

 * [Binding to ObjectDataSource at Run-Time]({%slug chart/building-radcharts/binding-to-objectdatasource-at-run-time%})

 * [Data Binding RadChart to ObjectDataSource at Design-Time]({%slug chart/building-radcharts/data-binding-radchart-to-objectdatasource-at-design-time%})
