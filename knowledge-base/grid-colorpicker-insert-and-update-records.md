---
title: How to insert and update records in a RadGrid with columns that contain RadColorPicker
description: How to insert and update records in a RadGrid with columns that contain RadColorPicker. Check it now!
type: how-to
page_title: How to insert and update records in a RadGrid with columns that contain RadColorPicker
slug: how-to-insert-and-update-records-in-a-radgrid-with-columns-that-contain-radcolorpicker
res_type: kb
---


 

   |   **Article information**  |
| --- |
 |   Article relates to  |   RadColorPicker for ASP.NET AJAX Q3 2009 SP2  |
 |   Created by  |   Fiko, Telerik  |
 |   Last modified  |   February 26, 2009  |
 |   Last modified by  |   Fiko, Telerik  |
  
   
 **HOW TO**  

This article shows how to bind a **RadGridTemplateColumn **that contains a **RadColorPicker **to a *SqlDataSource*. The code for inserting a new record to
the DataBase and updating an existing record are shown in the attached projects.  
   
 **DESCRIPTION**  

The MSSQL server does not have a type that corresponds to the *System.Drawing.Color* type in .NET. The **RadColorPicker** control works with that .NET type, however.   
   
   
   
 ![](/images/PurchaseGrid/RadControls%20%27%27Prometheus%27%27%20for%20ASP.NET.gif)  
   
 **  

SOLUTION**  

In the attached sample a column of type *nvarchar*is used to store the value of the color (an example value is: *#66CC99*) in the SQL server. The *FromHtml*and *ToHtml* static methods of the [System.Drawing.ColorTranslator](http://msdn.microsoft.com/en-us/library/system.drawing.colortranslator.aspx) class are used in order to parse a string to an object of type *System.Drawing.Color* and vice-versa. The zip files bellow contain the full source code of the implementation in VB.NET and C# including
the database file used in the sample.   
 


