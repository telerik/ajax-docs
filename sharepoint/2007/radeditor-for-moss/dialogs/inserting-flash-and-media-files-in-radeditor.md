---
title: Inserting Flash and Media files in RadEditor
page_title: Inserting Flash and Media files in RadEditor
description: Check our Web Forms article about Inserting Flash and Media files in RadEditor.
slug: sharepoint/2007/radeditor-for-moss/dialogs/inserting-flash-and-media-files-in-radeditor
tags: inserting,flash,and,media,files,in,radeditor
published: True
position: 6
---

# Inserting Flash and Media files in RadEditor

**Web Part and WCM scenario**

You need to modify the **ToolsFile.xml** which is located in the following folder:

*/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0**1f131a624888eeed/Resources/*

and add the following tools:

````XML
<tool name="FlashManager" />
<tool name="MediaManager" />
````

>caution in the WCM scenario you will also need to add / set the **AllowSpecialTags** property to true. You can set it in the current page using SharePoint Designer.[Click here]({%slug sharepoint/2007/radeditor-for-moss/configuration/setting-configfile-and-toolsfile-properties-for-the-wcm-field%})for more information

**SharePoint forms scenario (Lists, Wikis, Blogs, etc.)**

You cannot enter Media / Flash files in such scenarios. There RadEditor does not have control over the presentation view which means that we cannot control the output when it is not in edit mode.
