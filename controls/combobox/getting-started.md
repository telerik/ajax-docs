---
title: Getting Started
page_title: Getting Started | RadComboBox for ASP.NET AJAX Documentation
description: Getting Started
slug: combobox/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started



This tutorial will walk you through creating a **RadComboBox** and shows how to:

* Create a simple RadComboBox with elements set in design time.

* Populate RadComboBox from a data source.

## Creating a Simple RadComboBox

* Drag a RadComboBox from the Toolbox onto your Web Page.

* The [Smart Tag]({%slug combobox/design-time/smart-tag%}) should appear automatically. From the Smart Tag, choose **Build RadComboBox...**

![Build ComboBox](images/combobox_build.png)

* The **[RadComboBox Item Builder]({%slug combobox/design-time/radcombobox-item-builder%})** appears.

* Click the **Add item** icon in the upper left corner. A new **RadComboBoxItem** appears in the item builder.

![combobox additem](images/combobox_additem.png)

* Set the **Text** property to "First Item".

* Add two more items in the same way.

* Press **OK** to exit the **RadComboBox Item Builder**.

* Back in the Smart Tag, choose a **[Skin]({%slug combobox/appearance-and-styling/skins%})** from the drop-down control.

![combobox smarttag](images/combobox_smarttag.png)

* Right-click the **RadComboBox** instance and select **Properties**.

![ComboBox Properties](images/combobox_properties.png)

* In the properties pane for the RadComboBox, Set the **Height** property to 150.

* Run the application. Open the drop-down list to see the items.

![Simple ComboBox](images/combobox_simplecombo.png)

## Binding to an AccessDataSource

* In order to [bind the RadComboBox to an AccessDataSource]({%slug combobox/data-binding/binding-to-asp-datasource-components%}), you must first have a DataSource component on your page. Drag an **AccessDataSource** component from the Toolbox onto the same page where your RadComboBox is.

![ComboBox Access Data Source](images/combobox_accessdatasource.png)

* From the Smart Tag of the AccessDataSource, choose **Configure DataSource.**

![ComboBox Configure Data Source](images/combobox_configuredatasource.png)

* Click the Browse button, locate, and select the AccessData File and press **Next** to continue.

![ComboBox Choose Data Base](images/combobox_chooseadatabase.png)

* Specify the columns from a table and press **Next** to continue.

![ComboBox Configure Data Source - Select](images/combobox_configureselect.png)

* You may choose to test your Query to preview the data. Finally, press Finish to exit.

![ComboBox Test Query](images/combobox_testquery.png)

* On the **RadComboBox** Smart Tag, choose the AccessDataSource from the drop-down list labelled **Choose Data Source**.

![ComboBox Choose Data Source](images/combobox_choosedatasource.png)

* In the properties pane for RadComboBox, set the **DataTextField** and **DataValueField**.

![ComboBox Data Properties](images/combobox_datatextandvalue.png)

* Run the application. The data from your table now appears in the RadComboBox.

![Bound ComboBox](images/combobox_bound.png)
