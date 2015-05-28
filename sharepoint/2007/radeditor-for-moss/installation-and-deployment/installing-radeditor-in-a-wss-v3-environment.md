---
title: Installing RadEditor in a WSS v3 environment
page_title: Installing RadEditor in a WSS v3 environment | UI for ASP.NET AJAX Documentation
description: Installing RadEditor in a WSS v3 environment
slug: sharepoint/2007/radeditor-for-moss/installation-and-deployment/installing-radeditor-in-a-wss-v3-environment
tags: installing,radeditor,in,a,wss,v3,environment
published: True
position: 1
---

# Installing RadEditor in a WSS v3 environment





If you wish to install the RadEditor for MOSS in a WSS v3 environment, you need to follow the same deployment instructions as outlined in the [Installing RadEditor in a MOSS 2007 farm]({%slug sharepoint/2007/radeditor-for-moss/installation-and-deployment/installing-radeditor-in-a-moss-2007-farm%}) topic.

RadEditor for MOSS cannot be used as a Content field in Web Content Management (publishing) scenarios in WSS v3, since WCM is part of the MOSS 2007 product. Also, WSS has additional limitations, which need to be taken into account. The default rich text editor does not support Reusable Content and selecting images/hyperlinks, because these feature require the MOSS asset picker dialog. Therefore you will have to use the RadEditor built-in tools ImageManager, HyperlinkManager, TemplateManager instead of the MOSS specific MOSSImageManager, MOSSHyperlinkManager, and MOSSTemplateManager. If you try to use the MOSS specific tools in a WSS v3 webpart or list, you will get a client-side (JavaScript) exception, because the editor is not able to load the asset picker dialog. You can disable the MOSS specific tools by modifying RadEditor's tools file (ToolsFile.xml). See [Removing tools from the toolbar]({%slug sharepoint/2007/radeditor-for-moss/configuration/add/remove-tools-from-the-toolbar%}) for more information.
