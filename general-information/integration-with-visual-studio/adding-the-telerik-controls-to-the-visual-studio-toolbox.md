---
title: Adding the Telerik Controls to the Visual Studio Toolbox
page_title: Adding the Telerik Controls to the Visual Studio Toolbox | UI for ASP.NET AJAX Documentation
description: Adding the Telerik Controls to the Visual Studio Toolbox
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox
tags: adding,the,telerik,controls,to,the,visual,studio,toolbox
published: True
position: 0
---

# Adding the Telerik Controls to the Visual Studio Toolbox

Telerik UI for ASP.NET are added automatically to the Visual Studio Toolbox during installation.

The easiest way to setup the Telerik controls in your toolbox is to use the [Telerik Toolbox Configuration Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/toolbox-configuration%}).

If you are using the [ZIP distribution]({%slug introduction/installation/installing-the-telerik-controls-from-zip-file%}), however, you can do this manually by following the steps below:

1. Open your application in Visual Studio.

1. Expand the Toolbox.

1. Expand the **General** section. Alternatively, you can create a new section by selecting the **Add Tab** option from the context menu (right click anywhere in the toolbox). When the new tab is added you can choose its name (e.g. Telerik UI for ASP.NET AJAX RX YYYY .NET 4.0).

1. Right-click in the **General** section (or the new one you just created) and open **Choose Items**.
![Choose Items in Visual Studio Toolbox](images/Visual_Studio_Choose_Items.png)

1. On the **.NET Framework Components** tab, click **Browse**.

1. Browse to the installation folder, open the **Bin40** folder and select the **Telerik.Web.UI.dll**.

	* If the Windows Installer MSI Package was used to install Telerik UI for ASP.NET AJAX, the **bin40**	folder is located in **C:\Program Files (x86)\Progress\Telerik UI for ASP.NET AJAX RX YYYY\Bin40**

	* If the ZIP was used to install the Telerik controls, the **Bin40** folder is located in the folder where the installation files have been unzipped.

	>note If you want to add Telerik controls for .NET 3.5 or .NET 4.5 web project you should select the Telerik.Web.UI.dll from the **C:\Program Files (x86)\Progress\UI for ASP.NET AJAX RX YYYY\Bin35** or **~/Bin45** folder.
	>note If the controls do not appear in the ToolBox, please make sure that the project is of type ASP.NET Web Forms site/ application.

>note Telerik controls are not automatically installed into any configuration of Visual Studio Express because the end-user license agreement (EULA) of VS Express does not allow third-party extensions to be registered.

#### Add the controls to your project

The following article describes the steps for including the Telerik Assemblies into Visual Studio projects: [Add the Controls to Your Project](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/first-steps#add-the-controls-to-your-project)

## See Also
 * [Add the Controls to Your Project](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/first-steps#add-the-controls-to-your-project).
