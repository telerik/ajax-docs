---
title: Document Manager
page_title: Document Manager
description: Check our Web Forms article about Document Manager.
slug: sharepoint/2010/radeditor-web-part/dialogs/document-manager
tags: document,manager
published: True
position: 3
---

# Document Manager

Functionality:

Using the Document Manager dialog the users of RadEditor can:

* **insert documents** in the editor's content area

* **upload new documents**, which will be available for inserting.

* **delete documents**

Properties to set: 

The behavior of the Document Manager dialog is controlled by the following properties:

* **DocumentsPaths** - by using this property you can set which MOSS's libraries to be included into the DocumentsPaths collection and shown in the Documents Manager dialog. By default, all the libraries from the current site are included in the DocumentsPaths collection. If you set the Documents Path starting with "/" it will refer the sites collection root.

* **DocumentsFilters** - a string array which contains the file extension filters that controls which files are shown in the Document Manager dialog. The `*` character can be used as a wildcard in the extension, for example `.do*` will match `.doc*`, `.docx` and any other extension which starts with `do`.

* **MaxDocumentSize** - The maximum document file size in bytes, allowed for uploading. The default value is 2048000 bytes.

**For example:**

The files which properties need to be modified are **ConfigFile.xml / ListConfigFile.xml**, located in the following folder:

_/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/_

````XML
<configuration> 
    ................ 
    <property name="DocumentsPaths"> 
         <item>/RootSharedDocuments</item>  
         <item>CurrentSiteLibraries/DocumentsLibrary</item> 
    </property> 
    <property name="DocumentsFilters">  
        <item>*.*</item> 
    </property> 
     <property name="MaxDocumentSize">4096000</property>
</configuration>
````

>note Note that in SharePoint 2010 the Upload and Delete options depend on the current user's permissions for the desired library.

