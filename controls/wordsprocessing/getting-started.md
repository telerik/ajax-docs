---
title: Getting Started
page_title: Getting Started | UI for ASP.NET AJAX Documentation
description: Getting Started
slug: wordsprocessing/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started



This tutorial will take you through the creation of a sample application that uses RadWordsProcessing.

* [Assembly Reference](#assembly-references)

* [Creating RadFlowDocument from Code](#creating-radflowdocument-from-code)

* [Exporting RadFlowDocument to Docx](#exporting-radflowdocument-to-docx)

## Assembly References

Here is a list of assemblies that contain the __RadWordsProcessing__ functionality and need to be referenced in your project:

* Telerik.Windows.Documents.Core

* Telerik.Windows.Documents.Flow

* Telerik.Windows.Zip

* Telerik.Windows.Documents.Flow.FormatProviders.Pdf

* Telerik.Windows.Documents.Fixed

>note The latter two assemblies - Telerik.Windows.Documents.Flow.FormatProviders.Pdf.dll andTelerik.Windows.Documents.Fixed.dll are only needed if you plan on exporting the document to PDF format
>


Additionally you might need to add references to the following __.NET__ assemblies:

* WindowsBase

* PresentationCore

## Creating RadFlowDocument from Code

Here is how to create a [](dd4dbe18-3a7a-4b31-a1e4-2b2ff6fba91e) and insert some text content with the help of [RadFlowDocumentEditor]({%slug wordsprocessing/editing/radflowdocumenteditor%}).

````C#
	            RadFlowDocument document = new RadFlowDocument();
	            RadFlowDocumentEditor editor = new RadFlowDocumentEditor(document);
	            editor.InsertText("Hello world!");
````



You need to add using directive to the following namespaces:

* Telerik.Windows.Documents.Flow.Model

* Telerik.Windows.Documents.Flow.Model.Editing

## Exporting RadFlowDocument to Docx

Exporting the document to Docx file can be achieved with the [DocxFormatProvider](22b1afac-592a-4009-b6ab-9e03776199e2). Here is how to create a provider instance and save a document with it:

````C#
	            using (Stream output = new FileStream("output.docx", FileMode.OpenOrCreate))
	            {
	                DocxFormatProvider provider = new DocxFormatProvider();
	                provider.Export(document, output);
	            }
````



More information about the supported formats and features can be found [here]({%slug wordsprocessing/formats-and-conversion%}).
