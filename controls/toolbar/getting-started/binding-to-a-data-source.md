---
title: Binding to a Data Source
page_title: Binding to a Data Source | RadToolBar for ASP.NET AJAX Documentation
description: Binding to a Data Source
slug: toolbar/getting-started/binding-to-a-data-source
tags: binding,to,a,data,source
published: True
position: 1
---

# Binding to a Data Source



## 

This tutorial shows how to bind **RadToolBar** to an **AccessDataSource**:

1. Locate the file "Chart.mdb" file that appears in the **Live Demos/App_Data** folder of your **RadControls** installation. Drag this file to the **App_Data** folder in the Solution Explorer for your project:
>caption 

![toolbar chartmdb](images/toolbar_chartmdb.png)

1. Drag a **RadToolBar** component from the toolbox onto your Web page. The **RadToolBar** [Smart Tag]({%slug toolbar/design-time/smart-tag%}) should appear automatically:
>caption 

![toolbar smarttag](images/toolbar_smarttag.png)

1. In the **RadToolBar** Smart Tag, use the **Skin** drop-down to change the [skin]({%slug toolbar/appearance-and-styling/skins%}) for the **RadToolBar** to "Hay":
>caption 

![toolbar chooseskin](images/toolbar_chooseskin.png)

1. Still in the Smart Tag, open the **Choose Data Source** drop-down and select **New Data Source**.
>caption 

![toolbar newdatasource](images/toolbar_newdatasource.png)

1. The Data Source Configuration Wizard appears. In the Select a DataSource Type screen, specify an **AccessDataSource** and click **OK.**
>caption 

![Data Source Configuration Wizard](images/toolbar_chooseadatasourcetype.png)

1. In the **Choose a Database** screen, click the **Browse** button, and select the "Chart.mdb" file. Then choose **Next** to continue:
>caption 

![Configure Data Source](images/toolbar_chooseadatabase.png)

1. In the **Configure the Select Statement** screen, choose **Specify columns from a table or view**. Select the "Subcategory" table from the **Name** drop down, and select the "Id", "Name", and "Category_id" fields:
>caption 

![Configure Data Source](images/toolbar_configureselect.png)

1. Click the **WHERE** button to add a where clause to your query. In the Add WHERE Clause screen, set the **Column** to "Category_Id", the **Operator** to "=", the **Source** to "None", and set the parameter value to "1":
>caption 

![Add Where Clause](images/toolbar_addwhereclause.png)

1. Click the **Add** button to add the WHERE clause, and then click OK.

1. Back in the Configure The Select Statement page, click Next to accept the select statement.

1. Click the Test Query button to see the data from the data source. Then choose Finish to exit the Wizard:
>caption 

![ToolBar Test Query](images/toolbar_testquery.png)

1. In the Properties pane for the **RadToolBar** component:

1. Set the **DataTextField** property to "Name".

1. Set the **DataValueField** property to "Id".
>caption 

![toolbar datafieldproperties](images/toolbar_datafieldproperties.png)

1. Run the application. Note that the tabs are labelled using the "Name" field of the data source:
>caption 

![Bound ToolBar](images/toolbar_boundtoolbar.png)

# See Also

 * [Overview]({%slug toolbar/data-binding/overview%})

 * [Overview]({%slug toolbar/getting-started/overview%})
