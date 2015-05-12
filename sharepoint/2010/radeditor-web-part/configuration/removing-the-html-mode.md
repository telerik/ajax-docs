---
title: Removing the HTML Mode
page_title: Removing the HTML Mode | UI for ASP.NET AJAX Documentation
description: Removing the HTML Mode
slug: sharepoint/2010/radeditor-web-part/configuration/removing-the-html-mode
tags: removing,the,html,mode
published: True
position: 3
---

# Removing the HTML Mode



## 

In certain cases you might want to remove user's ability for editing the HTML source directly.

Unlike the default rich-text editor, RadEditor for MOSS offer two different ways for switching into HTML source mode. One is through the Toggle Source button on the toolbar. The other is through the buttons below the content area (Design, HTML Source, and Preview modes).

**Content Editor Web Part and WCM (publishing) scenarios**

Open the MOSS editor's configuration file (e.g. \Program Files\Common Files\Microsoft Shared\web server extensions\wpresources\RadEditorSharePoint\6.x.x.0__1f131a624888eeed\Resources\ConfigFile.xml) and add the EditModes property:

`<property name="EditModes">Design,Preview</property>`

This will make the editor show only the design and preview buttons at the bottom. Note that for this property to work properly, you will need to have RadEditor for SharePoint 2010. If you have an older build, update to the latest version before you add the EditModes property.

**SharePoint forms scenario (Lists, Blogs, etc.)**

You need to modify the ListConfigFile.xml located in the same folder.
