---
title: Custom Azure Blob Storage Provider
page_title: Custom Azure Blob Storage Provider | UI for ASP.NET AJAX Documentation
description: Custom Azure Blob Storage Provider
slug: cloudupload/custom-cloud-storage-providers/custom-azure-blob-storage-provider
tags: custom,azure,blob,storage,provider
published: True
position: 2
---

# Custom Azure Blob Storage Provider



>note Starting from Q1 2014 __CloudUpload__ supports creating of[Custom Storage Providers]({%slug cloudupload/custom-cloud-storage-providers/overview%}). They allow developers to set dynamically in the code-behind credentials for every Storage Provider multiple usage of Storage Providers of the same type.
>


## Setting Credentials Dynamically from the Code Behind

The easiest way to set credentials from the code behind is to create a custom Azure provider This can done following the steps below:

1. Create a new class, which inherits the __AzureProvider__ class and override its __Initialize__ method. In this method you can set all



````C#
	    using System;
	    using System.Linq;
	    using Telerik.Web.UI;
	
	    namespace SampleNamespace
	    {
	        public class CustomAzureProvider : AzureProvider
	        {
	            public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
	            {
	                AccountKey = "{ACCOUNT_KEY}";
	                AccountName = "{ACCOUNT_NAME}";
	                BlobContainer = "{BLOB_CONTAINER}";
	                SubFolderStructure = "{SUB_FOLDER_STRUCTURE}";
	                UncommitedFilesExpirationPeriod = TimeSpan.FromHours(2);
	            }
	        }
	    }
````
````VB.NET
	    Imports System
	    Imports System.Linq
	    Imports Telerik.Web.UI
	
	    Namespace SampleNamespace
	
	        Public Class CustomAzureProvider
	            Inherits AzureProvider
	
	            Public Overrides Sub Initialize(name As String, config As System.Collections.Specialized.NameValueCollection)
	                AccountKey = "{ACCOUNT_KEY}"
	                AccountName = "{ACCOUNT_NAME}"
	                BlobContainer = "{BLOB_CONTAINER}"
	                SubFolderStructure = "{SUB_FOLDER_STRUCTURE}"
	                UncommitedFilesExpirationPeriod = TimeSpan.FromHours(2)
	            End Sub
	
	        End Class
	
	    End Namespace
````


1. Add new storage provider in the configuration file as you set the new __Type__.

````XML
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
	                        <!-- Add a new storage with a Type of the Custom Provider. Note that the Type is a combination of the name space and the class name. -->
	                        <add name="Azure" type="SampleNamespace.CustomAzureProvider"/>
	                    </storageProviders>
	                </radCloudUpload>
	            </telerik.web.ui>
	        </configuration>
````



1. Define the __CloudUpload__

````ASPNET
	        <telerik:RadCloudUpload ID="RadCloudUpload1" runat="server" ProviderType="Azure"></telerik:RadCloudUpload>
	
````



## Switching Custom Azure Providers

Common scenario is the need to upload files in different Azure providers. For example files uploading in different Geo Locations.

1. Create a as many Custom Providers as you need. They must inherit the__AzureProvider__ class. Override their __Initialize__ method.



````C#
	    using System;
	    using System.Linq;
	    using Telerik.Web.UI;
	
	    namespace SampleNamespace
	    {
	        public class CustomAzureProvider1 : AzureProvider
	        {
	            public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
	            {
	                //Keys
	                AccountKey = "{ACCOUNT_KEY}";
	                AccountName = "{ACCOUNT_NAME}";
	                BlobContainer = "{BLOB_CONTAINER}";
	                SubFolderStructure = "{SUB_FOLDER_STRUCTURE}";
	                UncommitedFilesExpirationPeriod = TimeSpan.FromHours(2);
	            }
	        }
	    }
````
````VB.NET
	    Imports System
	    Imports System.Linq
	    Imports Telerik.Web.UI
	
	    Namespace SampleNamespace
	
	        Public Class CustomAzureProvider1
	            Inherits AzureProvider
	
	            Public Overrides Sub Initialize(name As String, config As System.Collections.Specialized.NameValueCollection)
	                AccountKey = "{ACCOUNT_KEY}"
	                AccountName = "{ACCOUNT_NAME}"
	                BlobContainer = "{BLOB_CONTAINER}"
	                SubFolderStructure = "{SUB_FOLDER_STRUCTURE}"
	                UncommitedFilesExpirationPeriod = TimeSpan.FromHours(2)
	            End Sub
	
	        End Class
	
	    End Namespace
