---
title: Add and Remove Tools from the Toolbar
page_title: Add and Remove Tools from the Toolbar | UI for ASP.NET AJAX Documentation
description: Add and Remove Tools from the Toolbar
slug: moss/sharepoint-2010/radeditor-web-part/configuration/add-and-remove-tools-from-the-toolbar
tags: add,and,remove,tools,from,the,toolbar
published: True
position: 4
---

# Add and Remove Tools from the Toolbar



## 

You can add/remove certain tools from the RadEditor toolbar by modifying the respective ToolsFile.

For a full list of the supported tools in the RadEditor for SP2010, see the following help articles -

* [Introduction to Toolbars](E6928FB8-E590-46F5-BE82-8D2C04243F5D)

* [Using the ToolsFile.xml](457F0D10-F4ED-41EA-A7F8-997C6D09B6D2)

__Content Editor Web Part and WCM (publishing) scenarios__

You need to modify the __ToolsFile.xml__ which is located in the following folder:

/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/

To remove a tool just delete the respective <tool> node from the XML definition.

__SharePoint forms scenario (Lists, Blogs, etc.)__

You need to modify the __ListToolsFile__.__xml__ located in the same folder.

The file contains two toolbar definitions - __EnhancedToolbar__and __BasicToolbar__. The EnhancedToolbar will only be loaded when the field is of type Enhanced rich text. Otherwise the BasicToolbar will be shown. You can safely remove some of the tools in those two toolbars. However, be careful not to completely remove one or both of these toolbars as it might prevent the editor from loading correctly.
