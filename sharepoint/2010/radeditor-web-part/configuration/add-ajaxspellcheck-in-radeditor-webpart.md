---
title: Add AjaxSpellCheck in RadEditor WebPart
page_title: Add AjaxSpellCheck in RadEditor WebPart | UI for ASP.NET AJAX Documentation
description: Add AjaxSpellCheck in RadEditor WebPart
slug: sharepoint/2010/radeditor-web-part/configuration/add-ajaxspellcheck-in-radeditor-webpart
tags: add,ajaxspellcheck,in,radeditor,webpart
published: True
position: 7
---

# Add AjaxSpellCheck in RadEditor WebPart




To enable the **AjaxSpellCheck** tool, you need to modify the **ToolsFile.xml** which is located in the following folder:

/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.0.0.0**1f131a624888eeed/Resources/

and add the following tool:

**`<tool name="AjaxSpellCheck"/>`**

To enable the **AjaxSpellCheck** tool in List (Blog) scenario, open the **ListToolsFile.xml** file and add the following tag:**`<tool name="AjaxSpellCheck"/>`**
