---
title: Removing the HTML source option
page_title: Removing the HTML source option | UI for ASP.NET AJAX Documentation
description: Removing the HTML source option
slug: sharepoint/2007/radeditor-for-moss/configuration/removing-the-html-source-option
tags: removing,the,html,source,option
published: True
position: 5
---

# Removing the HTML source option



## 

In certain cases you might want to remove user's ability for editing the HTML source directly.

Unlike the default rich-text editor, RadEditor for MOSS offer two different ways for switching into HTML source mode. One is through the Toggle Source button on the toolbar. The other is through the buttons below the content area (Design, HTML Source, and Preview modes).

__Content Editor Web Part and WCM (publishing) scenarios__

Open the MOSS editor's configuration file (e.g. \Program Files\Common Files\Microsoft Shared\web server extensions\wpresources\RadEditorSharePoint\5.x.x.0__1f131a624888eeed\Resources\ConfigFile.xml) and add the EditModes property:

<property name="EditModes">Design,Preview</property>

This will make the editor show only the design and preview buttons at the bottom. Note that for this property to work properly, you will need to have MOSS editor (v5.10 +). If you have an older build, update to the latest version before you add the EditModes property.

__SharePoint forms scenario (Lists, Wikis, Blogs, etc.)__

You need to modify the ListConfigFile.xml located in the same folder.
