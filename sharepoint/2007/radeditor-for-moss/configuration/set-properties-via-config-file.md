---
title: Set Properties Via Config File
page_title: Set Properties Via Config File | UI for ASP.NET AJAX Documentation
description: Set Properties Via Config File
slug: sharepoint/2007/radeditor-for-moss/configuration/set-properties-via-config-file
tags: set,properties,via,config,file
published: True
position: 0
---

# Set Properties Via Config File



## 

You can set certain properties for __RadEditor__ by modifying the respective __ConfigFile__.

__Web Part and WCM scenario__

You need to modify the __ConfigFile.xml__ which is located in the following folder:

/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/

For example you can set the __ImagesPaths__ property here:

````XML
	    <property name="ImagesPaths">
	        <item>/SiteCollectionImages</item>
	    </property>
````



The same approach is used when setting __FlashPaths__, __DocumentsPaths__, __MediaPaths__ etc. properties. If these properties are not set, by default RadEditor will load all local libraries (local to the current site). For more information, see [Image Manager]({%slug sharepoint/2007/radeditor-for-moss/dialogs/image-manager%})

__SharePoint forms scenario (Lists, Wikis, Blogs, etc.)__

You need to modify the __ListConfigFile.xml__ located in the same folder.
