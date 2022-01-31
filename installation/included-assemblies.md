---
title: Included Assemblies
page_title: Included Assemblies
description: Check our Web Forms article about Included Assemblies.
slug: introduction/installation/included-assemblies
tags: included,assemblies
published: True
position: 1
---

# Included Assemblies



This article explains what assemblies are included in the Telerik® UI for ASP.NET AJAX installation: the main Telerik.Web.UI assemblies, the	[Telerik ZIP library](https://www.telerik.com/products/silverlight/zip-library.aspx) and	the Telerik Document processing libraries ([text processing](https://www.telerik.com/products/wpf/words-processing.aspx) and	[spreadsheet processing](https://www.telerik.com/products/wpf/spreadsheet-processing.aspx)). You can find more information about them in the sections below.

The assemblies come sorted in several folders so that you can use the appropriate ones.	Depending on the .NET framework version your project targets, you will find the needed assemblies in the corresponding directory:

* If you target *.NET 3.5*, you must use the assemblies from the *Bin35* folder.
* If you target *.NET 4.0*, you will need the assemblies from the *Bin40* folder.
* If you target *.NET 4.5*, *.NET 4.6*, *.NET 4.7* or *.NET 4.8*, you should use the assemblies from the *Bin45* folder.

The binaries from the *Additional Assemblies* folder may have different versions than the main assemblies. You must use the assemblies from the same release as the main assemblies.

## Main Assemblies

The Telerik® UI for ASP.NET AJAX product consists of the assemblies in the list below. You can find them in the root of the installation (both [automated]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) and in the [zip archive]({%slug introduction/installation/installing-the-telerik-controls-from-zip-file%})) and in the	[internal builds archives]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%}).

* **Telerik.Web.UI.dll**—(**required**)—the core assembly from the suite where the actual controls are located. It also contains the *Default* skin.

* **Telerik.Web.UI.Skins.dll**—(**optional**)—this assembly has all the skins the suite offers except the *Default* one.If you use only the Default skin, or you only use custom skins, you do not need this assembly.

* **Telerik.Web.Design.dll**—(**optional**)—this assembly contains the Visual Studio Design surface code for the suite. The configuration wizards you can access from the controls' Smart Tags are also there. It is only needed if you use the controls in the Design mode in VS and is not needed in the deployed application. The automated installation adds this assembly to the GAC for versions prior to R1 2018.

* **Telerik.Web.Device.Detection.dll**—(**optional**)—the [Telerik Device Detection framework]({%slug controls/raddevicedetectionframework%}) that can help you determine, with a few lines of code, the screen resolution of the device that requested the page while processing the request on the server. It is used by the Telerik controls to determine the [RenderMode]({%slug controls/render-modes%}) when it is set to Auto. If you use only the Classic, Lightweight or Mobile Render Mode (no mentions of the Auto mode), you do not need this assembly.

## Telerik ZIP Library

This is a cross-platform library that lets you load, create and update Zip archives on the fly with easy to use API.

