---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: colorpicker/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support



## Ways to activate the RadColorPicker control:

You can focus the elements of the color picker using the Tab key or, alternatively, you can use a shortcut if you set the AccessKey property (press "__Alt + AccessKey__" ("__Shift + Alt + AccessKey__" for Firefox and "__Shift + Esc__" and then __AccessKey__for Opera). Press __Tab__to move the focus to the next element in the color picker.

Note: By default tab-access is disabled in Safari. To enable it, check "Preferences > Advanced > Press tab to highlight each item on a page".



## Supported keys and how they control the behavior of RadColorPicker:



Depending on the different configurations of __RadColorPicker__, the __AccessKey__ gives focus to different elements in the color picker:

* In case __ShowIcon__is set to true, the __AccessKey__gives focus to the button element that opens the pop-up palette. Once the focus is set to that button, press "Alt + DownArrow/UpArrow" or Enter to open/close the pop-up palette. After the color picker has received the focus, you can also use the __Esc__key to close the pop-up palette.

* In case __ShowIcon__is set to __false__and the tabstrip of the color picked is rendered, the __AccessKey__gives focus to the first tab in the tabstrip. Pressing the __Tab__key navigates forward amongst tabs. __Shift + Tab__navigates backwards. When one of the tabs in the tabstrip is focused, you can use the __Enter__key to select the active tab.

* In case __ShowIcon__ is set to __false__and __PaletteModes__ is set to __WebPalette__, the __AccessKey__ gives focus to the first color box in the palette. When the focus is in the __WebPalette__ palette, you can use the __DownArrow/UpArrow/LeftArrow/RightArrow__ key to navigate amongst color boxes. Note that this functionality works best in case the colors are unique in the palette, that is, no color is added more than once in the Items collection.Pressing __Enter__ will select the active color.

* In case __ShowIcon__ is set to __false__ and __PaletteModes__ is set to __RGBSliders__, __HSV__ or __HSB__, the __AccessKey__ gives focus to the __R__ input in the palette. Pressing the __Tab__ key will navigate forward amongst inputs. "__Shift + Tab__" will navigate backwards. Enter will set the current color as selected.

Once the focus is set to one of the elements in the color picker, you can use the __Tab__ key to iterate through all the elements in the color picker. In case you have specified a __TabIndex__for the color picker, this __TabIndex__ is applied to all elements in the control.


