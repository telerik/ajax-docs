---
title: Could not load file or assembly Telerik.Web.Spreadsheet
page_title: Could not load file or assembly Telerik.Web.Spreadsheet | RadSpreadsheet for ASP.NET AJAX Documentation
description: Could not load file or assembly Telerik.Web.Spreadsheet
slug: spreadsheet/troubleshooting/could-not-load-file-or-assembly-telerik-web-spreadsheet
tags: assembly,Telerik.Web.Spreadsheet,load
published: True
position: 1
---

# Could not load file or assembly Telerik.Web.Spreadsheet


When you have a **RadSpreadsheet** control on an ASPX page or an ASCX usercontrol, you may observe the following error:

*"Could not load file or assembly 'Telerik.Web.Spreadsheet, Version=XXXX.X.XXX.XX, Culture=neutral, PublicKeyToken=121fae78165ba3d4' or one of its dependencies. The system cannot find the file specified."*

The above error indicates that the **Telerik.Web.Spreadsheet.dll**, which is [required by **RadSpreadsheet**]({%slug spreadsheet/getting-started%}), is not referenced by the project. In order for **RadSpreadsheet** to work properly, you need to include and reference this assembly. 

@[template - path-to-additional-libraries](/_templates/common/additional-libraries-path.md#additional-libraries-path "assemblies: the **Telerik.Web.Spreadsheet.dll**, support: It supports, isplural: assembly")

