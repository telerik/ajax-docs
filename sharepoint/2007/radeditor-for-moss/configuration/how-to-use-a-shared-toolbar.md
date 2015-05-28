---
title: How to use a Shared Toolbar
page_title: How to use a Shared Toolbar | UI for ASP.NET AJAX Documentation
description: How to use a Shared Toolbar
slug: sharepoint/2007/radeditor-for-moss/configuration/how-to-use-a-shared-toolbar
tags: how,to,use,a,shared,toolbar
published: True
position: 6
---

# How to use a Shared Toolbar

The new RadEditor for MOSS 5.x has a feature, which can improve load times on pages with two or more active editors of the same type. For example, if you have a publishing layout with more than one content field and all HTML content fields have the same configuration. Another example of many editors is a list with two or more fields of type "Multiple lines of text".

If you want to take advantage of the shared toolbar feature, you simply need to set the **UseSharedToolbar** editor property to **True** in the configuration file (see [Set Properties Via Config File]({%slug sharepoint/2007/radeditor-for-moss/configuration/set-properties-via-config-file%})):

`<property name="UseSharedToolbar">true</property>`

After you set the property to true, the editor will automatically check if there are multiple instances of the same type when loading a page and will optimize the HTML output. Note that using a shared toolbar means that all editors of a particular type (e.g. all publishing fields) will have the same configuration (same tools file and same configuration file). This should lead to an improvement in HTML size of about 5-7 KB for each editor instance after the first one.

If you want to further improve the loading time of the page, make sure that the editor toolbar mode is not Default - i.e. use ShowOnFocus or PageTop:

`<property name="ToolbarMode">PageTop</property>`

This way each editor's toolbar will be initialized only after you click in its content area and not when the page loads.
