---
title: Binding to LinqDataSource
page_title: Binding to LinqDataSource - RadTreeView
description: Check our Web Forms article about Binding to LinqDataSource.
slug: treeview/design-time/binding-to-linqdatasource
tags: binding,to,linqdatasource
published: True
position: 3
---

# Binding to LinqDataSource



## 

Since the **Q2 2008 SP1** release **RadTreeView** supports hierarchical data binding to the [LinqDataSource](https://msdn.microsoft.com/en-us/library/bb547113.aspx) control. This article shows how to do this in Design Time:

1. Create a new Web Site in Visual Studio and copy the **Northwind.mdf** database in your **App_Data** folder.

1. Add a new **Linq to SQL Classes** item named **Northwind.dbml**:
![RadTreeView Add New Linq to SQL Class Item](images/treeview_desinglinqaddnewitem.png)

1. Open **Northwind.dbml** in design mode and drag the **Employees** table from Server Explorer. The **Employees** table is self referencing and suites perfectly for this example:
![RadTreeView Linq Table Employee](images/treeview_desinglinqtableemployee.png)

1. Open **Default.aspx** in design mode and drag a new **RadTreeView** instance.

1. Open the smart tag and select **"New data source"**:
![RadTreeView Choose Data Source](images/treeview_designlinqchoosedatasource.png)

1. Choose **"LinqDataSource"** from the "Data Source Configuration Wizard":
![RadTreeView Choose Data Source Type](images/treeview_desinglinqchoosedatasourcetype.png)

1. Configure the newly created data source to use the **NorhtwindDataContext** object:
![RadTreeView Choose Context Object](images/treeview_desinglinqchoosecontextobject.png)

1. Select the **"EmployeeID"**, **"LastName"** and **"ReportsTo"** columns from the "Configure Data Source" dialog:
![RadTreeView Configure Data Selection](images/treeview_desinglinqconfiguredataselectionpng.png)

1. Click **"Finish"** and open the **RadTreeView** smart tag to complete the configuration.

1. Select **"EmployeeID"** for the **DataFieldID** property, **"ReportsTo"** for the **DataFieldParentID** property and **"LastName"** for the **DataTextField** property:
![RadTreeView Data Filed ID](images/treeview_designlinqsmarttagdatafieldid.png)
![RadTreeView Data Field Parent ID](images/treeview_designlinqsmarttagdatafieldparentid.png)
![RadTreeView Text Field](images/treeview_designlinqsmarttagtextfield.png)

1. Save your page and run the web site. You should see a page with the following **RadTreeView**:
![RadTreeView Bound](images/treeview_designlinqbound.png)

# See Also

 * [Overview]({%slug treeview/data-binding/overview%})
