---
title: Telerik.Pdf.PdfString
page_title: Telerik.Pdf.PdfString
description: Telerik.Pdf.PdfString
---

# Telerik.Pdf.PdfString

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.PdfObject
* Telerik.Pdf.PdfString

## Properties

###  Format `PdfStringFormat`

The convention used when outputing the string to the PDF document.

#### Remarks
Defaults to  format.

###  NeverEncrypt `Boolean`

Determines if the string should bypass encryption, even when 
                available.

#### Remarks
Some PDF strings need to appear unencrypted in a secure PDF
                document.  Most noteably those in the encryption dictionary 
                itself.  This property allows those strings to be flagged.

###  IsIndirect `Boolean`

###  ObjectId `PdfObjectId`

## Methods

###  Write

#### Returns

`System.Void` 

###  ToPdfLiteral

Returns this PdfString expressed using the 'literal' convention.

#### Remarks
A literal string is written as an arbitrary number of characters 
                enclosed in parentheses.  Any characters may appear in a string 
                except unbalanced parentheses and the backslash, which must be 
                treated specially. Balanced pairs of parentheses within a string 
                require no special treatment.

#### Returns

`System.Byte[]` 

###  ToPdfHexadecimal

Returns the PdfString expressed using the 'hexadecimal' convention.

#### Remarks
Strings may also be written in hexadecimal form; this is useful for 
                including arbitrary binary data in a PDF file. A hexadecimal string 
                is written as a sequence of hexadecimal digits (0–9 and either A–F 
                or a–f) enclosed within angle brackets (< and >).

#### Returns

`System.Byte[]` 

###  Write

#### Returns

`System.Void` 

###  WriteIndirect

#### Returns

`System.Void` 

###  GetReference

#### Returns

`Telerik.Pdf.PdfObjectReference` 

