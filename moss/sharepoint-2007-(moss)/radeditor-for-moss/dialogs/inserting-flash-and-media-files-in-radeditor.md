---
title: Inserting Flash and Media files in RadEditor
page_title: Inserting Flash and Media files in RadEditor | UI for ASP.NET AJAX Documentation
description: Inserting Flash and Media files in RadEditor
slug: moss/sharepoint-2007-(moss)/radeditor-for-moss/dialogs/inserting-flash-and-media-files-in-radeditor
tags: inserting,flash,and,media,files,in,radeditor
published: True
position: 6
---

# Inserting Flash and Media files in RadEditor



## 

__Web Part and WCM scenario__

You need to modify the __ToolsFile.xml__ which is located in the following folder:

/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/

and add the following tools:

````XML
	    <tool name="FlashManager" />
	    <tool name="MediaManager" />
````



>caution in the WCM scenario you will also need to add / set the __AllowSpecialTags__ property to true. You can set it in the current page using SharePoint Designer.[Click here]({%slug moss/sharepoint-2007-(moss)/radeditor-for-moss/configuration/setting-configfile-and-toolsfile-properties-for-the-wcm-field%})for more information
>


__SharePoint forms scenario (Lists, Wikis, Blogs, etc.)__

You cannot enter Media / Flash files in such scenarios. There RadEditor does not have control over the presentation view which means that we cannot control the output when it is not in edit mode.
