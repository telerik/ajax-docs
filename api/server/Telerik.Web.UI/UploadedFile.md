---
title: Telerik.Web.UI.UploadedFile
page_title: Telerik.Web.UI.UploadedFile
description: Telerik.Web.UI.UploadedFile
---

# Telerik.Web.UI.UploadedFile

Provides a way to access individual files that have been uploaded by a client
                via a RadUploadcontrol.

#### Remarks
The UploadedFileCollectionclass provides access to all
                files uploaded from a client via single RadUpload instance as a file collection.
                UploadedFileprovides properties and methods to get information on an
                individual file and to read and save the file. Files are uploaded in MIME
                multipart/form-data format and are NOTbuffered in the server
                memory if the RadUploadModuleis used.The RadUploadcontrol must be used to select and upload
                files from a client.You can specify the maximum allowable upload file size in a machine.config or
                Web.config configuration file in the maxRequestLengthattribute of the
                &lt;httpRuntime&gt; Element element.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.UploadedFile

## Properties

###  ContentLength `Int64`

Gets the size in bytes of an uploaded file.

###  ContentType `String`

Gets the MIME content type of a file sent by a client.

###  FileName `String`

Gets the fully-qualified name of the file on the client's computer (for example
            "C:\MyFiles\Test.txt").

###  InputStream `Stream`

Gets a Stream object which points to the uploaded file to prepare for reading the contents of the file.

###  LastModifiedDate `DateTime`

Gets the last modified date of the uploaded file.

#### Remarks
The property is available only in RadAsyncUpload control when FileApi module is used

## Methods

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

