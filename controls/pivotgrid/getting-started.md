---
title: Getting Started
page_title: Getting Started | RadPivotGrid for ASP.NET AJAX Documentation
description: Getting Started
slug: pivotgrid/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started



RadPivotGrid is a data summarization control where users can break down raw data in any manner they want. A pivot table can help quickly summarize the reports and highlight the desired information. It displays data in format such as spreadsheets or business intelligence applications. That is why it is good for showing reports in interactive web pages where the users can easily see the data they need.

## Creating and Binding the RadPivotGrid

* Locate the database file which will be used for binding the **PivotGrid** in the **AppData** folder of your application.
![Pivot Grid-Getting Started-Binding 1](images/PivotGrid-GettingStarted-Binding1.jpg)

* Use the PivotGrid SmartTag to select the needed DataSource:
![Pivot Grid-Getting Started-Binding-Smart Tag](images/PivotGrid-GettingStarted-Binding-SmartTag.jpg)

* Set up your DataSource with the required fields:
![Pivot Grid-Getting Started-Binding-SQL 1](images/PivotGrid-GettingStarted-Binding-SQL1.jpg)

and test the generated query:
![Pivot Grid-Getting Started-Binding-SQL 2](images/PivotGrid-GettingStarted-Binding-SQL2.jpg)

* After having the data set you could use the **PivotGrid Collection Editor** to set the **Pivot Fields**. Note that you should add a **DataField** property for them:
![Pivot Grid-Getting Started-Binding-Editor](images/PivotGrid-GettingStarted-Binding-Editor.jpg)

* The PivotGrid will summarize the data like this:
![Pivot Grid-Getting Started-Binding-Rendering](images/PivotGrid-GettingStarted-Binding-Rendering.jpg)
