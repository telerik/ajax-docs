---
title: Getting Started
page_title: Getting Started | UI for ASP.NET AJAX Documentation
description: Getting Started
slug: treelist/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started



This tutorial will walk you through creating a Web page that contains a RadTreeList control. It shows how to create and bind a RadTreeList control using a declarative data source.

## Creating and Binding the RadTreeList

1. Locate the "..\Live Demos\App_Data" folder underneath the folder where you have installed UI for ASP.NET AJAX controls. In this folder, find the "Northwind.mdf" file and copy it into the App_Data folder of your Web application. The Solution Explorer for your application may look something like the following:![App_Data](images/treelist_gettingstarted1.png)

2. Using the RadTreeList Smart tag expand the drop-down list labelled __Choose Data Source__ and select <New data source...>:![Smart tag](images/treelist_designtime1.png)

3. The __Data Source Configuration Wizard__ appears. On the __Choose a Data Source Type__ page, select "SQL Database" and click OK:![Data Source Configuration Wizard](images/treelist_gettingstarted3.png)

4. On the __Choose Your Data Connection__ page click the New Connection button and select the "Northwind.mdb" file that you copied into App_Data folder. Then click the Next button:![Choose Your Data Connection](images/treelist_gettingstarted4.png)

5. On the __Configure Select Statement__ page, select the "Employees" table from the drop-down list, and select the "EmployeeID", "LastName", "FirstName", "Region", "PostalCode" and "Country" fields. Then choose Next:![Configure Select Statement](images/treelist_gettingstarted5.png)

6. On the __Test Query__ page, click the Test Query button to see the data. Then click Finish, to exit the Configure Data Source wizard:![Test Query](images/treelist_gettingstarted6.png)

For more information about how to configure the RadTreeList through the Visual Studio designer, see the [Design Time]({%slug treelist/design-time%}) article.
