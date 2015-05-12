---
title: Included Assemblies
page_title: Included Assemblies | UI for ASP.NET AJAX Documentation
description: Included Assemblies
slug: introduction/installation/included-assemblies
tags: included,assemblies
published: True
position: 1
---

# Included Assemblies



This article explains what assemblies are included in the Telerik UI for ASP.NET AJAX installation: the main Telerik.Web.UI assemblies, the	[Telerik ZIP library](http://www.telerik.com/products/silverlight/zip-library.aspx) and	the Telerik Document processing libraries ([text processing](http://www.telerik.com/products/wpf/words-processing.aspx) and	[spreadsheet processing](http://www.telerik.com/products/wpf/spreadsheet-processing.aspx)). You can find more information about them in the sections below.

The assemblies come sorted in several folders so that you can use the appropriate ones.	Depending on the .NET framework version your project targets, you will find the needed assemblies in the corresponding directory.	For example, if you target *.NET 4.5*, you will need the assemblies from the *Bin45* folder

## Main Assemblies

The Telerik UI for ASP.NET AJAX product consists of the assemblies in the list below. You can find them in the root of the installation (both[automated]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) and inthe [zip archive]({%slug introduction/installation/installing-the-telerik-controls-from-zip-file%})) and in the	[internal builds archives]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%}).

* **Telerik.Web.UI.dll** — the core assembly from the suite where the actual controls are located. It also contains the *Default* skin.

* **Telerik.Web.UI.Skins.dll** — this assembly has all the skins the suite offers (except the *Default* one).If you use only the Default skin, or you only use custom skins, you do not need this assembly.

* **Telerik.Web.Design.dll** — this assembly contains the Visual Studio Design surface code for the suite. The configuration wizards you can access from the controls' Smart Tags are also there. It is only needed if you use the controls in the Design mode in VS and it is not needed in the deployed application.The automated installation adds this assembly to the GAC.

* **Telerik.Web.Device.Detection.dll** — the [Telerik Device Detection framework](d65b4c42-ab7e-44de-9342-d3c698009d8b)that can help you determine the screen resolution of the device that requested the page while processing the request on the server. It is used by the Telerik controlsto determine the [RenderMode](c952abb4-e952-44fa-9e05-70aac40c04d5) when it is set to Auto.

## Telerik ZIP Library

This is a cross-platform library that lets you load, create and update Zip archives on the fly with easy to use API.

You can find its assembly in the **AdditionalLibraries** folder in the Telerik UI for ASP.NET AJAX installation (automated and manual) and in the internal builds archive.It supports .NET 4 and .NET 4.5, so depending on the target framework of your project, you need to take the assembly from the *Bin40*or *Bin45* folder respectively.

* **Telerik.Windows.Zip.dll** — the assembly of the Telerik Zip Library.

You can read more about it in its documentation: [Getting started with RadZipLibrary](http://www.telerik.com/help/silverlight/radziplibrary-gettingstarted.html).

## Telerik Document Processing Libraries

The Telerik document processing libraries are a set of assemblies that let you import and export content between different formats.

You can find the needed assemblies in the **AdditionalLibraries** folder in the Telerik UI for ASP.NET AJAX installation (automated and manual) and in the internal builds archive.It supports .NET 4 and .NET 4.5, so depending on the target framework of your project, you need to take the assembly from the *Bin40*or *Bin45* folder respectively.

* **Telerik.Windows.Documents.Core.dll** — the main assembly from the Telerik document processing libraries. You always need it when you intend to use the library.

* **Telerik.Windows.Documents.Flow.dll** — part of the words (text) processing library. It is needed for processing HTML, DOCX, RTF and TXT documents.

* **Telerik.Windows.Zip.dll** — needed for working with zipped formats (DOCX, XLSX) and PDF.

* **Telerik.Windows.Documents.Flow.FormatProviders.Pdf** — allows exporting of flow documents (DOCX, RTF) to PDF.

* **Telerik.Windows.Documents.Spreadsheet.dll** — the main assembly for the spreadsheet processing. It is needed for processing XLSX, CSV, TXT documents.

* **Telerik.Windows.Maths.dll** — the assembly needed for mathematical operations with the spreadsheet processing. It is needed for processing XLSX, CSV, TXT documents.

* **Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll** — this assembly is needed for processing XLSX documents.

* **Telerik.Windows.Documents.Fixed.dll** — this assembly is needed for processing PDF documents.

* **Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.dll** — this assembly is needed for processing PDF documents.

You can find more information on working with the Telerik document processing libraries in the following articles:

* Words (text) processing

* [DOCX format provider](22b1afac-592a-4009-b6ab-9e03776199e2)

* [HTML format provider](055c74e8-b87e-4c0f-b36c-b8210aab2055)

* [RTF format provider](8d263b31-7336-4502-a790-34c2603cc768)

* [TXT format provider](8e00e8b8-f957-4155-83d2-bf282539cb9e)

* Spreadsheet processing

* [Getting Started](15a3c2cb-4709-4285-925f-a9c9c5c9ce12)

* [XLSX format provider](87deca9a-e006-4210-b5f4-173afd5756ee)

* [CSV format provider](5afe6e5c-2910-48ff-a8aa-73755e6f7214)

* [PDF format provider](8d3a9e55-cea1-424e-ad74-42077be79264)

* [TXT format provider](8b3ffa0b-3eec-4c3b-973d-617ae28954a8)

* PDF processing

* [PDF format provider](01174622-214c-47a0-a47f-b0e2b990b216)

## See Also

 * [Telerik ZIP library](http://www.telerik.com/products/silverlight/zip-library.aspx)

 * [Getting started with RadZipLibrary](http://www.telerik.com/help/silverlight/radziplibrary-gettingstarted.html)

 * [Telerik Words Processing Library](http://www.telerik.com/products/wpf/words-processing.aspx)

 * [Telerik Spreadsheet Processing Library](http://www.telerik.com/products/wpf/spreadsheet-processing.aspx)

 * [Telerik Device Detection Framework Overview](http://www.telerik.com/products/aspnet-ajax/device-detection-framework.aspx)[Telerik Device Detection Framework API](d65b4c42-ab7e-44de-9342-d3c698009d8b)[UI for ASP.NET AJAX Controls RenderModes Basics](c952abb4-e952-44fa-9e05-70aac40c04d5)
