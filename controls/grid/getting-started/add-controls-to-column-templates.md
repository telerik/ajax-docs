---
title: Add Controls to Column Templates
page_title: Add Controls to Column Templates | RadGrid for ASP.NET AJAX Documentation
description: Add Controls to Column Templates
slug: grid/getting-started/add-controls-to-column-templates
tags: add,controls,to,column,templates
published: True
position: 7
---

# Add Controls to Column Templates



This tutorial shows how to:

* Add controls to a **RadGrid** template column's ItemTemplate and EditItemTemplate.

* Enable the grid control for editing using automatic updates.

* Set RadGrid's skin using the Smart Tag.

* Enable paging for RadGrid and changing its page size with the design editor.

## Creating and Binding the Grid

1. Locate the "..\Live Demos\App_Data" folder underneath the folder where you have installed yourcontrols. In this folder, find the **Northwind.mdf** file, and copy it into the**App_Data** folder of your Web application. The **Solution Explorer** for you application should look something like the following:
![grid gettingstarted 1](images/grid_gettingstarted1.png)

1. Drag and drop a **RadGrid** control from Visual Studio's toolbox onto your Web page:
![grid gettingstarted 2](images/grid_gettingstarted2.JPG)

1. Using the **RadGrid's** [Smart Tag]({%slug grid/design-time-/smarttag%}), expand the drop-down listlabelled **Choose Data Source** and select **<New data source...>**:
![grid gettingstarted 03](images/grid_gettingstarted03.JPG)

1. The **Data Source Configuration Wizard** appears. On the **Choose a Data Source Type** page, select **SQL Database** andclick **OK**:
![grid gettingstarted 4](images/grid_gettingstarted4.png)

1. On the **Choose Your Data Connection** page, expand the drop-down list by clicking the little triangle on the right side and select the **Northwind.mdf** from the available options. Then click the **Next** button:
![grid gettingstarted 5](images/grid_gettingstarted5.png)

>note If you happen to encounter a **"Database schema could not be retrieved"** exception, please follow the guide in[this]({%slug grid/getting-started/visual-studio-2012-datasource-configuration%})help topic.
>


1. On the **Configure Select Statement** page, select the Orders table from thedrop-down list, and select theOrderID, CustomerID, EmployeeID, and OrderDate fields and then click **Next** button:
![Configure Select Statement](images/grid_add-controls-to-template6.png)

1. Click the **Specify a custom SQL statement or stored procedure** radio button.Then choose **Next**:
![Specify a custom SQL statement](images/grid_add-controls-to-template7.png)

1. Add an **Update** statement to the data source:
![Configure Update statement](images/grid_add_controls_to_template8.png)

1. On the **Test Query** page, click the **Test Query** button to see the data. Then click **Finish**, to exit the **Configure Data Source** wizard:
![Test Query](images/grid_add-controls-to-template9.png)

## Adding Template columns

1. Using the RadGrid's Editor, add a template column to the grid:

* Open **RadGrid's Configuration Wizard** from the [Smart Tag]({%slug grid/design-time-/smarttag%}).
![grid gettingstarted 10](images/grid_gettingstarted10.JPG)

* Select **MasterTableView** under **RadGrid** node.

* Select **Columns** tab from the right pane.

* Select **Template** column under **Available columns**.

* Click the **"+"** button to add the template column.

* In the right pane, set the **HeaderText** property to **TemplateColumn**.
![grid gettingstarted 17](images/grid_gettingstarted17.JPG)

1. Click **Edit Templates** from the **RadGrid's** [Smart Tag]({%slug grid/design-time-/smarttag%}):
![grid gettingstarted 18](images/grid_gettingstarted18.png)

1. Choose the Template column that you wish to edit:
![Rad Grid grd addcontrols 03](images/RadGrid_grd_addcontrols03.png)

1. Drag and drop a **RadDatePicker** control from Visual Studio's toolbox ontothe **EditItemTemplate**.
![Rad Grid grd addcontrols 04jpg(images/RadGrid_grd_addcontrols04jpg.png)

1. Now add a **Label** control to the **ItemTemplate**.
![grid addcontrols 04 1](images/grid_addcontrols04_1.png)

1. Select **Edit DataBindings** from the **RadDatePicker's Smart Tag**:
![Rad Grid grd addcontrols 05jpg](images/RadGrid_grd_addcontrols05jpg.png)

1. In the **DataBindings** dialog:

* Check **Show all properties** to view the properties of the date picker.

* Choose the **SelectedDate** property as the property to bind.

* Choose the **OrderDate** field as the **Fieldbinding**.

* Check the **Two-way data binding** box to enable the control to update the field value.
![Rad Grid grd addcontrols 06jpg](images/RadGrid_grd_addcontrols06jpg.png)

1. Use a similar technique to bind the **Label** control:
![Rad Grid grd addcontrols 6jpg(images/RadGrid_grd_addcontrols6jpg.png)

1. Use the **RadGrid's**[Smart Tag]({%slug grid/design-time-/smarttag%}) to end template editing:
![grid addcontrols 7jpg](images/grid_addcontrols7jpg.png)

## Enabling editing, paging, and change the Skin

1. Back in **RadGrid's** Editor, add an edit command column to the grid:
![grid addcontrols 08jpg](images/grid_addcontrols08jpg.png)

1. Remove the **OrderDate** column; the Template column will be used instead:
![grid addcontrols 10jpg](images/grid_addcontrols10jpg.png)

1. Still in the RadGrid's Editor check the **AllowAutomaticUpdates** checkbox on the right pane:
![grid addcontrols 09jpg](images/grid_addcontrols09jpg.png)

1. Now select the **MasterTableView** node, then select **Paging** tab and change the **Page size** to **5** rows.
![grid addcontrols 11](images/grid_addcontrols11.png)

1. From the **RadGrid's** [Smart Tag]({%slug grid/design-time-/smarttag%}) expand the drop-down list labeled **Skin** and choose **Metro** skin.
![grid addcontrols 12](images/grid_addcontrols12.png)

1. Run the application. Click the edit column to see the edit template you added. Note that if you edit a value in the grid, the database is updated:
![GridEditing](images/grid_add-controls-to-template23.png)
