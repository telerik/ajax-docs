---
title: Binding to LinqDataSource
page_title: Binding to LinqDataSource | RadTabStrip for ASP.NET AJAX Documentation
description: Binding to LinqDataSource
slug: tabstrip/data-binding/binding-to-linqdatasource
tags: binding,to,linqdatasource
published: True
position: 5
---

# Binding to LinqDataSource

## 

Since the Q2 2008 SP1 release **RadTabStrip** supports hierarchical data binding to the [LinqDataSource](http://msdn.microsoft.com/en-us/library/bb547113.aspx) control. This article shows how to do this in Design Time:

1. Create a new Web Site in Visual Studio 2008 and copy the **Northwind.mdf** database in your **App_Data** folder.

1. Add a new **"Linq to SQL Classes"** item named **"Northwind.dbml"**:
![Add new item](images/tabstrip_linq_addnewitem.png)

1. Open **Northwind.dbml** in design mode and drag the **Employees** table from Server Explorer. The **Employees** table is self referencing and suites perfectly for this example:
!["Employee" table](images/tabstrip_linq_tableemployee.png)

1. Open **Default.aspx** in design mode and drag a new **RadTabStrip** instance.

1. Open the smart tag and select **"New data source"**:
![Choose DataSource](images/tabstrip_linq_choosedatasource.png)

1. Choose **"LinqDataSource"** from the "Data Source Configuration Wizard":
![Choose DataSource type](images/tabstrip_linq_choosedatasourcetype.png)

1. Configure the newly created data source to use the **NorhtwindDataContext** object:
![Choose context object](images/tabstrip_linq_choosecontextobject.png)

1. Select the **"EmployeeID"**, **"LastName"** and **"ReportsTo"** columns from the "Configure Data Source" dialog:
![Configure data selection](images/tabstrip_linq_configuredataselection.png)

1. Click **"Finish"** and open the **RadTabStrip** smart tag to complete the configuration.

1. Select **"EmployeeID"** for the **DataFieldID** property, **"ReportsTo"** for the **DataFieldParentID** property and **"LastName"** for the **DataTextField** property:
![Smart Tag Data Field ID](images/tabstrip_linq_smarttagdatafieldid.png)
![Smart Tag Data Field Parent ID](images/tabstrip_linq_smarttagdatafieldparentid.png)
![Smart Tag Text Field ID](images/tabstrip_linq_smarttagtextfield.png)

1. Save your page and run the web site. You should see a page with the following **RadTabStrip**:
![TabStrip Bound with LINQ to SQL](images/tabstrip_linq_bound.png)

# See Also

 * [Overview]({%slug tabstrip/data-binding/overview%})
