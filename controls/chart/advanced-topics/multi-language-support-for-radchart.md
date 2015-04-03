---
title: Multi-Language Support for RadChart
page_title: Multi-Language Support for RadChart | UI for ASP.NET AJAX Documentation
description: Multi-Language Support for RadChart
slug: chart/advanced-topics/multi-language-support-for-radchart
tags: multi-language,support,for,radchart
published: True
position: 4
---

# Multi-Language Support for RadChart



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

RadChart bridges off the rich localization feature set already built into ASP.NET 2.0. See the following resources for background information and tools for ASP.NET 2.0 localization:

* [ASP.NET QuickStart Tutorials](http://quickstarts.asp.net/QuickStartv20/aspnet/doc/localization/localization.aspx)

* [Google Language Tools](http://www.google.com/language_tools?hl=en) for translating (used in prototyping, not production).

See the following localization tutorials:

* [Local, Implicit localization example.]({%slug chart/advanced-topics/localization-example-using-local-resources,-implicit-expression%})

* [Global, Explicit localization example.]({%slug chart/advanced-topics/localization-example-using-global-resources,-explicit-expression%})

The resources used for localization can be __local__ or __global__:

__Local__resources are used for the controls on a specific page. This method assumes the existence of a resource file located in the ASP.NET Folder __App_LocalResources__ with the same name as the page you're translating. So, if you're localizing default.aspx, ASP.NET expects to see default.aspx.resx (the default language), and translated versions e.g. default.aspx.fr-FR.resx for a French translation.

Resources can also be __global__, i.e. shared anywhere in the application. This method uses a resource file located in the ASP.NET folder __App_GlobalResource__.

There are two syntaxes used in specifying items on the page that need translation, __Explicit__ and __Implicit:__

* __Explicit__uses expression binding syntax like that used for binding data in-line to the ASP.NET HTML page. This type of expression can be used to identify both local and global resources. In the example below the chart title Text property is being explicitly set to a resource item named "Title" in the resource file \App_GlobalResource\MyGlobals.resx.

````ASPNET
	    <charttitle>
	       <TextBlock Text="<$ Resources>"></TextBlock>
	    </charttitle>
````



* __Implicit__assumes the existence of a resource file located in the ASP.NET Folder App_LocalResources with the same name as the page you're translating. Notice in the example below the meta:resourcekey attribute.The resource key in the HTML ties back to the name of the resource item in the resource file. Using the resource key and the property value in the resource file you can define any number of properties.In the example below the chart title text name in the resource file is formatted as <resourcekey><property name>, i.e. "RadChart1Resource1.ChartTitle.TextBlock.Text".

````ASPNET
	    
	    <telerik:RadChart ID="RadChart1" runat="server" enableembeddedskins="False"
	   meta:resourcekey="RadChart1Resource1">
	   <PlotArea>
	       <YAxis MaxValue="50">
	       </YAxis>
	       <YAxis2 MaxValue="3" MinValue="1" Step="1">
	       </YAxis2>
	       <XAxis MaxValue="3" MinValue="1" Step="1">
	       </XAxis>
	   </PlotArea>
	   <ChartTitle>
	       <TextBlock Text="Sales">
	       </TextBlock>
	   </ChartTitle>
	   ...
	    
````





>note Localization can also be performed using the Microsoft Localization API to retrieve resources programmatically at runtime.
>

