---
title: Data Binding RadChart to ObjectDataSource at Design-Time
page_title: Data Binding RadChart to ObjectDataSource at Design-Time | RadChart for ASP.NET AJAX Documentation
description: Data Binding RadChart to ObjectDataSource at Design-Time
slug: chart/building-radcharts/data-binding-radchart-to-objectdatasource-at-design-time
tags: data,binding,radchart,to,objectdatasource,at,design-time
published: True
position: 14
---

# Data Binding RadChart to ObjectDataSource at Design-Time



>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.
>


## 

Use the Data Source Configuration Wizard to bind [ObjectDataSource](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx)at design time:

1. Click the RadChart [Smart Tag]({%slug chart/understanding-radchart-ui/radchart-smarttag-menu%}) "Choose Data Source" | "<New Data Source>".
>caption 

![Smart Tag Choose Data Source](images/radchart-building014.png)

1. From the "Choose a data source type" page of the wizard select "Object" and click "OK".
>caption 

![Choose a data source type](images/radchart-building011.png)

1. From the "Choose a Business Object" page of the wizard, select your business object from the drop down list.Click Next.
>caption 

![Choose a business object](images/radchart-building012.png)

1. On the "Define data methods" page choose the select method from the drop down list.Click Finish.A new [ObjectDataSource](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx) component will be visible on the page and the RadChart **DataSource** property will point to it.
>caption 

![](images/radchart-building013.png)

# See Also

 * [Data Binding RadChart to an ObjectDataSource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%})

 * [Creating an Object that can be Consumed by ObjectDataSource]({%slug chart/building-radcharts/creating-an-object-that-can-be-consumed-by-objectdatasource%})

 * [Binding to ObjectDataSource at Run-Time]({%slug chart/building-radcharts/binding-to-objectdatasource-at-run-time%})
