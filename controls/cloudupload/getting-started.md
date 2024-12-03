---
title: Getting Started
page_title: Getting Started - RadCloudUpload
description: Check our Web Forms article about Getting Started.
slug: cloudupload/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started with Telerik WebForms CloudUpload

This guide demonstrates how to get up and running with the Telerik WebForms Chip.

After the completion of this guide, you will be able to upload files to Azure Blob Storage Container.

## Create the CloudUpload

To create the CloudUpload in the markup, add a `telerik:RadCloudUpload` element to the page and set its `ProviderType` property to `Azure`.

````ASP.NET
<telerik:RadCloudUpload ID="RadCloudUpload1" runat="server" ProviderType="Azure">
</telerik:RadCloudUpload>
````

To create the CloudUpload on the server, create a new instance of the `RadCloudUpload` object, set it's `ProviderType` to `Azure` and add it to the Controls collection of another control (e.g. `PlaceHolder1`)

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadCloudUpload cloudUpload = new RadCloudUpload() { ID = "RadCloudUpload", ProviderType = ProviderType.Azure };

    PlaceHolder1.Controls.Add(cloudUpload);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    Dim cloudUpload As RadCloudUpload = New RadCloudUpload() With {
        .ID = "RadCloudUpload",
        .ProviderType = ProviderType.Azure
    }

    PlaceHolder1.Controls.Add(cloudUpload)
End Sub
````

>caption PlaceHolder1

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

>Creating controls programmatically must be done in an early event such as `PreInit` (preferably), and `Init`. For more details you can check out the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

## Configure the Azure Provider

Install the `Microsoft.WindowsAzure.Storage` package version `3.0.2` from NuGet so it pulls all its dependpencies, and then add the following configuration to the `web.config` file:

> Replace the `{ACCOUNT_KEY}`, `{ACCOUNT_NAME}`, `{BLOB_CONTAINER}`, `{SUB_DIRECTORY}` with your actual `Azure Blob Storage` credentials. 

````XML
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
				<add name="Azure" type="Telerik.Web.UI.AzureProvider" 
				accountKey="{ACCOUNT_KEY}" 
				accountName="{ACCOUNT_NAME}" 
				blobContainer="{BLOB_CONTAINER}" 
				subFolderStructure="{SUB_DIRECTORY}" 
				ensureContainer="true" uncommitedFilesExpirationPeriod="4" defaultEndpointsProtocol="https" />
			</storageProviders>
		</radCloudUpload>
	</telerik.web.ui>

	<!-- rest of the configuration -->
</configuration>
````

# See Also

- [Configuring Azure Blob Storage Provider]({%slug cloudupload/cloud-storage-providers/azure-blob-storage%})
- [Configuring Amazon S3 Provider]({%slug cloudupload/cloud-storage-providers/amazon-s3%})
- [Troubleshooting]({%slug cloudupload/troubleshooting%})
