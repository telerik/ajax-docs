---
title: Preventing Google from Indexing Multiple Telerik.Web.UI.WebResource.axd
description: Learn how to prevent search engines from indexing multiple instances of the Telerik.Web.UI.WebResource.axd file.
type: how-to
page_title: Preventing Google from Indexing Multiple Telerik.Web.UI.WebResource.axd
slug: common-preventing-google-indexing-multiple-telerik-web-ui-web-resource-axd
tags: how-to, Google, indexing, Telerik.Web.UI.WebResource.axd, prevent
res_type: kb
---

## Environment
| Property | Value |
|----------|-------|
| Product | Progress® Telerik® UI for ASP.NET AJAX |
| Version | all|

## Problem
I want to prevent search engines, particularly Google, from indexing multiple instances of the Telerik.Web.UI.WebResource.axd file with different parameter values. However, when I view the pages on the site using 'View Page Source', I don't see the file in the source. What am I missing? Is there any way to prevent search engines from trying to index these resources?

## Description
The ScriptResource.axd and Telerik.Web.UI.WebResource.axd are resource handler URLs used by the ASP.NET framework to deliver embedded JavaScript and CSS resources to the client-side (browser). They are not typically visible in the page source because they are generated dynamically and are part of the backend processing.

## Solution
To prevent search engines from indexing multiple instances of the Telerik.Web.UI.WebResource.axd file, you can follow these steps:

1. Use the `RadScriptManager` control to combine WebResource requests for scripts into one. You can find more information about the `RadScriptManager` control in the Telerik documentation: [ScriptManager](http://www.telerik.com/help/aspnet-ajax/scriptmanager.html) and [Combining Scripts](http://www.telerik.com/help/aspnet-ajax/scriptmanager-combine-scripts.html).

   ```markup
   <telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableScriptCombine="true" />
   ```

2. Use the `RadStyleSheetManager` control to combine the `Telerik.Web.UI.WebResource.axd` CSS files into a single handler. You can find more information about the `RadStyleSheetManager` control in the Telerik documentation: [StyleSheetManager](http://www.telerik.com/help/aspnet-ajax/stylesheetmanager.html) and [Serving External Style Sheets](http://www.telerik.com/help/aspnet-ajax/stylesheetmanager-serving-external-style-sheets.html).

   ```markup
   <telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server" EnableStyleSheetCombine="true" />
   ```

3. Consider using Telerik CDNs or a local CDN to configure the controls to use JavaScript and CSS files instead of web resource handlers. You can find more information about CDNs in the Telerik documentation: [ScriptManager CDN Support](http://www.telerik.com/help/aspnet-ajax/scriptmanager-cdn-support.html) and [StyleSheetManager CDN Support](http://www.telerik.com/help/aspnet-ajax/stylesheetmanager-cdn-support.html).

4. To prevent search engines from indexing the `Telerik.Web.UI.WebResource.axd` resources, you can use the `robots.txt` file. This file, located at the root of your website, instructs search engine bots on which pages or files they should or shouldn't index.

   Add the following rule to your `robots.txt` file:

   ```plaintext
   User-agent: *
   Disallow: /Telerik.Web.UI.WebResource.axd
   ```

   For better coverage, you can add the following rules:

   ```plaintext
   User-agent: bingbot
   Disallow: /ScriptResource.axd
   Disallow: /WebResource.axd
   Disallow: /Telerik.Web.UI.WebResource.axd
   ```

   This will tell all compliant search bots not to index URLs that contain `/ScriptResource.axd`, `/WebResource.axd`, and `/Telerik.Web.UI.WebResource.axd`.

You can find more information about preventing error messages for WebResource.axd errors from appearing in the application log in the following StackOverflow discussion: [How to prevent error messages for WebResource.axd errors from appearing in the Application log?](https://stackoverflow.com/questions/2717816/how-to-prevent-error-messages-for-webresource-axd-errors-from-appearing-in-the)

