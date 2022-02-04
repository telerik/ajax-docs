---
title: Using Different Configuration Files for Different SharePoint Sites
page_title: Using Different Configuration Files for Different SharePoint Sites
description: Check our Web Forms article about Using Different Configuration Files for Different SharePoint Sites.
slug: sharepoint/2010/radeditor-web-part/configuration/using-different-configuration-files-for-different-sharepoint-sites
tags: using,different,configuration,files,for,different,sharepoint,sites
published: True
position: 2
---

# Using Different Configuration Files for Different SharePoint Sites


 

It is possible to have unique configuration files (one for lists and one for web parts and publishing fields) for each SharePoint web on your server. Simply create a new configuration file and append the unique ID of the web to the file name. For example:

If your web has an UID *{a63cff5e-cdf5-48d0-898d-f9a24d299f06}*, then its custom configuration files should have the following names:

**ConfigFile{a63cff5e-cdf5-48d0-898d-f9a24d299f06}.xml**

**ListConfigFile{a63cff5e-cdf5-48d0-898d-f9a24d299f06}.xml**

**ToolsFile{a63cff5e-cdf5-48d0-898d-f9a24d299f06}.xml**

**ListToolsFile{a63cff5e-cdf5-48d0-898d-f9a24d299f06}.xml**

Note, that this approach is useful in web part and list scenarios. For the WCM scenario, you can already set the configuration files properties through SharePoint Designer - [Setting ConfigFile and ToolsFile properties for the WCM field]({%slug sharepoint/2007/radeditor-for-moss/configuration/setting-configfile-and-toolsfile-properties-for-the-wcm-field%})

If you do not know the UID of the SharePoint web, we offer a simple way to get it using RadEditor for MOSS. Look at the following article for more information - [Frequently Asked Questions]({%slug sharepoint/2010/radeditor-web-part/frequently-asked-questions%})
