---
title: Add AjaxSpellCheck in RadEditor WebPart
page_title: Add AjaxSpellCheck in RadEditor WebPart | UI for ASP.NET AJAX Documentation
description: Add AjaxSpellCheck in RadEditor WebPart
slug: moss/sharepoint-2010/radeditor-web-part/configuration/add-ajaxspellcheck-in-radeditor-webpart
tags: add,ajaxspellcheck,in,radeditor,webpart
published: True
position: 7
---

# Add AjaxSpellCheck in RadEditor WebPart



## 

To enable the __AjaxSpellCheck__ tool, you need to modify the __ToolsFile.xml__ which is located in the following folder:

/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.0.0.0__1f131a624888eeed/Resources/

and add the following tool:

__<tool name="AjaxSpellCheck"/>__

To enable the __AjaxSpellCheck__tool in List (Blog) scenario, open the __ListToolsFile.xml__file and add the following tag:__<tool name="AjaxSpellCheck"/>__
