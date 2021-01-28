---
title: OnFileUploaded
page_title: OnFileUploaded - RadCloudUpload
description: Check our Web Forms article about OnFileUploaded.
slug: cloudupload/server-side-programming/onfileuploaded
tags: onfileuploaded
published: True
position: 1
---

# OnFileUploaded



## 

The server-side **OnFileUploaded** occurs after a file is uploaded and a postback is triggered.

The handler of the **OnFileUploaded** event receives two arguments:

* The **RadCloudUpload** control that initiated the file upload. This argument is of type object, but can be cast to the **RadCloudUpload** type.

* An **CloudFileUploadedEventArgs** object. It has three properties:

	* **IsValid** - Allows you to specify whether the uploaded file is valid. The default value is "True" and in case that is preset to False, the callback mechanism will delete it from the Cloud Storage.

	* **FileInfo** - Returns fileInfo object containing information regarding the uploaded file.



The example below demonstrates how to access information about the uploaded file and to manage its IsValid State:



````C#
protected void RadCloudUpload1_FileUploaded(object sender, CloudFileUploadedEventArgs args)
{
	//You could access the information about the uploaded file, using the FileInfo object. 

	long contentLenght = args.FileInfo.ContentLength;
	string contentType = args.FileInfo.ContentType;
	string keyName = args.FileInfo.KeyName;
	string originalName = args.FileInfo.OriginalFileName;

	//You could manage the IsValid state of the uploaded file.
	args.IsValid = true;
}
````
````VB.NET	
Protected Sub RadCloudUpload1_FileUploaded(sender As Object, args As CloudFileUploadedEventArgs)
	'You could access the information about the uploaded file, using the FileInfo object. 

	Dim contentLenght As Long = args.FileInfo.ContentLength
	Dim contentType As String = args.FileInfo.ContentType
	Dim keyName As String = args.FileInfo.KeyName
	Dim originalName As String = args.FileInfo.OriginalFileName

	'You could manage the IsValid state of the uploaded file.
	args.IsValid = True
End Sub		
````

