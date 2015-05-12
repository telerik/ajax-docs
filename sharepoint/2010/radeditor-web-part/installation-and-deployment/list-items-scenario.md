---
title: List Items Scenario
page_title: List Items Scenario | UI for ASP.NET AJAX Documentation
description: List Items Scenario
slug: sharepoint/2010/radeditor-web-part/installation-and-deployment/list-items-scenario
tags: list,items,scenario
published: True
position: 1
---

# List Items Scenario



## 

Most of the Office SharePoint Server features are represented as lists. For example, **Blogs**, **announcements**, etc. You can easily replace the editor in these cases with the RadEditor.

>note  **NOTE:** Once the RadEditor for SharePoint 2010 features are activated they will affect only the current site. You need to activate the RadEditor features for each site individually. If you want to change the scope of the features, see the following article - [Change the RadEditor features scope]({%slug sharepoint/2010/radeditor-web-part/configuration/change-the-radeditor-features-scope%})
>


1. From the **Site Actions** menu go to **Site Settings**
![](images/SP_Lists1_thumb.png)

1. Click **Manage site features** in the **Site Actions** column
![](images/SP_SiteFeatures_thumb.png)

1. Scroll to the bottom of the list and activate the **Use RadEditor to edit List Items** feature.
![](images/SP_SiteFeatures2_thumb.png)

1. **IMPORTANT!** If you still see the default editor or a simple textbox after you activate the RadEditor feature(s), you might need to open a command prompt window and type **iisreset** to reset the Internet Information Server. This will prevent problems caused by caching.

This screenshot below shows RadEditor used to edit a Task description.
![](images/SP_Lists4_thumb.png)

## See Also

 * [Getting Started]({%slug sharepoint/2010/radeditor-web-part/installation-and-deployment/getting-started%})

 * [Web Content Management Scenario]({%slug sharepoint/2010/radeditor-web-part/installation-and-deployment/web-content-management-scenario%})
