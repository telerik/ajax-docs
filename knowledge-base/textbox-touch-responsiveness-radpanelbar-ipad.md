---
title: Resolving Touch Responsiveness of TextBoxes in RadPanelBar on iPad
description: Learn how to fix the issue where TextBox controls inside a RadPanelBar do not respond to touch events on an iPad.
type: troubleshooting
page_title: How to Make TextBox Controls Responsive to Touch Inside RadPanelBar on iPad Devices
slug: textbox-touch-responsiveness-radpanelbar-ipad
tags: radpanelbar, asp.net ajax, touch events, ipad, radtextbox, javascript
res_type: kb
ticketid: 1668915
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadPanelBar for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>all</td>
</tr>
</table>

## Description

When viewing a web page on Safari (iPad, iPhone), `RadTextBox` controls placed inside a [RadPanelBar](https://docs.telerik.com/devtools/aspnet-ajax/controls/panelbar/overview) do not respond to touch events — specifically, the keyboard does not appear. However, the text boxes work as expected when placed outside the RadPanelBar.

## Cause

The issue stems from the way touch interactions are managed within Telerik controls, particularly how the touch scroll extender in the RadPanelBar interferes with touch events on iOS devices.

## Solution

Disable the touch scroll extender for the RadPanelBar when the page loads. This action allows the `RadTextBox` controls within the RadPanelBar to respond normally to touch events on iOS devices. Use the following JavaScript snippet in your page:

```javascript
<script>
function OnClientLoad(sender, args) {
    if (Telerik.Web.Browser.safari && Telerik.Web.Platform.ios && sender._touchScrollExtender) {
        sender._touchScrollExtender.disable();
    }
}
</script>
```

And add the `OnClientLoad` event to your `RadPanelBar` control:

```aspnet
<telerik:RadPanelBar ID="FindRadPanelBar" runat="server" OnClientLoad="OnClientLoad" ExpandMode="SingleExpandedItem" Width="100%">
    <!-- PanelBar content here -->
</telerik:RadPanelBar>
```

This solution specifically targets iOS devices to ensure that `RadTextBox` controls within the `RadPanelBar` become responsive to touch events, making them usable on devices like iPads.

## See Also

- [RadPanelBar Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/panelbar/overview)
- [RadTextBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/textbox/overview)
