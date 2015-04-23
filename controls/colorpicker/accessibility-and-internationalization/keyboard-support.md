---
title: Keyboard Support
page_title: Keyboard Support | RadColorPicker for ASP.NET AJAX Documentation
description: Keyboard Support
slug: colorpicker/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support



## Ways to activate the RadColorPicker control:

You can focus the elements of the color picker using the Tab key or, alternatively, you can use a shortcut if you set the AccessKey property (press "**Alt + AccessKey**" ("**Shift + Alt + AccessKey**" for Firefox and "**Shift + Esc**" and then **AccessKey** for Opera). Press **Tab** to move the focus to the next element in the color picker.

Note: By default tab-access is disabled in Safari. To enable it, check "Preferences > Advanced > Press tab to highlight each item on a page".



## Supported keys and how they control the behavior of RadColorPicker:



Depending on the different configurations of **RadColorPicker**, the **AccessKey** gives focus to different elements in the color picker:

* In case **ShowIcon** is set to true, the **AccessKey** gives focus to the button element that opens the pop-up palette. Once the focus is set to that button, press "Alt + DownArrow/UpArrow" or Enter to open/close the pop-up palette. After the color picker has received the focus, you can also use the **Esc** key to close the pop-up palette.

* In case **ShowIcon** is set to **false** and the tabstrip of the color picked is rendered, the **AccessKey** gives focus to the first tab in the tabstrip. Pressing the **Tab** key navigates forward amongst tabs. **Shift + Tab** navigates backwards. When one of the tabs in the tabstrip is focused, you can use the **Enter** key to select the active tab.

* In case **ShowIcon** is set to **false** and **PaletteModes** is set to **WebPalette**, the **AccessKey** gives focus to the first color box in the palette. When the focus is in the **WebPalette** palette, you can use the **DownArrow/UpArrow/LeftArrow/RightArrow** key to navigate amongst color boxes. Note that this functionality works best in case the colors are unique in the palette, that is, no color is added more than once in the Items collection.Pressing **Enter** will select the active color.

* In case **ShowIcon** is set to **false** and **PaletteModes** is set to **RGBSliders**, **HSV** or **HSB**, the **AccessKey** gives focus to the **R** input in the palette. Pressing the **Tab** key will navigate forward amongst inputs. "**Shift + Tab**" will navigate backwards. Enter will set the current color as selected.

Once the focus is set to one of the elements in the color picker, you can use the **Tab** key to iterate through all the elements in the color picker. In case you have specified a **TabIndex** for the color picker, this **TabIndex** is applied to all elements in the control.


