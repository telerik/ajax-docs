---
title: Add and Remove Tools from the Toolbar
page_title: Add and Remove Tools from the Toolbar
description: Check our Web Forms article about Add and Remove Tools from the Toolbar.
slug: sharepoint/2010/radeditor-web-part/configuration/add-and-remove-tools-from-the-toolbar
tags: add,and,remove,tools,from,the,toolbar
published: True
position: 4
---

# Add and Remove Tools from the Toolbar




You can add/remove certain tools from the RadEditor toolbar by modifying the respective ToolsFile.

For a full list of the supported tools in the RadEditor for SP2010, see the following help articles -

* [Introduction to Toolbars]({%slug editor/functionality/toolbars/overview%})

* [Using the ToolsFile.xml]({%slug editor/functionality/toolbars/using-toolsfile.xml%})

**Content Editor Web Part and WCM (publishing) scenarios**

You need to modify the **ToolsFile.xml** which is located in the following folder:

/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/

To remove a tool just delete the respective `<tool>` node from the XML definition.

**SharePoint forms scenario (Lists, Blogs, etc.)**

You need to modify the **ListToolsFile.xml** located in the same folder.

The file contains two toolbar definitions - **EnhancedToolbar** and **BasicToolbar**. The EnhancedToolbar will only be loaded when the field is of type Enhanced rich text. Otherwise the BasicToolbar will be shown. You can safely remove some of the tools in those two toolbars. However, be careful not to completely remove one or both of these toolbars as it might prevent the editor from loading correctly.
