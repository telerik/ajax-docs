---
title: Files Uploading in Custom Folder at Runtime
page_title: Files Uploading in Custom Folder at Runtime | UI for ASP.NET AJAX Documentation
description: Files Uploading in Custom Folder at Runtime
slug: cloudupload/how-to/files-uploading-in-custom-folder-at-runtime
tags: files,uploading,in,custom,folder,at,runtime
published: True
position: 2
---

# Files Uploading in Custom Folder at Runtime



This article gives a brief overview how to configure the **RadCloudUpload** to upload files in custom folders at runtime. For example this could be a scenario you need to upload files in multiple folders for one Cloud Storage Provider or in other words these are folders that differ from the sub folder defined in the web.config.

## Configure RadCloudUpload to upload files in one or multiple custom folders at Runtime

To accomplish this scenario the **RadCloudUpload** needs to be configured to use Custom Handler, where the default folder will be changed:

>note The following example is valid for a single and multiple files selections.
>


````ASPNET
<telerik:RadCloudUpload runat="server" ProviderType="Azure" MultipleFileSelection="Automatic" HttpHandlerUrl="~/UploadToCustomFolderHandler.ashx">
</telerik:RadCloudUpload>
````





````C#
<%@ WebHandler Language="C#" Class="UploadToCustomFolderHandler" %>

using System;
using System.Web;

public class UploadToCustomFolderHandler : Telerik.Web.UI.CloudUploadHandler {

	public override void SetKeyName(object sender, Telerik.Web.UI.CloudUpload.SetKeyNameEventArgs e)
	{        
		var customFolder = Guid.NewGuid().ToString() + "/";
		e.KeyName = string.Format("{0}{1}_{2}", customFolder, Guid.NewGuid(), e.OriginalFileName);
	}
}
````
````VB.NET
<%@ WebHandler Language="VB" Class="UploadToCustomFolderHandler" %>

Imports System
Imports System.Web

Public Class UploadToCustomFolderHandler : Inherits Telerik.Web.UI.CloudUploadHandler

	Public Overrides Sub SetKeyName(sender As Object, e As Telerik.Web.UI.CloudUpload.SetKeyNameEventArgs)
		Dim customFolder = Guid.NewGuid().ToString() + "/"
		e.KeyName = String.Format("{0}{1}_{2}", customFolder, Guid.NewGuid(), e.OriginalFileName)
	End Sub

End Class
````


# See Also

 * [Azure Blob Storage]({%slug cloudupload/cloud-storage-providers/azure-blob-storage%})

 * [Amazon]({%slug cloudupload/cloud-storage-providers/amazon-s3%})

 * [Telerik Backend Services]({%slug cloudupload/cloud-storage-providers/telerik-backend-services%})

 * [Troubleshooting]({%slug cloudupload/troubleshooting%})
