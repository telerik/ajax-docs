---
title: Included Assemblies
page_title: Included Assemblies
description: "Learn more about the available assemblies you can use when working with Telerik UI for ASP.NET AJAX. "
slug: introduction/installation/included-assemblies
tags: included, assemblies
published: True
position: 3
---

# Included Assemblies

This article explains what assemblies are included in the Telerik UI for ASP.NET AJAX installation including the main `Telerik.Web.UI` assemblies, the	[Telerik ZIP library](https://www.telerik.com/products/silverlight/zip-library.aspx), and the Telerik Document processing libraries ([text processing](https://www.telerik.com/products/wpf/words-processing.aspx) and	[spreadsheet processing](https://www.telerik.com/products/wpf/spreadsheet-processing.aspx)).

## General Organization

The assemblies come sorted in several folders so that you can use the ones you need. Depending on the .NET framework version your project targets, you will find the assemblies in the following corresponding directories:

* If you target `.NET 3.5`, use the assemblies from the `Bin35` folder.
* If you target `.NET 4.0`, use the assemblies from the `Bin40` folder.
* If you target `.NET 4.5`, `.NET 4.6`, `.NET 4.7`, or `.NET 4.8`, use the assemblies from the `Bin45` folder.

The binaries from the `Additional Assemblies` folder may have different versions from the main assemblies. You have to use the assemblies from the same release as the main assemblies.

## Main Assemblies

The main Telerik UI for ASP.NET AJAX assemblies are located in the root of the installation ([automated]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) and in the [ZIP archive]({%slug introduction/installation/installing-the-telerik-controls-from-zip-file%})) and in the [internal builds archives]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%}).

Telerik UI for ASP.NET AJAX provides the following main assemblies:

|Main Assemblies|Specifics
|:--|:--
|`Telerik.Web.UI.dll`|(Required) The core assembly from the suite where the actual controls are located. It also contains the Default skin.
|`Telerik.Web.UI.Skins.dll`|(Optional) This assembly has all the skins the suite offers except for the Default one. To use the Default skin or custom skins only, you do not need this assembly.
|`Telerik.Web.Design.dll`|(Optional) This assembly contains the Visual Studio Design surface code for the suite. The configuration wizards you can access from the Smart Tags of the controls are also here. The assembly is only needed if you use the controls in the Design mode in VS and is not needed in the deployed application. The automated installation adds this assembly to the GAC for versions prior to R1 2018.
|`Telerik.Web.Device.Detection.dll`|(Optional) The [Telerik Device Detection framework]({%slug controls/raddevicedetectionframework%}) that can help you determine, with a few lines of code, the screen resolution of the device that requested the page while processing the request on the server. The assembly is used by the Telerik controls to determine the [render mode]({%slug controls/render-modes%}) when it is set to `Auto`. If you use only the Classic, Lightweight, or Mobile render mode, you do not need this assembly.

## ZIP Library

The ZIP library is a cross-platform library that lets you load, create, and update ZIP archives on the fly with an easy-to-use API.

