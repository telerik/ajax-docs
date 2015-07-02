---
title: Telerik.Web.Apoc.Render.Pdf.PdfRendererOptions
page_title: Telerik.Web.Apoc.Render.Pdf.PdfRendererOptions
description: Telerik.Web.Apoc.Render.Pdf.PdfRendererOptions
---

# Telerik.Web.Apoc.Render.Pdf.PdfRendererOptions

This class can be used to control various properties of PDF files
                created by Apoc XSL-FO.

#### Remarks
Can be used to control certain values in the generated PDF's information
                dictionary.  These values are typically displayed in a document summary 
                dialog of PDF viewer applications.
                This class also allows security settings to be specified that will 
                cause generated PDF files to be encrypted and optionally password protected.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Apoc.Render.Pdf.PdfRendererOptions

## Properties

###  Title `String`

Specifies the Title of the PDF document.

#### Remarks
This value will be embedded in the PDF information dictionary.

###  DefaultFontFamily `String`

Specifices the default font

###  Subject `String`

Specifies the Subject of the PDF document.

#### Remarks
This value will be embedded in the PDF information dictionary.

###  Author `String`

Specifies the Author of the PDF document.

#### Remarks
This value will be embedded in the PDF information dictionary.

###  Creator `String`

Returns the Creator of the PDF document.

###  Producer `String`

Returns the Producer of the PDF document.

###  Keywords `String`

Returns a list of keywords as a comma-separated string

###  OwnerPassword `String`

Specifies the owner password that will protect full access to any generated PDF documents.

#### Remarks
If either the owner or the user password is specified, 
                then the document will be encrypted.

###  UserPassword `String`

Specifies the user password that will protect access to any generated PDF documents.

#### Remarks
If either the owner or the user password is specified, 
                then the document will be encrypted.

###  DisableSecurity `Boolean`

Disables the content encryption

###  HasPermissions `Boolean`

Returns true if any permissions have been set.

###  Permissions `Int32`

Returns the PDF permissions encoded as an 32-bit integer.

###  EnablePrinting `Boolean`

Enables or disables printing.

###  EnableModify `Boolean`

Enables or disables modifying document contents (other than text annotations and 
                interactive form fields).

###  EnableCopy `Boolean`

Enables or disables copying of text and graphics.

###  EnableAdd `Boolean`

Enables or disables adding or modifying text annotations and interactive
                form fields.

###  FontType `FontType`

Specifies how Apoc should treat fonts.

###  Kerning `Boolean`

Gets or sets a value that indicates whether to enable kerning.

###  ForceTextWrap `Boolean`

Determines whether the text will be forced to wrap or will break the cell boundaries when
            longer than its container (and when there is no whitespace for automatic wrapping)

###  Filter `PdfFilter`

Gets/sets the current content filter

## Methods

###  AddKeyword

Adds a keyword to the PDF document.

#### Remarks
Keywords are embedded in the PDF information dictionary.

#### Parameters

#### keyword `System.String`

The keyword to be added.

#### Returns

`System.Void` 

###  AddPrivateFont

Adds fileInfo to the private font collection.

#### Parameters

#### fileInfo `System.IO.FileInfo`

Absolute path to a TrueType font or collection.

#### Returns

`System.Void` 

###  GetActiveFilter

Creates and returns a new instance of the active content filter

#### Returns

`Telerik.Pdf.Filter.IFilter` IFilter instance

