---
title: Binding to a Data Source
page_title: Binding to a Data Source | RadMenu for ASP.NET AJAX Documentation
description: Binding to a Data Source
slug: menu/getting-started/binding-to-a-data-source
tags: binding,to,a,data,source
published: True
position: 1
---

# Binding to a Data Source



## 

This tutorial will show how to bind **RadMenu** to an **AccessDataSource**:

1. Drag a **RadMenu** component from the toolbox onto your Web page. The **RadMenu**[Smart Tag]({%slug menu/design-time/smart-tag%}) should appear automatically:![RadMenu Smart Tag](images/menu_smarttag.png)

1. In the **RadMenu** Smart Tag, use the **Skin** drop-down to change the [skin]({%slug menu/appearance-and-styling/appearance-skins%}) for the **RadMenu** to "Outlook":![RadMenu Choose Skin](images/menu_chooseskin.png)

1. Still in the Smart Tag, open the **Choose Data Source** drop-down and select **New Data Source**.![RadMenu New DataSource](images/menu_newdatasource.png)

1. The Data Source Configuration Wizard appears. In the Select a DataSource Type screen, specify an **AccessDataSource** and click **OK.**![Choose a DataSource Type](images/menu_chooseadatasourcetype.png)

1. In the **Choose a Database** screen, click the **Browse** button, and select a data file. Then choose **Next** to continue:![Choose a DataSource](images/menu_chooseadatabase.png)

1. In the **Configure the Select Statement** screen, choose **Specify columns from a table or view**, and select the columns for the RadMenuItem **ID**, parent RadMenuItem **ID**, and RadMenuItem **Text** properties. Then choose **Next** to continue:![Configure Select](images/menu_configureselect.png)

1. The data should have a structure something like the following:![RadMenu Data Structure](images/menu_datastructure.png)

1. Click the **Finish** button to exit the Wizard.

1. In the Properties pane for the **RadMenu** component, set the **DataFieldId**, **DataFieldParentId** and **DataTextField** properties by selecting the appropriate fields from the drop-down list:![RadMenu Data Fields](images/menu_datafields.png)

1. Run the application. The final result should look like the following:![DataBound RadMenu](images/menu_databoundmenu.png)

# See Also

 * [Overview]({%slug menu/data-binding/overview%})

 * [Overview]({%slug menu/getting-started/overview%})

 * [Creating a Simple Context Menu]({%slug menu/getting-started/creating-a-simple-context-menu%})
