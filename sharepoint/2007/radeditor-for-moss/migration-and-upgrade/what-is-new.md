---
title: What's new
page_title: What's new? - RadEditor for MOSS Documentation
description: Check our Web Forms article about What's new in RadEditor for MOSS.
slug: sharepoint/2007/radeditor-for-moss/migration-and-upgrade/what-is-new
tags: what's, new,radeditor,for,moss
published: True
position: 0
---

# What's new?

RadEditor v5.x for MOSS is a modified version of the Telerik RadEditor for ASP.NET AJAX. The most important change from version 4.x is the addition of a new site feature for publishing fields and the removal of the IE specific feature for lists. Here is what the current set of features offers:

* The **Rich Text** feature is used to **enable/disable** the editor in **SharePoint Lists** (wiki, blogs, etc.). Note that the feature will now enable the editor on all browsers. This is different from the 4.x version of the editor, which had two features for SharePoint lists - one for Internet Explorer and one for all other browsers. 

* The **Rich HTML** feature is intended to replace the default editor in the **WCM scenario** (the Page Content field in publishing pages). Once you activate the feature on a publishing site, all rich html fields on the site will be using RadEditor. When you deactivate the feature, the fields will switch back to the original editor. This feature has been added so a SharePoint developer will not need to modify each page on the publishing site and replace the content field manually.

## What's new in Telerik RadEditor for MOSS v5.7.0

* Added new properties to the **MOSSRadEditor-SPOptions-EnableAutomaticApprove**, **SPOptions-EnableAutomaticPublish**. If a library is set to support content approval or to create a version each time you edit a file, all the files ,uploaded through the RadEditor for MOSS dialogs provided by Telerik, are Approved respectively Published. The user can control this behavior by setting the **SPOptions-EnableAutomaticApprove** and **SPOptions-EnableAutomaticPublish** properties to **true** or **false**.

## What's new in Telerik RadEditor for MOSS v5.6.0

* Added a new property to the *RadHtmlField - AllowScripts*. Should be set in tandem with *AllowSpecialTags* from SharePoint Designer to allow `<script>` tags in the editor content area
