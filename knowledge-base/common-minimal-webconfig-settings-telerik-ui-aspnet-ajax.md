---
title: Configuring the Minimal Web.config for Telerik UI for ASP.NET AJAX
description: Learn how to configure the minimal necessary settings in the web.config file for optimal performance and functionality of Telerik UI for ASP.NET AJAX controls in a WebForms application.
type: troubleshooting
page_title: Minimal Web.config Settings for Telerik UI for ASP.NET AJAX
slug: common-minimal-webconfig-settings-telerik-ui-aspnet-ajax
tags: asp.net ajax, web.config, default, settings
res_type: kb
---

## Environment
| Product | Version |
|---------|---------|
| Telerik UI for ASP.NET AJAX | all |

## Description
When setting up a new project with Telerik UI for ASP.NET AJAX, it is essential to configure the web.config file to ensure the controls work correctly and efficiently. The configuration detailed here outlines the minimal settings required to use Telerik UI for ASP.NET AJAX controls in an ASP.NET WebForms application. This setup ensures your application leverages Telerik's AJAX controls with optimized performance and functionality, utilizing the default settings from a Telerik Visual Studio (VS) project template.


## Solution

The minimal necessary configuration in the web.config file includes settings in the <appSettings>, <system.web>, and <system.webServer> sections as follows:

- AppSettings: Defines global settings such as the default skin for controls, disabling CDN for scripts and styles, and setting the render mode to lightweight for better performance and modularity.
- System.Web:
   - Compilation and HTTP Runtime: Specifies the target .NET framework version for compilation and runtime.
   - Pages: Registers the Telerik.Web.UI namespace and assembly to enable the use of Telerik AJAX controls in your pages.
   - HTTP Handlers: Configures handlers for various functionalities like chart image rendering, spell checking, dialog handling, upload progress, and serving embedded resources.
- System.WebServer:
   - Validation: Disables validation for integrated mode configuration to avoid errors in IIS 7.x or above.
    - Handlers: Similar to the httpHandlers in <system.web>, but specifically for IIS 7.x integrated mode. It involves removing existing handlers and adding new ones for Telerik functionalities to work correctly in an integrated pipeline mode.

````XML
<?xml version="1.0"?>
<configuration>
    <appSettings>
        <add key="Telerik.Skin" value="Bootstrap" />
        <add key="Telerik.ScriptManager.TelerikCdn" value="Disabled" />
        <add key="Telerik.StyleSheetManager.TelerikCdn" value="Disabled" />
		<add key="Telerik.Web.UI.RenderMode" value="lightweight" />
    </appSettings>
    <system.web>
        <compilation debug="false" targetFramework="4.8.1" />
        <httpRuntime targetFramework="4.8.1" />
        <pages>
            <controls>
                <add tagPrefix="telerik" namespace="Telerik.Web.UI" assembly="Telerik.Web.UI" />
            </controls>
        </pages>
        <httpHandlers>
			<add path="Telerik.Web.UI.SpellCheckHandler.axd" type="Telerik.Web.UI.SpellCheckHandler" verb="*" validate="false" />
			<add path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" verb="*" validate="false" />
			<add path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler" verb="*" validate="false" />
			<add path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" validate="false" />
        </httpHandlers>
    </system.web>

    <system.webServer>
        <validation validateIntegratedModeConfiguration="false" />
        <handlers>
			<remove name="Telerik_Web_UI_SpellCheckHandler_axd" />
			<add name="Telerik_Web_UI_SpellCheckHandler_axd" path="Telerik.Web.UI.SpellCheckHandler.axd" type="Telerik.Web.UI.SpellCheckHandler" verb="*" preCondition="integratedMode" />
			<remove name="Telerik_Web_UI_DialogHandler_aspx" />
			<add name="Telerik_Web_UI_DialogHandler_aspx" path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" verb="*" preCondition="integratedMode" />
			<remove name="Telerik_RadUploadProgressHandler_ashx" />
			<add name="Telerik_RadUploadProgressHandler_ashx" path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler" verb="*" preCondition="integratedMode" />
			<remove name="Telerik_Web_UI_WebResource_axd" />
			<add name="Telerik_Web_UI_WebResource_axd" path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" preCondition="integratedMode" />
        </handlers>
    </system.webServer>
</configuration>
````

This configuration ensures that your ASP.NET application is primed to utilize the Telerik UI for ASP.NET AJAX controls efficiently, with settings optimized for performance and compatibility.

## See Also
- [Web.config Settings Overview](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/installation/web-config-settings-overview)
- [Configuring Mandatory Additions](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/installation/web-config-settings-overview#configuring-mandatory-additions)
- [Security](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/work-with-controls/security)
  
  
