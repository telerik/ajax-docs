---
title: Add/Remove tools from the toolbar
page_title: Add/Remove tools from the toolbar | UI for ASP.NET AJAX Documentation
description: Add/Remove tools from the toolbar
slug: sharepoint/2007/radeditor-for-moss/configuration/add/remove-tools-from-the-toolbar
tags: add/remove,tools,from,the,toolbar
published: True
position: 1
---

# Add/Remove tools from the toolbar



## 

You can add/remove certain tools from the RadEditor toolbar by modifying the respective ToolsFile.

For a full list of the supported tools in the RadEditor for MOSS, see the following help articles -

* [Introduction to Toolbars](E6928FB8-E590-46F5-BE82-8D2C04243F5D)

* [Using the ToolsFile.xml](457F0D10-F4ED-41EA-A7F8-997C6D09B6D2)

**Content Editor Web Part and WCM (publishing) scenarios**

You need to modify the **ToolsFile.xml** which is located in the following folder:

/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0**1f131a624888eeed/Resources/

To remove a tool just delete the respective <tool> node from the XML definition.

**SharePoint forms scenario (Lists, Wikis, Blogs, etc.)**

You need to modify the **ListToolsFile**.**xml** located in the same folder.

The file contains two toolbar definitions - EnhancedToolbar and BasicToolbar. The EnhancedToolbar will only be loaded when the field is of type Enhanced rich text. Otherwise the BasicToolbar will be shown. You can safely remove some of the tools in those two toolbars. However, be careful not to completely remove one or both of these toolbars as it might prevent the editor from loading correctly.
