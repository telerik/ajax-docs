---
title: Resolving Deprecated Unload Event Listeners in Chrome for ASP.NET AJAX
description: Learn how to address the issue with deprecated unload event listeners in Chrome affecting ASP.NET AJAX applications.
type: troubleshooting
page_title: Fix Unload event listeners are deprecated error for ASP.NET AJAX in Chrome
slug: common-resolve-deprecated-unload-event-listeners
tags: progress, telerik, ui, asp.net, ajax, chrome, deprecated, unload, event, listeners
res_type: kb
ticketid: 1659970
---

## Environment

| Product | Progress® Telerik® UI for ASP.NET AJAX |
| --- | --- |
| Version | all |

## Description
In the latest Chrome version (v127), an issue arises due to the deprecated unload event handler. This affects applications using the [RadScriptManager](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/overview) component from Telerik UI for ASP.NET AJAX, as observed in the MultiSelect demo page.

Chrome has officially deprecated the unload event listeners as part of its API changes, detailed [here](https://chromestatus.com/feature/5579556305502208). This deprecation impacts the ASP.NET AJAX applications, causing concerns over the future compatibility and functionality of web applications.

## Cause
The root cause of this issue is not within the Telerik codebase but stems from the ASP.NET WebForms framework, specifically the Microsoft AJAX scripts utilized in the ASP.NET applications. Chrome's decision to deprecate the unload event listener is an intended API change, prompting the need for adjustments in the framework provided by Microsoft.

## Solution
Since the problem originates from the Microsoft scripts part of the ASP.NET WebForms framework, the resolution lies beyond the scope of Telerik's direct influence. However, to mitigate this issue and push for a resolution, consider the following steps:

1. **Vote on the Microsoft Issue Tracker**: A bug has already been logged in Microsoft's issue tracking system. Voting on this issue will help in prioritizing it for a fix. You can cast your vote [here](https://developercommunity.visualstudio.com/t/unload-event-listeners-are-deprecated-an/10620446).

2. **Monitor Chrome and Microsoft Updates**: Stay informed about any updates from Chrome regarding this API deprecation and any potential fixes or workarounds provided by Microsoft.

3. **Explore Alternative Event Listeners**: As a proactive measure, explore using alternative event listeners that are not deprecated and can offer similar functionality. Review your application's code to adjust accordingly.

4. **Use the Standard ScriptManager Temporarily**: While not a direct solution to the deprecation, switching from RadScriptManager to the standard asp:ScriptManager might offer temporary relief. This change can help isolate the issue to Microsoft's scripts, clarifying the distinction between Telerik and Microsoft's contributions to this problem.

## Suggested Workarounds
Currently, there are no direct workarounds that can completely bypass the deprecated unload event listeners in Chrome. The focus should be on advocating for a fix from Microsoft and adjusting application code to minimize reliance on these deprecated events.


## See Also
- [Telerik RadScriptManager Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/overview)
- [Chrome Status Feature Deprecation Notice](https://chromestatus.com/feature/5579556305502208)
- [Microsoft Developer Community Issue Tracker](https://developercommunity.visualstudio.com/t/unload-event-listeners-are-deprecated-an/10620446)
