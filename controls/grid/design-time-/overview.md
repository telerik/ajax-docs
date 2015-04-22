---
title: Design Time  Overview
page_title: Overview | RadGrid for ASP.NET AJAX Documentation
description: Overview
slug: grid/design-time-/overview
tags: overview
published: True
position: 0
---

# Design Time  Overview



## 

Telerik RadGrid has a rich design-time support, which allows you to build a grid, customize it and see the changes reflected immediately.

Before you start your work with the design-time, you will need to set the necessary **dataSets** and **DataAdapters** (**SqlDataAdapter**, **OleDbDataAdapter**, etc.) in order to use them directly in the property builder. When setting the dataset, you may also set the table relations.

In order to use the Telerik RadGrid design-time support effectively, you need to set the **DataSource** property in the ASPX declaration of the grid.

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSource="<%# dataSet11 %>"
	    DataMember="Customers" AutoGenerateColumns="False">
````



If you don't set the **DataSource** property here, you will not see the changes you have made in the design-time.

After you drag and drop an instance of Telerik RadGrid from the toolbox onto the webform, right-click it and select the [Telerik RadGrid Properties] command.

Before you start your work with the design-time, you will need to set the necessary DataSource controls.

![Designer Overview](images/grid_designer_overview.png)

This will pop up the Telerik RadGrid editor dialog.
