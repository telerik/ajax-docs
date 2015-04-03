---
title: Upgrading RadEditor WebPart Version
page_title: Upgrading RadEditor WebPart Version | UI for ASP.NET AJAX Documentation
description: Upgrading RadEditor WebPart Version
slug: moss/sharepoint-2010/radeditor-web-part/migration-and-upgrade/upgrading-radeditor-webpart-version
tags: upgrading,radeditor,webpart,version
published: True
position: 1
---

# Upgrading RadEditor WebPart Version



## Upgrading to a newer version of RadEditor for SharePoint 2010

Here is how to upgrade your RadEditor for SP2010 from a previous version to the latest one. In the instructions below we will upgrade from v6.0.0.0 to v6.1.0.0.

In SharePoint 2010 deployments use the following steps to upgrade an existing version of Telerik controls for Sharepoint 2010 to a newer version of Telerik controls for Sharepoint 2010:

1. Make sure that you write the current version of RadEditorSharePoint assembly. It is needed in case you want to access previously created with RadEditor for SP2010 WebParts. There are three ways of getting the version of the assembly:

1. Check the version of the assembly in the GAC.
>caption 

![
         
      ](images/upgradeA_thumb.png)

1. Check the first four digits of the __x.x.x.x__1f131a624888eeed__folder in __Program Files\Common Files\Microsoft Shared\Web Server Extensions\wpresources\RadEditorSharePoint__.
>caption 

![
         
      ](images/upgradeB_thumb.png)

1. Check the __web.config__file of your SharePoint 2010 site for a __SafeControl__element such as __<SafeControl Assembly="RadEditorSharePoint, Version=x.x.x.x, Culture=neutral, PublicKeyToken=1f131a624888eeed" Namespace="Telerik.SharePoint" TypeName="*" Safe="True" SafeAgainstScript="False" />__
>caption 

![
         
      ](images/upgradeC_thumb.png)

1. Uninstall the old version of Telerik controls For Sharepoint 2010 as described [here]({%slug moss/sharepoint-2010/radeditor-web-part/installation-and-deployment/uninstalling%}).

1. Install the new version of Telerik controls For Sharepoint 2010 as described [here]({%slug moss/sharepoint-2010/installation-and-deployment/installing-telerik-web-parts-for-sharepoint%}).

1. Paste the following <dependentAssembly> element in the <assemblyBinding> tag in the web.config file:

````XML
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
````

The __<old version>__ here represents the old product version (__6.0.0.0__), while __<new version>__ should be replaced with the current version (__6.1.0.0__ in this example):

````XML
	    <dependentAssembly>
	      <assemblyIdentity name="RadEditorSharePoint" publicKeyToken="1f131a624888eeed" culture="neutral" />
	      <bindingRedirect oldVersion="1.0.0.0-6.0.0.0" newVersion="6.1.0.0" />
	    </dependentAssembly>
````



1. (Web Parts) To enable the RadEditor Web Parts, which were created with the previous version, open the web.config file of your SharePoint site and add the following line right above the __</SafeControls>__ tag:

````XML
	    <SafeControl Assembly="RadEditorSharePoint, Version=<old version>, Culture=neutral, PublicKeyToken=1f131a624888eeed"
	        Namespace="Telerik.SharePoint" Typename="*" Safe="True" />
````

In this case __<old version>__ is __6.0.0.0__, so the __<SafeControl>__ tag should look like this:

````XML
	    <SafeControl Assembly="RadEditorSharePoint, Version=6.0.0.0, Culture=neutral, PublicKeyToken=1f131a624888eeed"
	        Namespace="Telerik.SharePoint" Typename="*" Safe="True" />
````


