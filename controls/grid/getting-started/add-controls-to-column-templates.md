---
title: Add Controls to Column Templates
page_title: Add Controls to Column Templates | UI for ASP.NET AJAX Documentation
description: Add Controls to Column Templates
slug: grid/getting-started/add-controls-to-column-templates
tags: add,controls,to,column,templates
published: True
position: 7
---

# Add Controls to Column Templates



This tutorial shows how to:

* Add controls to a __RadGrid__ template column's ItemTemplate and EditItemTemplate.

* Enable the grid controlfor editing using automatic updates.

* Set RadGrid's skin using the Smart Tag.

* Enable paging for RadGrid and changing its page size with the design editor.

## Creating and Binding the Grid

1. Locate the "..\Live Demos\App_Data" folder underneath the folder where you have installed yourcontrols. In this folder, find the __Northwind.mdf__ file, and copy it into the__App_Data__ folder of your Web application. The__Solution Explorer__ for you application should look something like the following:![grid gettingstarted 1](images/grid_gettingstarted1.png)

1. Drag and drop a __RadGrid__ control from Visual Studio's toolbox onto your Web page:![grid gettingstarted 2](images/grid_gettingstarted2.JPG)

1. Using the __RadGrid's__[Smart Tag]({%slug grid/design-time-/smarttag%}), expand the drop-down listlabelled __Choose Data Source__ and select __<New data source...>__:![grid gettingstarted 03](images/grid_gettingstarted03.JPG)

1. The __Data Source Configuration Wizard__ appears. On the__Choose a Data Source Type__ page, select __SQL Database__ andclick __OK__:![grid gettingstarted 4](images/grid_gettingstarted4.png)

1. On the __Choose Your Data Connection__ page, expand the drop-down list by clicking the little triangle on the right side and select the __Northwind.mdf__ from the available options. Then click the __Next__ button:![grid gettingstarted 5](images/grid_gettingstarted5.png)

>note If you happen to encounter a __"Database schema could not be retrieved"__ exception, please follow the guide in[this]({%slug grid/getting-started/visual-studio-2012-datasource-configuration%})help topic.
>


1. On the __Configure Select Statement__ page, select the Orders table from thedrop-down list, and select theOrderID, CustomerID, EmployeeID, andOrderDate fields and then click __Next__ button:![Configure Select Statement](images/grid_add-controls-to-template6.png)

1. Click the __Specify a custom SQL statement or stored procedure__ radio button.Then choose __Next__:![Specify a custom SQL statement](images/grid_add-controls-to-template7.png)

1. Add an __Update__ statement to the data source:![Configure Update statement](images/grid_add_controls_to_template8.png)

1. On the __Test Query__ page, click the __Test Query__ button to see the data. Then click __Finish__, to exit the__Configure Data Source__ wizard:![Test Query](images/grid_add-controls-to-template9.png)

## Adding Template columns

1. Using the RadGrid's Editor, add a template column to the grid:

* Open __RadGrid's Configuration Wizard__ from the [Smart Tag]({%slug grid/design-time-/smarttag%}).![grid gettingstarted 10](images/grid_gettingstarted10.JPG)

* Select __MasterTableView__ under __RadGrid__ node.

* Select __Columns__ tab from the right pane.

* Select __Template__ column under __Available columns__.

* Click the __"+"__ button to add the template column.

* In the right pane, set the __HeaderText__ property to __TemplateColumn__.![grid gettingstarted 17](images/grid_gettingstarted17.JPG)

1. Click __Edit Templates__ from the __RadGrid's__[Smart Tag]({%slug grid/design-time-/smarttag%}):![grid gettingstarted 18](images/grid_gettingstarted18.png)

1. Choose the Template column that you wish to edit:![Rad Grid grd addcontrols 03](images/RadGrid_grd_addcontrols03.png)

1. Drag and drop a __RadDatePicker__ control from Visual Studio's toolbox ontothe __EditItemTemplate__.![Rad Grid grd addcontrols 04jpg](images/RadGrid_grd_addcontrols04jpg.png)

1. Now add a __Label__ controlto the __ItemTemplate__.![grid addcontrols 04 1](images/grid_addcontrols04_1.png)

1. Select __Edit DataBindings__ from the __RadDatePicker's____Smart Tag__:![Rad Grid grd addcontrols 05jpg](images/RadGrid_grd_addcontrols05jpg.png)

1. In the __DataBindings__ dialog:

* Check __Show all properties__ to view the properties of the date picker.

* Choose the __SelectedDate__ property as the property to bind.

* Choose the __OrderDate__ field as the __Fieldbinding__.

* Check the __Two-way data binding__ box to enable the control to update the field value.![Rad Grid grd addcontrols 06jpg](images/RadGrid_grd_addcontrols06jpg.png)

1. Use a similar technique to bind the __Label__ control:![Rad Grid grd addcontrols 6jpg](images/RadGrid_grd_addcontrols6jpg.png)

1. Use the __RadGrid's__[Smart Tag]({%slug grid/design-time-/smarttag%}) to end template editing:![grid addcontrols 7jpg](images/grid_addcontrols7jpg.png)

## Enabling editing, paging, and change the Skin

1. Back in __RadGrid's__ Editor, add an edit command column to the grid:![grid addcontrols 08jpg](images/grid_addcontrols08jpg.png)

1. Remove the __OrderDate__ column; the Template column will be used instead:![grid addcontrols 10jpg](images/grid_addcontrols10jpg.png)

1. Still in the RadGrid's Editor check the__AllowAutomaticUpdates__ checkbox on the right pane:![grid addcontrols 09jpg](images/grid_addcontrols09jpg.png)

1. Now select the __MasterTableView__ node, then select __Paging__ tab and change the __Page size__ to __5__ rows.![grid addcontrols 11](images/grid_addcontrols11.png)

1. From the __RadGrid's__[Smart Tag]({%slug grid/design-time-/smarttag%}) expand the drop-down list labeled __Skin__ and choose __Metro__ skin.![grid addcontrols 12](images/grid_addcontrols12.png)

1. Run the application. Click the edit column to see the edit template you added. Note that ifyou edit a value in the grid, the database is updated:![GridEditing](images/grid_add-controls-to-template23.png)
