---
title: Telerik.Pdf.Security.SecurityOptions
page_title: Telerik.Pdf.Security.SecurityOptions
description: Telerik.Pdf.Security.SecurityOptions
---

# Telerik.Pdf.Security.SecurityOptions

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.Security.SecurityOptions

## Properties

###  m_ownerPassword `String`

Password that disables all security permissions

###  m_userPassword `String`

The user password

###  OwnerPassword `String`

Returns the owner password as a string.

###  UserPassword `String`

Returns the user password as a string.

###  Permissions `Int32`

The document access privileges encoded in a 32-bit unsigned integer

## Methods

###  EnablePrinting

Enables or disables printing.

#### Parameters

#### enable `System.Boolean`

If true enables printing otherwise false

#### Returns

`System.Void` 

###  EnableChanging

Enable or disable changing the document other than by adding or 
                changing text notes and AcroForm fields.

#### Parameters

#### enable `System.Boolean`

#### Returns

`System.Void` 

###  EnableCopying

Enable or disable copying of text and graphics from the document.

#### Parameters

#### enable `System.Boolean`

#### Returns

`System.Void` 

###  EnableAdding

Enable or disable adding and changing text notes and AcroForm fields.

#### Parameters

#### enable `System.Boolean`

#### Returns

`System.Void` 

