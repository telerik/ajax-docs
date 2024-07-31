---
title: Hiding the Expand Button in RadPanelBar for ASP.NET AJAX
description: Learn how to hide the expand/collapse button in the RadPanelBar control to streamline your UI.
type: how-to
page_title: How to Hide the Expand/Collapse Button in RadPanelBar for ASP.NET AJAX
slug: panelbar-hide-expand-button
tags: radpanelbar, asp.net ajax, ui, css, visibility
res_type: kb
ticketid: 1659984
---

## Environment

| Product | Version |
| --- | --- |
| RadPanelBar for ASP.NET AJAX | all |

## Description

I want to hide the expand/collapse button in the [RadPanelBar](https://docs.telerik.com/devtools/aspnet-ajax/controls/panelbar/overview) control. I cannot find a parameter to disable it. This KB article also answers the following questions:
- How can I remove the expand/collapse button in RadPanelBar?
- Is there a way to hide the expand button in RadPanelBar using CSS?
- Can I disable the visibility of the RadPanelBar expand/collapse handle?

## Solution

Hide the expand/collapse button in the RadPanelBar control by applying the following CSS class:

```css
<style type="text/css">
    .rpExpandHandle {
        visibility: hidden;
    }
</style>
```

Implement this CSS class in your page where the RadPanelBar is defined. Here is an example of how to use the RadPanelBar with the CSS class applied:

```aspx
<telerik:RadPanelBar ID="Panelbar1" runat="server" Skin="WebBlue">
    <Items>
        <telerik:RadPanelItem Text="PanelItem1">
            <Items>
                <telerik:RadPanelItem Text="PanelItem1.1"></telerik:RadPanelItem>
                <telerik:RadPanelItem Text="PanelItem1.2"></telerik:RadPanelItem>
                <telerik:RadPanelItem Text="PanelItem1.3"></telerik:RadPanelItem>
            </Items>
        </telerik:RadPanelItem>
        <telerik:RadPanelItem Text="PanelItem2"></telerik:RadPanelItem>
        <telerik:RadPanelItem Text="PanelItem3"></telerik:RadPanelItem>
    </Items>
</telerik:RadPanelBar>
```

By adding this CSS, the expand/collapse handle of the RadPanelBar items will not be visible, resulting in a cleaner appearance for scenarios where expand/collapse functionality is not required or is managed through other means.

## See Also

- [RadPanelBar Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/panelbar/overview)
- [RadPanelBar Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/panelbar/client-side-programming/overview)
- [RadPanelBar Server-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/panelbar/server-side-programming/overview)
