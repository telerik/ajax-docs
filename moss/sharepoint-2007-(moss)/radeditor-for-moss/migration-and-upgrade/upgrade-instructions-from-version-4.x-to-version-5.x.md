---
title: Upgrade Instructions from version 4.x to version 5.x
page_title: Upgrade Instructions from version 4.x to version 5.x | UI for ASP.NET AJAX Documentation
description: Upgrade Instructions from version 4.x to version 5.x
slug: moss/sharepoint-2007-(moss)/radeditor-for-moss/migration-and-upgrade/upgrade-instructions-from-version-4.x-to-version-5.x
tags: upgrade,instructions,from,version,4.x,to,version,5.x
published: True
position: 1
---

# Upgrade Instructions from version 4.x to version 5.x



## 

__Follow the steps below to upgrade RadEditor v4.x to RadEditor v5.x:__

1. Uninstall the 4.x RadEditor for MOSS solution (remember to back up your custom settings/code before uninstalling)

1. Install the 5.x RadEditor solution

1. WCM - add a __bindingRedirect__element in the __web.config__:

````XML
	    <dependentAssembly>
	         <assemblyIdentity name="RadEditorSharePoint" publicKeyToken="1f131a624888eeed" culture="neutral" />
	         <bindingRedirect oldVersion="1.0.0.0-4.x.x.0" newVersion="5.x.x.0" />
	    </dependentAssembly>
````



1. Lists - re-activate the List Editor feature on at least one site and recycle the SharePoint web application (restart IIS)

1. Web Parts - add a SafeControl element for the old version of the editor in the __web.config__.For example, if you are upgrading from version 4.54:

````XML
	    <SafeControl Assembly="RadEditorSharePoint, Version=4.5.4.0, Culture=neutral,
	        PublicKeyToken=1f131a624888eeed" Namespace="Telerik.SharePoint" TypeName="*"
	        Safe="True" />
````



__Known issues:__

The new RadEditor control has been developed to work exclusively in pages with XHTML doctype. By default, the MOSS pages do not use a doctype. This means that there will be minimal visual glitches with the editor. We have fixed most of them by overriding some of the styles in the editor skins.
