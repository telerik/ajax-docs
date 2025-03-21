---
title: Adding the Telerik Controls to the Visual Studio Toolbox
page_title: Adding the Telerik Controls to the Visual Studio Toolbox
description: Check our Web Forms article about Adding the Telerik Controls to the Visual Studio Toolbox.
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox
tags: adding,the,telerik,controls,to,the,visual,studio,toolbox
published: True
position: 0
---

# Adding the Telerik Controls to the Visual Studio Toolbox

Telerik UI for ASP.NET controls are added automatically to the Visual Studio Toolbox during [MSI installation](slug://getting-started/installation/install-using-msi). 

If you'd like to add the controls to your project (aspx, ascx, masterpage, etc.) see [Add the Controls to Your Project]({%slug getting-started/adding-the-telerik-controls-to-your-project%}) as well as the [Install Telerik UI for ASP.NET AJAX using MSI installer]({%slug getting-started/installation/install-using-msi%}) articles.

The easiest way to setup the Telerik controls in your toolbox is to use the [Telerik Toolbox Configuration Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/toolbox-configuration%}), part of the [Progress Telerik UI for ASP.NET AJAX VS Extension
](https://marketplace.visualstudio.com/items?itemName=TelerikInc.TelerikASPNETAJAXVSExtensions).

If you are installing Telerik UI for ASP.NET AJAX from a [ZIP distribution]({%slug getting-started/installation/install-from-zip%}), however, you can do this manually by following the steps below:

1. Log into [your account](https://www.telerik.com/account/product-download?product=RCAJAX) and download the Telerik_UI_for_ASP.NET_AJAX_20xx_x_xxx_Dev_hotfix.zip hotfix zip installation

1. Open your application in Visual Studio.

1. Expand the Toolbox.

1. Expand the **General** section. Alternatively, you can create a new section by selecting the **Add Tab** option from the context menu (right click anywhere in the toolbox). When the new tab is added you can choose its name (e.g. Telerik UI for ASP.NET AJAX YYYY QX).

1. Right-click in the **General** section (or the new one you just created) and open **Choose Items**.
![Choose Items in Visual Studio Toolbox](images/manual_add_telerik_controls_to_VS_toolbox.gif)

1. On the **.NET Framework Components** tab, click **Browse**.

1. Browse to the installation folder, open the **Bin462** folder and select the **Telerik.Web.UI.dll**.

	* If the Windows Installer MSI Package was used to install Telerik UI for ASP.NET AJAX, the **Bin462**	folder is located in **C:\Program Files (x86)\Progress\Telerik UI for ASP.NET AJAX YYYY QX\Bin462**. If this folder is missing, download the hotfix installation and obtain the Telerik.Web.UI.dll assembly from it as instructed in point 1 in the above list.

	* If the ZIP was used to install the Telerik controls, the **Bin462** folder is located in the folder where the installation files have been unzipped.

	>note If you want to add Telerik controls for .NET 3.5, .NET 4.0 or .NET 4.5 web project you should select the Telerik.Web.UI.dll from the **C:\Program Files (x86)\Progress\UI for ASP.NET AJAX RX YYYY\Bin35** or **~/Bin40** or **~/Bin45** folder. Note that Bin35 and Bin40 folders are [distributed until R1 2023 SP1](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/ui-for-asp-net-ajax-r1-2023-sp1-(version-2023-1-314) and Bin45 is [distributed until 2024 Q1](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/ui-for-asp-net-ajax-2024-q1-(version-2024-1-131)).

## Troubleshooting

If the controls do not appear in the ToolBox, please make sure that the project is of type ASP.NET Web Forms site or application.

You can find more information in the [Design-time Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/design-time-troubleshooting%}) section.

## See Also
 * [Add the Controls to Your Project](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/adding-the-telerik-controls-to-your-project).
