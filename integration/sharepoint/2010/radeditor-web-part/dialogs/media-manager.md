---
title: Media Manager
page_title: Media Manager
description: Check our Web Forms article about Media Manager.
slug: sharepoint/2010/radeditor-web-part/dialogs/media-manager
tags: media,manager
published: True
position: 4
---

# Media Manager

>caution Telerik Web Parts for SharePoint 2010 last build was R1 2023 SP2 and is discontinued since then.

Functionality:

Using the Media Manager dialog the users of RadEditor can:

* **insert media** in the editor's content area

* **upload new media**, which will be available for inserting.

* **delete media**

Properties to set: 

The behavior of the Media Manager dialog is controlled by the following properties:

* **MediaPaths** - by using this property you can set which MOSS's libraries to be included into the MediaPaths collection and shown in the Media Manager dialog. By default, all the libraries from the current site are included in the MediaPaths collection. If you set the Media Path starting with "/" it will refer the sites collection root.

* **MediaFilters** - a string array which contains the file extension filters that controls which files are shown in the Media Manager dialog. The `*` character can be used as a wildcard in the extension, for example `*.mp*` will match `*.mpeg*` and any other extension which starts with `mp`.

* **MaxMediaSize** - The maximum media file size in bytes, allowed for uploading. The default value is 2048000 bytes.

**For example:**

The files which properties need to be modified are **ConfigFile.xml / ListConfigFile.xml**, located in the following folder:

_/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/_

````XML
<configuration>
    ................
    <property name="MediaPaths">
     <item>/RootSharedMedia</item>
     <item>CurrentSiteLibraries/MediaLibrary</item>
    </property>
    <property name="MediaFilters">
     <item>*.*</item>
    </property>
    <property name="MaxMediaSize">4096000</property>
</configuration>
````

>note Note that in SharePoint 2010 the Upload and Delete options depend on the current user's permissions for the desired library.


