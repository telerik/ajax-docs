---
title: Web Farm
page_title: Web Farm - RadAsyncUpload
description: Check our Web Forms article about Web Farm and Load Balancing with RadAsyncUpload.
slug: asyncupload/troubleshooting/web-farm
tags: web,farm,load,balancing,balanced,balancer,upload,shared,folder,target
published: True
position: 1
---

# Web Farm and Load Balancing

This help article explains the setup required for proper file uploads in a Web Farm when load balancing is used.

There are a few simple requirements that allow file uploads (including [chunk file uploads]({%slug asyncupload/functionality/chunk-upload%})) to arrive in the proper destination:

* The `TemporaryFolder` and `TargetFolder` must be in a location shared among all servers. For example, `TemporaryFolder="\\sharedNetworkDrive\myTempFolder"`.
	
	You can create a Virtual Directory under the WebApplication and point it to the shared network location. You can then use this virtual directory for the RadAsyncUpload `TargetFolder` and/or `TemporaryFolder`. 

* The Windows user account that the ApplicationPool uses must have permissions to read and write to these folders. Setting the `UseApplicationPoolImpersonation` property to `true` instructs the control to impersonate the application pool.

>tip Depending on your host, you may find useful the built-in support RadCloudUpload offers for:
>
> * [Amazon S3 Buckets](https://docs.telerik.com/devtools/aspnet-ajax/controls/cloudupload/cloud-storage-providers/amazon-s3)
> * [Azure Blob Storage](https://docs.telerik.com/devtools/aspnet-ajax/controls/cloudupload/cloud-storage-providers/azure-blob-storage)
> * [Telerik Backend Services](https://docs.telerik.com/devtools/aspnet-ajax/controls/cloudupload/telerik-backend-services)

## Troubleshooting

If files do not get written at all to the target folder, try giving `Everyone` permissions to the `TargetFolder` and `TemporaryFolder`. If this resolves the issue, then you need to locate the user that IIS operates under, and provide them with sufficient privileges. Set the `UseApplicationPoolImpersonation` property of the RadAsyncUpload to `true`.

Such a shared drive can be considered a single point of failure, which is something load balancing and web farms strive to avoid. If this is a concern in your use case, set `DisableChunkUpload` to `true` so that the files will be uploaded in one piece and use a [custom upload handler]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%}) to store them according to your application requirements.

Large files must be allowed by the server. For more details, see the [Uploading large files]({%slug asyncupload/functionality/uploading-large-files%}) article.


## See Also

* [Chunk File Upload in RadAsyncUpload]({%slug asyncupload/functionality/chunk-upload%})
* [Uploading Large Files]({%slug asyncupload/functionality/uploading-large-files%})
* [Custom Upload Handler for RadAsyncUpload]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%})
* [Amazon S3 Buckets in RadCloudUpload]({%slug cloudupload/cloud-storage-providers/amazon-s3%})
* [Azure Blob Storage in RadCloudUpload]({%slug cloudupload/cloud-storage-providers/azure-blob-storage%})
* [Telerik Backend Services in RadCloudUpload]({%slug cloudupload/cloud-storage-providers/telerik-backend-services%})
