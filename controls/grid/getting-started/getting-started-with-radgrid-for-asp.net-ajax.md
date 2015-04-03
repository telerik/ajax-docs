---
title: Getting Started with RadGrid for ASP.NET AJAX
page_title: Getting Started with RadGrid for ASP.NET AJAX | UI for ASP.NET AJAX Documentation
description: Getting Started with RadGrid for ASP.NET AJAX
slug: grid/getting-started/getting-started-with-radgrid-for-asp.net-ajax
tags: getting,started,with,radgrid,for,asp.net,ajax
published: True
position: 6
---

# Getting Started with RadGrid for ASP.NET AJAX



This tutorial will walk you through creating a Web page that contains a __RadGrid__ control. It shows how to:

* Bind the grid using a declarative data source.

* Configure the grid to support the most common features including:

* Paging

* Sorting

* Scrolling

* Grouping

* Filtering

* Selecting

* Add a template column for customized data display.

## Creating and Binding the Grid

1. Locate the "..\Live Demos\App_Data" folder underneath the folder where you have installed your controls. In this folder, find the __Northwind.mdf__ file, and copy it into the __App_Data__ folder of your Web application. The __Solution Explorer__ for you application should look something like the following:![grid gettingstarted 1](images/grid_gettingstarted1.png)

1. Drag and drop a __RadGrid__ control from the toolbox onto your Web page:![grid gettingstarted 2](images/grid_gettingstarted2.JPG)

1. Using the __RadGrid__[Smart Tag]({%slug grid/design-time-/smarttag%}) expand the drop-down list labelled Choose Data Source and select __<New data source...>__:![grid gettingstarted 03](images/grid_gettingstarted03.JPG)

1. The __Data Source Configuration Wizard__ appears. On the __Choose a Data Source Type__ page, select __SQL Database__ and click __OK__:![grid gettingstarted 4](images/grid_gettingstarted4.png)

1. On the __Choose Your Data Connection__ page, expand the drop-down list by clicking the little triangle on the right side and select the __Northwind.mdf__ from the available options. Then click the __Next__ button:![grid gettingstarted 5](images/grid_gettingstarted5.png)

>note If you happen to encounter a "Database schema could not be retrieved" exception, please follow the guide in[this]({%slug grid/getting-started/visual-studio-2012-datasource-configuration%})help topic.
>


1. On the __Configure the Select Statement__ page, select the Customers table from the drop-down list, select the CompanyName, ContactName, Address, and PostalCode fields. Then choose __Next__:![grid gettingstarted 6](images/grid_gettingstarted6.png)

1. On the __Test Query__ page, click the __Test Query__ button to see the data. Then click __Finish__ to exit the __Configure Data Source__ wizard:![grid gettingstarted 7](images/grid_gettingstarted7.png)

## Configuring the grid for paging, sorting, and scrolling

1. From the __Skin__ drop-down of the __RadGrid's__[Smart Tag]({%slug grid/design-time-/smarttag%}) choose the __Metro__ skin:![grid gettingstarted 8](images/grid_gettingstarted8.JPG)

1. In the __General Features__ section, check the boxes to enable __paging__, __sorting__, and __scrolling__:![grid gettingstarted 9](images/grid_gettingstarted9.png)

1. Still in the __Smart Tag__ click the link labeled __Open Editor__:![grid gettingstarted 10](images/grid_gettingstarted10.JPG)

1. In the __RadGrid__[Editor]({%slug grid/design-time-/setting-radgrid%}):

* Select __RadGrid__ from the __Configuration Manager__.

* On the right side, click __Styles__ tab. Then select __RadGrid style__.

* In the __Layout__ section of the RadGrid's style editor, locate the __Width__ property and set it to __720px__:![grid gettingstarted 11](images/grid_gettingstarted11.png)

1. On the same window, just one tab above the __Styles__ tab select __Paging tab__. Then on the right pane, set the __Page size__ to __30__ rows.![grid gettingstarted 12](images/grid_gettingstarted12.png)

1. Run the application to check out what you have created so far. Note the pager elements in the grid footer and the scroll bar on the right side. When you click on column headers the column data will be sorted:![grid gettingstarted 13](images/grid_gettingstarted13.JPG)

## Configuring the grid for selecting, filtering, and grouping

1. Add a select column:

* Open the __Editor__.

* Select __MasterTableView__ under __RadGrid__node.

* Select __Columns__ from the right pane.

* Select __Button__ column under __Available columns__.

* Click the __"+"__ button to add the button column.

* Use the up arrow button to move it to the first position.

* You need to customize the column a bit in order to work as a select column.

* Set values to the __HeaderText__, __Text__, and __CommandName__ properties.![grid gettingstarted 14 1](images/grid_gettingstarted14_1.png)

* Additionally, you could change the __UniqueName__ and __BackColor__ of the column.![grid gettingstarted 14 2](images/grid_gettingstarted14_2.png)

1. Use the __RadGrid__[Smart Tag]({%slug grid/design-time-/smarttag%}) to enable __filtering__ and __grouping__:![grid gettingstarted 15JPG](images/grid_gettingstarted15JPG.png)

1. Run the application to see the result of your changes. A select column appears as the first column of the grid. Each column now has a filter control at the top. A grouping panel appears at the top of the grid. Drag the header of the __PostalCode__ column onto the grouping panel. The rows of the grid are now grouped by postal code, and an item for this group appears in the grouping panel that lets you change the sort order of the groups:![grid gettingstarted 16](images/grid_gettingstarted16.JPG)

## Adding Template columns

1. Back in the Editor, add a template column to the grid:

* Select __MasterTableView__ under __RadGrid__ node.

* Select __Columns__ from the right pane.

* Select __Template__ column under __Available columns__.

* Click the __"+"__ button to add the template column.

* In the right pane, set the __HeaderText__ property to __TemplateColumn__.![grid gettingstarted 17](images/grid_gettingstarted17.JPG)

1. In the [Smart Tag]({%slug grid/design-time-/smarttag%}) select __Edit Templates__ option:![grid gettingstarted 18](images/grid_gettingstarted18.png)

1. In the drop-down list of the __Smart Tag__ in Template Editing Mode, select the template column to bring up the template design surface for the template column:![grid gettingstarted 19](images/grid_gettingstarted19.png)

1. Add a __Label__ to the item template and a __TextBox__ to its edit item template, using drag and drop from the Visual Studio toolbox. From the __Smart Tag__ of the __Label__ and of the __TextBox__, choose __Edit DataBindings__ to display the DataBindings editor:![grid gettingstarted 20](images/grid_gettingstarted20.png)

1. In the DataBindings editor for the __Label__ and for the __TextBox__, bind the __Text__ property to a field in the datasource:![grid gettingstarted 21](images/grid_gettingstarted21.png)![grid gettingstarted 22](images/grid_gettingstarted22.png)

1. Now, you have a fully functional __RadGrid__ with no code behind. Paging, sorting, filtering, scrolling and grouping are enabled. There is a column for server-side selection and a template column for specific data display:![grid gettingstarted 23](images/grid_gettingstarted23.JPG)
