---
title: Upgrading to a newer version of RadEditor for MOSS
page_title: Upgrading to a newer version of RadEditor for MOSS | UI for ASP.NET AJAX Documentation
description: Upgrading to a newer version of RadEditor for MOSS
slug: sharepoint/2007/radeditor-for-moss/migration-and-upgrade/upgrading-to-a-newer-version-of-radeditor-for-moss
tags: upgrading,to,a,newer,version,of,radeditor,for,moss
published: True
position: 3
---

# Upgrading to a newer version of RadEditor for MOSS


Here is how to upgrade your RadEditor for MOSS from a previous version to the latest one. In the instructions below we will upgrade from **v5.2.2.0** to**v5.3.1.0.**

In SharePoint 2007 deployments use the following steps to upgrade an existing version of RadEditor for MOSS to a newer version of RadEditor for MOSS:

1. Uninstall the old version of RadEditor for MOSS as described in section [Uninstalling RadEditor]({%slug sharepoint/2007/radeditor-for-moss/installation-and-deployment/uninstalling-radeditor%}).

1. Install the new version of Telerik RadEditor for MOSS as described in section [Installing RadEditor in a MOSS 2007 farm]({%slug sharepoint/2007/radeditor-for-moss/installation-and-deployment/installing-radeditor-in-a-moss-2007-farm%}).

1. Paste the following `<dependentAssembly>` element in the `<assemblyBinding>` tag in the **web.config** file:

	**XML**
	
		<runtime>
			...
			<assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
			  <dependentAssembly>
				<assemblyIdentity name="RadEditorSharePoint" publicKeyToken="1f131a624888eeed" culture="neutral" />
				<bindingRedirect oldVersion="1.0.0.0-<old version>" newVersion="<new version>" />
			  </dependentAssembly>
			...
			</assemblyBinding>
			...
		</runtime>

	The `<old version="">` here represents the old product version (5.2.2.0), while `<new version="">` should be replaced with the current version (5.3.1.0 in this example):

	**XML**
	
		<dependentAssembly>
		   <assemblyIdentity name="RadEditorSharePoint" publicKeyToken="1f131a624888eeed" culture="neutral" />
		   <bindingRedirect oldVersion="1.0.0.0-5.2.2.0" newVersion="5.3.1.0" />
		</dependentAssembly> 


1. **(Web Parts)** To enable the RadEditor Web Parts, which were created with the previous version, open the **web.config** file of your SharePoint site and add the following line right above the `</SafeControls>` tag:

	**XML**
	
		<SafeControl Assembly="RadEditorSharePoint, Version=<old version>, Culture=neutral, PublicKeyToken=1f131a624888eeed" 
			Namespace="Telerik.SharePoint" TypeName="*" Safe="True" /> 


	In this case `<old version>` is **5.2.2.0**, so the `<SafeControl>` tag should look like this:

	**XML**
	
		<SafeControl Assembly="RadEditorSharePoint, Version=5.2.2.0, Culture=neutral, PublicKeyToken=1f131a624888eeed" 
			Namespace="Telerik.SharePoint" TypeName="*" Safe="True" /> 
