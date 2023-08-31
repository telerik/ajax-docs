---
title: Fix Object reference not set to an instance of an object  at Telerik.Web.SkinRegistrar.GetAppSetting error
description: See how to fix the Object reference not set to an instance of an object at Telerik.Web.SkinRegistrar.GetAppSetting error
type: troubleshooting
page_title: Fix Object reference not set to an instance of an object  at Telerik.Web.SkinRegistrar.GetAppSetting error
slug: common-fix-object-reference-skinregistrar-error
position: 
tags: 
ticketid: 1621703
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>Telerik UI for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
The System.NullReferenceException error could be encountered by developers when dealing with the Telerik.Web.UI library. 

The detailed error message is:

````C#
System.NullReferenceException
  HResult=0x80004003
  Message=Object reference not set to an instance of an object.
  Source=Telerik.Web.UI
  StackTrace:
   at Telerik.Web.SkinRegistrar.GetAppSetting(String name, Page page)
````

This error indicates that there's a null object that the code is attempting to access. Since the source of this error is pointing to Telerik.Web.UI, it's often related to configurations or missing references.


## Solution
To address the System.NullReferenceException error in Telerik.Web.UI, follow the steps below:
- Make sure that the Telerik.Web.UI.Skins.dll is referenced in the project and that it has the same version as the Telerik.Web.UI.dll. You can see how to check the DLL assembly version in this article: [How to find out which is the used version of Telerik.Web.UI in the web application](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-assembly-version).
- Check for and if not available add the SkinsAssembly setting to the web.config

<add key="Telerik.Web.SkinsAssembly" value="Telerik.Web.UI.Skins" />

- Set the EnableScriptsCombine property of the ScriptManager/RadScriptManager to false and see if the issue can still be observed.
- Alternatively, you can try to enable the Just My Code option in Visual Studio, see [Telerik.Web.Ui.pdb not loaded error when debugging in Visual Studio](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-telerik-web-ui-pdb-not-loaded-error).

  
