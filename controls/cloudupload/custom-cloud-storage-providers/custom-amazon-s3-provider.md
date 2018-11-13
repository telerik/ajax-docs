---
title: Custom Amazon S3 Provider
page_title: Custom Amazon S3 Provider | RadCloudUpload for ASP.NET AJAX Documentation
description: Custom Amazon S3 Provider
slug: cloudupload/custom-cloud-storage-providers/custom-amazon-s3-provider
tags: custom,amazon,s3,provider
published: True
position: 1
---

# Custom Amazon S3 Provider



>note Starting from Q1 2014 **CloudUpload** supports creating of [Custom Storage Providers]({%slug cloudupload/custom-cloud-storage-providers/overview%}). They allow developers to set dynamically in the code-behind credentials for every Storage Provider multiple usage of Storage Providers of the same type.
>


## Setting Security Credentials and Region Endpoints Dynamically from the Code Behind

Common scenario is the need to upload files depending on the user's Geo location or the need to set credentials dynamically. The easiest way to implement these functionalities is to create a custom Amazon provider. This can done with the following steps:

1. Create a new class, which inherits the **AmazonS3Provider** class and override its **Initialize** method. In this method you can set all credentials:

	**C#**
	
		using System;
		using System.Linq;
		using Telerik.Web.UI;
		using Amazon.S3;
	
		namespace SampleNamespace
		{
			public class CustomAmazonProvider : AmazonS3Provider
			{
				public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
				{
					AccessKey = "{ACCESS_KEY}";
					SecretKey = "{SECRET_KEY}";
					BucketName = "{BUCKET_NAME}";
					UncommitedFilesExpirationPeriod = TimeSpan.FromHours(2);
				}
	
				//Override this method only if you want to set the Region Endpoint
				public override void EnsureWebClient()
				{
					//Set the Region Endpoint http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region
					AmazonS3Client client = new AmazonS3Client(AccessKey, SecretKey, Amazon.RegionEndpoint.APSoutheast2);
					//The newly created client object must be assigned to AmazonS3Client
					AmazonS3Client = client;
				}
			}
		}
	
	**VB.NET**
	
		Imports System
		Imports System.Linq
		Imports Telerik.Web.UI
		Imports Amazon.S3
	
		Namespace SampleNamespace
	
			Public Class CustomAmazonProvider
				Inherits AmazonS3Provider
	
				Public Overrides Sub Initialize(name As String, config As System.Collections.Specialized.NameValueCollection)
					AccessKey = "{ACCESS_KEY}"
					SecretKey = "{SECRET_KEY}"
					BucketName = "{BUCKET_NAME}"
				End Sub
	
				'Override this method only if you want to set the Region Endpoint
				Public Overrides Sub EnsureWebClient()
					'Set the Region Endpoint http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region
					Dim client As New AmazonS3Client(AccessKey, SecretKey, Amazon.RegionEndpoint.APSoutheast2)
					'The newly created client object must be assigned to AmazonS3Client
					AmazonS3Client = client
				End Sub
	
			End Class
		End Namespace


2. Add new storage provider in the configuration file as you set the new **Type**.

	**XML**
	
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
						<add name="Amazon" type="SampleNamespace.CustomAmazonProvider"/>
					</storageProviders>
				</radCloudUpload>
			</telerik.web.ui>
		</configuration>


3. Define the **CloudUpload** and set Amazon as a **ProviderType**.

	**ASP.NET**
	
		<telerik:RadCloudUpload ID="RadCloudUpload1" runat="server" ProviderType="Amazon"></telerik:RadCloudUpload>
	



## Switching between multiple Custom Amazon Providers defined in the web.config file

Amazon providers. For example files uploading in different Geo Locations.

