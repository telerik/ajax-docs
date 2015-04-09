---
title: Different configuration files for different webs
page_title: Different configuration files for different webs | UI for ASP.NET AJAX Documentation
description: Different configuration files for different webs
slug: sharepoint/2007/radeditor-for-moss/configuration/different-configuration-files-for-different-webs
tags: different,configuration,files,for,different,webs
published: True
position: 3
---

# Different configuration files for different webs



## 

It is possible to have unique configuration files (one for lists and one for web parts and publishing fields) for each SharePoint web on your server. Simply create a new configuration file and append the unique ID of the web to the file name. For example:

If your web has an UID *{a63cff5e-cdf5-48d0-898d-f9a24d299f06}*, then its custom configuration files should have the following names:

__ConfigFile{a63cff5e-cdf5-48d0-898d-f9a24d299f06}.xml__

__ListConfigFile{a63cff5e-cdf5-48d0-898d-f9a24d299f06}.xml__

__ToolsFile{a63cff5e-cdf5-48d0-898d-f9a24d299f06}.xml__

__ListToolsFile{a63cff5e-cdf5-48d0-898d-f9a24d299f06}.xml__

Note, that this approach is useful in web part and list scenarios. For the WCM scenario, you can already set the configuration files properties through SharePoint Designer - [Setting ConfigFile and ToolsFile properties for the WCM field]({%slug sharepoint/2007/radeditor-for-moss/configuration/setting-configfile-and-toolsfile-properties-for-the-wcm-field%})



If you do not know the UID of the SharePoint web, we offer a simple way to get it using RadEditor for MOSS. Look at the following article for more information - [Frequently Asked Questions]({%slug sharepoint/2007/radeditor-for-moss/frequently-asked-questions%})
