---
title: Binding to LinqDataSource
page_title: Binding to LinqDataSource | UI for ASP.NET AJAX Documentation
description: Binding to LinqDataSource
slug: treeview/design-time/binding-to-linqdatasource
tags: binding,to,linqdatasource
published: True
position: 3
---

# Binding to LinqDataSource



## 

Since the Q2 2008 SP1 release __RadTreeView__ supports hierarchical data binding to the [LinqDataSource](http://msdn.microsoft.com/en-us/library/bb547113.aspx) control. This article shows how to do this in Design Time:

1. Create a new Web Site in Visual Studio 2008 and copy the __Northwind.mdf__ database in your __App_Data__ folder.

1. Add a new __"Linq to SQL Classes"__ item named __"Northwind.dbml"__:![RadTreeView Add New Linq to SQL Class Item](images/treeview_desinglinqaddnewitem.png)

1. Open __Northwind.dbml__ in design mode and drag the __Employees__ table from Server Explorer. The __Employees__ table is self referencing and suites perfectly for this example:![RadTreeView Linq Table Employee](images/treeview_desinglinqtableemployee.png)

1. Open __Default.aspx__ in design mode and drag a new __RadTreeView__ instance.

1. Open the smart tag and select __"New data source"__:![RadTreeView Choose Data Source](images/treeview_designlinqchoosedatasource.png)

1. Choose __"LinqDataSource"__ from the "Data Source Configuration Wizard":![RadTreeView Choose Data Source Type](images/treeview_desinglinqchoosedatasourcetype.png)

1. Configure the newly created data source to use the __NorhtwindDataContext__ object:![RadTreeView Choose Context Object](images/treeview_desinglinqchoosecontextobject.png)

1. Select the __"EmployeeID"__, __"LastName"__ and __"ReportsTo"__ columns from the "Configure Data Source" dialog:![RadTreeView Configure Data Selection](images/treeview_desinglinqconfiguredataselectionpng.png)

1. Click __"Finish"__ and open the __RadTreeView__ smart tag to complete the configuration.

1. Select __"EmployeeID"__ for the __DataFieldID__ property, __"ReportsTo"__ for the __DataFieldParentID__ property and __"LastName"__ for the __DataTextField__ property:![RadTreeView Data Filed ID](images/treeview_designlinqsmarttagdatafieldid.png)![RadTreeView Data Field Parent ID](images/treeview_designlinqsmarttagdatafieldparentid.png)![RadTreeView Text Field](images/treeview_designlinqsmarttagtextfield.png)

1. Save your page and run the web site. You should see a page with the following __RadTreeView__:![RadTreeView Bound](images/treeview_designlinqbound.png)

# See Also

 * [Overview]({%slug treeview/data-binding/overview%})
