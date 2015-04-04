---
title: How to Comply with PDF/A Standard
page_title: How to Comply with PDF/A Standard | UI for ASP.NET AJAX Documentation
description: How to Comply with PDF/A Standard
slug: pdfprocessing/how-to-comply-with-pdf/a-standard
tags: how,to,comply,with,pdf/a,standard
published: True
position: 2
---

# How to Comply with PDF/A Standard



[PDF/A](http://en.wikipedia.org/?title=PDF/A)is an ISO-standardized version of the PDF (Portable Document Format) specialized for the digital preservation of electronic documents.

PDF/A standard is designed to use the PDF format for achieving documents. This means that the compliant documents should contain all the information necessary for displaying the document embedded in the file. This includes all content, fonts, and color information. A PDF/A document is not permitted to rely on information from external sources. Other key elements to PDF/A conformance include:

* Audio and video content is forbidden.

* JS and executable file launches are forbidden.

* All fonts must be embedded. This applies to the Standard 14 fonts as well.

* Color spaces should be specified in a device-independent manner.

* Encryption is forbidden.

* Use of standards-based metadata.

* Transparent objects and layers are forbidden.

* LZW and JPEG2000 image compression models are forbidden.

## Compliance Levels

There are three major versions of the standard – PDF/A-1 (2005), PDF/A-2 (2011), PDF/A-3 (2013).PDF/A-1

PDF/A-1 standard uses the PDF Reference 1.4 and specifies two levels of compliance.PDF/A-1b

Its goal is to ensure reliable reproduction of the visual appearance of the document.PDF/A-1a

Its objective is to ensure that documents content can be searched and re-purposed. This compliance level has some additional requirements:

* Document structure must be included.

* Tagged PDF.

* Unicode character maps

* Language specification.

>note  __RadPdfProcessing__ does not support PDF/A-1a level of compliance.
>
PDF/A-2

Pdf/A-2 standard uses the PDF Reference 1.7. In addition it has the following features:

* Support for JPEG2000 image compression.

* Support for transparency effects and layers.

It defines three conformance levels.PDF/A-2a

Corresponding to the PDF/A-1a

>note  __RadPdfProcessing__ does not support PDF/A-2a level of compliance.
>
PDF/A-2b

This level corresponds to the PDF/A-1b.

>note  __RadPdfProcessing__ does not support PDF/A-2b level of compliance.
>
PDF/A-2u

Similar to PDF/A-2b level with the additional requirement that all text in the document has Unicode mapping.PDF/A-3

PDF/A-3 differs from PDF/A-2 in only one regard – it allows embedding of arbitrary file formats into the PDF file.

## How to Conform to PDF/A Standard

The __PdfFormatProvider__ class allows to export a __RadFixedDocument__ to PDF and specify some specificsettings when doing so. More information about the available export settings can be found in the[Settings article](faadb957-c6c5-4844-8b9f-6135160ea993).

To comply with one of the versions of the standard you need to specify __ComplianceLevel__ different from __None__. The snippet in __Example 1__ shows how this can be achieved.

>tabbedCode

````C#
	    PdfFormatProvider provider = new PdfFormatProvider();
	    PdfExportSettings settings = new PdfExportSettings();
	    settings.ComplianceLevel = PdfComplianceLevel.PdfA2B;
	    provider.ExportSettings = settings;
	
	    return provider.Export(document);
````
````VB.NET
	    Dim provider As New PdfFormatProvider()
	    Dim settings As New PdfExportSettings()
	    settings.ComplianceLevel = PdfComplianceLevel.PdfA2B
	    provider.ExportSettings = settings
	
	    Return provider.Export(document)
````
>end

__RadPdfProcessing__ will do the rest for you. If you also specify encryption for the document, this setting will be ignoredsince the standard does not allow documents to be encrypted.

>note PDF/A standard requires documents to contain all fonts used in them. RadPdfProcessing does not support embedding of the standard 14 fonts used in PDF documents, so using them will prevent the document from complying with the standard. More information about font embedding is available in the Fonts article.
>


# See Also[](01174622-214c-47a0-a47f-b0e2b990b216)[](faadb957-c6c5-4844-8b9f-6135160ea993)

 * [Fonts]({%slug pdfprocessing/concepts/fonts%})
