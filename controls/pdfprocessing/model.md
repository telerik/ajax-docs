---
title: Model
page_title: Model | UI for ASP.NET AJAX Documentation
description: Model
slug: pdfprocessing/model
tags: model
published: True
position: 4
---

# Model



This article explains the structure of __RadPdfProcessing__'s document model.

## DocumentElements

[](f690fd5c-a977-4509-90d9-ed8d3ab84c92) is the root element of all document elements. All document elements inherit from the __FixedDocumentElementBase__ abstract class. The diagram below describes the hierarchy in the __RadPdfProcessing__.![Rad Pdf Processing Model 01](images/RadPdfProcessing_Model_01.png)

## Composition of Document Elements

__RadFixedDocument__ represents a tree of [](c26b1511-7f04-4793-8997-ed882ef015bf) where the fixed content is hosted. The diagram below describes the composition of the fixed content. The document elements are denoted in black and collections - in orange.![Rad Pdf Processing Model 02](images/RadPdfProcessing_Model_02.png)
