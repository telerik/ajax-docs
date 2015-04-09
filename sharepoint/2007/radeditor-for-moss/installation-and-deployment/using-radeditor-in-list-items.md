---
title: Using RadEditor in List Items
page_title: Using RadEditor in List Items | UI for ASP.NET AJAX Documentation
description: Using RadEditor in List Items
slug: sharepoint/2007/radeditor-for-moss/installation-and-deployment/using-radeditor-in-list-items
tags: using,radeditor,in,list,items
published: True
position: 3
---

# Using RadEditor in List Items



## 

Most of the Office SharePoint Server features are represented as lists. For example, __Wiki content__, __Blogs__, __announcements__, etc. You can easily replace the editor in these cases with the RadEditor.

>note  __NOTE:__ Once the RadEditor for MOSS features are activated they will affect only the current site. You need to activate the RadEditor features for each site individually. If you want to change the scope of the features, see the following article -[Change the RadEditor features scope]({%slug sharepoint/2007/radeditor-for-moss/configuration/change-the-radeditor-features-scope%})
>


1. From the __Site Actions__ menu go to __Site Settings > Modify All Site Settings__
>caption 

![](images/4_Lists1_thumb.png)![](images/hs_enlarge.gif)

1. Click Site features in the Site Administration column
>caption 

![](images/SiteFeaturesMoss_thumb.png)

1. Scroll to the bottom of the list and activate the __Use RadEditor to edit List Items__ feature.
>caption 

![](images/SiteFeaturesMoss2_thumb.png)

1. __IMPORTANT!__ If you still see the default editor or a simple textbox after you activate the RadEditor feature(s), you might need to open a command prompt window and type __iisreset__ to reset the Internet Information Server. This will prevent problems caused by caching.This screenshot below shows RadEditor used to edit a Task description:
>caption 

![](images/4_Lists4_thumb.png)

# See Also

 * [Using the RadEditor WebPart]({%slug sharepoint/2007/radeditor-for-moss/installation-and-deployment/using-the-radeditor-webpart%})

 * [Using RadEditor in Web Content Management scenario]({%slug sharepoint/2007/radeditor-for-moss/installation-and-deployment/using-radeditor-in-web-content-management-scenario%})
