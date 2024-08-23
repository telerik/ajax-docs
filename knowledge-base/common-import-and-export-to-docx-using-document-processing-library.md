---
title: Import and Export to DOCX by using the Telerik Document Processing library
description: LEarn how to Import and Export to DOCX by using the Telerik Document Processing library.
type: troubleshooting
page_title: Import and Export to DOCX by using the Telerik Document Processing library
slug: common-import-and-export-to-docx-using-document-processing-library
tags: upload, asyncupload
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This article demonstrates an approach to implement a custom export/import functionality to .docx files using the Telerik Document Processing libraries. 

Since Q2 2014 version the installation of the Telerik UI for ASP.NET AJAX bundle comes with the Telerik.Windows.Documents assemblies. More details about how to get them, their purpose and additional documentation links are available in the [Included Assemblies](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/installation/included-assemblies) article.

## Solution

The needed libraries are:

- Telerik.Windows.Documents.Core.dll
- Telerik.Windows.Documents.Flow.dll
- Telerik.Windows.Zip.dll

After adding references to these assemblies you should implement custom classes responsible for the import and export functionality. Note that the class for exporting the HTML to .docx should inherit the RadEditorExportTemplate class.

Further details about the classes and methods used in the samples are available in these help articles:

- Telerik UI for WPF RadFlowDocument;
- Using DocxFormatProvider;
- DocxFormatProvider Methods;
- HtmlFormatProvider Methods;


[Download sample](files/common-import-and-export-to-docx-using-document-processing-library.zip)


