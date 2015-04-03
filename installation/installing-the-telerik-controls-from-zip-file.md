---
title: Installing the Telerik Controls from ZIP File
page_title: Installing the Telerik Controls from ZIP File | UI for ASP.NET AJAX Documentation
description: Installing the Telerik Controls from ZIP File
slug: introduction/installation/installing-the-telerik-controls-from-zip-file
tags: installing,the,telerik,controls,from,zip,file
published: True
position: 3
---

# Installing the Telerik Controls from ZIP File



>important As of Q1 2011, Telerik UI for ASP.NET AJAX is shipped with .NET 3.5 and above assemblies only.	The following page contains more information about the product support lifecycle of the controls:
>[http://www.telerik.com/aspnet-ajax/tech-sheets/net-support](http://www.telerik.com/aspnet-ajax/tech-sheets/net-support)
>


>caution  __Prerequisite__ 
>In order to have the Telerik UI for ASP.NET AJAX running, you will need to have[ASP.NET AJAX](http://ajax.asp.net/)installed on your development/production machine.
>See also[General ASP.NET AJAX Information](85BC8323-A04F-4A84-9E29-E1B2A122FC19).
>


The __ZIP__ is used to install Telerik UI for ASP.NET AJAX manually for upgrading or updating purposes.The folder structure is different from the __MSI__installation. You need to be familiar with with ASP.NET, IIS, setting permissions and creating virtual folders. Commonly, the __ZIP__ is installed directly in __inetpub/wwwroot__.

## Install without IIS Running

To install the Telerik UI for ASP.NET AJAX suite on your machine from the __ZIP__ file, follow the instructions below:

1. Log into your [Telerik account](http://www.telerik.com/account/default.aspx) and click on __Products & Subscriptions__ from the top menu.

1. In the dropdown that appears choose from your purchased products or trial downloads the Telerik UI for ASP.NET AJAX, and click on it. If you have purchased a collection you would need to click on it and the trial downloads page will show all trial downlads directly.

1. Click on __Download Installer and other resources__ (the Download link next to the suite if you are a trial user). You need to choose the Telerik UI for ASP.NET AJAX suite if you have purchased the collection and click its Browse all product files button.

1. Download the __Manual installation__ (__ZIP__) file.The __ZIP__ file contains the following folders:

* __binXX*__- contains the product assembly and the XML file necessary for the IntelliSense support. *__binXX__ folder - contains the assemblies (.dll files), where __XX__represents the version of the .NET framework against which the assemblies are built.

* __Live Demos__ - contains the product Quick-Start Framework and examples andthe VisualStudio solution file opening them. You can start the samples directly from this folder, using the __StartExamples.exe__ file.

* __Skins__ - all controls part of the suite have their skins embedded as web resources. However if you need to modify a skin or use it as an external, you can find it in this folder.

* __Scripts -__all controls part of the suite have their scripts embedded as web resources. However if you need to modify a script or use it as an external, you can find it in this folder.

>caution  __Important !!!__ 
>If you are using a modified or external script, you need to set the __EnableEmbeddedScripts__ property to __false__ . If you don't do that the control will fail to load its client scripts with an exception.	For more information you can check the[Disabling embedded resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%})topic.
>


>caution  __Important !!!__ 
>If you are using a custom or a modified skin, you need to set the __EnableEmbeddedSkins__ property to __false__ .	If you don't do that the control will fail to find your custom skin with an exception. If you wish to use a custom skin - it will override your CSS file. For more information you can check the[How skins work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}),[Skin registration]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%})and[Disabling embedded resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%})topics.
>


>note The latest package available for download has all latest updates/HOTFIXES applied. There is no need to update it further.
>


1. Give full permissions to the __ASPNET__ user (if you are using IIS5) or to the __Network____Service__ account (under IIS6, Windows Server 2003) on the folder where the files were extracted. See [Setting ASPNET (Network Service) Permissions](22D9BE3D-303D-4116-801E-02269811DA00) for more information.

To run the examples run __StartExamples.exe__ file from /Live Demos folder.

To register the MS Help 2 files to VisualStudio and MSDN, please review the following link:[http://www.telerik.com/support/kb/aspnet-ajax/general/add-help-to-visual-studio.aspx](http://www.telerik.com/support/kb/aspnet-ajax/general/add-help-to-visual-studio.aspx)

To add any control to the VS.NET toolbox, review [Adding Telerik UI for ASP.NET AJAX to the Visual Studio 2008 Toolbox](3179F8A7-4F96-41E1-8B50-0D3A893DD890) for VS.NET 2008 and [Adding Telerik UI for ASP.NET AJAX to the Visual Studio 2010 Toolbox]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%}) for VS.NET 2010.To use any Telerik ASP.NET control in your project, review [Adding Telerik UI for ASP.NET AJAX to an ASP.NET WebForm]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/adding-the-telerik-controls-to-your-project%}).

# See Also

 * [Trial License Limitations]({%slug introduction/licensing/trial-license-limitations%})
