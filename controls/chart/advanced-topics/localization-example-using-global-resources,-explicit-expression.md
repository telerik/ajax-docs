---
title: Localization Example Using Global Resources, Explicit Expression
page_title: Localization Example Using Global Resources, Explicit Expression - RadChart
description: Check our Web Forms article about Localization Example Using Global Resources, Explicit Expression.
slug: chart/advanced-topics/localization-example-using-global-resources,-explicit-expression
tags: localization,example,using,global,resources,,explicit,expression
published: True
position: 6
---

# Localization Example Using Global Resources, Explicit Expression

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

This tutorial will demonstrate localizing the RadChart title using a global resource and binding it to the title with an explicit expression. See [Multi-Language Support for RadChart]({%slug chart/advanced-topics/multi-language-support-for-radchart%}) for an overview of localization options.

1. Create a simple ASP.NET AJAX enabled RadChart application. See Quick Start: [Create a Bar Chart with Simple Static Data]({%slug chart/getting-started/create-bar-chart-with-simple-static-data%}) for an example. The following steps assume the web page is named "default.aspx".

1. Paste the following ASP.NET HTML definition of the chart:

	**ASP.NET**

		<telerik:RadChart ID="RadChart1" runat="server">
		<PlotArea>
		   <XAxis MaxValue="3" MinValue="1" Step="1"></XAxis>
		   <YAxis MaxValue="50"></YAxis>
		</PlotArea>
		<ChartTitle><TextBlock Text="Sales"></TextBlock></ChartTitle>
		<Series>
		   <radC:ChartSeries Name="Series 1">
			   <items>
					   <radC:ChartSeriesItem YValue="50">
						   <Label><TextBlock Text="One"></TextBlock></Label>
					   </radC:ChartSeriesItem>
					   <radC:ChartSeriesItem YValue="30">
						   <Label><TextBlock Text="Two"></TextBlock></Label>
					   </radC:ChartSeriesItem>
					   <radC:ChartSeriesItem YValue="20">
						   <Label><TextBlock Text="Three"></TextBlock></Label>
					   </radC:ChartSeriesItem>
				   </items>
		   </radC:ChartSeries>
		</Series>
		</telerik:RadChart> 	

1. In the Solution Explorer, right-click the project and select **Add** | **Add ASP.NET Folder** | **App_GlobalResources** from the context menu.

1. Right-click **App_GlobalResources** and click **Add** | **New Item**| **Resource File** from the context menu.Name the resource MyGlobals.resx.

1. In the Solution Explorer, double-click MyGlobals.resx and add an entry named "Title" with value "Top Ten Sales".

1. In the Solution Explorer, copy MyGlobals.resx to MyGlobals.fr-FR.resx.

1. In the Solution Explorer, double-click MyGlobals.fr-FR.resx and add the entry named "Title" with value "Ventes du principal dix".

1. In the ASP.NET HTML markup for the page add the explicit expression "<%$ Resources:MyGlobals, Title %>" to the **Text**attribute for the chart title. The ASP.NET HTML markup for the chart title should now look like this:

	**ASP.NET**
	
		<ChartTitle>
		   <TextBlock Text="<$ Resources>">
		   </TextBlock>
		</ChartTitle> 

1. Run the application. The chart title should still be "Top Ten Sales".

1. In the web browser (we will assume Internet Explorer for this example), select **Tools** | **Internet Options** | **Languages**.

1. In the **Language Preference** dialog click the **Add** button.

1. Locate the France "fr-FR" culture code and click **OK.**

1. If there are other languages in the **Language Preference** dialog list, use the arrow keys to place "fr-FR" at the top of the list.

1. Click the **OK** button to close the **Language Preference** dialog.

1. Click **OK** to close the **Internet Options** dialog.

1. Refresh the browser page.The title should now be localized to "Ventes du principal dix".

![Localized Chart Title](images/radchart-advancedlocalize008.png)

