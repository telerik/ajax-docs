---
title: Validation
page_title: Validation - RadCloudUpload
description: Check our Web Forms article about Validation.
slug: cloudupload/functionality/validation
tags: validation
published: True
position: 2
---

# Validation

**RadCloudUpload** offers a built-in option to validate the file **size** and **extension** on **Client-side**. 

>For **Server-side** validation, you will need to implement a [Custom Provider]({%slug cloudupload/custom-cloud-storage-providers/overview%}) and validate the files manually.

## Usage

To validate the file size and extension, set the following properties:

- `MaxFileSize` - the maximum allowed size
- `AllowedFileExtensions` - one or more allowed extensions separated by comma

>caption Example

````ASP.NET
<telerik:RadCloudUpload ID="RadCloudUpload1" runat="server" 
  MaxFileSize="500 kB" 
  AllowedFileExtensions=".png,.jpg" >
</telerik:RadCloudUpload>
````

>note When the validation fails, CloudUpload triggers the [OnClientValidationFailed]({%slug cloudupload/client-side-programming/events/onclientvalidationfailed%}) Client-side event. To send a feedback to the user (alert, etc.), you can do so inside this event.

## Custom Validation

In addition to the built-in validation, you can add custom validations by utilizing some of the [Client-side events]({%slug cloudupload/client-side-programming/events%}) of RadCloudUpload.

### Allowed number of uploaded files

You can limit the maximum number of files that can be uploaded, by counting them in the [OnClientFileUploading]({%slug cloudupload/client-side-programming/events/onclientfileuploading%}) event handler, and canceling the event to prevent uploading more than the number of files allowed.

>caption Markup

````ASP.NET	
<telerik:RadCloudUpload ID="RadCloudUpload1" runat="server" 
  MultipleFileSelection="Automatic" 
  OnClientFileUploading="OnClientFileUploading">
</telerik:RadCloudUpload>
````                

>caption JavaScript

````JavaScript	
function OnClientFileUploading(sender, args) {
  var filesCount = sender.get_uploadedFiles().length,
  maxFilesCount = 3;

  if (filesCount > maxFilesCount) {
	args.set_cancel(true);
	alert('You cannot select more than: ' + maxFilesCount);
  }
}
````
