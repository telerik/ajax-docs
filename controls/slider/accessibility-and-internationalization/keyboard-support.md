---
title: Keyboard Support
page_title: Keyboard Support | RadSlider for ASP.NET AJAX Documentation
description: Keyboard Support
slug: slider/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support

## Ways to activate the slider:

You can focus the a dragHandle (thumb) of the slider using the **Tab** key or, alternatively, you can use a shortcut if you set the **AccessKey** property (press "**Alt + AccessKey**" ("**Shift + Alt + AccessKey**" for Firefox and "**Shift + Esc**" and then **AccessKey** for Opera). Press **Tab** to move the focus to the other dragHandle (thumb) of the slider, in case you have set IsSelectionRangeEnabled to "true".

Note: By default tab-access is disabled in Safari. To enable it, check "Preferences &gt; Advanced &gt; Press tab to highlight each item on a page".

## Supported keys and how they control the behavior of RadSlider:

* Press "**RightArrow/UpArrow**" to increase the value of a focused dragHandle (thumb) with the value of **SmallChange** property. Press "**LeftArrow/DownArrow**" to decrease the value of a focused dragHandle (thumb) with the value of **SmallChange** property.

* Press "**PageUp**" to increase the value of a focused dragHandle (thumb) with the value of **LargeChange** property. Press "PageDown" to increase the value of a focused dragHandle (thumb) with the value of **LargeChange** property.

* Press "**Home**" to set the value of a focused dragHandle (thumb) to the value of **MinimumValue** property. Press "End" to set the value of a focused dragHandle (thumb) to the value of **MaximumValue** property.

Once the focus is set to one of the dragHandles (thumbs) in the slider, you can use the **Tab** key to move the focus to the other dragHandle (thumb), in case you have set **IsSelectionRangeEnabled** to "**true**". In case you have specified a **TabIndex** for the slider, this **TabIndex** is applied to both dragHandles (thumbs) in the control.