@[template - path-to-additional-libraries](/_templates/common/additional-libraries-path.md#additional-libraries-path "assemblies: its assembly, support: It supports, isplural: assembly")

* **Telerik.Windows.Zip.dll**—the assembly of the Telerik Zip Library.

* **Telerik.Windows.Zip.Extensions.dll**—extends **Telerik.Windows.Zip** assembly with aditional helper methods ([Zip Extensions](https://docs.telerik.com/devtools/document-processing/libraries/radziplibrary/features/zip-extensions)).

You can read more about it in its documentation: [Getting started with RadZipLibrary](https://www.telerik.com/help/silverlight/radziplibrary-gettingstarted.html).

## Telerik NuGet Packages

The Telerik NuGet Feed allows you to install not only the UI for ASP.NET AJAX packages. You can also install packages that contain:

* [Telerik ZIP Library]({%slug introduction/installation/included-assemblies %}#telerik-zip-library).

* [Telerik Spreadsheet Library]({%slug introduction/installation/included-assemblies %}#telerik-spreadsheet-library).

* [Telerik Document Processing Libraries]({%slug introduction/installation/included-assemblies %}#telerik-document-processing-libraries).

The following table lists the packages available in the Telerik NuGet Feed and the assemblies that they contain:

| NuGet package | Included assemblies |
|---------------|------------|
|Telerik.UI.for.AspNet.Ajax.Netxx.xxxx.x.xxx.nupkg | Telerik.Web.Design.dll, Telerik.Web.Device.Detection.dll, Telerik.Web.UI.dll, Telerik.Web.UI.Skins.dll |
| Telerik.Windows.Zip.xxxx.x.xxx.nupkg | Telerik.Windows.Zip.dll |
| Telerik.Windows.Zip.Extensions.xxxx.x.xxx.nupkg | Telerik.Windows.Zip.Extensions.dll |
| Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.xxxx.x.xxx.nupkg | Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.dll |
| Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.xxxx.x.xxx.nupkg | Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll |
| Telerik.Windows.Documents.Spreadsheet.FormatProviders.Xls.nupkg | Telerik.Windows.Documents.Spreadsheet.FormatProviders.Xls.dll |
| Telerik.Windows.Documents.Spreadsheet.xxxxx.x.xxx.nupkg | Telerik.Windows.Documents.Spreadsheet.dll |
| Telerik.Windows.Documents.Flow.FormatProviders.Pdf.xxxx.x.xxx.nupkg | Telerik.Windows.Documents.Flow.FormatProviders.Pdf.dll |
| Telerik.Windows.Documents.Flow.xxxxx.x.xxx.nupkg | Telerik.Windows.Documents.Flow.dll |
| Telerik.Windows.Documents.Fixed.xxxxx.x.xxx.nupkg | Telerik.Windows.Documents.Fixed.dll |
| Telerik.Windows.Documents.CMapUtils.xxxx.x.xxx.nupkg | Telerik.Windows.Documents.CMapUtils.dll |
| Telerik.Windows.Documents.Core.xxxxx.x.xxx4.nupkg | Telerik.Windows.Documents.Core.dll |
| Telerik.Windows.Documents.SpreadsheetStreaming.xxxxx.x.xxx.nupkg | Telerik.Documents.SpreadsheetStreaming.dll |

>tip Besides the packages listed above, Telerik provides a number of additional libraries that are available when you install UI for ASP.NET AJAX [from an MSI]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) or [from a ZIP file]({%slug introduction/installation/installing-the-telerik-controls-from-zip-file%}). For example:
>
>* Newtonsoft.Json.dll
>* Telerik.Web.Spreadsheet.dll
>
>These libraries are available in the `AdditionalLibraries` folder within the UI for ASP.NET AJAX installation directory.

## Telerik Spreadsheet Library

The **Telerik.Web.Spreadsheet.dll** library is an assembly that lets you use the [**RadSpreadsheet**]({%slug spreadsheet/overview%}) control in your project. You will also need the **Newtsoft.Json.dll** assembly.

@[template - path-to-additional-libraries](/_templates/common/additional-libraries-path.md#additional-libraries-path "assemblies: the needed assemblies, support: They support, isplural: assemblies")

For more information about the usage of the RadSpreadsheet see its [**Getting Started**]({%slug spreadsheet/getting-started%}) article.

## Telerik Document Processing Libraries

The Telerik document processing libraries are a set of assemblies that let you import and export content between different formats.

@[template - path-to-additional-libraries](/_templates/common/additional-libraries-path.md#additional-libraries-path "assemblies: the needed assemblies, support: They support, isplural: assemblies")

* **Telerik.Windows.Documents.Core.dll**—the main assembly from the Telerik document processing libraries. You always need it when you intend to use the library.

* **Telerik.Windows.Documents.Flow.dll**—part of the words (text) processing library. It is needed for processing HTML, DOCX, RTF and TXT documents.

* **Telerik.Windows.Zip.dll**—needed for working with zipped formats (DOCX, XLSX) and PDF.

* **Telerik.Windows.Documents.Flow.FormatProviders.Pdf.dll**—allows exporting of flow documents (DOCX, RTF) to PDF.

* **Telerik.Windows.Documents.Flow.FormatProviders.Doc.dll**—allows importing of DOC and DOT document.

* **Telerik.Documents.SpreadsheetStreaming.dll**—The main assembly for generating huge spreadsheet files using minimum resources.

* **Telerik.Windows.Documents.Spreadsheet.dll**—the main assembly for the spreadsheet processing. It is needed for processing XLSX, CSV, TXT documents.

* **Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll**—allows import/export of spreadsheet document model from/to XLSX.

* **Telerik.Windows.Documents.Fixed.dll**—this assembly is needed for processing PDF documents.

* **Telerik.Windows.Documents.CMapUtils.dll**-provides a default implementation for getting the data of a predefined CMap table by a given name. The assembly is optional and you will need to include a reference to it only if you need to process documents with [CMap tables](https://docs.telerik.com/devtools/document-processing/libraries/radpdfprocessing/concepts/cmaps).

* **Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.dll**—allows exporting of spreadsheets (XLSX, CSV) to PDF.

* **Telerik.Windows.Documents.Spreadsheet.FormatProviders.Xls.dll**.nupkg—The package allows for working with `XLS` spreadsheet documents.

You can find more information on working with the Telerik document processing libraries in the following articles:

* Words (text) processing

	* [DOC format provider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/word-file-formats/doc/docformatprovider)

	* [DOCX format provider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/docx/docxformatprovider)

	* [HTML format provider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/html/htmlformatprovider)

	* [RTF format provider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/rtf/rtfformatprovider)

	* [TXT format provider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/plain-text/txt-txtformatprovider)

* Spreadsheet processing

	* [Getting Started](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/getting-started)

	* [XLSX format provider](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/xlsx/xlsxformatprovider)

	* [XLS format provider](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/xls/xlsformatprovider)

	* [CSV format provider](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/csv/csvformatprovider)

	* [PDF format provider](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/pdf/pdfformatprovider)

	* [TXT format provider](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/txt/txtformatprovider)

* PDF processing

	* [PDF format provider](https://docs.telerik.com/devtools/document-processing/libraries/radpdfprocessing/formats-and-conversion/pdf/pdfformatprovider)

	* [Text format provider](https://docs.telerik.com/devtools/document-processing/libraries/radpdfprocessing/formats-and-conversion/plain-text/textformatprovider)

* Fast spreadsheet generation

	* [Getting Started](https://docs.telerik.com/devtools/document-processing/libraries/radspreadstreamprocessing/getting-started)


## Newtonsoft.Json.dll

The `Newtsoft.Json.dll` assembly is located in the *AdditionalAssemblies* folder and you need to deploy it when you use the [RadCloudUpload control]({%slug cloudupload/troubleshooting%}#missing-assembly-reference), the [RadScheduler WebAPI binding]({%slug scheduler/web-service-binding/web-api-binding%}) or the [RadSpreadSheet control]({%slug spreadsheet/overview%}).

If your project references a different version of this assembly, review the [Newtonsoft.Json is Built by a Higher Version Than the Currently Targeted Framework]({%slug troubleshoot-upgrade-issues%}#newtonsoftjson-is-built-by-a-higher-version-than-the-currently-targeted-framework) section for more information.


## See Also

 * [Telerik ZIP library](https://www.telerik.com/products/silverlight/zip-library.aspx)

 * [Getting started with RadZipLibrary](https://www.telerik.com/help/silverlight/radziplibrary-gettingstarted.html)

 * [Telerik Words Processing Library](https://www.telerik.com/products/wpf/words-processing.aspx)

 * [Telerik Spreadsheet Processing Library](https://www.telerik.com/products/wpf/spreadsheet-processing.aspx)

 * [Telerik Device Detection Framework Overview](https://www.telerik.com/products/aspnet-ajax/device-detection-framework.aspx)

 * [Telerik Device Detection Framework API]({%slug controls/raddevicedetectionframework%})

 * [UI for ASP.NET AJAX Controls RenderModes Basics]({%slug controls/render-modes%})
