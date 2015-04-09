---
title: Set Properties via Config File
page_title: Set Properties via Config File | UI for ASP.NET AJAX Documentation
description: Set Properties via Config File
slug: sharepoint/2010/radeditor-web-part/configuration/set-properties-via-config-file
tags: set,properties,via,config,file
published: True
position: 6
---

# Set Properties via Config File



## 

You can set certain properties for __RadEditor__ by modifying the respective __ConfigFile__.

__Web Part and WCM scenario__

You need to modify the __ConfigFile.xml__ which is located in the following folder:

` /Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/ `

For example you can set the __ImagesPaths__ property here:

<property name="ImagesPaths"><item>/SiteCollectionImages</item></property>

The same approach is used when setting __FlashPaths__, __DocumentsPaths__, __MediaPaths__ etc. properties. If these properties are not set, by default RadEditor will load all local libraries (local to the current site). For more information, see [Image Manager]({%slug sharepoint/2010/radeditor-web-part/dialogs/image-manager%})

__SharePoint forms scenario (Lists, Blogs, etc.)__

You need to modify the __ListConfigFile.xml__ located in the same folder.
