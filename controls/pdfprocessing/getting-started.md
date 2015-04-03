---
title: Getting Started
page_title: Getting Started | UI for ASP.NET AJAX Documentation
description: Getting Started
slug: pdfprocessing/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started



This article will get you started in using the __RadPdfProcessing__ library. It contains the following sections:

* [Assembly References](#assembly-references)

* [Creating a Document](#creating-a-document)

* [Exporting to PDF](#exporting-to-pdf)

## Assembly References

In order to use the __RadPdfProcessing__ library in your project you need to add references to the following assemblies:

* Telerik.Windows.Documents.Core.dll

* Telerik.Windows.Documents.Fixed.dll

* Telerik.Windows.Zip.dll

Additionally you might need to add references to the following __.NET__ assemblies:

* WindowsBase

* PresentationCore

## Creating a Document

[](f690fd5c-a977-4509-90d9-ed8d3ab84c92) is the root element in the library. It consists of [](c26b1511-7f04-4793-8997-ed882ef015bf) objects and instructions for annotations and destinations in the document. __Example 1__ shows how to create a document and add a page to it.

````C#
	            RadFixedDocument document = new RadFixedDocument();
	            RadFixedPage page = document.Pages.AddPage();
````



The page can then be edited through a [FixedContentEditor]({%slug pdfprocessing/editing/fixedcontenteditor%}) instance. __Example 2__ creates an editor and adds a [](caddf2d7-c42e-4f10-ab51-57d9d3f91fde) to the page object created in __Example 1__.

````C#
	            FixedContentEditor editor = new FixedContentEditor(page);
	            editor.DrawText("Hello RadPdfProcessing!");
````



## Exporting to PDF

Exporting to PDF format can be achieved with the __PdfFormatProvider__ class. __Example 3__ shows how to export the __RadFixedDocument__ we created in __Examples 1 and 2__ to a file.

````C#
	            PdfFormatProvider provider = new PdfFormatProvider();
	            using (Stream output = File.OpenWrite("Hello.pdf"))
	            {
	                provider.Export(document, output);
	            }
````



# See Also[](f690fd5c-a977-4509-90d9-ed8d3ab84c92)[](c26b1511-7f04-4793-8997-ed882ef015bf)

 * [FixedContentEditor]({%slug pdfprocessing/editing/fixedcontenteditor%})[](caddf2d7-c42e-4f10-ab51-57d9d3f91fde)

 * [PDF Format]({%slug pdfprocessing/formats-and-conversion/pdf%})