````




````C#
	    using System;
	    using System.Linq;
	    using Telerik.Web.UI;
	
	    namespace SampleNamespace
	    {
	        public class CustomAzureProvider2 : AzureProvider
	        {
	            public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
	            {
	                //Values from the config NameValueCollection are passed from the web.config file.
	                AccountKey = config["accountKey"];
	                AccountName = config["accountName"];
	                BlobContainer = config["blobContainer"];
	                SubFolderStructure = config["subFolderStructure"];
	                UncommitedFilesExpirationPeriod = config["uncommitedFilesExpirationPeriod"];
	            }
	        }
	    }
````
````VB.NET
	    Imports System
	    Imports System.Linq
	    Imports Telerik.Web.UI
	
	    Namespace SampleNamespace
	
	        Public Class CustomAzureProvider2
	            Inherits AzureProvider
	
	            Public Overrides Sub Initialize(name As String, config As System.Collections.Specialized.NameValueCollection)
	                'Values from the config NameValueCollection are passed from the web.config file.
	                AccountKey = config("accountKey")
	                AccountName = config("accountName")
	                BlobContainer = config("blobContainer")
	                SubFolderStructure = config("subFolderStructure")
	                UncommitedFilesExpirationPeriod = config("uncommitedFilesExpirationPeriod")
	            End Sub
	
	        End Class
	
	    End Namespace
````


1. Register the newly created Custom Providers in the configuration file:

````XML
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
	                        <add name="CustomAzureProvider1 " type="SampleNamespace.CustomAzureProvider1"/>
	                        <!--Keys defined in the configuration file-->
	                        <add name="CustomAzureProvider2 " type="SampleNamespace.CustomAzureProvider2" accountKey="{ACCOUNT_KEY}" accountName="{ACCOUNT_NAME}" blobContainer="{BLOB_CONTAINER}" subFolderStructure="{SUB_FOLDER-STRUCTURE}" ensureContainer="true" uncommitedFilesExpirationPeriod="2" defaultEndpointsProtocol="https" />
	                    </storageProviders>
	                </radCloudUpload>
	            </telerik.web.ui>
	        </configuration>
````



1. Add a new __CloudUpload__ control with __ProviderType__ Azure and set the __HttpHandlerUrl__ property.

````XML
	        <telerik:RadCloudUpload ID="RadCloudUpload2" runat="server" ProviderType="Azure" HttpHandlerUrl="~/Handler.ashx" ></telerik:RadCloudUpload>
````



1. Set the name of the Custom Azure Provider in the handler:



````C#
	    <%@ WebHandler Language="C#" Class="CloudUploadHandler" %>
	
	    using System;
	    using System.Web;
	
	    public class CloudUploadHandler : Telerik.Web.UI.CloudUploadHandler 
	    {
	        public override void SetCustomProvider(object sender, Telerik.Web.UI.CloudUpload.CustomProviderSetupEventArgs e)
	        {
	            //Check for some condition and select Custom Provider
	            if (true)
	            {
	                e.Name = "CustomAzureProvider2";
	            }
	            else
	            {
	                e.Name = "CustomAzureProvider1";
	            }
	        }
	    }
````
````VB.NET
	    <%@ WebHandler Language="VB" Class="CloudUploadHandler" %>
	    Imports System
	    Imports System.Web
	    Imports Telerik.Web.UI
	
	    Public Class CloudUploadHandler
	        Inherits Telerik.Web.UI.CloudUploadHandler
	
	        Public Overrides Sub SetCustomProvider(sender As Object, e As Telerik.Web.UI.CloudUpload.CustomProviderSetupEventArgs)
	            'Check for some condition and select Custom Provider
	            If True Then
	                e.Name = "CustomAzureProvider2"
	            Else
	                e.Name = "CustomAzureProvider1"
	            End If
	        End Sub
	    End Class
````


# See Also

 * [Azure Blob Storage Provider]({%slug cloudupload/cloud-storage-providers/azure-blob-storage%})

 * [Troubleshooting]({%slug cloudupload/troubleshooting%})
