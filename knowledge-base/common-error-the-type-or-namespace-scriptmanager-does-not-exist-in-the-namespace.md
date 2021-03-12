---
title: Error: The type or namespace 'ScriptManager' does not exist in the namespace 'System.Web.UI'
description: See how to fix the Error: The type or namespace 'ScriptManager' does not exist in the namespace 'System.Web.UI'
type: troubleshooting
page_title: Error: The type or namespace 'ScriptManager' does not exist in the namespace 'System.Web.UI'
slug: common-error-the-type-or-namespace-scriptmanager-does-not-exist-in-the-namespace
res_type: kb
---

## Description

If you get a ScriptManager related error like follows, the tips below may help you to solve it:

`Server Error: The type or namespace 'ScriptManager' does not exist in the namespace 'System.Web.UI' (are you missing an assembly reference?)`

## Solution

1.  Add a reference to the assembly System.Web.Extensions: Select Project-> Add Reference and then select the assembly name.

1.  Add the following Page directive to the aspx/ascx file:

    ````ASP.NET
    <%@ Register TagPrefix="asp" Namespace="System.Web.UI" Assembly="System.Web"%>
    ````
1. Remove the ID attribute from the ScriptManager declaration (for example `ID="ScriptManager1"`) in the aspx/ascx file and delete the protected `global::System.Web.UI.ScriptManager ScriptManager1` declaration from the designer.cs file.

1. Search in the designer for System.Web.UI.WebControls.ScriptManager and replace it with System.Web.UI.ScriptManager.

1. Change the target Framework of your ASP.NET project to a different version and after that change it back to the original one.

1. Try the suggestions in this MSDN blog post: [Why did I receive the error: "The type or namespace '<namespace name>' does not exist in the class or namespace '<parent namespace>' (are you missing an assembly reference?)"](https://docs.microsoft.com/en-us/archive/blogs/csharpfaq/why-did-i-receive-the-error-the-type-or-namespace-namespace-name-does-not-exist-in-the-class-or-namespace-parent-namespace-are-you-missing-an-assembly-reference)

1. **[ASP.NET MVC environment]** If you use the Telerik UI for ASP.NET AJAX controls in ASP.NET MVC, please note that this is not supported as explained in the following article Telerik and ASP.NET MVC. The Telerik ASP.NET AJAX controls are based on the ASP.NET Web Forms paradigm and rely on the its server lifecycle that is not available in ASP.NET MVC. You can use the Telerik UI for ASP.NET MVC controls instead.


