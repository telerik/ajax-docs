---
title: Migrating default rich-text editor Web Parts
page_title: Migrating default rich-text editor Web Parts | UI for ASP.NET AJAX Documentation
description: Migrating default rich-text editor Web Parts
slug: sharepoint/2007/radeditor-for-moss/migration-and-upgrade/migrating-default-rich-text-editor-web-parts
tags: migrating,default,rich-text,editor,web,parts
published: True
position: 2
---

# Migrating default rich-text editor Web Parts



## 

In existing SharePoint 2007 applications you need to manually migrate the content of the default rich-text editor Web Part to Telerik RadEditor Web Part. Unfortunately, there is no supported way of doing that automatically.

For each page where you have a rich-text editor Web Part you have to perform the following:

1. Open the page for editing

1. Copy the content of a given rich-text editor Web Part

1. Delete this rich-text editor Web Part

1. Place a RadEditor Web Part on its place (as described in [Using the RadEditor WebPart]({%slug sharepoint/2007/radeditor-for-moss/installation-and-deployment/using-the-radeditor-webpart%}))

1. Paste to copied content inside the RadEditor Web Part and save it

1. Repeat steps b-e for all rich-text editor Web Parts on the page
