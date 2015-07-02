---
title: Telerik.Pdf.Security.SecurityManager
page_title: Telerik.Pdf.Security.SecurityManager
description: Telerik.Pdf.Security.SecurityManager
---

# Telerik.Pdf.Security.SecurityManager

Implements Adobe's standard security handler.  A security handler is 
                a software module that implements various aspects of the encryption 
                process.

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.Security.SecurityManager

## Properties

###  UserEntry `Byte[]`

Access to the raw user entry byte array.

#### Remarks
Required for testing purposes;

###  OwnerEntry `Byte[]`

Access to the raw owner entry byte array.

#### Remarks
Required for testing purposes;

## Methods

###  GetEncrypt

#### Returns

`Telerik.Pdf.PdfDictionary` 

###  CreateMasterKey

Computes the master key that is used to encrypt string and stream data 
                in the PDF document.

#### Parameters

#### options `Telerik.Pdf.Security.SecurityOptions`

The user supplied PDF options that provides access to the passwords and
                the access permissions.

#### fileId `Telerik.Pdf.FileIdentifier`

The PDF document's file identifier (see section 8.3 of PDF specification).

#### Returns

`System.Void` 

###  CreateOwnerEntry

Computes the O(owner) value in the encryption dictionary.

#### Remarks
Corresponds to algorithm 3.3 on page 69 of the PDF specficiation.

#### Parameters

#### options `Telerik.Pdf.Security.SecurityOptions`

The user supplied PDF options that provides access to the passwords.

#### Returns

`System.Void` 

###  CreateUserEntry

Computes the U(user) value in the encryption dictionary.

#### Remarks
Corresponds to algorithm 3.4 on page 70 of the PDF specficiation.

#### Parameters

#### options `Telerik.Pdf.Security.SecurityOptions`

The user supplied PDF options that provides access to the passwords.

#### Returns

`System.Void` 

###  Encrypt

Encrypts the passed byte array using the ARC4 cipher.

#### Returns

`System.Byte[]` 

###  ComputeEncryptionKey31

Computes an encryption key that is used to encrypt string and stream data 
                in the PDF document.

#### Remarks
Corresponds to algorithm 3.1 in section 3.5 of the PDF specficiation.

#### Returns

`System.Byte[]` 

###  ComputeEncryptionKey32

Computes an encryption key that is used to encrypt string and stream data 
                in the PDF document.

#### Remarks
Corresponds to algorithm 3.2 in section 3.5 of the PDF specficiation.

#### Returns

`System.Byte[]` 

###  PadPassword

Pads or truncates a password string to exactly 32-bytes.

#### Remarks
Corresponds to step 1 of algorithm 3.2 on page 69 of the PDF 1.3 specficiation.

#### Parameters

#### password `System.String`

The password to pad or truncate.

#### Returns

`System.Byte[]` A byte array of length 32 bytes containing the padded or truncated password.

###  CheckUserPassword

Determines if the passed password matches the user password
                used to initialise this security manager.

#### Remarks
Used for testing purposes only.  Corresponds to algorithm 3.5 in the
                PDF 1.3 specification.

#### Returns

`System.Boolean` True if the password is correct.

###  CheckUserPassword

Performs the actual checking of the user password.

#### Returns

`System.Boolean` 

###  CheckOwnerPassword

Checks the owner password.

#### Returns

`System.Boolean` 

###  CompareArray

Compares two byte arrays and returns true if they are equal.

#### Returns

`System.Boolean` 

