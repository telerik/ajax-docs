---
title: Extending the PDF exporting with PdfFormatProvider
description: See how to extend the PDF exporting with PdfFormatProvider
page_title: Extending the PDF exporting with PdfFormatProvider
slug: editor-extending-the-pdf-exporting-with-pdfformatprovider
position: 
tags: 
ticketid: 1570845
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

Here you can find an example project showing how to extend the RadEditor built-in PDF exporting, by creating a RadEditorExportTemplate abstract class and integrating the [PdfFormatProvider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/pdf/pdfformatprovider).

## Solution

This blog post — [Using an external library for the export to PDF functionality in Telerik’s ASP.NET Editor](https://www.telerik.com/blogs/using-an-external-library-for-the-export-to-pdf-functionality-in-telerik-s-asp.net-editor) best illustrates how to implement a custom RadEditorExportTemplate for your needs. What you need further is to use the new PdfFormatProvider, which enables you to convert RadFlowDocument to RadFixedFocument.

Required Additional Assemblies:

- Telerik.Windows.Documents.Core
- Telerik.Windows.Documents.Fixed
- Telerik.Windows.Documents.Flow
- Telerik.Windows.Documents.Flow.FormatProviders.Pdf
- Telerik.Windows.Zip

**Note**: The assemblies are not included, make sure to add references for Telerik.Web.UI and the required assemblies.

* [RadEditorExtendedPdfExport.zip](files/editor-extend-pdf-expor.zip)

