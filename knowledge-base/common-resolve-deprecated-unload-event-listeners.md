---
title: Resolving Deprecated Unload Event Listeners in Chrome for ASP.NET AJAX
description: Learn how to address the issue with deprecated unload event listeners in Chrome affecting ASP.NET AJAX applications.
type: troubleshooting
page_title: Fix Unload event listeners are deprecated error for ASP.NET AJAX in Chrome
slug: common-resolve-deprecated-unload-event-listeners
tags: progress, telerik, ui, asp.net, ajax, chrome, deprecated, unload, event, listeners
res_type: kb
ticketid: 1659970, 1719202
---

## Environment

| Product | Progress® Telerik® UI for ASP.NET AJAX |
| --- | --- |
| Version | all |

## Description
In the latest Chrome version (v127), an issue arises due to the deprecated unload event handler. This can appear in the browser console as the following permissions policy violation:

```
[Violation] Permissions policy violation: unload is not allowed in this document
```

The message can appear in applications using the [RadScriptManager](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/overview) component from Telerik UI for ASP.NET AJAX, as observed in the MultiSelect demo page.

Chrome has officially deprecated the unload event listeners as part of its API changes, detailed [here](https://chromestatus.com/feature/5579556305502208). This deprecation impacts the ASP.NET AJAX applications, causing concerns over the future compatibility and functionality of web applications.

## Cause
The root cause of this issue is not within the Telerik codebase but stems from the ASP.NET WebForms framework, specifically the Microsoft AJAX scripts utilized in the ASP.NET applications. Chrome's decision to deprecate the unload event listener is an intended API change, prompting the need for adjustments in the framework provided by Microsoft.

To confirm the source, temporarily replace the `RadScriptManager` with the standard ASP.NET Web Forms `ScriptManager` and reload the page:

```aspx
<asp:ScriptManager ID="ScriptManager1" runat="server" />
```

If the same message appears when no Telerik controls are present, the message originates from the Microsoft AJAX scripts rather than from Telerik UI for ASP.NET AJAX.

## **UPDATE: Official Response from Microsoft**

Microsoft has confirmed that the deprecation of the `unload` event in Chrome is not expected to cause errors. The event will simply stop firing, and given its unreliability in various situations, this change should not significantly affect your applications. You can read more in the official bug tracker issue [here](https://developercommunity.visualstudio.com/t/unload-event-listeners-are-deprecated-an/10620446#T-N10754375).

Barry Pollard, Web Performance Developer Advocate at Google Chrome, also confirmed via tweet [here](https://x.com/tunetheweb/status/1839446168113447372) that no errors will occur when the `unload` event stops firing.

## Solution

While this change should not introduce errors, we recommend the following steps to ensure your applications run smoothly:

1. **Do not treat the console message as a Telerik control error**: The `unload` listener is used by the Microsoft AJAX scripts, and Telerik UI for ASP.NET AJAX does not generate this message in its client-side scripts. The warning alone does not indicate that a Telerik control is malfunctioning.

2. **Monitor for Future Issues**: Stay vigilant for any unexpected behavior after the `unload` event is fully deprecated. If you notice any issues, please let us know so we can investigate further.

3. **Follow Updates**: Keep track of updates on the [Microsoft Issue Tracker](https://developercommunity.visualstudio.com/t/unload-event-listeners-are-deprecated-an/10620446) and the [ASP.NET Web Forms ScriptManager report about the permissions policy violation](https://developercommunity.visualstudio.com/t/ASPNET-WebForms-ScriptManager-triggers/11060697).

## Suggested Workarounds
Currently, there are no direct workarounds for this deprecation, but the impact should be minimal. We will continue monitoring the situation and share any new developments as they arise.

## See Also
- [RadScriptManager Documentation]({%slug scriptmanager/overview%})
- [Chrome Status Feature Deprecation Notice](https://chromestatus.com/feature/5579556305502208)
- [Microsoft Developer Community Issue Tracker](https://developercommunity.visualstudio.com/t/unload-event-listeners-are-deprecated-an/10620446)
- [ASP.NET Web Forms ScriptManager Permissions Policy Violation](https://developercommunity.visualstudio.com/t/ASPNET-WebForms-ScriptManager-triggers/11060697)
- [Barry Pollard post](https://x.com/tunetheweb/status/1839446168113447372)
    
