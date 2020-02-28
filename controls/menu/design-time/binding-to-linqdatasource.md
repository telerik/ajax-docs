---
title: Binding to LinqDataSource
page_title: Binding to LinqDataSource | RadMenu for ASP.NET AJAX Documentation
description: Binding to LinqDataSource
slug: menu/design-time/binding-to-linqdatasource
tags: binding,to,linqdatasource
published: True
position: 4
---

# Binding to LinqDataSource

## 

Since the Q2 2008 SP1 release **RadMenu** supports hierarchical data binding to the [LinqDataSource](https://msdn.microsoft.com/en-us/library/bb547113.aspx) control. This article shows how to do this in Design Time:

1. Create a new Web Site in Visual Studio 2008 and copy the **Northwind.mdf** database in your **App_Data** folder.

1. Add a new **"Linq to SQL Classes"** item named **"Northwind.dbml"**:
![RadMenu LINQ Add New Item](images/menu_linqaddnewitem.png)

1. Open **Northwind.dbml** in design mode and drag the **Employees** table from Server Explorer. The **Employees** table is self referencing and suites perfectly for this example:
![RadMenu LINQ Employees Table](images/menu_linqtableemployee.png)

1. Open **Default.aspx** in design mode and drag a new **RadMenu** instance.

1. Open the smart tag and select **"New data source"**:
![RadMenu LINQ Choose DataSource](images/menu_linqchoosedatasource.png)

1. Choose **"LinqDataSource"** from the "Data Source Configuration Wizard":
![RadMenu LINQ Choose DataSource Type](images/menu_linqchoosedatasourcetype.png)

1. Configure the newly created data source to use the **NorhtwindDataContext** object:
![RadMenu LINQ Choose Context Object](images/menu_linqchoosecontextobject.png)

1. Select the **"EmployeeID"**, **"LastName"** and **"ReportsTo"** columns from the "Configure Data Source" dialog:
![RadMenu LINQ Configure Data Selection](images/menu_linqconfiguredataselection.png)

1. Click **"Finish"** and open the **RadMenu** smart tag to complete the configuration.

1. Select **"EmployeeID"** for the **DataFieldID** property, **"ReportsTo"** for the **DataFieldParentID** property and **"LastName"** for the **DataTextField** property:
![RadMenu LINQ DataFieldID](images/menu_linqsmarttagdatafieldid.png)![RadMenu LINQ DataFieldParentID](images/menu_linqsmarttagdatafieldparentid.png)![RadMenu LINQ DataTextField](images/menu_linqsmarttagtextfield.png)

1. Save your page and run the web site. You should see a page with the following **RadMenu**:![RadMenu LINQ Bound](images/menu_linqbound.png)

# See Also

 * [Overview]({%slug menu/data-binding/overview%})
