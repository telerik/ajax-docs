---
title: SharePoint Configuration 
page_title: SharePoint Configuration - RadProgressArea
description: Check our Web Forms article about SharePoint Configuration.
slug: progressarea/how-to/sharepoint-configuration
tags: sharepoint,configuration
published: True
position: 1
---

# SharePoint Configuration

This article explains the configuration needed, in order for the **RadProgressArea** to work in SharePoint.

The **RadProgressArea** would not work correctly in SharePoint if there is a **RadUploadModule** declaration in the project's web.config, so if such is present it must be removed:

````XML
<modules>
  <add name="RadUploadModule" preCondition="integratedMode" type="Telerik.Web.UI.RadUploadHttpModule" />
</modules>
````

