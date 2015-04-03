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

1. Expand the __General__ section. Alternatively, you can create a new section by selectingthe __Add Tab__ option from the context menu (right click anywhere in the toolbox).When the new tab is added you can choose its name (e.g. Telerik UI for ASP.NET AJAX QX YYYY .NET 4.0).

1. Right-click in the __General__ section (or the new one you just created) and open __Choose Items__.

1. On the __.NET Framework Components__ tab, click __Browse__.

1. Browse to the installation folder, open the __bin40__ folder and select the __Telerik.Web.UI.dll__.

* If the Windows Installer MSI Package was used to install Telerik UI for ASP.NET AJAX, the __bin40__	folder is located in__C:\Program Files\Telerik\RadControls for ASPNET AJAX Q[X] YYYY\Bin40__

* If the ZIP was used to install the Telerik controls, the __bin40__	folder is located in the folder where the installation files have been unzipped.

>note Please, note that if you want to add Telerik controls for .NET 3.5 or .NET 4.5 web project you should select theTelerik.Web.UI.dll from the __C:\Program Files\Telerik\RadControls for ASPNET AJAX Q[X] YYYY\Bin35__ or __~\Bin45__ folder.
>




>note Telerik controls are not automatically installed into any configuration of Visual Studio Express because the end-userlicense agreement (EULA) of VS Express does not allow third-party extensions to be registered.
>

