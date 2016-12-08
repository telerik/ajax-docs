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


>caution  **Prerequisite** 
>In order to have the Telerik UI for ASP.NET AJAX running, you will need to have [ASP.NET AJAX](http://www.asp.net/AJAX/Documentation/Live/InstallingASPNETAJAX.aspx) installed on your development/production machine.


The **ZIP** is used to install Telerik UI for ASP.NET AJAX manually for upgrading or updating purposes.The folder structure is different from the **MSI** installation. You need to be familiar with with ASP.NET, IIS, setting permissions and creating virtual folders. Commonly, the **ZIP** is installed directly in **inetpub/wwwroot**.

## Install without IIS Running

To install the Telerik UI for ASP.NET AJAX suite on your machine from the **ZIP** file, follow the instructions below:

1. Log into your [Telerik account](http://www.telerik.com/account/default.aspx) and click on **Downloads** from the top menu.

1. On the loaded page choose from your purchased products or trial downloads Telerik UI for ASP.NET AJAX, and click on it.

1. Download the **Manual installation** (**ZIP**) file.The **ZIP** file contains the following folders:
	
	* **AdditionalLibraries** - contains the [Telerik document processing libraries]({%slug introduction/installation/included-assemblies%}#telerik-document-processing-libraries) allowing you to import and export content between different formats.	
	
	* **BinXX** - contains the Telerik  controls assemblies (.dll files), where **XX** represents the version of the .NET framework against which the assemblies are built.

	* **EditorDialogs** - contains the **Editor** dialog files.

	* **ImageEditorDialogs** - contains the **ImageEditor** dialog files.

	* **Live Demos** - contains the product Quick-Start Framework and examples and the VisualStudio solution file opening them. You can start the samples directly from this folder, using the **StartExamples.exe** file.

	* **Scripts** - all controls part of the suite have their scripts embedded as web resources. However if you need to modify a script or use it as an external, you can find it in this folder.
	
	* **Skins** - all controls part of the suite have their skins embedded as web resources. However if you need to modify a skin or use it as an external one, you can find it in this folder.

	* **TypeScriptDefinitions** - contains the TypeScript definitions for the Telerik UI for ASP.NET AJAX client-side objects.


1. Give full permissions to the **ASP.NET** user (if you are using IIS5) or to the **Network** **Service** account (under IIS6, Windows Server 2003) on the folder where the files were extracted.

>caution
>If you are using a modified or external script, you need to set the **EnableEmbeddedScripts** property to **false** . If you don't do that the control will fail to load its client scripts with an exception.	For more information you can check the [Disabling embedded resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) topic.
>


>caution
>If you are using a custom or a modified skin, you need to set the **EnableEmbeddedSkins** property to **false** .	If you don't do that the control will fail to find your custom skin with an exception. If you wish to use a custom skin - it will override your CSS file. For more information you can check the [How skins work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}), [Skin registration]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}) and [Disabling embedded resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) topics.
>


>note The latest package available for download has all latest updates/HOTFIXES applied. There is no need to update it further.
>


To run the examples run **StartExamples.exe** file from /Live Demos folder.

To register the MS Help 2 files to VisualStudio and MSDN, please review the following link: [http://www.telerik.com/support/kb/aspnet-ajax/general/add-help-to-visual-studio.aspx](http://www.telerik.com/support/kb/aspnet-ajax/general/add-help-to-visual-studio.aspx)

To add any control to the VS.NET toolbox, review the [Adding Telerik UI for ASP.NET AJAX to the Visual Studio Toolbox]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%}) article. To use any Telerik ASP.NET control in your project, review [Adding Telerik UI for ASP.NET AJAX to an ASP.NET WebForm]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/adding-the-telerik-controls-to-your-project%}).

## See Also

 * [Trial License Limitations]({%slug introduction/licensing/trial-license-limitations%})
 
