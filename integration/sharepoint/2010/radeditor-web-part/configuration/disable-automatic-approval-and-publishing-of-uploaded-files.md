---
title: Disable Automatic Approval and Publishing of Uploaded Files
page_title: Disable Automatic Approval and Publishing of Uploaded Files
description: Check our Web Forms article about Disable Automatic Approval and Publishing of Uploaded Files.
slug: sharepoint/2010/radeditor-web-part/configuration/disable-automatic-approval-and-publishing-of-uploaded-files
tags: disable,automatic,approval,and,publishing,of,uploaded,files
published: True
position: 9
---

# Disable Automatic Approval and Publishing of Uploaded Files



In SharePoint 2010, if a library is set to support content approval or to create a version each time you edit a file, all the files uploaded through the RadEditor for SP2010's dialogs (provided by Telerik), are Approved respectively Published.

The user can control this behavior by setting the **SPOptions-EnableAutomaticApprove** and **SPOptions-EnableAutomaticPublish** properties to true or false.

In order to disable automatic Approval / Publishing of uploaded files you need to modify the**ConfigFile.xml**, which is located in the **/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/** folder.

Add the following code:

````XML
<property name="SPOptions-EnableAutomaticApprove">false</property>
<property name="SPOptions-EnableAutomaticPublish">false</property>
````

## SharePoint forms scenario (Lists, Blogs, etc.)

You need to modify the **ListConfigFile.xml** located in the same folder.
