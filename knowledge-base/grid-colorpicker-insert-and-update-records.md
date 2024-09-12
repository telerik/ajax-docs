---
title: How to insert and update records in a RadGrid with columns that contain RadColorPicker
description: How to insert and update records in a RadGrid with columns that contain RadColorPicker. Check it now!
type: how-to
page_title: How to insert and update records in a RadGrid with columns that contain RadColorPicker
slug: how-to-insert-and-update-records-in-a-radgrid-with-columns-that-contain-radcolorpicker
res_type: kb
---

| Product | RadColorPicker for ASP.NET AJAX |
| --- | --- |
| Version | Current |
 
  
   
## HOW-TO

This article shows how to bind a **RadGridTemplateColumn **that contains a **RadColorPicker **to a *SqlDataSource*. The code for inserting a new record to
the DataBase and updating an existing record are shown in the attached projects.  
   
 ## DESCRIPTION

The MSSQL server does not have a type corresponding to the *System.Drawing.Color* type in .NET. The **RadColorPicker** control works with that .NET type, however.   

## SOLUTION

In the attached sample a column of type *nvarchar* is used to store the value of the color (an example value is: *#66CC99*) in the SQL server. The *FromHtml*and *ToHtml* static methods of the [System.Drawing.ColorTranslator](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.colortranslator?view=net-8.0&redirectedfrom=MSDN) class are used to parse a string to an object of type *System.Drawing.Color* and vice-versa. The zip files below contain the full source code of the implementation in VB.NET and C# including
the database file used in the sample.   
 


