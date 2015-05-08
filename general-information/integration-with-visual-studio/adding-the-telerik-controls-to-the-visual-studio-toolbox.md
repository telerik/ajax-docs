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



## 

Telerik UI for ASP.NET are added automatically to the Visual Studio Toolbox during installation.



The easiest way to setup the Telerik controls in your toolbox is to use the[Telerik Toolbox Configuration Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/toolbox-configuration%}).

If you are using the [ZIP distribution]({%slug introduction/installation/installing-the-telerik-controls-from-zip-file%}), however, you can do this manually by following the steps below:

1. Open your application in Visual Studio.

1. Expand the Toolbox.

1. Expand the **General** section. Alternatively, you can create a new section by selecting the **Add Tab** option from the context menu (right click anywhere in the toolbox).When the new tab is added you can choose its name (e.g. Telerik UI for ASP.NET AJAX QX YYYY .NET 4.0).

1. Right-click in the **General** section (or the new one you just created) and open **Choose Items**.

1. On the **.NET Framework Components** tab, click **Browse**.

1. Browse to the installation folder, open the **bin40** folder and select the **Telerik.Web.UI.dll**.

* If the Windows Installer MSI Package was used to install Telerik UI for ASP.NET AJAX, the **bin40**	folder is located in **C:\Program Files\Telerik\RadControls for ASPNET AJAX Q[X] YYYY\Bin40**

* If the ZIP was used to install the Telerik controls, the **bin40**	folder is located in the folder where the installation files have been unzipped.

>note Please, note that if you want to add Telerik controls for .NET 3.5 or .NET 4.5 web project you should select theTelerik.Web.UI.dll from the **C:\Program Files\Telerik\RadControls for ASPNET AJAX Q[X] YYYY\Bin35** or **~\Bin45** folder.
>




>note Telerik controls are not automatically installed into any configuration of Visual Studio Express because the end-userlicense agreement (EULA) of VS Express does not allow third-party extensions to be registered.
>

