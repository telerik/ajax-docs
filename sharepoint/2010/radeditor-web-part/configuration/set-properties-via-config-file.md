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

You can set certain properties for **RadEditor** by modifying the respective **ConfigFile**.

**Web Part and WCM scenario**

You need to modify the **ConfigFile.xml** which is located in the following folder:

`/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/`

For example you can set the **ImagesPaths** property here:

`<property name="ImagesPaths"><item>/SiteCollectionImages</item></property>`

The same approach is used when setting **FlashPaths**, **DocumentsPaths**, **MediaPaths** etc. properties. If these properties are not set, by default RadEditor will load all local libraries (local to the current site). For more information, see [Image Manager]({%slug sharepoint/2010/radeditor-web-part/dialogs/image-manager%})

**SharePoint forms scenario (Lists, Blogs, etc.)**

You need to modify the **ListConfigFile.xml** located in the same folder.
