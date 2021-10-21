---
title: Performance issues and high CPU utilization on the server caused by RadStyleSheetManager or RadScriptManager
description: Performance issues and high CPU utilization on the server caused by RadStyleSheetManager or RadScriptManager. Check it now!
type: how-to
page_title: Performance issues and high CPU utilization on the server caused by RadStyleSheetManager or RadScriptManager
slug: licensing-performance-issues-and-high-cpu-utilization-on-the-server-caused-by-radstylesheetmanager-or-radscriptmanager
res_type: kb
---


## PROBLEM

Server performance issues and slowdown caused by RadScriptManager or RadStyleSheetManager, usually increasing CPU load that may even max it out.

## DESCRIPTION

This can be caused by multiple calls to RadStyleSheetManager.GetIsValidScriptEntry or other similar internal methods. Some methods in the RadScriptManager and RadStyleSheetManager use Reflection to access assembly resources in order to generate the combined resource.

Since Reflection is generally slow, this can also cause a slowdown for the server, especially under heavy load.

Ultimately, the purpose of the RadStyleSheetManager and RadScriptManager controls is to improve the experience for the client and they do that by combining requests for stylesheets and scripts into a single request. This facilitates caching for the browsers and improves latency for the client by reducing the number of requests dramatically. The cost is that the server has to do more work in order to provide those combined requests.

## SOLUTION

You can avoid this server resource combination and thus, the Reflection calls by **using the CDNs we offer**:

- for scripts: [https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/cdn-support/overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/cdn-support/overview).
- for skins: [https://docs.telerik.com/devtools/aspnet-ajax/controls/stylesheetmanager/cdn-support/overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/stylesheetmanager/cdn-support/overview).


You can also create a local CDN provider to avoid requests to the cloud: [https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/cdn-support/custom-cdn-provider](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/cdn-support/custom-cdn-provider)

There has been a concurrency issue that could cause similar problems under heavy load, and it was related to System.Collections.Generic.Dictionary`2.Insert and Telerik.Web.UI.CryptoService.GetService(), and it has been fixed in R3 2017.


 