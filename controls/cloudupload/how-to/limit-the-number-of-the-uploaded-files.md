---
title: Limit the Number of the Uploaded Files
page_title: Limit the Number of the Uploaded Files - RadCloudUpload
description: Check our Web Forms article about Limit the Number of the Uploaded Files.
slug: cloudupload/how-to/limit-the-number-of-the-uploaded-files
tags: limit,the,number,of,the,uploaded,files
published: True
position: 3
---

# Limit the Number of the Uploaded Files



Common case is the need to limit the maximum number of files that can be uploaded. This article shows step by step how to create a custom limitation.

## Limit the Number of the Uploaded Files

1. Add new **RadCloudUpload** control.

1. Set **MultipleFileSelection** property to **true** to enable Multi File Selection.

1. Handle [ OnClientFilesSelecting ]({%slug cloudupload/client-side-programming/events/onclientfilesselecting%})event.



````ASPNET
<telerik:RadCloudUpload ID="RadCloudUpload1" runat="server" ProviderType="Azure" OnClientFilesSelecting="onClientFilesSelecting" MultipleFileSelection="Automatic">
</telerik:RadCloudUpload>
````

````JavaScript
//Limit the number of the uploaded files.
function onClientFilesSelecting(sender, args) {
	var uploadedFilesCount = sender.get_uploadedFiles().length;
	var selectedFilesCount = args.get_count();

	if (selectedFilesCount > 5 || (uploadedFilesCount + selectedFilesCount > 5)) {
		args.set_cancel(true);
		alert('You can upload up to 5 files.');
	}
}
````


# See Also

 * [Troubleshooting]({%slug cloudupload/troubleshooting%})
