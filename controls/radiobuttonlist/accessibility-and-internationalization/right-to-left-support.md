---
title: Right-to-Left Support
page_title: Right-to-Left Support - RadRadioButtonList
description: Check our Web Forms article about Right-to-Left Support.
slug: radiobuttonlist/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 1
---

# Right-to-Left Support

The **RadRadioButtonList** fully supports right-to-left (RTL) language locales (**Figure 1**). In order to turn on the RTL support, you should set **dir=rtl to the html or body** element or at least to its parent element (**Figure 1**). You can also use the **direction:rtl** CSS property.

>caption Figure 1: RadRadioButtonList in RTL mode.

![RadRadioButtonList-rtl](images/radiobuttonlist-rtl.png)

>caption Example 1: Set the "direction: rtl" style to the **RadRadioButtonList**'s wrapper element in order to enable the RTL support for the control.

````ASP.NET
<div style="direction: rtl">
    <telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1">
        <Items>
            <telerik:RadioButtonListItem Text="יהודי" Selected="true" />
            <telerik:RadioButtonListItem Text="גֶרמָנִיָת" />
            <telerik:RadioButtonListItem Text="צָרְפָתִית" />
        </Items>
    </telerik:RadRadioButtonList>
</div>
````

## See Also

 * [WCAG 2.0 and Section 508 Accessibility Compliance]({%slug radiobuttonlist/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%})

 * [Keyboard Support]({%slug radiobuttonlist/accessibility-and-internationalization/keyboard-support%})
