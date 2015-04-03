---
title: Migrating Default Rich-text Editor Web Parts
page_title: Migrating Default Rich-text Editor Web Parts | UI for ASP.NET AJAX Documentation
description: Migrating Default Rich-text Editor Web Parts
slug: moss/sharepoint-2010/radeditor-web-part/migration-and-upgrade/migrating-default-rich-text-editor-web-parts
tags: migrating,default,rich-text,editor,web,parts
published: True
position: 0
---

# Migrating Default Rich-text Editor Web Parts



## 

In existing SharePoint 2010 applications you need to manually migrate the content of the default rich-text editor Web Part to Telerik RadEditor Web Part. Unfortunately, there is no supported way of doing that automatically.

For each page where you have a rich-text editor Web Part you have to perform the following:

1. Open the page for editing

1. Copy the content of a given rich-text editor Web Part

1. Delete this rich-text editor Web Part

1. Place a RadEditor Web Part on its place (as described in [Using the RadEditor WebPart]({%slug moss/sharepoint-2010/radeditor-web-part/installation-and-deployment/getting-started%}))

1. Paste to copied content inside the RadEditor Web Part and save it

1. Repeat steps b-e for all rich-text editor Web Parts on the page