@[template - path-to-additional-libraries](/_templates/common/additional-libraries-path.md#additional-libraries-path "assemblies: its assembly, support: It supports, isplural: assembly")

* `Telerik.Windows.Zip.dll`—The assembly of the Telerik ZIP Library.

* `Telerik.Windows.Zip.Extensions.dll`—Extends the `Telerik.Windows.Zip` assembly with additional helper methods ([ZIP Extensions](https://docs.telerik.com/devtools/document-processing/libraries/radziplibrary/features/zip-extensions)).

For more information, refer to the article on [getting started with the ZipLibrary](https://www.telerik.com/help/silverlight/radziplibrary-gettingstarted.html).

## NuGet Packages

The Telerik NuGet feed allows you to install the UI for ASP.NET AJAX packages and also packages that contain the following libraries:

* [Telerik ZIP library]({%slug introduction/installation/included-assemblies %}#telerik-zip-library).

* [Telerik Spreadsheet library]({%slug introduction/installation/included-assemblies %}#telerik-spreadsheet-library).

* [Telerik Document Processing libraries]({%slug introduction/installation/included-assemblies %}#telerik-document-processing-libraries).

Telerik UI for ASP.NET AJAX provides the following Telerik NuGet feed packages and the assemblies they contain:

| NuGet Packages | Included Assemblies |
|---------------|------------|
| `Telerik.UI.for.AspNet.Ajax.Netxx.xxxx.x.xxx.nupkg` | `Telerik.Web.Design.dll`, `Telerik.Web.Device.Detection.dll`, `Telerik.Web.UI.dll`, `Telerik.Web.UI.Skins.dll` |
| `Telerik.Windows.Zip.xxxx.x.xxx.nupkg` | `Telerik.Windows.Zip.dll` |
| `Telerik.Windows.Zip.Extensions.xxxx.x.xxx.nupkg` | `Telerik.Windows.Zip.Extensions.dll` |
| `Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.xxxx.x.xxx.nupkg` | `Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.dll` |
| `Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.xxxx.x.xxx.nupkg` | `Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll` |
| `Telerik.Windows.Documents.Spreadsheet.FormatProviders.Xls.nupkg` | Telerik.Windows.Documents.Spreadsheet.FormatProviders.Xls.dll` |
| `Telerik.Windows.Documents.Spreadsheet.xxxxx.x.xxx.nupkg` | `Telerik.Windows.Documents.Spreadsheet.dll` |
| `Telerik.Windows.Documents.Flow.FormatProviders.Pdf.xxxx.x.xxx.nupkg` | `Telerik.Windows.Documents.Flow.FormatProviders.Pdf.dll` |
| `Telerik.Windows.Documents.Flow.xxxxx.x.xxx.nupkg` | `Telerik.Windows.Documents.Flow.dll` |
| `Telerik.Windows.Documents.Fixed.xxxxx.x.xxx.nupkg` | `Telerik.Windows.Documents.Fixed.dll` |
| `Telerik.Windows.Documents.CMapUtils.xxxx.x.xxx.nupkg` | `Telerik.Windows.Documents.CMapUtils.dll` |
| `Telerik.Windows.Documents.Core.xxxxx.x.xxx4.nupkg` | `Telerik.Windows.Documents.Core.dll` |
| `Telerik.Windows.Documents.SpreadsheetStreaming.xxxxx.x.xxx.nupkg` | `Telerik.Documents.SpreadsheetStreaming.dll` |

Apart from the packages listed above, Telerik provides a number of additional libraries that are available when you install Telerik UI for ASP.NET AJAX [from an MSI]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) or [from a ZIP file]({%slug introduction/installation/installing-the-telerik-controls-from-zip-file%}). For example, `Newtonsoft.Json.dll` and `Telerik.Web.Spreadsheet.dll`. These libraries are available in the `AdditionalLibraries` folder within the UI for ASP.NET AJAX installation directory.

## Spreadsheet Library

The `Telerik.Web.Spreadsheet.dll` library is an assembly that lets you use the [Spreadsheet]({%slug spreadsheet/overview%}) control in your project. You will also need the `Newtsoft.Json.dll` assembly.

@[template - path-to-additional-libraries](/_templates/common/additional-libraries-path.md#additional-libraries-path "assemblies: the needed assemblies, support: They support, isplural: assemblies")

For more information about the usage of the Spreadsheet, refer to its article on [getting started]({%slug spreadsheet/getting-started%}).

## Document Processing Libraries

The Telerik document processing libraries are a set of assemblies that let you import and export content between different formats.

@[template - path-to-additional-libraries](/_templates/common/additional-libraries-path.md#additional-libraries-path "assemblies: the needed assemblies, support: They support, isplural: assemblies")

>note The version of the Telerik Document Processing assemblies differs from the Main Assemblies one since they are built a few weeks earlier. To ensure compatibility of the assemblies, you have to obtain the assemblies from the same release/installation.

Telerik UI for ASP.NET AJAX provides the following document processing assemblies:

|Document Processing Assemblies|Specifics
|:--|:--
|`Telerik.Windows.Documents.Core.dll`|The main assembly from the Telerik document processing libraries. You always need it when you intend to use the library.
|`Telerik.Windows.Documents.Flow.dll`|Part of the words (text) processing library. It is needed for processing `HTML`, `DOCX`, `RTF`, and `TXT` documents.
|`Telerik.Windows.Zip.dll`|Needed for working with zipped formats (`DOCX`, `XLSX`) and PDF.
|`Telerik.Windows.Documents.Flow.FormatProviders.Pdf.dll`|Allows you to export flow documents (`DOCX`, `RTF`) to PDF.
|`Telerik.Windows.Documents.Flow.FormatProviders.Doc.dll`|Allows you to import `.DOC` and `.DOT` documents.
|`Telerik.Documents.SpreadsheetStreaming.dll`|The main assembly for generating huge spreadsheet files using minimum resources.
|`Telerik.Windows.Documents.Spreadsheet.dll`|The main assembly for the spreadsheet processing. It is needed for processing XLSX, CSV, TXT documents.
|`Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll`|Allows you to import or export the spreadsheet document model from or to XLSX.
|`Telerik.Windows.Documents.Fixed.dll`|Needed for processing PDF documents.
|`Telerik.Windows.Documents.CMapUtils.dll`|(Optional) Provides a default implementation for getting the data of a predefined CMap table by a given name. Include a reference to it only if you need to process documents with [CMap tables](https://docs.telerik.com/devtools/document-processing/libraries/radpdfprocessing/concepts/cmaps).
|`Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.dll`|Allows you to export spreadsheets (`XLSX`, `CSV`) to PDF.
|`Telerik.Windows.Documents.Spreadsheet.FormatProviders.Xls.dll.nupkg`|Allows you to work with `XLS` spreadsheet documents.

For more information on working with the Telerik document processing libraries, refer to the following articles:

|Processing Library |Resources
|:--|:--
|Words (text) processing|<ul><li>[DOC format provider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/word-file-formats/doc/docformatprovider)</li> <li>[DOCX format provider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/docx/docxformatprovider)</li> <li>[HTML format provider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/html/htmlformatprovider)</li> <li>[RTF format provider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/rtf/rtfformatprovider)</li> <li>[TXT format provider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/plain-text/txt-txtformatprovider)</li></ul>
|Spreadsheet processing|<ul><li>[Getting Started](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/getting-started)</li> <li>[XLSX format provider](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/xlsx/xlsxformatprovider)</li> <li>[XLS format provider](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/xls/xlsformatprovider)</li> <li>[CSV format provider](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/csv/csvformatprovider)</li> <li>[PDF format provider](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/pdf/pdfformatprovider)</li> <li>[TXT format provider](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/txt/txtformatprovider)</li></ul>
|PDF processing|<ul><li>[PDF format provider](https://docs.telerik.com/devtools/document-processing/libraries/radpdfprocessing/formats-and-conversion/pdf/pdfformatprovider)</li> <li>[Text format provider](https://docs.telerik.com/devtools/document-processing/libraries/radpdfprocessing/formats-and-conversion/plain-text/textformatprovider)</li></ul>
|Fast spreadsheet generation|[Getting started](https://docs.telerik.com/devtools/document-processing/libraries/radspreadstreamprocessing/getting-started)

## Newtonsoft.Json.dll

The `Newtsoft.Json.dll` assembly is located in the `AdditionalAssemblies` folder and you need to deploy it when you use the [CloudUpload control]({%slug cloudupload/troubleshooting%}#missing-assembly-reference), the [Scheduler WebAPI binding]({%slug scheduler/web-service-binding/web-api-binding%}), or the [SpreadSheet control]({%slug spreadsheet/overview%}).

If your project references a different version of this assembly, review the [Newtonsoft.Json is Built by a Higher Version Than the Currently Targeted Framework]({%slug troubleshoot-upgrade-issues%}#newtonsoftjson-is-built-by-a-higher-version-than-the-currently-targeted-framework) section.


## See Also

* [Telerik ZIP library](https://www.telerik.com/products/silverlight/zip-library.aspx)
* [Getting started with ZipLibrary](https://www.telerik.com/help/silverlight/radziplibrary-gettingstarted.html)
* [Telerik Words Processing Library](https://www.telerik.com/products/wpf/words-processing.aspx)
* [Telerik Spreadsheet Processing Library](https://www.telerik.com/products/wpf/spreadsheet-processing.aspx)
* [Telerik Device Detection Framework Overview](https://www.telerik.com/products/aspnet-ajax/device-detection-framework.aspx)
* [Telerik Device Detection Framework API]({%slug controls/raddevicedetectionframework%})
* [UI for ASP.NET AJAX Controls RenderModes Basics]({%slug controls/render-modes%})
* [Getting Started with Telerik UI for ASP.NET AJAX (Video Tutorials)](https://learn.telerik.com/learn/course/external/view/elearning/5/telerik-ui-for-aspnet-ajax)
