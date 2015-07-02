---
title: Telerik.Pdf.FileIdentifier
page_title: Telerik.Pdf.FileIdentifier
description: Telerik.Pdf.FileIdentifier
---

# Telerik.Pdf.FileIdentifier

A File Identifier is described in section 8.3 of the PDF specification.
                The first string is a permanent identifier based on the contents of the file 
                at the time it was originally created, and does not change as the file is 
                incrementally updated.  The second string is a changing identifier based 
                on the file's contents the last time it was updated.

#### Remarks
If this class were being use to update a PDF's file identifier, we'd need 
                to add a method to parse an existing file identifier.

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.PdfObject
* Telerik.Pdf.FileIdentifier

## Properties

###  CreatedPart `Byte[]`

Returns the CreatedPart as a byte array.

###  ModifiedPart `Byte[]`

Returns the ModifiedPart as a byte array.

###  IsIndirect `Boolean`

###  ObjectId `PdfObjectId`

## Methods

###  Write

#### Returns

`System.Void` 

###  Write

#### Returns

`System.Void` 

###  WriteIndirect

#### Returns

`System.Void` 

###  GetReference

#### Returns

`Telerik.Pdf.PdfObjectReference` 

