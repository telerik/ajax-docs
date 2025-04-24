---
title: Adding Tooltip to Title in Telerik RadWindow
description: Learn how to display a tooltip on the title of a Telerik RadWindow on hover.
type: how-to
page_title: How to Display a Tooltip on RadWindow Title on Hover
slug: window-display-tooltip-on-title
tags: radwindow, tooltip, onclientpageload, set_title, asp.net ajax
res_type: kb
ticketid: 1685519
---

## Environment
<table>
<tbody>
<tr>
<td>Product</td>
<td>Progress® Telerik® UI for ASP.NET AJAX RadWindow</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I am using the `set_title()` method to set the title of a Telerik RadWindow. I need to display a tooltip when hovering over the title of the RadWindow. This knowledge base article also answers the following questions:

- How to add a tooltip to the RadWindow title?
- How to use the `OnClientPageLoad` event to modify RadWindow elements?
- How to apply HTML attributes to RadWindow components dynamically?

## Solution

To add a tooltip to the RadWindow title, utilize the [OnClientPageLoad](https://www.telerik.com/products/aspnet-ajax/documentation/controls/window/client-side-programming/events/onclientpageload#onclientpageload) client-side event. This event fires when the RadWindow is loaded on the client. Within this event, obtain a reference to the RadWindow's popup element, find the title span, and add the `title` attribute to it for the tooltip.

1. Define the RadWindow in your ASPX page and assign it an `OnClientPageLoad` event handler:

````ASP.NET
<telerik:RadWindow runat="server" ID="RadWindow1" Width="500" Height="500" VisibleOnPageLoad="false" 
    OnClientPageLoad="onClientPageLoad" NavigateUrl="https://www.wikipedia.org/">
</telerik:RadWindow>

<telerik:RadButton runat="server" OnClientClicked="OnClientClicked" ID="RadButton1" Text="Show Window" AutoPostBack="false" />
````

2. In the `OnClientPageLoad` event handler, access the RadWindow's popup element, locate the title span, and add a `title` attribute for the tooltip:

````JavaScript
function onClientPageLoad(sender, args) {
    let wndElement = sender.get_popupElement();
    let titleElement = wndElement.querySelector(".rwTitle");

    titleElement.setAttribute("title", "This is a tooltip");
}
````

By adding the `title` attribute to the title span of the RadWindow, the tooltip "This is a tooltip" will be displayed when hovering over the title.


