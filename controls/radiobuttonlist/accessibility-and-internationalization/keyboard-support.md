---
title: Keyboard Support
page_title: Keyboard Support | RadRadioButtonList for ASP.NET AJAX Documentation
description: Keyboard Support
slug: radiobuttonlist/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 2
---

# Keyboard Support

There are several ways to use the **RadRadioButtonList** via the keyboard only:

* Set its **TabIndex** property and use the **Tab** key to navigate to the desired item and then press the **Enter** or **Space** key to select it.

* Set its **AccessKey** property. This allows you to use the browser's shortcut combination to select the first item in the RadioButtonList ("Alt + AccessKey" in IE and Chrome, "Shift + Alt + AccessKey" for Firefox, "Shift + Esc + AccessKey" for Opera).

>tip Note: By default, tab-access is disabled in Safari. To enable it, check "Preferences > Advanced > Press tab to highlight each item on a page".

>tip Some browsers focus radio buttons in the same group when the arrow keys are pressed. Since such a feature is not implemented in RadRadioButtonList, you can get that behavior by using a `RadFormDecorator` to prettify the buttons:
>
>   `<telerik:RadFormDecorator runat="server" ID="rfd1" RenderMode="Lightweight" DecoratedControls="RadioButtons" />`
>

## See Also

 * [WCAG 2.0 and Section 508 Accessibility Compliance]({%slug radiobuttonlist/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%})

 * [Right-to-Left Support]({%slug radiobuttonlist/accessibility-and-internationalization/right-to-left-support%})
