---
title: Binding to a Data Source
page_title: Binding to a Data Source | UI for ASP.NET AJAX Documentation
description: Binding to a Data Source
slug: menu/getting-started/binding-to-a-data-source
tags: binding,to,a,data,source
published: True
position: 1
---

# Binding to a Data Source



## 

This tutorial will show how to bind __RadMenu__ to an __AccessDataSource__:

1. Drag a __RadMenu__ component from the toolbox onto your Web page. The __RadMenu__[Smart Tag]({%slug menu/design-time/smart-tag%}) should appear automatically:![RadMenu Smart Tag](images/menu_smarttag.png)

1. In the __RadMenu__ Smart Tag, use the __Skin__ drop-down to change the [skin]({%slug menu/appearance-and-styling/appearance-skins%}) for the __RadMenu__ to "Outlook":![RadMenu Choose Skin](images/menu_chooseskin.png)

1. Still in the Smart Tag, open the __Choose Data Source__ drop-down and select __New Data Source__.![RadMenu New DataSource](images/menu_newdatasource.png)

1. The Data Source Configuration Wizard appears. In the Select a DataSource Type screen, specify an __AccessDataSource__ and click __OK.__![Choose a DataSource Type](images/menu_chooseadatasourcetype.png)

1. In the __Choose a Database__ screen, click the __Browse__ button, and select a data file. Then choose __Next__ to continue:![Choose a DataSource](images/menu_chooseadatabase.png)

1. In the __Configure the Select Statement__ screen, choose __Specify columns from a table or view__, and select the columns for the RadMenuItem __ID__, parent RadMenuItem __ID__, and RadMenuItem __Text__ properties. Then choose __Next__ to continue:![Configure Select](images/menu_configureselect.png)

1. The data should have a structure something like the following:![RadMenu Data Structure](images/menu_datastructure.png)

1. Click the __Finish__ button to exit the Wizard.

1. In the Properties pane for the __RadMenu__ component, set the __DataFieldId__, __DataFieldParentId__ and __DataTextField__ properties by selecting the appropriate fields from the drop-down list:![RadMenu Data Fields](images/menu_datafields.png)

1. Run the application. The final result should look like the following:![DataBound RadMenu](images/menu_databoundmenu.png)

# See Also

 * [Overview]({%slug menu/data-binding/overview%})

 * [Overview]({%slug menu/getting-started/overview%})

 * [Creating a Simple Context Menu]({%slug menu/getting-started/creating-a-simple-context-menu%})
