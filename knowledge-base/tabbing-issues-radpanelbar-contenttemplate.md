---
title: RadPanelBar Tab Order with ContentTemplate
description: Resolve unexpected keyboard tab order when RadPanelBar controls with ContentTemplate use positive TabIndex values.
type: troubleshooting
page_title: Resolve RadPanelBar Tab Order Issues with ContentTemplate
meta_title: Resolve RadPanelBar Tab Order Issues with ContentTemplate
slug: tabbing-issues-radpanelbar-contenttemplate
tags: radpanelbar, ui for asp.net ajax, tabindex, contenttemplate, keyboard navigation
res_type: kb
ticketid: 1377467
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>UI for ASP.NET AJAX</td>
        </tr>
        <tr>
            <td>Version</td>
            <td>2026.3.812</td>
        </tr>
    </tbody>
</table>

## Description

When users tab through multiple RadPanelBar controls that contain controls in a ContentTemplate, focus can skip the template content or the next RadPanelBar.

## Cause/Possible Cause(s)

Positive TabIndex values create a separate tab order that takes precedence over the natural DOM order. This can prevent focus from continuing through a ContentTemplate and then to the next RadPanelBar.

## Solution

Remove the positive TabIndex values from the RadPanelBar controls or set them to `0`. The browser can then follow the natural DOM order through the panel bars and their ContentTemplate content.

````ASP.NET
<telerik:RadPanelBar runat="server" ID="FirstPanelBar" Width="100%">
    <Items>
        <telerik:RadPanelItem runat="server" Text="First section">
            <ContentTemplate>
                <!-- Focusable controls in the template -->
            </ContentTemplate>
        </telerik:RadPanelItem>
    </Items>
</telerik:RadPanelBar>

<telerik:RadPanelBar runat="server" ID="SecondPanelBar" Width="100%">
    <Items>
        <telerik:RadPanelItem runat="server" Text="Second section" />
    </Items>
</telerik:RadPanelBar>
````

Avoid positive `TabIndex` values when the intended order is the document order. Use the [RadPanelBar keyboard support]({%slug panelbar/accessibility-and-internationalization/keyboard-support%}) configuration when users need a keyboard shortcut to move focus to the control.

## See Also

- [RadPanelBar overview]({%slug panelbar/overview%})
- [Adding templates at runtime]({%slug panelbar/templates/adding-templates-at-runtime%})
- [RadPanelBar keyboard support]({%slug panelbar/accessibility-and-internationalization/keyboard-support%})
