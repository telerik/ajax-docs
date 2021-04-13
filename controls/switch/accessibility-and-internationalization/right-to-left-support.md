---
title: Right-to-Left Support
page_title: Right-to-Left Support - Switch
description: Check our Web Forms article about Right-to-Left Support.
slug: switch/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 1
---

# Right-to-Left Support

The **Switch** fully supports right-to-left (RTL) language locales (**Figure 1**). In order to turn on the RTL support, you should set **dir=rtl to the html or body** element or at least to its parent element (**Figure 1**). You can also use the **direction:rtl** CSS property.

>caption Figure 1: Switch in RTL mode.

![Switch-rtl](images/switch-rtl.png)

>caption Example 1: Set the "direction: rtl" style to the **Switch**'s wrapper element in order to enable the RTL support for the control.

````ASP.NET
<div style="direction: rtl;">
    <telerik:RadLabel runat="server" ID="RadLabel1" AssociatedControlID="RadSwitch1" Text="پذیرفتن">
    </telerik:RadLabel>
    <telerik:RadSwitch runat="server" ID="RadSwitch1" Checked="true" AutoPostBack="false">
        <ToggleStates>
            <ToggleStateOff Text="نه" />
            <ToggleStateOn Text="آره" />
        </ToggleStates>
    </telerik:RadSwitch>
</div>
````

## See Also

 * [Live Demo: Switch RTL Support](https://demos.telerik.com/aspnet-ajax/switch/examples/righttoleft/defaultcs.aspx)

 * [WCAG 2.0 and Section 508 Accessibility Compliance]({%slug switch/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%})

 * [Keyboard Support]({%slug switch/accessibility-and-internationalization/keyboard-support%})