1. Create a as many Custom Providers as you need. They must inherit the **AmazonS3Provider** class. Override their **Initialize** method.


	**C#**
	
		using System;
		using System.Linq;
		using Telerik.Web.UI;
		using Amazon.S3;
	
		namespace SampleNamespace
		{
			public class CustomAmazonProvider1 : AmazonS3Provider
			{
				public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
				{
					AccessKey = "{ACCESS_KEY}";
					SecretKey = "{SECRET_KEY}";
					BucketName = "{BUCKET_NAME}";
					UncommitedFilesExpirationPeriod = TimeSpan.FromHours(2);
				}
			}
		}	
	**VB.NET**
	
		Imports System
		Imports System.Linq
		Imports Telerik.Web.UI
		Imports Amazon.S3
	
		Namespace SampleNamespace
	
			Public Class CustomAmazonProvider1
				Inherits AmazonS3Provider
	
				Public Overrides Sub Initialize(name As String, config As System.Collections.Specialized.NameValueCollection)
					AccessKey = "{ACCESS_KEY}"
					SecretKey = "{SECRET_KEY}"
					BucketName = "{BUCKET_NAME}"
					UncommitedFilesExpirationPeriod = TimeSpan.FromHours(2)
				End Sub
	
			End Class
		End Namespace

	**C#**
	
		using System;
		using System.Linq;
		using Telerik.Web.UI;
		using Amazon.S3;
	
		namespace SampleNamespace
		{
			public class CustomAmazonProvider2 : AmazonS3Provider
			{
				public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
				{
					//Values from the config NameValueCollection are passed from the web.config file.
					AccessKey = config["accessKey"];
					SecretKey = config["secretKey"];
					BucketName = config["bucketName"];
					UncommitedFilesExpirationPeriod = config["uncommitedFilesExpirationPeriod"];
				}
			}
		}


	**VB.NET**
	
		Imports System
		Imports System.Linq
		Imports Telerik.Web.UI
		Imports Amazon.S3
	
		Namespace SampleNamespace
	
			Public Class CustomAmazonProvider2
				Inherits AmazonS3Provider
	
				Public Overrides Sub Initialize(name As String, config As System.Collections.Specialized.NameValueCollection)
					'Values from the config NameValueCollection are passed from the web.config file.
					AccessKey = config("accessKey")
					SecretKey = config("secretKey")
					BucketName = config("bucketName")
					UncommitedFilesExpirationPeriod = config("uncommitedFilesExpirationPeriod")
				End Sub
	
			End Class
		End Namespace
	


2. Register the newly created Custom Providers in the configuration file:

	**XML**
	
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
						<add name="CustomAmazonProvider1" type="SampleNamespace.CustomAmazonProvider1"/>
						<add name="CustomAmazonProvider2" type="SampleNamespace.CustomAmazonProvider2" accessKey="{ACCESS_KEY}" secretKey="{SECRET_KEY}" bucketName="{BUCKET_NAME}" subFolderStructure="{SUB_FOLDER_STRUCTURE}" uncommitedFilesExpirationPeriod="2"/>
					</storageProviders>
				</radCloudUpload>
			</telerik.web.ui>
		</configuration>




3. Add a new **CloudUpload** control with **ProviderType** Amazon and set the **HttpHandlerUrl** property.

	**ASP.NET**
	
		<telerik:RadCloudUpload ID="RadCloudUpload2" runat="server" ProviderType="Amazon" HttpHandlerUrl="~/Handler.ashx" ></telerik:RadCloudUpload>
	


4. Set the name of the Custom Amazon Provider in the handler:



	**C#**
	
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
					e.Name = "CustomAmazonProvider2";
				}
				else
				{
					e.Name = "CustomAmazonProvider1";
				}
			}
		}

	**VB.NET**
	
		<%@ WebHandler Language="VB" Class="CloudUploadHandler" %>
		Imports System
		Imports System.Web
		Imports Telerik.Web.UI
		
		Public Class CloudUploadHandler
			Inherits Telerik.Web.UI.CloudUploadHandler
		
			Public Overrides Sub SetCustomProvider(sender As Object, e As Telerik.Web.UI.CloudUpload.CustomProviderSetupEventArgs)
				'Check for some condition and select Custom Provider
				If True Then
					e.Name = "CustomAmazonProvider2"
				Else
					e.Name = "CustomAmazonProvider1"
				End If
			End Sub
		End Class


# See Also

 * [Amazon S3 Storage Provider]({%slug cloudupload/cloud-storage-providers/amazon-s3%})

 * [Troubleshooting]({%slug cloudupload/troubleshooting%})
