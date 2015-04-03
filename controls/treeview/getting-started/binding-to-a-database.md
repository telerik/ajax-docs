---
title: Binding to a Database
page_title: Binding to a Database | UI for ASP.NET AJAX Documentation
description: Binding to a Database
slug: treeview/getting-started/binding-to-a-database
tags: binding,to,a,database
published: True
position: 1
---

# Binding to a Database



## 

The following tutorial demonstrates binding RadTreeView to an Access Data Source containing hierarchical data. The table contains columns for "ItemID", "ParentID" and "Name"."Name" is used to populate the text of each node while "ItemID" and "ParentID" describe the hierarchy. The screenshot below shows the appearance of the running example application.


>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted01.png)

1. In a new AJAX-Enabled Web Application, drop a RadTreeView to the default form.

1. Locate the "Database.mdb" Access Data Base in the RadControls for ASP.NET AJAX suiteversion installation directory under \Live Demos\App_Data. The typical path would be similar to this one: \Telerik\RadControls for ASPNET <current version>\Live Demos\App_Data\Database.mdb

1. Drag the "Database.mdb" file to the project in the Solution Explorer.
>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted02.png)

1. Open the [Smart Tag]({%slug treeview/design-time/smart-tag%}) and set the __Skin__ to __Vista__ from the drop down list. Then select __<New data source...>__ from the __Choose Data Source__drop down list. *This step will display the Data Source Configuration Wizard.*
>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted03.png)

1. In the Data Source Configuration Wizard, "Choose a Data Source Type" page, select the __Access Database__ icon and click the __OK__ button. *This step will display the Configure Data Source Wizard.*
>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted04.png)

1. In the "Choose a Database" page, Microsoft Access Data File text box enter "~/Database.mdb". Click the __Next__ button to continue.
>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted05.png)

1. In the "Configure the Select Statement" page of the wizard, choose "Items" from the drop down list. Check the "ItemID", "Name" and ParentID columns. Click the __Next__ button.
>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted06.png)

1. In the "Test Query" page of the wizard, click the __Finish__ button to close the wizard. The Access Data Source component will be created automatically and assigned to the RadTreeView __DataSourceID__ property

1. In the Properties Window for the RadTreeView:

1. Set the __DataFieldID__ property to "ItemID".

1. Set the __DataFieldParentID__ property to "ParentID".

1. Set the __DataTextField__ property to "Name".
>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted07.png)

1. Press __F5__ to run the application.
