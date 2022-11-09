---
title: Custom Azure Blob Storage Provider
page_title: Custom Azure Blob Storage Provider - RadCloudUpload
description: Create Custom Azure Blob Providers to extend or take over the built-in functionality.
slug: cloudupload/custom-cloud-storage-providers/custom-azure-blob-storage-provider
tags: custom,azure,blob,storage,provider
published: True
position: 2
---

# Custom Azure Blob Storage Provider

Create Custom Azure Blob Providers to extend or take over the built-in functionality.

To create a **Custom Azure Blob Provider**, you will need to:

1. [Create the Provider Class](#create-the-provider-class)
2. [Register the Provider in the web.config](#register-the-provider-in-webconfig)
3. [Add the Overrides](#add-the-overrides)

You might also be interested in the [Other Scenarios](#other-scenarios) we have on this topic.

## Create the Provider Class

Create a Class which inherits from the `Telerik.Web.UI.AzureProvider` and add your overrides.

>caption Example 

````C#
using System;
using Telerik.Web.UI;

namespace MyNamespace
{
    public class CustomAzureProvider : AzureProvider
    {
        // Override the methods
    }
}
````
````VB
Imports System
Imports Telerik.Web.UI

Namespace MyNamespace

	Public Class CustomAzureProvider
		Inherits AzureProvider

		'Override the methods

	End Class
End Namespace
````

## Register the provider in web.config

Register the newly created Custom Providers in the web.config

>caption Example

````web.config
	<telerik.web.ui>
		<radCloudUpload>
			<storageProviders>
				<!-- Add a new storage with a Type of the Custom Provider. Note that the Type is a combination of the name space and the class name. -->
				<add name="Azure" type="MyNamespace.CustomAzureProvider"/>
			</storageProviders>
		</radCloudUpload>
	</telerik.web.ui>
</configuration>
````

## Add the Overrides

By adding Overrides to the Custom Provider, you will be able to take Control over the Provider's methods. 

Examples of Overrides:

- [Setting the Provider Credentials](#setting-the-credentials)
- [Upload Files with their original name](#upload-files-with-their-original-name)


### Setting the Credentials

To set the Azure credentials for the custom provider, override its **`Initialize`** method and set the values to the **AccountKey**, **AccountName**, and **BlobContainer** properties.


>caption Example

````C#
public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
{
	AccountKey = "{ACCOUNT_KEY}";
	AccountName = "{ACCOUNT_NAME}";
	BlobContainer = "{BLOB_CONTAINER}";
	SubFolderStructure = "{SUB_FOLDER_STRUCTURE}/";
}
````
````VB
Public Overrides Sub Initialize(name As String, config As System.Collections.Specialized.NameValueCollection)
	AccountKey = "{ACCOUNT_KEY}"
	AccountName = "{ACCOUNT_NAME}"
	BlobContainer = "{BLOB_CONTAINER}"
	SubFolderStructure = "{SUB_FOLDER_STRUCTURE}/"
End Sub
````

In case you have set the required values during the registration in the **web.config**, the values will be present in the **`config`** parameter (`NameValueCollection`)

>caption Example

````C#
public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
{
	//Values from the config NameValueCollection are passed from the web.config file.
	AccountKey = config["accountKey"];
	AccountName = config["accountName"];
	BlobContainer = config["blobContainer"];
	SubFolderStructure = config["subFolderStructure"];
	UncommitedFilesExpirationPeriod = config["uncommitedFilesExpirationPeriod"];
}
`````
````VB
Public Overrides Sub Initialize(name As String, config As System.Collections.Specialized.NameValueCollection)
	'Values from the config NameValueCollection are passed from the web.config file.
	AccountKey = config("accountKey")
	AccountName = config("accountName")
	BlobContainer = config("blobContainer")
	SubFolderStructure = config("subFolderStructure")
	UncommitedFilesExpirationPeriod = config("uncommitedFilesExpirationPeriod")
End Sub
````

>important Append a forward slash "**`/`**" to the value provided in the **SubFolderStructure** property for the directory to work. Otherwise, the file will be uploaded to the main container with its name containing the value from the **SubFolderStructure** property.


### Upload Files with their original name

By default the CloudUpload will prepend the Guid to the uploaded file names to prevent overriding existing ones. To keep the original filename, override the **`UploadFile`** customize the full path (`DirectoryStructure/FileName.ext`) that well be used to upload the files to the Azure Blob Storage.

>caption Example

````C#
public override void UploadFile(string keyName, NameValueCollection metaData, Stream fileStream)
{
    // Get the original filename from the metadata parameter
    string originalFileName = metaData["fileName"];

    // build the full path with a new file name by concatenating the SubFolderStructure and the original filename
    string pathWithNewFileName = string.Format("{0}{1}", SubFolderStructure, originalFileName);

    // overwrite the keyName param with the new value
    keyName = pathWithNewFileName;

    // Call the base UploadFile() method
    base.UploadFile(keyName, metaData, fileStream);
}
````
````VB
Public Overrides Sub UploadFile(ByVal keyName As String, ByVal metaData As NameValueCollection, ByVal fileStream As Stream)
	'Get the original filename from the metadata parameter
    Dim originalFileName As String = metaData("fileName")

	'build the full path with a new file name by concatenating the SubFolderStructure and the original filename
    Dim pathWithNewFileName As String = String.Format("{0}{1}", SubFolderStructure, originalFileName)
	
	'overwrite the keyName param with the new value
    keyName = pathWithNewFileName

	'Call the base UploadFile() method
    MyBase.UploadFile(keyName, metaData, fileStream)
End Sub
````


## Other Scenarios

One common scenario includes uploading files to different Azure Blob Containers based logged in user, based on file-type, etc. To do so, you can create multiple Custom Azure Providers and switch between them.

Follow the instructions from the [Switching between Custom Azure Providers](#switching-between-custom-azure-providers) section.

### Switching between Custom Azure Providers

To test it out, create two *Custom Azure Providers*

>caption Example Custom Azure Provider 1

````C#
using System;
using Telerik.Web.UI;

namespace MyNamespace
{
    public class CustomAzureProvider1 : AzureProvider
    {
        // Overrides for Custom Azure Provider 1
    }
}
````
````VB
Imports System
Imports Telerik.Web.UI

Namespace MyNamespace

	Public Class CustomAzureProvider1
		Inherits AzureProvider

		'Overrides for Custom Azure Provider 1

	End Class

End Namespace
````

>caption Example Custom Azure Provider 2

````C#
using Telerik.Web.UI;

namespace MyNamespace
{
    public class CustomAzureProvider2 : AzureProvider
    {
        // Overrides for Custom Azure Provider 2
    }
}
````
````VB
Imports Telerik.Web.UI

Namespace MyNamespace
	Public Class CustomAzureProvider2
		Inherits AzureProvider

		'Overrides for Custom Azure Provider 2

	End Class
End Namespace
````

Register the newly created *Custom Azure Providers* in the **web.config**

>caption Example
	
````web.config
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
	<configSections>
		<sectionGroup name="telerik.web.ui">
			<section name="radCloudUpload" type="Telerik.Web.UI.CloudUploadConfigurationSection" allowDefinition="MachineToApplication" requirePermission="false" />
		</sectionGroup>
	</configSections>
	...
	<telerik.web.ui>
		<radCloudUpload>
			<storageProviders>
				<!-- Add a new storage providers with a Type of the Custom Provider. Note that the Type is a combination of the name space and the class name. -->
				<add name="CustomAzureProvider1 " type="MyNamespace.CustomAzureProvider1"/>
				<!--Keys defined in the configuration file-->
				<add name="CustomAzureProvider2 " type="MyNamespace.CustomAzureProvider2" accountKey="{ACCOUNT_KEY}" accountName="{ACCOUNT_NAME}" blobContainer="{BLOB_CONTAINER}" subFolderStructure="{SUB_FOLDER-STRUCTURE}" ensureContainer="true" uncommitedFilesExpirationPeriod="2" defaultEndpointsProtocol="https" />
			</storageProviders>
		</radCloudUpload>
	</telerik.web.ui>
</configuration>
````


Create a **Custom CloudUpload Handler** which will switch between the *Custom Azure Providers*

>caption Example CustomCloudUploadHandler.ashx

````C#
<%@ WebHandler Language="C#" Class="CustomCloudUploadHandler" %>

using System;
using System.Web;

public class CustomCloudUploadHandler : Telerik.Web.UI.CloudUploadHandler  {
    
    public override void SetCustomProvider(object sender, Telerik.Web.UI.CloudUpload.CustomProviderSetupEventArgs e)
	{
		//Check for some condition and select Custom Provider
		if (true)
		{
			e.Name = "CustomAzureProvider1";
		}
		else
		{
			e.Name = "CustomAzureProvider2";
		}
	}
}
````
````VB
<%@ WebHandler Language="VB" Class="CustomCloudUploadHandler" %>

Imports System
Imports System.Web

Public Class CustomCloudUploadHandler
    Inherits Telerik.Web.UI.CloudUploadHandler

    Public Overrides Sub SetCustomProvider(ByVal sender As Object, ByVal e As Telerik.Web.UI.CloudUpload.CustomProviderSetupEventArgs)
        If True Then
            e.Name = "CustomAzureProvider1"
        Else
            e.Name = "CustomAzureProvider2"
        End If
    End Sub
End Class
````

Finally, assign the Custom CloudUpload Handler to the **CloudUpload** control by providing the url to the **ProviderType** property.

>caption Example

````ASP.NET
<telerik:RadCloudUpload ID="RadCloudUpload1" runat="server" ProviderType="Azure" HttpHandlerUrl="~/CustomCloudUploadHandler.ashx"></telerik:RadCloudUpload>
````

## See Also

- [Azure Blob Storage Provider]({%slug cloudupload/cloud-storage-providers/azure-blob-storage%})
- [Troubleshooting]({%slug cloudupload/troubleshooting%})

 
