---
title: Resolving ASP.NET Ajax Client-Side Framework Load Failure
description: Learn how to fix the "ASP.NET Ajax client-side framework failed to load" error in RadAjax for ASP.NET AJAX applications.
type: troubleshooting
page_title: How to Fix ASP.NET Ajax Client-Side Framework Load Failure in RadAjax Applications
slug: common-resolve-aspnet-ajax-client-side-framework-load-failure
tags: radajax, asp.net ajax, client-side framework, load failure, web.config, scriptmanager
res_type: kb
ticketid: 274835
---

## Environment

| Product | Version |
| --- | --- |
| Telerik UI for ASP.NET AJAX | all |

## Description

When updating Telerik.Web.UI.dll to a newer version in an ASP.NET application, the error "ASP.NET Ajax client-side framework failed to load" appears in the browser. This problem occurs in various scenarios, including the use of forms authentication or URL rewriting tools like Intelligencia.UrlRewriter.dll.

This KB article also answers the following questions:
- How can I fix the "ASP.NET Ajax client-side framework failed to load" error after updating Telerik.Web.UI.dll?
- Why does the ASP.NET Ajax client-side framework fail to load with certain versions of Telerik.Web.UI.dll?
- What configuration changes can resolve the ASP.NET Ajax client-side framework load failure?
- Why I am getting these JS errors: 
  - ASP.NET Ajax client-side framework failed to load
  - 'Sys' is undefined
  - “Telerik.Web.UI” is undefined

## Solution

To resolve the "ASP.NET Ajax client-side framework failed to load" error, follow these steps:

1. **Allow Access to Telerik Handlers**: Add a `<location>` section in your `web.config` file to explicitly allow access to the `Telerik.Web.UI.WebResource.axd` handler for all users. This is particularly important when using forms authentication or when your application restricts access to unauthorized users.

   ```xml
   <configuration>
   ...
   <location path="Telerik.Web.UI.WebResource.axd">
     <system.web>
       <authorization>
         <allow users="*"/>
       </authorization>
     </system.web>
   </location>
   ...
   </configuration>
   ```

2. **Disable Script Combination**: If using `RadScriptManager`, set the `EnableScriptCombine` property to `false`. This step is essential if the Telerik handler cannot combine scripts in certain versions.

   ```xml
   <telerik:RadScriptManager runat="server" EnablePageMethods="True" EnableScriptCombine="false"></telerik:RadScriptManager>
   ```

3. **Ensure Proper Configuration**: Verify that your `web.config` has the required HTTP handlers and modules configured correctly. Also, ensure that your server meets all [Telerik UI for ASP.NET AJAX prerequisites](http://docs.telerik.com/devtools/aspnet-ajax/general-information/adding-the-telerik-controls-to-your-project), including the installation of the MS AJAX framework.

4. **Upgrade Telerik.Web.UI.dll**: If problems persist, consider upgrading your Telerik.Web.UI.dll to a later version that targets .NET 4.6.2 or newer, especially if your application has been upgraded to .NET 4.6.2 or higher. This step is crucial for compatibility with modern browsers and frameworks.

5. **Check for URL Rewriters**: If using URL rewriting tools like Intelligencia.UrlRewriter.dll, ensure they are configured to allow AJAX calls to proceed correctly. Incompatibilities between certain Telerik.Web.UI.dll versions and URL rewriting tools can cause the AJAX framework to fail to load.

## Suggested Workarounds

- If specific solutions do not resolve the issue, isolate the problem in a runnable sample project and submit a support ticket with Telerik for further assistance.

## Notes

The error "ASP.NET Ajax client-side framework failed to load" can occur for various reasons, including JavaScript errors, permission issues, and improper configuration. The suggested solutions target the most common causes.

## See Also

- [Adding the Telerik Controls to Your Project](http://docs.telerik.com/devtools/aspnet-ajax/general-information/adding-the-telerik-controls-to-your-project)
- [Web.config Settings Overview](http://docs.telerik.com/devtools/aspnet-ajax/general-information/web-config-settings-overview#mandatory-additions-to-the-webconfig)
- [Deploying a Telerik-Enabled Web Application](http://docs.telerik.com/devtools/aspnet-ajax/deployment/deploying-a-telerik-enabled-webapplication)
- [Web.config registration missing! The Telerik dialogs require a HttpHandler registration in the web.config file](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/editor-error-web-config-registration-missing-the-telerik-dialogs-require-a-httphandler-registration-in-the-web-config-file)
 
