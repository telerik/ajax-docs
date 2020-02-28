---
title: Binding to LinqDataSource
page_title: Binding to LinqDataSource | RadPanelBar for ASP.NET AJAX Documentation
description: Binding to LinqDataSource
slug: panelbar/design-time/binding-to-linqdatasource
tags: binding,to,linqdatasource
published: True
position: 4
---

# Binding to LinqDataSource



## 

Since the Q2 2008 SP1 release **RadPanelBar** supports hierarchical data binding to the [LinqDataSource](https://msdn.microsoft.com/en-us/library/bb547113.aspx) control. This article shows how to do this in Design Time:

1. Create a new Web Site in Visual Studio 2008 and copy the **Northwind.mdf** database in your **App_Data** folder.

2. Add a new **"Linq to SQL Classes"** item named **"Northwind.dbml"**:![Linq Add New Item](images/panelbar_linq_addnewitem.png)

3. Open **Northwind.dbml** in design mode and drag the **Employees** table from Server Explorer. The **Employees** table is self referencing and suites perfectly for this example:
	![Employee Table](images/panelbar_linq_tableemployee.png)

4. Open **Default.aspx** in design mode and drag a new **RadPanelBar** instance.

5. Open the smart tag and select **"New data source"**:
	![Choose Data Source](images/panelbar_linq_choosedatasource.png)

6. Choose **"LinqDataSource"** from the "Data Source Configuration Wizard":![Choose A Data Source Type](images/panelbar_linq_choosedatasourcetype.png)

7. Configure the newly created data source to use the **NorhtwindDataContext** object:![Choose Cintext Object](images/panelbar_linq_choosecontextobject.png)

8. Select the **"EmployeeID"**, **"LastName"** and **"ReportsTo"** columns from the "Configure Data Source" dialog:![Configure Data Selection](images/panelbar_linq_configuredataselection.png)

9. Click **"Finish"** and open the **RadPanelBar** smart tag to complete the configuration.

10. Select **"EmployeeID"** for the **DataFieldID** property, **"ReportsTo"** for the **DataFieldParentID** property and **"LastName"** for the **DataTextField** property:
	![Smart Tag Data Field ID](images/panelbar_linq_smarttagdatafieldid.png)![Smart Tag Data Filed Parent ID](images/panelbar_linq_smarttagdatafieldparentid.png)![Smart Tag Text Field](images/panelbar_linq_smarttagtextfield.png)

11. Save your page and run the web site. You should see a page with the following **RadPanelBar**:
	![Bound Linq](images/panelbar_linq_bound.png)

# See Also

 * [Data Binding Overview]({%slug panelbar/data-binding/overview%})
