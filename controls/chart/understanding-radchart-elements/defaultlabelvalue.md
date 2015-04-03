---
title: DefaultLabelValue
page_title: DefaultLabelValue | UI for ASP.NET AJAX Documentation
description: DefaultLabelValue
slug: chart/understanding-radchart-elements/defaultlabelvalue
tags: defaultlabelvalue
published: True
position: 12
---

# DefaultLabelValue



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

DefaultLabelValue specifies a format for label values that will be displayed automatically if you do not specifically assign text to a chart series item.

* Use "#Y" or "#X" to display numbers from the X or Y axis respectively

* Use "#%" for a percentage of the total sum (of all items).

* Use "#SUM" to display the total of all items.

* "#STSUM" displays the sum of a stacked series.

* "#SERIES" displays the series name.

* "#ITEM" displays the item name.

* You can also use the formatting described in this MSDN article [Standard Numeric Format Strings](http://msdn2.microsoft.com/en-us/library/dwhawy9k.aspx). Use curly brackets to contain the standard numeric formats.For example, you can display Y values as currency by setting DefaultLabelValue to "#Y{C}". See examples in the figure below.
>caption 

![DefaultLabelValue Examples](images/radchart-understandingelements020.png)
