---
title: Object reference not set to an instance of an object
page_title: Object reference not set to an instance of an object | RadSpreadsheet for ASP.NET AJAX Documentation
description: Object reference not set to an instance of an object
slug: spreadsheet/troubleshooting/object-reference-not-set-to-an-instance-of-an-object
tags: assembly,object,reference
published: True
position: 2
---

# Object reference not set to an instance of an object


When you have a **RadSpreadsheet** control on an ASPX page or an ASCX usercontrol, you may observe the following error:

*"Object reference not set to an instance of an object."*

The above error indicates that there is one or more of the additional libraries [needed by the **RadSpreadsheet**]({%slug spreadsheet/getting-started%}) that is not referenced in the project. Those libraries are:

@[template - spreadsheet-additional-libraries](/_templates/spreadsheet/additional-libraries.md#additional-libraries-explanation)

In order to resolve this issue, you need to include and reference all of the above assemblies. @[template - path-to-additional-libraries](/_templates/common/additional-libraries-path.md#additional-libraries-path "assemblies: them, support: They support, isplural: assemblies")

