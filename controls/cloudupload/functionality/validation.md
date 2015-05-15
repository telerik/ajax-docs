---
title: Validation
page_title: Validation | RadCloudUpload for ASP.NET AJAX Documentation
description: Validation
slug: cloudupload/functionality/validation
tags: validation
published: True
position: 2
---

# Validation



## Basic Client Side Validation

**RadCloudUpload** offers an easy way to validate the size and the file type of the uploaded file. To enable it just set **MaxFileSize** and **AllowedFileExtensions**. If selected file doesn't pass any of them then **OnClientValidationFailed** will be fired.#_ASPX_

````ASP.NET		
<telerik:RadCloudUpload ID="RadCloudUpload2" runat="server" ProviderType="Everlive" OnClientValidationFailed="OnClientValidationFailed" AllowedFileExtensions=".png,.jpg" MaxFileSize="500 kB">
</telerik:RadCloudUpload>
````                

````JavaScript	
function OnClientValidationFailed(sender, args) {
  var errorMessage = args.get_message();
  var fileName = args.get_filename();
  alert(fileName + ' failed to upload. ' + errorMessage);
}
````                



## Validate the Maximum Number of Uploaded Files

````ASP.NET	
<telerik:RadCloudUpload ID="RadCloudUpload2" runat="server" ProviderType="Everlive"
MultipleFileSelection="Automatic" OnClientFileUploading="OnClientFileUploading">
</telerik:RadCloudUpload>
````                

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
                


