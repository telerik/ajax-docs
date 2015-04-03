---
title: Flash Manager
page_title: Flash Manager | UI for ASP.NET AJAX Documentation
description: Flash Manager
slug: moss/sharepoint-2007-(moss)/radeditor-for-moss/dialogs/flash-manager
tags: flash,manager
published: True
position: 4
---

# Flash Manager



## 

Functionality:

Using the Flash Manager dialog the users of RadEditor can:

* __insert flash__ in the editor's content area

* __upload new flash__, which will be available for inserting.

* __delete flash__

Properties to set: 

The behavior of the Flash Manager dialog is controlled by the following properties:

* __FlashPaths -__ by using this property you can set which MOSS's libraries to be included into the FlashPaths collection and shown in the Flash Manager dialog. By default, all the libraries from the current site are included in the FlashPaths collection. If you set the Flash Path starting with "/" it will refer the sites collection root.

* __FlashFilters__ - a string array which contains the file extension filters that controls which files are shown in the Flash Manager dialog. The * character can be used as a wildcard in the extension, for example __*.sw*__ will match __*.swf__ and any other extension which starts with __sw__.

* __MaxFlashSize__ - The maximum flash file size in bytes, allowed for uploading. The default value is 2048000 bytes.



__For example:__

The files which properties need to be modified are __ConfigFile.xml / ListConfigFile.xml__, located in the following folder:

/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/

````XML
	    <configuration>
	         ................ 
	        <property name="FlashPaths">    
	             <item>/RootSharedFlash</item>  
	             <item>CurrentSiteLibraries/FlashLibrary</item> 
	         </property> 
	         <property name="FlashFilters">  
	            <item>*.sw*</item> 
	         </property> 
	         <property name="MaxFlashSize">4096000</property>
	     </configuration>
````





>note Note that under MOSS the Upload and Delete options depend on the current user's permissions for the desired library.
>

