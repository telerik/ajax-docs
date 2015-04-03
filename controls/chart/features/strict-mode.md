---
title: Strict Mode
page_title: Strict Mode | UI for ASP.NET AJAX Documentation
description: Strict Mode
slug: chart/features/strict-mode
tags: strict,mode
published: True
position: 8
---

# Strict Mode



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 
>caption 

![Strict Mode](images/radchart-features009.png)

The RadChart bar series now features "strict mode".This is not a property or setting, but a behavior of bar chart series where X values are respected and bars are positioned according to their XValues. If there are no series items with XValues then RadChart resumes standard sequential ordering of each item. The screen shot above was produced using the following X and Y values:

__Series 1__




>caption  

|  __YValue__  |  __XValue__  |
| ------ | ------ |
|3|0|
|3|1|
|4|3|
|3|3|
|5|4|

__Series 2__




>caption  

|  __YValue__  |  __XValue__  |
| ------ | ------ |
|1|5|
|2|4|
