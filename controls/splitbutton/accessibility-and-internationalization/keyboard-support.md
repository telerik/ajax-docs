---
title: Keyboard Support
page_title: Keyboard Support - RadSplitButton
description: Check our Web Forms article about Keyboard Support.
slug: splitbutton/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 2
---


# Keyboard Support

There are several ways to use the **RadSplitButton** via the keyboard only:

* Set its **TabIndex** property and use the **Tab** key to navigate to the desired button and then press the **Enter** key to invoke a click on the button.

* Set its **AccessKey** property. This allows you to use the browser's shortcut combination to invoke the click ("Alt + AccessKey in IE and Chrome", "Shift + Alt + AccessKey" for Firefox, Shift + Esc + AccessKey for Opera).

>note Note: By default tab-access is disabled in Safari. To enable it, check "Preferences > Advanced > Press tab to highlight each item on a page".

Once the **SplitButton** is focused, you can use the `Alt` + `Down Arrow` to open and focus the button's **ContextMenu**. Then, you can use leverage the [ContextMenu's keyboard support]({%slug menu/accessibility-and-internationalization/keyboard-support%}) to navigate, select and close the dropdown.

## See Also

 * [WCAG 2.0 and Section 508 Accessibility Compliance]({%slug splitbutton/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%})

 * [Right-to-Left Support]({%slug splitbutton/accessibility-and-internationalization/right-to-left-support%})
