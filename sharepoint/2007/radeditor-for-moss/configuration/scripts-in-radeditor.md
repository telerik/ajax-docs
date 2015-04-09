---
title: Scripts in RadEditor
page_title: Scripts in RadEditor | UI for ASP.NET AJAX Documentation
description: Scripts in RadEditor
slug: sharepoint/2007/radeditor-for-moss/configuration/scripts-in-radeditor
tags: scripts,in,radeditor
published: True
position: 7
---

# Scripts in RadEditor



## 

Please review bellow how to enable the use of Scriptswhen using RadEditor for MOSS:

* __In WebPart scenario__Set (add if not present) the __AllowScripts__ property to __true__ in [ConfigFile.xml]({%slug sharepoint/2007/radeditor-for-moss/configuration/set-properties-via-config-file%})

* __In WCM scenario__This feature is available only if you have replaced the original editor through SharePoint Designer. If you are using 5.5.1 or newer version of RadEditor for MOSS, set the he __AllowScripts__ and __AllowSpecialTags__ properties to __true__ in the current page using SharePoint Designer, otherwise set (add if not present) the __AllowScripts__property to true in [ConfigFile.xml]({%slug sharepoint/2007/radeditor-for-moss/configuration/set-properties-via-config-file%}) and __AllowSpecialTags__in the the current page using SharePoint Designer.

* __In SharePoint forms scenario (Lists, Wikis, Blogs, etc.)__You cannot use JavaScript in RadEditor in such scenario. There RadEditor does not have control over the presentation view which means that we cannot control the output when it is not in edit mode.
