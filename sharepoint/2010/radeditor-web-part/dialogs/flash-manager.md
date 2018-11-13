---
title: Flash Manager
page_title: Flash Manager | UI for ASP.NET AJAX Documentation
description: Flash Manager
slug: sharepoint/2010/radeditor-web-part/dialogs/flash-manager
tags: flash,manager
published: True
position: 6
---

# Flash Manager

Functionality:

Using the Flash Manager dialog the users of RadEditor can:

* **insert flash** in the editor's content area

* **upload new flash**, which will be available for inserting.

* **delete flash**

Properties to set: 

The behavior of the Flash Manager dialog is controlled by the following properties:

* **FlashPaths** - by using this property you can set which MOSS's libraries to be included into the FlashPaths collection and shown in the Flash Manager dialog. By default, all the libraries from the current site are included in the FlashPaths collection. If you set the Flash Path starting with "/" it will refer the sites collection root.

* **FlashFilters** - a string array which contains the file extension filters that controls which files are shown in the Flash Manager dialog. The `*` character can be used as a wildcard in the extension, for example `.sw*` will match `.swf*` and any other extension which starts with **sw**.

* **MaxFlashSize** - The maximum flash file size in bytes, allowed for uploading. The default value is 2048000 bytes.

**For example:**

The files which properties need to be modified are **ConfigFile.xml / ListConfigFile.xml**, located in the following folder:

_/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/_

````XML
<configuration> 
    ................ 
    <property name="FlashPaths">     
        <item>/RootSharedFlash</item>  
        <item>CurrentSiteLibraries/FlashLibrary</item> 
    </property> 
    <property name="FlashFilters">  
        <item>*.sw*</item> 
    </property> 
    <property name="MaxFlashSize">4096000</property>
</configuration>
````

>note Note that in SharePoint 2010 the Upload and Delete options depend on the current user's permissions for the desired library.

