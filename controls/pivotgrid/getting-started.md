---
title: Getting Started
page_title: Getting Started | UI for ASP.NET AJAX Documentation
description: Getting Started
slug: pivotgrid/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started



RadPivotGrid is a data summarization control where users can break down raw data in any manner they want. A pivot table can help quickly summarize the reports and highlight the desired information. It displays data in format such as spreadsheets or business intelligence applications. That is why it is good for showing reports in interactive web pages where the users can easily see the data they need.

## Creating and Binding the RadPivotGrid

1.Locate the database file which will be used for binding the __PivotGrid__ in the __AppData__ folder of your application.![Pivot Grid-Getting Started-Binding 1](images/PivotGrid-GettingStarted-Binding1.jpg)

2. Use the PivotGrid SmartTag to select the needed DataSource:![Pivot Grid-Getting Started-Binding-Smart Tag](images/PivotGrid-GettingStarted-Binding-SmartTag.jpg)

3. Set up your DataSource with the required fields:![Pivot Grid-Getting Started-Binding-SQL 1](images/PivotGrid-GettingStarted-Binding-SQL1.jpg)

and test the generated query:![Pivot Grid-Getting Started-Binding-SQL 2](images/PivotGrid-GettingStarted-Binding-SQL2.jpg)

4. After having the data set you could use the __PivotGrid Collection Editor__ to set the __Pivot Fields__. Note that you should add a __DataField__ property for them:![Pivot Grid-Getting Started-Binding-Editor](images/PivotGrid-GettingStarted-Binding-Editor.jpg)

5. The PivotGrid will summarize the data like this:![Pivot Grid-Getting Started-Binding-Rendering](images/PivotGrid-GettingStarted-Binding-Rendering.jpg)
