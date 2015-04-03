---
title: Validation
page_title: Validation | UI for ASP.NET AJAX Documentation
description: Validation
slug: cloudupload/functionality/validation
tags: validation
published: True
position: 2
---

# Validation



## Basic Client Side Validation

__RadCloudUpload__ offers an easy way to validate the size and the file type of the uploaded file. To enable it just set __MaxFileSize__ and __AllowedFileExtensions__. If selected file doesn't pass any of them then __OnClientValidationFailed__ will be fired.#_ASPX_

	
                    <telerik:RadCloudUpload ID="RadCloudUpload2" runat="server" ProviderType="Everlive"
                    OnClientValidationFailed="OnClientValidationFailed" AllowedFileExtensions=".png,.jpg"
                    MaxFileSize="500 kB"></telerik:RadCloudUpload>
                

#_JavaScript_

	
                    function OnClientValidationFailed(sender, args) {
                      var errorMessage = args.get_message();
                      var fileName = args.get_filename();
                      alert(fileName + ' failed to upload. ' + errorMessage);
                    }
                



## Validate the Maximum Number of Uploaded Files#_ASPX_

	
                    <telerik:RadCloudUpload ID="RadCloudUpload2" runat="server" ProviderType="Everlive"
                    MultipleFileSelection="Automatic" OnClientFileUploading="OnClientFileUploading">
                    </telerik:RadCloudUpload>
                

#_JavaScript_

	
                    function OnClientFileUploading(sender, args) {
                      var filesCount = sender.get_uploadedFiles().length,
                      maxFilesCount = 3;

                      if (filesCount > maxFilesCount) {
                        args.set_cancel(true);
                        alert('You cannot select more than: ' + maxFilesCount);
                      }
                    }
                


