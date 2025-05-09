---
title: Create a Bar Chart with Simple Static Data
page_title: Create a Bar Chart with Simple Static Data
description: Check our Web Forms article about Overview.
slug: chart/getting-started/create-bar-chart-with-simple-static-data
tags: Create, static, Chart, getting started
published: True
position: 1
---

# Create a Bar Chart with Simple Static Data

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.


This Quick Start tutorial is designed to have you quickly up and running with a working RadChart application. In the process of creating a basic bar chart you will be introduced to some of the features of RadChart. You will populate the chart with static data and modify several properties that affect chart appearance.

## Create an ASP.NET AJAX Web Application

1. From the Visual Studio File menu select New | Project.

1. Select the "ASP.NET AJAX-Enabled Web Application" and enter a name and location path.

	![create project](images/radchart-quickstart001.png)

	>tip While its possible to get a regular ASP.NET Web Application working with RadChart, the ASP.NET AJAX-Enabled projects automatically provide you with an appropriate web.config file, a ScriptManager component and the required references for ASP.NET AJAX.

1. From the Toolbox drag a RadChart component to the default web page.

1. RadChart requires that you register an HTTP handler in the web config file to render the chart. To do this, click the **Smart Tag Add RadChart HTTP Handler to Web.Config**.

	![add handlers](images/radchart-quickstart019.png)


## Populate Chart Data

1. Click the RadChart's SmartTag


1. From the SmartTag "Data" section, click the ellipses for the Chart Series Collection.


1. Click "Series 1" in the members list on the left, then locate the Name property in the property window. 


1. Change the Name property to "Sales" and the DefaultLabelValue to "#ITEM". Name will be the series name that shows up in the legend. DefaultLabelValue will display the name of each item in the series instead of the item value.


1. Locate the Items property in the property window.


1. Click the ellipses button of the Items property to open the ChartSeriesItem Collection Editor.


1. Click the Add button to add a new Item.


1. In the property window for the new item, change the Name property to "Beverages".


1. Change the YValue property to "10000".

	![change item value](images/radchart-quickstart004.png)

1. Repeat the Add Item steps to add 3 new items.


1. Replace the properties for the three new items as follows
	* Label=Produce, YValue =7500
	* Label=Poultry, YValue =9000
	* Label=Grains, YValue =11200

1. Click OK to close the ChartSeriesItem Collection Editor.


1. Click "Series 2" in the ChartSeries Collection Editor.


1. Click the Remove button to remove Series 2.


1. Click the OK button to close the ChartSeries Collection Editor.


1. The chart will display the new data using the default formatting.

	![chart with data](images/radchart-quickstart020.png)


## Format the Chart


1. Click the Chart Wizard link at the bottom of the RadChart Tasks menu.


1. Click the Axis Tab.


1. Locate the Visual Properties section of the Axis tab.


1. On the Select Axis drop down list select the X Axis. In the Axis Title entry enter "Product Categories". Un-check Show Ticks to remove the tick marks from the bottom of the chart. 


1. On the Select Axis drop down list select the Y Axis. Un-check Show Ticks to remove the tick marks on the left hand side of the chart.

	![remove ticks](images/radchart-quickstart007.png)

1. Click the Labels, Legend and Title tab


1. Locate the Legend section.


1. Uncheck the Visible check box. This will remove the Sales legend from the right side of the graph.

	![remove legend](images/radchart-quickstart008.png)

1. On the Skins tab select the Deep Blue skin.

	![select skin](images/radchart-quickstart024.png)

1. Click the Submit button to close the wizard.


1. In the properties window, locate PlotArea.XAxis.AxisLabel.TextBlock.Visible and set it to "True".

	![show axis label texts](images/radchart-quickstart023.png)

1. Set AutoLayoutproperty to "True".


1. Run the application to view the finished chart. It should look like the screen shot shown below.

	![final chart](images/radchart-quickstart027.png)
