---
title: Controlling Appearance
page_title: Controlling Appearance - RadTabStrip
description: Check our Web Forms article about Controlling Appearance.
slug: tabstrip/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 1
---

# Controlling Appearance



There are a number of ways you can customize the look & feel of your **RadTabStrip** control:

## Layout

* Use the **Orientation** property to control the basic orientation of the tab strip.

* Set the **IsBreak** property on individual tabs to add a break after the tab. On horizontal tab strips, the next tabs appear in a new row. On vertical tab strips, a gap appears before the next tabs.

* Set the **IsSeparator** property of individual tabs to have them act as separators that visually break up the layout but can't be selected.

* Set the **Height** and **Width** properties to limit the dimensions of the tab strip. When the tab strip is too small to display its child tabs, it truncates the display unless you enable [scrolling]({%slug tabstrip/tabs/scrolling-tabs%}).

* Use the **dir="tabstrip-rtl"** attribute to give the menu a [right-to-left orientation]({%slug tabstrip/appearance-and-styling/rtl-support%}).

For more information about using the layout properties, see [Controlling Layout]({%slug tabstrip/appearance-and-styling/controlling-layout%}).

## Look and Feel

* To change the overall look and feel of the tab strip, set the [Skin]({%slug tabstrip/appearance-and-styling/skins%}) property.

* To change the look of an individual tab in the menu, including reflecting the tab's state, [use a CSS class property]({%slug tabstrip/appearance-and-styling/setting-the-css-class-of-tabs%}).

* Use the properties of the individual tabs to [add images]({%slug tabstrip/appearance-and-styling/adding-images-to-tabs%}).

* Use [templates]({%slug tabstrip/templates/overview%}) to add controls to the tabs in the tab strip.

# See Also

 * [Overview]({%slug tabstrip/tabs/overview%})
