---
title: Telerik.Web.UI.AsyncPostedFile
page_title: Telerik.Web.UI.AsyncPostedFile
description: Telerik.Web.UI.AsyncPostedFile
---

# Telerik.Web.UI.AsyncPostedFile

This Class implements all the properties,
            constructors and methods of the Uploaded Files.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.UploadedFile
* Telerik.Web.UI.AsyncPostedFile

## Properties

###  ContentLength `Int64`

Gets the size in bytes of an uploaded file.

###  FileName `String`

Gets the fully-qualified name of the file on the client's computer (for example
            "C:\MyFiles\Test.txt").

###  ContentType `String`

Gets the MIME content type of a file sent by a client.

###  InputStream `Stream`

Gets a Stream object which points to the uploaded file to prepare for reading the contents of the file.

###  ContentLength `Int64`

Gets the size in bytes of an uploaded file.

###  LastModifiedDate `DateTime`

Gets the last modified date of the uploaded file.

#### Remarks
The property is available only in RadAsyncUpload control when FileApi module is used

###  ContentType `String`

Gets the MIME content type of a file sent by a client.

###  FileName `String`

Gets the fully-qualified name of the file on the client's computer (for example
            "C:\MyFiles\Test.txt").

###  InputStream `Stream`

Gets a Stream object which points to the uploaded file to prepare for reading the contents of the file.

## Methods

###  NormalizeWith

We use this method to normalize the output of the UploadedFile properties
            among the different modules.

#### Parameters

#### formValues `System.Collections.Specialized.NameValueCollection`

The file that was uploaded

#### Returns

`System.Void` 

###  SaveAs

Saves the contents of an uploaded file.

#### Remarks
The maximum allowed uploaded file size is 4MB by default. Maximum file size
            can be specified in the machine.config or Web.config configuration files in the
            maxRequestLength attribute of the <httpRuntime> element.The ASP.NET process must have proper rights for writing on the folder where
            the files are saved.

#### Parameters

#### fullName `System.String`

#### overwrite `System.Boolean`

true to allow an existing file to be overwritten; otherwise, false.

#### Returns

`System.Void` 

###  GetName

Returns the name and extension of the file on the client's computer.

#### Remarks
The separator characters used to determine the start of the 
            file name are DirectorySeparatorChar and AltDirectorySeparatorChar.

#### Returns

`System.String` 

###  GetNameWithoutExtension

Returns the name of the file on the client's computer without the extension.

#### Remarks
A string containing the string returned by GetFileName, minus the last period (.) and all characters following it.

#### Returns

`System.String` 

###  GetExtension

Returns the extension of the file on the client's computer.

#### Remarks
The extension of the file name is obtained by searching it for a period (.), starting with the last character 
            and continuing toward the start. If a period is found before a DirectorySeparatorChar or AltDirectorySeparatorChar 
            character, the returned string contains the period and the characters after it; otherwise, string.Empty is returned.

#### Returns

`System.String` 

###  GetFieldValue

Returns the value of a custom field.

#### Parameters

#### fieldName `System.String`

The name of the field which value will be retrieved

#### Returns

`System.String` Check the general help for more information and an example.

###  GetIsFieldChecked

Returns the checked state of a custom field.

#### Parameters

#### fieldName `System.String`

The name of the field which checked state will be retrieved

#### Returns

`System.Boolean` Check the general help for more information and an example.

###  SaveAs

Saves the contents of an uploaded file.

#### Remarks
The maximum allowed uploaded file size is 4MB by default. Maximum file size
                can be specified in the machine.config or Web.config configuration files in the
                maxRequestLength attribute of the <httpRuntime> element.The ASP.NET process must have proper rights for writing on the folder where
                the files are saved.

#### Returns

`System.Void` 

###  SaveAs

Saves the contents of an uploaded file.

#### Remarks
The maximum allowed uploaded file size is 4MB by default. Maximum file size
                can be specified in the machine.config or Web.config configuration files in the
                maxRequestLength attribute of the <httpRuntime> element.The ASP.NET process must have proper rights for writing on the folder where
                the files are saved.

#### Parameters

#### fileName `System.String`

The name of the saved file.

#### overwrite `System.Boolean`

true to allow an existing file to be overwritten; otherwise, false.

#### Returns

`System.Void` 

###  FromHttpPostedFile

Creates a UploadedFile instance from HttpPostedFile instance.

#### Parameters

#### inputFieldName `System.String`

The value of the name attribute of the file input field
            	(equals the UniqueID of the FileUpload control)

#### file `System.Web.HttpPostedFile`

The HttpPostedFile instance. Usually, you could get this from a 
            ASP:FileUpload control's PostedFile property

#### Returns

`Telerik.Web.UI.UploadedFile` 

###  FromHttpPostedFile

Creates a UploadedFile instance from HttpPostedFile instance.

#### Parameters

#### file `System.Web.HttpPostedFile`

The HttpPostedFile instance. Usually, you could get this from a 
            ASP:FileUpload control's PostedFile property

#### Returns

`Telerik.Web.UI.UploadedFile` 

