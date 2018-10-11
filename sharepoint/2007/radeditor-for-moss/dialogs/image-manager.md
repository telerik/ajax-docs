---
title: Image Manager
page_title: Image Manager | UI for ASP.NET AJAX Documentation
description: Image Manager
slug: sharepoint/2007/radeditor-for-moss/dialogs/image-manager
tags: image,manager
published: True
position: 0
---

# Image Manager

Functionality:

Using the Image Manager dialog the users of RadEditor can:

* **insert images** in the editor's content area

* **upload new images**, which will be available for inserting.

* **delete images**

Properties to set: 

The behavior of the Image Manager dialog is controlled by the following properties:

* **ImagesPaths -** by using this property you can set which MOSS's libraries to be included into the ImagesPaths collection and shown in the Image Manager dialog. By default, all the libraries from the current site are included in the ImagePaths collection. If you set the Image Path starting with "/" it will refer the sites collection root.

* **ImagesFilters** - a string array which contains the file extension filters that controls which files are shown in the Image Manager dialog. The * character can be used as a wildcard in the extension, for example __*.jp*__ will match __*.jpg__, __*.jpeg__ and any other extension which starts with **jp**.

* **MaxImageSize** - The maximum image file size in bytes, allowed for uploading. The default value is 2048000 bytes.

**For example:**

The files which properties need to be modified are **ConfigFile.xml** / **ListConfigFile.xml**, located in the following folder:

*/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0**1f131a624888eeed/Resources/*

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


>tip Note that under MOSS the Upload and Delete options depend on the current user's permissions for the desired library.
