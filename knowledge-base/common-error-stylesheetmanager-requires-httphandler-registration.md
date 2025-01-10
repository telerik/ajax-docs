---
title: "Error: '~/Telerik.Web.UI.WebResource.axd' is missing in web.config. RadStyleSheetManager requires a HttpHandler registration in web.config."
description: "Error: '~/Telerik.Web.UI.WebResource.axd' is missing in web.config. RadStyleSheetManager requires a HttpHandler registration in web.config."
type: troubleshooting
page_title: "Error: '~/Telerik.Web.UI.WebResource.axd' is missing in web.config. RadStyleSheetManager requires a HttpHandler registration in web.config."
slug: common-error-stylesheetmanager-requires-httphandler-registration
position: 
tags: 
ticketid: 1542613
res_type: kb
---

## Description

Getting the below error:

***~/Telerik.Web.UI.WebResource.axd' is missing in web.config. RadStyleSheetManager requires a HttpHandler registration in web.config. Please, use the control Smart Tag to add the handler automatically, or see the help for more information: Controls > RadStyleSheetManager***

## Solution

Below are the common troubleshooting steps to solve this error:

- Remove [RadCompression]({%slug controls/radcompression%}) (if enabled) as it is deprecated.

- Try setting the **EnableHandlerDetection** property to false for the **RadStyleSheetManager** and the **RadScriptManager** as it may be that simply the application pool user is not allowed to read the web.config and thus the check fails even if the handler will actually work:

````ASP.NET
<telerik:RadScriptManager ID="ScriptManager1" runat="server" EnableHandlerDetection="false">
</telerik:RadScriptManager>

<telerik:RadStyleSheetManager runat="server" ID="RadStyleSheetManager1" EnableHandlerDetection="false">
</telerik:RadStyleSheetManager>
````

- Review the following article in case the webresource requests themselves break, the most common reason is that authentication blocks them and you'd need to add <location> elements to allow it. Link: [Web Resources Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%})

````ASP.NET
<configuration>
    <location path="Telerik.Web.UI.WebResource.axd">
    <system.web>
        <authorization>
        <allow users="*"/>
        </authorization>
    </system.web>
    </location>
</configuration>
````

- Check for any nested web.config files
- IIS Application Pool Settings - In some cases, issues arise due to IIS application pool settings. Specifically, the enableConfigurationOverride property, if set to false, prevents the application from reading or overriding settings in the web.config file. This can block the registration of HTTP handlers like Telerik.Web.UI.WebResource.axd.
    Steps to Resolve:
    - Verify the enableConfigurationOverride setting in the IIS configuration file (applicationHost.config).
    - Ensure it is set to true.
    
    Location of applicationHost.config:
    - %WINDIR%\System32\inetsrv\Config
    - %WINDIR%\SysWOW64\inetsrv\Config
 >Tip: Consult with your server administrator before modifying the applicationHost.config file to avoid unintended consequences.

- Examine this forum discussion on the topic:
        - https://www.telerik.com/forums/telerik-web-ui-webresource-axd-is-missing-in-web-config 

## See Also

* [Error: Web.config registration missing! The Telerik dialogs require a HttpHandler registration in the web.config file.
]({%slug editor-error-web-config-registration-missing-the-telerik-dialogs-require-a-httphandler-registration-in-the-web-config-file%})

