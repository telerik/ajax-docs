---
title: Image Manager
page_title: Image Manager | UI for ASP.NET AJAX Documentation
description: Image Manager
slug: sharepoint/2010/radeditor-web-part/dialogs/image-manager
tags: image,manager
published: True
position: 1
---

# Image Manager



## 

Functionality:

Using the Image Manager dialog the users of RadEditor can:

* __insert images__ in the editor's content area

* __upload new images__, which will be available for inserting.

* __delete images__

Properties to set: 

The behavior of the Image Manager dialog is controlled by the following properties:

* __ImagesPaths -__ by using this property you can set which MOSS's libraries to be included into the ImagesPaths collection and shown in the Image Manager dialog. By default, all the libraries from the current site are included in the ImagePaths collection. If you set the Image Path starting with "/" it will refer the sites collection root.

* __ImagesFilters__ - a string array which contains the file extension filters that controls which files are shown in the Image Manager dialog. The * character can be used as a wildcard in the extension, for example __*.jp*__ will match __*.jpg__, __*.jpeg__ and any other extension which starts with __jp__.

* __MaxImageSize__ - The maximum image file size in bytes, allowed for uploading. The default value is 2048000 bytes.

__For example:__

The files which properties need to be modified are __ConfigFile.xml / ListConfigFile.xml__, located in the following folder:

/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/

````XML
	    <configuration>
	        ................
	        <property name="ImagesPaths">
	         <item>/RootSharedImages</item>
	         <item>CurrentSiteLibraries/ImageLibrary</item>
	        </property>
	        <property name="ImagesFilters">
	         <item>*.jp*</item>
	         <item>*.gif</item>
	         <item>*.png</item>
	        </property>
	        <property name="MaxImageSize">4096000</property>
	    </configuration>
````



>note Note that in SharePoint 2010 the Upload and Delete options depend on the current user's permissions for the desired library.
>

