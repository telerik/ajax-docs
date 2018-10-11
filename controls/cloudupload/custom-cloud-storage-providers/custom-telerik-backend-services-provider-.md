---
title: Custom Telerik Backend Services Provider 
page_title: Custom Telerik Backend Services Provider  | RadCloudUpload for ASP.NET AJAX Documentation
description: Custom Telerik Backend Services Provider 
slug: cloudupload/custom-cloud-storage-providers/custom-telerik-backend-services-provider-
tags: custom,telerik,backend,services,provider,
published: True
position: 3
---

# Custom Telerik Backend Services Provider 



>tip Starting from Q1 2014 **CloudUpload** supports creating of [Custom Storage Providers]({%slug cloudupload/custom-cloud-storage-providers/overview%}). They allow developers to set dynamically in the code-behind credentials for every Storage Provider multiple usage of Storage Providers of the same type.

>tip Progress decided to discontinue Telerik Platform including its Backend Services and integration with RadCloudUpload. You can find more information on Telerik Platform discontinuation at [Telerik Platform is Retired](https://www.telerik.com/platform-next-level).

## Setting Credentials Dynamically from the Code Behind

The easiest way to set credentials from the code behind is to create a custom Telerik Backend Service(formerly Everlive) Provider. This can done with the steps below:

1. Create a new class, which inherits the **EverliveProvider** class and override its **Initialize** method. In this method you can set the **ApiKey**.


	**C#**
	
		using System;
		using System.Linq;
		using Telerik.Web.UI;
	
		namespace SampleNamespace
		{
			public class CustomTBSProvider : EverliveProvider
			{
				public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
				{
					ApiKey = "{API_KEY}";
				}
			}
		}
	**VB.NET**
	
		Imports System
		Imports System.Linq
		Imports Telerik.Web.UI
	
		Namespace SampleNamespace
	
			Public Class CustomTBSProvider
				Inherits EverliveProvider
	
				Public Overrides Sub Initialize(name As String, config As System.Collections.Specialized.NameValueCollection)
					ApiKey = "{API_KEY}"
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
						<add name="Everlive" type="SampleNamespace.CustomTBSProvider"/>
					</storageProviders>
				</radCloudUpload>
			</telerik.web.ui>
		</configuration>




3. Define the **CloudUpload** and set Everlive as a **ProviderType**.

	**ASP.NET**
	
		<telerik:RadCloudUpload ID="RadCloudUpload1" runat="server" ProviderType="Everlive"></telerik:RadCloudUpload>
	



## Switching Telerik Backend Services Providers

Common scenario is the need to switch between different Telerik Backend Services Providers defined in the configuration file.

1. Create a as many Custom Providers as you need. They must inherit the **EverliveProvider** class. Override their **Initialize** method and set the ApiKey. Note that it can be set in both code behind and in the configuration file:


	**C#**
	
		using System;
		using System.Linq;
		using Telerik.Web.UI;
	
		namespace SampleNamespace
		{
			public class CustomTBSProvider1 : EverliveProvider
			{
				public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
				{
					ApiKey = "{API_KEY}";
				}
			}
		}
	**VB.NET**
	
		Imports System
		Imports System.Linq
		Imports Telerik.Web.UI
	
		Namespace SampleNamespace
	
			Public Class CustomTBSProvider1
				Inherits EverliveProvider
	
				Public Overrides Sub Initialize(name As String, config As System.Collections.Specialized.NameValueCollection)
					ApiKey = "{API_KEY}"
				End Sub
	
			End Class
	
		End Namespace



	**C#**
		
		using System;
		using System.Linq;
		using Telerik.Web.UI;
	
		namespace SampleNamespace
		{
			public class CustomTBSProvider2 : EverliveProvider
			{
				public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
				{
					//Values from the config NameValueCollection are passed from the web.config file.
					ApiKey = config["applicationKey"];
				}
			}
		}
	**VB.NET**
	
		Imports System
		Imports System.Linq
		Imports Telerik.Web.UI
	
		Namespace SampleNamespace
	
			Public Class CustomTBSProvider2
				Inherits EverliveProvider
	
				Public Overrides Sub Initialize(name As String, config As System.Collections.Specialized.NameValueCollection)
					'Values from the config NameValueCollection are passed from the web.config file.
					ApiKey = config("applicationKey")
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
						<add name="CustomTBSProvider1" type="SampleNamespace.CustomTBSProvider1"/>
						<add name="CustomTBSProvider2" type="SampleNamespace.CustomTBSProvider2" applicationKey="{API_KEY}" uncommitedFilesExpirationPeriod="2"/>
					</storageProviders>
				</radCloudUpload>
			</telerik.web.ui>
		</configuration>


3. Add a new **CloudUpload** control with **ProviderType** Everlive and set the **HttpHandlerUrl** property.

	**ASP.NET**
	
		<telerik:RadCloudUpload ID="RadCloudUplad2" runat="server" ProviderType="Everlive" HttpHandlerUrl="~/Handler.ashx" ></telerik:RadCloudUpload>
	

4. Set the name of the Custom Telerik Backend Services Provider in the handler:


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
					e.Name = "CustomTBSProvider1";
				}
				else
				{
					e.Name = "CustomTBSProvider2";
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
					e.Name = "CustomTBSProvider1"
				Else
					e.Name = "CustomTBSProvider2"
				End If
			End Sub
		End Class


# See Also

 * [Telerik Backend Services Provider]({%slug cloudupload/cloud-storage-providers/telerik-backend-services%})

 * [Troubleshooting]({%slug cloudupload/troubleshooting%})
