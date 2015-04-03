---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: slider/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support



## Ways to activate the slider:

You can focus the a dragHandle (thumb) of the slider using the __Tab__key or, alternatively, you can use a shortcut if you set the __AccessKey__property (press "__Alt + AccessKey__" ("__Shift + Alt + AccessKey__" for Firefox and "__Shift + Esc__" and then __AccessKey__for Opera). Press __Tab__to move the focus to the other dragHandle (thumb) of the slider, in case you have set IsSelectionRangeEnabled to "true".

Note: By default tab-access is disabled in Safari. To enable it, check "Preferences > Advanced > Press tab to highlight each item on a page".

## Supported keys and how they control the behavior of RadSlider:

* Press "__RightArrow/UpArrow__" to increase the value of a focused dragHandle (thumb) with the value of __SmallChange__ property. Press "__LeftArrow/DownArrow__" to decrease the value of a focused dragHandle (thumb) with the value of __SmallChange__ property.

* Press "__PageUp__" to increase the value of a focused dragHandle (thumb) with the value of __LargeChange__ property. Press "PageDown" to increase the value of a focused dragHandle (thumb) with the value of __LargeChange__ property.

* Press "__Home__" to set the value of a focused dragHandle (thumb) to the value of __MinimumValue__ property. Press "End" to set the value of a focused dragHandle (thumb) to the value of __MaximumValue__ property.

Once the focus is set to one of the dragHandles (thumbs) in the slider, you can use the __Tab__ key to move the focus to the other dragHandle (thumb), in case you have set __IsSelectionRangeEnabled__ to "__true__". In case you have specified a __TabIndex__ for the slider, this __TabIndex__ is applied to both dragHandles (thumbs) in the control.
