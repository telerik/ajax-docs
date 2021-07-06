---
title: Telerik AJAX components appear multiple times in Visual Studio 2010 toolbox
description: Telerik AJAX components appear multiple times in Visual Studio 2010 toolbox. Check it now!
type: how-to
page_title: Telerik AJAX components appear multiple times in Visual Studio 2010 toolbox
slug: common-the-telerik-ajax-components-appear-multiple-times-in-visual-studio-2010-toolbox
res_type: kb
---

**PROBLEM**  
 All the tools in the toolbox show up multiple times. This makes it very hard to scroll through them.  
  
  
**SOLUTION**  
 This is a common problem in **Visual Studio 2010**, which is fixed in the newer versions.   
  
 In order to resolve it in VS 2010, clear the **Toolbox** cache created by the **Visual Studio**.  
  
 The following steps will help you to achieve this: 
1. Close all **Visual Studio** instances.
2. Open **Windows Explorer** and navigate to the directory **%localappdata%\Microsoft\VisualStudio\10.0**
3. Make sure that the option **Show hidden files, folders and drives** is selected in the **Windows Explorer** options.
4. Delete all **\*.tbd** files.
5. Start **Visual Studio 2010** and use the [**Toolbox Configurator**](http://www.telerik.com/help/winforms/installation-deployment-and-distribution-vsx-toolbox-configurator.html) wizard to set the required controls version.

  
 In case this does not help, try to completely reset your **Visual Studio Toolbox**, as it is described below:
1. Close all **Visual Studio** instances.
2. Could you please check if the **Visual Studio Toolbox** has created again the **\*.tbd** files and delete them if they exist?
3. Start the **regedit.exe** tool, find the following registry keys:
    - **HKEY\_CURRENT\_USER\Software\Microsoft\VisualStudio\10.0\ToolboxControlsInstaller\_AssemblyFoldersExCache**
    - **HKEY\_CURRENT\_USER\Software\Microsoft\VisualStudio\10.0\ToolboxControlsInstallerCache**
4. Remove everything from these keys and leave them empty.
5. Run **Visual Studio** again, wait until it recreates all the items in the **Toolbox** and then use the **Toolbox Configurator** once again to populate the appropriate **UI for ASP.NET AJAX** version in the **VS Toolbox**.



