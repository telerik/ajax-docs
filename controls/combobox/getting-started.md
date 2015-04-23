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

1. Drag a RadComboBox from the Toolbox onto your Web Page.

2. The [Smart Tag]({%slug combobox/design-time/smart-tag%}) should appear automatically. From the Smart Tag, choose **Build RadComboBox...**
>caption 

![Build ComboBox](images/combobox_build.png)

3. The **[RadComboBox Item Builder]({%slug combobox/design-time/radcombobox-item-builder%})** appears.

4. Click the **Add item** icon in the upper left corner. A new **RadComboBoxItem** appears in the item builder.
>caption 

![combobox additem](images/combobox_additem.png)

5. Set the **Text** property to "First Item".

6. Add two more items in the same way.

7. Press **OK** to exit the **RadComboBox Item Builder**.

8. Back in the Smart Tag, choose a **[Skin]({%slug combobox/appearance-and-styling/skins%})** from the drop-down control.
>caption 

![combobox smarttag](images/combobox_smarttag.png)

9. Right-click the **RadComboBox** instance and select **Properties**.
>caption 

![ComboBox Properties](images/combobox_properties.png)

10. In the properties pane for the RadComboBox, Set the **Height** property to 150.

11. Run the application. Open the drop-down list to see the items.
>caption 

![Simple ComboBox](images/combobox_simplecombo.png)

## Binding to an AccessDataSource

1. In order to [bind the RadComboBox to an AccessDataSource]({%slug combobox/data-binding/binding-to-asp-datasource-components%}), you must first have a DataSource component on your page. Drag an **AccessDataSource** component from the Toolbox onto the same page where your RadComboBox is.
>caption 

![ComboBox Access Data Source](images/combobox_accessdatasource.png)

2. From the Smart Tag of the AccessDataSource, choose **Configure DataSource.**
>caption 

![ComboBox Configure Data Source](images/combobox_configuredatasource.png)

3. Click the Browse button, locate, and select the AccessData File and press **Next** to continue.
>caption 

![ComboBox Choose Data Base](images/combobox_chooseadatabase.png)

4. Specify the columns from a table and press **Next** to continue.
>caption 

![ComboBox Configure Data Source - Select](images/combobox_configureselect.png)

5. You may choose to test your Query to preview the data. Finally, press Finish to exit.
>caption 

![ComboBox Test Query](images/combobox_testquery.png)

6. On the **RadComboBox** Smart Tag, choose the AccessDataSource from the drop-down list labelled **Choose Data Source**.
>caption 

![ComboBox Choose Data Source](images/combobox_choosedatasource.png)

7. In the properties pane for RadComboBox, set the **DataTextField** and **DataValueField**.
>caption 

![ComboBox Data Properties](images/combobox_datatextandvalue.png)

8. Run the application. The data from your table now appears in the RadComboBox.
>caption 

![Bound ComboBox](images/combobox_bound.png)
