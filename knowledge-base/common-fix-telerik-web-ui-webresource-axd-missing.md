---
title: Resolving Telerik.Web.UI.WebResource.ax is Missing in web.config for RadScriptManager
description: This article provides solutions for an issue where Telerik.Web.UI.WebResource.axd is missing in web.config when using RadScriptManager in ASP.NET AJAX applications.
type: troubleshooting
page_title: How to Fix Telerik.Web.UI.WebResource.axd is Missing Issue in ASP.NET AJAX
slug: common-fix-telerik-web-ui-webresource-axd-missing
tags: radscriptmanager, web.config, asp.net ajax, webresource.axd, troubleshooting
res_type: kb
ticketid: 1654071
---

## Environment

| Product | Version |
| --- | --- |
| RadScriptManager for ASP.NET AJAX | all |

## Description

I am encountering an issue where an application folder under a Website is not able to serve up a Telerik control. On the same server, Telerik is successfully configured to run on other applications under the same Website with no issues. The `Telerik.Web.UI.WebResource.axd` seems to be missing in the web.config, even though the web.config appears to be correctly configured. 

## Cause

The issue may arise due to several reasons including incorrect web.config configuration, the `EnableHandlerDetection` property set to `true` in RadScriptManager, authentication blocking webresource requests, nested web.config files overriding settings, or the use of deprecated RadCompression. In some cases, the application pool user may not have the required permissions to read the web.config, causing the handler check to fail.

## Solution

- Set the `EnableHandlerDetection` property to `false` for both `RadScriptManager` and `RadStyleSheetManager` to ensure that the application pool user's permission issues do not cause the handler check to fail.

  ```xml
  <telerik:RadScriptManager ID="ScriptManager1" runat="server" EnableHandlerDetection="false">
  </telerik:RadScriptManager>
  <telerik:RadStyleSheetManager runat="server" ID="RadStyleSheetManager1" EnableHandlerDetection="false">
  </telerik:RadStyleSheetManager>
  ```

- Replace `RadScriptManager` with `asp:ScriptManager` if the issue persists specifically with `RadScriptManager`.

- Add `<location>` elements in the web.config to allow authentication for webresource requests:

  ```xml
  <location path="Telerik.Web.UI.WebResource.axd">
    <system.web>
      <authorization>
        <allow users="*"/>
      </authorization>
    </system.web>
  </location>
  ```

- Check for nested web.config files that might be overriding the settings.

- If using RadCompression, consider removing it as it is deprecated.

## Suggested Workarounds

Switching to `asp:ScriptManager` from `RadScriptManager` as a temporary workaround can resolve the issue. However, identifying the root cause based on the solutions provided above is recommended for a permanent fix.

## Notes

Ensure that no nested web.config files or IIS configurations are inadvertently affecting the Telerik controls' functioning. Reviewing IIS settings and application pool configurations may also provide insights into the issue.

## See Also

- [Web Resources Troubleshooting](https://docs.telerik.com/devtools/aspnet-ajax/general-information/troubleshooting/web-resources-troubleshooting)
- [RadCompression Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/radcompression)
