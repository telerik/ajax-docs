---
title: Right-to-Left Support
page_title: Right-to-Left Support | RadCheckBoxList for ASP.NET AJAX Documentation
description: Right-to-Left Support
slug: checkboxlist/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 1
---

# Right-to-Left Support

The **RadCheckBoxList** fully supports right-to-left (RTL) language locales (**Figure 1**). In order to turn on the RTL support, you should set **dir=rtl to the html or body** element or at least to its parent element (**Figure 1**). You can also use the **direction:rtl** CSS property.

>caption Figure 1: RadCheckBoxList in RTL mode.

![RadCheckBoxList-rtl](images/checkboxlist-rtl.png)

>caption Example 1: Set the "direction: rtl" style to the **RadCheckBoxList**'s wrapper element in order to enable the RTL support for the control.

````ASP.NET
<div style="direction: rtl">
    <telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1">
        <Items>
            <telerik:ButtonListItem Text="יהודי" Selected="true" />
            <telerik:ButtonListItem Text="גֶרמָנִיָת" />
            <telerik:ButtonListItem Text="צָרְפָתִית" />
        </Items>
    </telerik:RadCheckBoxList>
</div>
````

## See Also

 * [WCAG 2.0 and Section 508 Accessibility Compliance]({%slug checkboxlist/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%})

 * [Keyboard Support]({%slug checkboxlist/accessibility-and-internationalization/keyboard-support%})
