---
title: Template Manager
page_title: Template Manager | UI for ASP.NET AJAX Documentation
description: Template Manager
slug: sharepoint/2010/radeditor-web-part/dialogs/template-manager
tags: template,manager
published: True
position: 5
---

# Template Manager

Functionality:

Using the Template Manager dialog the users of RadEditor can:

* **insert templates** in the editor's content area

* **upload new templates**, which will be available for inserting.

* **delete templates**

Properties to set: 

The behavior of the Template Manager dialog is controlled by the following properties:

* **TemplatePaths** - by using this property you can set which MOSS's libraries to be included into the TemplatePaths collection and shown in the Template Manager dialog. By default, all the libraries from the current site are included in the TemplatePaths collection. If you set the Template Path starting with "/" it will refer the sites collection root.

* **TemplateFilters** - a string array which contains the file extension filters that controls which files are shown in the Template Manager dialog. The `*` character can be used as a wildcard in the extension, for example `*.ht*` will match `*.htm*`, `*.html*` and any other extension which starts with `ht`.

* **MaxTemplateSize** - The maximum template file size in bytes, allowed for uploading. The default value is 2048000 bytes.

**For example:**

The files which properties need to be modified are **ConfigFile.xml / ListConfigFile.xml**, located in the following folder:

_/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/_

````XML
<configuration>
    ................
    <property name="TemplatePaths">
        <item>/RootSharedTemplates</item>
        <item>CurrentSiteLibraries/TemplateLibrary</item>
    </property>
    <property name="TemplateFilters">
        <item>*.ht*</item>
    </property>
    <property name="MaxTemplateSize">4096000</property>
</configuration>
````

>note Note that in SharePoint 2010 the Upload and Delete options depend on the current user's permissions for the desired library.

