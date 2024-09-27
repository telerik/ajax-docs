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

## **UPDATE: Official Response from Microsoft**

Microsoft has confirmed that the deprecation of the `unload` event in Chrome is not expected to cause errors. The event will simply stop firing, and given its unreliability in various situations, this change should not significantly affect your applications. You can read more in the official bug tracker issue [here](https://developercommunity.visualstudio.com/t/unload-event-listeners-are-deprecated-an/10620446#T-N10754375).

Barry Pollard, Web Performance Developer Advocate at Google Chrome, also confirmed via tweet [here](https://x.com/tunetheweb/status/1839446168113447372) that no errors will occur when the `unload` event stops firing.

## Solution

While this change should not introduce errors, we recommend the following steps to ensure your applications run smoothly:

1. **Monitor for Future Issues**: Stay vigilant for any unexpected behavior after the `unload` event is fully deprecated. If you notice any issues, please let us know so we can investigate further.

2. **Follow Updates**: Keep track of updates on the [Microsoft Issue Tracker](https://developercommunity.visualstudio.com/t/unload-event-listeners-are-deprecated-an/10620446).

## Suggested Workarounds
Currently, there are no direct workarounds for this deprecation, but the impact should be minimal. We will continue monitoring the situation and share any new developments as they arise.

## See Also
- [Chrome Status Feature Deprecation Notice](https://chromestatus.com/feature/5579556305502208)
- [Microsoft Developer Community Issue Tracker](https://developercommunity.visualstudio.com/t/unload-event-listeners-are-deprecated-an/10620446)
- [Barry Pollard post](https://x.com/tunetheweb/status/1839446168113447372)
    
