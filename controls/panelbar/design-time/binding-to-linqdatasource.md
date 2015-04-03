---
title: Binding to LinqDataSource
page_title: Binding to LinqDataSource | UI for ASP.NET AJAX Documentation
description: Binding to LinqDataSource
slug: panelbar/design-time/binding-to-linqdatasource
tags: binding,to,linqdatasource
published: True
position: 4
---

# Binding to LinqDataSource



## 

Since the Q2 2008 SP1 release __RadPanelBar__ supports hierarchical data binding to the [LinqDataSource](http://msdn.microsoft.com/en-us/library/bb547113.aspx) control. This article shows how to do this in Design Time:

1. Create a new Web Site in Visual Studio 2008 and copy the __Northwind.mdf__ database in your __App_Data__ folder.

1. Add a new __"Linq to SQL Classes"__ item named __"Northwind.dbml"__:![Linq Add New Item](images/panelbar_linq_addnewitem.png)

1. Open __Northwind.dbml__ in design mode and drag the __Employees__ table from Server Explorer. The __Employees__ table is self referencing and suites perfectly for this example:![Employee Table](images/panelbar_linq_tableemployee.png)

1. Open __Default.aspx__ in design mode and drag a new __RadPanelBar__ instance.

1. Open the smart tag and select __"New data source"__:![Choose Data Source](images/panelbar_linq_choosedatasource.png)

1. Choose __"LinqDataSource"__ from the "Data Source Configuration Wizard":![Choose A Data Source Type](images/panelbar_linq_choosedatasourcetype.png)

1. Configure the newly created data source to use the __NorhtwindDataContext__ object:![Choose Cintext Object](images/panelbar_linq_choosecontextobject.png)

1. Select the __"EmployeeID"__, __"LastName"__ and __"ReportsTo"__ columns from the "Configure Data Source" dialog:![Configure Data Selection](images/panelbar_linq_configuredataselection.png)

1. Click __"Finish"__ and open the __RadPanelBar__ smart tag to complete the configuration.

1. Select __"EmployeeID"__ for the __DataFieldID__ property, __"ReportsTo"__ for the __DataFieldParentID__ property and __"LastName"__ for the __DataTextField__ property:![Smart Tag Data Field ID](images/panelbar_linq_smarttagdatafieldid.png)![Smart Tag Data Filed Parent ID](images/panelbar_linq_smarttagdatafieldparentid.png)![Smart Tag Text Field](images/panelbar_linq_smarttagtextfield.png)

1. Save your page and run the web site. You should see a page with the following __RadPanelBar__:![Bound Linq](images/panelbar_linq_bound.png)

# See Also

 * [Overview]({%slug panelbar/data-binding/overview%})
