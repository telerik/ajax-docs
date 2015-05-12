---
title: Disable automatic Approval / Publishing of uploaded files
page_title: Disable automatic Approval / Publishing of uploaded files | UI for ASP.NET AJAX Documentation
description: Disable automatic Approval / Publishing of uploaded files
slug: sharepoint/2007/radeditor-for-moss/configuration/disable-automatic-approval-/-publishing-of-uploaded-files
tags: disable,automatic,approval,/,publishing,of,uploaded,files
published: True
position: 8
---

# Disable automatic Approval / Publishing of uploaded files



## 

Till 5.7.0 version of RadEditor for MOSS, if a library is set to support content approval or to create a version each time you edit a file, all the files uploaded through the RadEditor for MOSS dialogs provided by Telerik, are Approved respectively Published.

In 5.7.0 version of RadEditor for MOSS the user can control this behavior by setting the **SPOptions-EnableAutomaticApprove** and **SPOptions-EnableAutomaticPublish** properties to true or false.

In order to disable automatic Approval / Publishing of uploaded files you need to modify the**ConfigFile.xml**, which is located in the **/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0**1f131a624888eeed/Resources/**folder.

Add the following code:

````XML
	    <property name="SPOptions-EnableAutomaticApprove">false</property>
	    <property name="SPOptions-EnableAutomaticPublish">false</property>
````



## SharePoint forms scenario (Lists, Wikis, Blogs, etc.)

You need to modify the**ListConfigFile.xml**located in the same folder.
