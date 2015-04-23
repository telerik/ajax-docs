---
title: Binding to ObjectDataSource at Run-Time
page_title: Binding to ObjectDataSource at Run-Time | RadChart for ASP.NET AJAX Documentation
description: Binding to ObjectDataSource at Run-Time
slug: chart/building-radcharts/binding-to-objectdatasource-at-run-time
tags: binding,to,objectdatasource,at,run-time
published: True
position: 13
---

# Binding to ObjectDataSource at Run-Time



>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.
>


## 

Once a business object with appropriate attributes has been created you can bind to it in code at run-time. The steps are:

* Set the [ObjectDataSource](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx)[TypeName](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.typename.aspx) property to name of the object class, in this example "RadChartBinding.ProductsBO" (Be sure to qualify the class name with the namespace).

* Set the [SelectMethod](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.selectmethod.aspx) to the method marked by the [DataObjectMethodAttribute](http://msdn2.microsoft.com/en-us/library/system.componentmodel.dataobjectmethodattribute.aspx).

The code below demonstrates binding to an [ObjectDataSource](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx) that consumes an example object defined in the topic "[Creating an Object that can be consumed by ObjectDataSource]({%slug chart/building-radcharts/creating-an-object-that-can-be-consumed-by-objectdatasource%})".



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
````VB.NET
	     
	
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
