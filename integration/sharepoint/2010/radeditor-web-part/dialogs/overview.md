---
title: Overview
page_title: SharePoint Editor Dialogs Overview
description: Check our Web Forms article about SharePoint Editor Dialogs Overview.
slug: sharepoint/2010/radeditor-web-part/dialogs/overview
tags: editor,dialogs,sharepoint,overview,tool,name
published: True
position: 0
---

# Overview

The Telerik RadEditor SharePoint Web Part provides several file management dialogs. This article lists them and their tool names.

Some of these dialogs use the built-in SharePoint libraries and lists through a custom content provider that is in the Telerik Web Part code. Others rely on the built-in SharePoint dialogs:

* [Image Manager]({%slug sharepoint/2010/radeditor-web-part/dialogs/image-manager%})—by default uses a custom content provider. If you need to [create your own ToolsFile]({%slug sharepoint/2010/radeditor-web-part/configuration/add-and-remove-tools-from-the-toolbar%}), the tool name for it is **ImageManager**. You can use the original SharePoint dialog instead through the **SPImageManager** tool name.

* [Document Manager]({%slug sharepoint/2010/radeditor-web-part/dialogs/document-manager%})—uses the original SharePoint dialog through the **SPLinkManager** tool name.

* [Template Manager]({%slug sharepoint/2010/radeditor-web-part/dialogs/template-manager%})—uses the original SharePoint dialog for the reusable content list through the **SPTemplateManager** tool name.

* [Flash Manager]({%slug sharepoint/2010/radeditor-web-part/dialogs/flash-manager%})—lets you insert flash files in the content area from a shared folder. The tool name is **FlashManager**. Uses a custom content provider.

* [Media Manager]({%slug sharepoint/2010/radeditor-web-part/dialogs/media-manager%})—lets you insert video files in the content area from a shared folder. The tool name is **MediaManager**. Uses a custom content provider.

## See Also

* [Add and Remove Tools from the Toolbar]({%slug sharepoint/2010/radeditor-web-part/configuration/add-and-remove-tools-from-the-toolbar%})
