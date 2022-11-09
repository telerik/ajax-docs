---
title: Azure Blob Storage
page_title: Azure Blob Storage - RadCloudUpload
description: Instructions for setting up the environment to upload files to Azure Blob Storage.
slug: cloudupload/cloud-storage-providers/azure-blob-storage
tags: azure,blob,storage
published: True
position: 1
---

# Azure Blob Storage

Instructions for setting up the environment to upload files to Azure Blob Storage.

To use the built-in Azure Blob provider that comes with RadCloudUpload, you must:

1. [Add the necessary references](#adding-references)
1. [Configure the provider](#configuration)

## Adding References

**RadCloudUpload** can upload files to Azure Blob Storage. It is built on the top of [Windows Azure Blob Storage Service in .NET](http://www.windowsazure.com/en-us/documentation/articles/storage-dotnet-how-to-use-blobs-20/). To work properly, the control needs a reference to some of the client libraries included in the [Windows Azure Storage](http://www.nuget.org/packages/WindowsAzure.Storage/) which is a part of [Windows Azure SDK for .NET](http://www.windowsazure.com/en-us/develop/net/).

The **Windows Azure Storage** package is distributed through a **NuGet** feed and can be easily installed through the Package Management Console. 

The following table shows the command to install the Microsoft.WindowsAzure.Storage package based on the Telerik.Web.UI version and targeting .NET Framework.

| Telerik.Web.UI version | Targeting .NET 4.0 and later                          | Targeting .NET 3.5                                   |
|------------------------|-------------------------------------------------------|-------------------------------------------------------|
| >= 2014.1.225          | Install-Package WindowsAzure.Storage -Version 3.0.2   | Install-Package WindowsAzure.Storage -Version 1.7.0.0 |
| < 2013.3.1324          | Install-Package WindowsAzure.Storage -Version 1.7.0.0 | Install-Package WindowsAzure.Storage -Version 1.7.0.0 |

>caption Example

![NuGet PM Console example for Azure Package](images/cloudupload-azure-nuget.png "NuGet PM Console example for Azure Package")

- For version **`3.0.2`**, only the **`Microsoft.WindowsAzure.Storage.dll`** assembly with version **`3.0.2.0`** is used by RadCloudUpload. 
- For version **`1.7.0.0`**, only the **`Microsoft.WindowsAzure.StorageClient.dll`** assembly with version **`6.0.6002.18488`** is used by RadCloudUpload.


>important Newer versions of `Microsoft.WindowsAzure.Storage` packages may not work for RadCloudUpload. File uploads could stop working and the app could throw a `NullReferenceException` from `Telerik.Web.UI.CloudUploadHandler.GetEncryptedText` method.


## Configuration

Configuring the Azure Blog Storage provider can be done wither by using the CloudUpload's Wizard, or by adding the necessary configuration entries to the **web.config**.

- [CloudUpload Wizard](#cloudupload-wizard)
- [web.config](#webconfig)


### CloudUpload Wizard

From the **RadCloudUpload**'s smart tag choose Azure as provider tag and open the Configuration Wizard: 

![CloudUpload Designer Wizard](images/cloudupload-azure.png "CloudUpload Designer Wizard")

In the Configuration Wizard dialog enter Azure **Access Key**, **Account Name** and **Blob Container Name**.
   
![CloudUpload Configuration Wizard for Azure](images/cloudupload-azure-configuration.png "CloudUpload Configuration Wizard for Azure")

By specifying the **Uncommitted Files Expiration Period** (TimeSpan Structure), you could easily configure the time, after which the unprocessed files will be removed from the storage. 

When **Ensure Container** is checked, the control will create a new Container if it doesn't exists. In case it is not checked and the Container doesn't exists - an exception will be thrown. 

This will add the necessary configuration settings to the project configuration file, however, you can double-check that. For more details, check out the [web.config](#webconfig) section.


### web.config

You can also configure the Azure Provider manually by adding the required entries in the **web.config**.

Add the `<configSections>` and `<telerik.web.ui>` entries to the `<configuration>` element. Fill in the values for the **accountKey**, **accountName** and **blobContainer** attributes of the storage provider.

````web.config
<?xml version="1.0"?>
<configuration>
	<configSections>
		<sectionGroup name="telerik.web.ui">
			<section name="radCloudUpload" type="Telerik.Web.UI.CloudUploadConfigurationSection" allowDefinition="MachineToApplication" requirePermission="false" />
		</sectionGroup>
	</configSections>

	<telerik.web.ui>
		<radCloudUpload>
			<storageProviders>
				<add name="Azure" type="Telerik.Web.UI.AzureProvider" accountKey="Your_Azure_Account_Key" accountName="Your_Azure_Account_Name" blobContainer="Your_Azure_Blob_Container" subFolderStructure="SubFolder_Name_If_needed" ensureContainer="true" uncommitedFilesExpirationPeriod="4" defaultEndpointsProtocol="https" />
			</storageProviders>
		</radCloudUpload>
	</telerik.web.ui>

	<!-- rest of the configuration -->
</configuration>
````

>important The `<configSections>` must be the first child of the `<configuration>` element. For more details, you can check out the Microsoft Official article [configSections element](https://learn.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/configsections-element-for-configuration).
>
> Uploading in Azure is done in chunks of **2MB** in size. In order to upload files larger than 4MB, it is needed to increase the maximum allowed file size. For more details please refer to this [article]({%slug cloudupload/how-to/uploading-large-files%}). The chunks that were cancelled during the uploading are removed automatically by Azure. 
> 
> When older browsers are used (IE9 or below), files are uploaded at once, because chunking is not supported. 



# See Also

- [Custom Storage Providers]({%slug cloudupload/custom-cloud-storage-providers/overview%})
- [Custom Azure Blob Storage Provider]({%slug cloudupload/custom-cloud-storage-providers/custom-azure-blob-storage-provider%})
- [Troubleshooting]({%slug cloudupload/troubleshooting%})
