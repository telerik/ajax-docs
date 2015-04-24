---
title: Controlling Appearance
page_title: Controlling Appearance | RadPanelBar for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: panelbar/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 1
---

# Controlling Appearance



There are a number of ways you can customize the look & feel of your **RadPanelBar** control:

## Layout

* Use the **Height** and **Width** properties to limit the dimensions of the panel bar. Note that the Height property does not have an effect unless the **ExpandMode** is "FullExpandedItem".

>note For more information about expand modes, see[Expanding and Collapsing Items]({%slug panelbar/radpanelbar-items/expanding-and-collapsing-items%}).
>


* Use the **Expanded**property of a **RadPanelItem** object to specify whether it appears expanded.

* Use the **PreventCollapse** property of a **RadPanelItem** object to specify whether it can be collapsed.

* Add [separators]({%slug panelbar/appearance-and-styling/separators%}) to a the items by creating an item with the **IsSeparator** property set to **True**.

* Use the **dir="rtl"** attribute to give the panel bar a [right-to-left orientation]({%slug panelbar/appearance-and-styling/rtl-support%}):

## Look and Feel

* To change the overall look and feel of the panel bar, set the [Skin]({%slug panelbar/appearance-and-styling/skins%}) property.

* To change the way the child panel items appear or disappear, use [Animations]({%slug panelbar/appearance-and-styling/animations%}).

* To change the look of an individual item in the panel bar, including reflecting the item's state, [use a CSS class property]({%slug panelbar/appearance-and-styling/setting--the-css-class-of-items%}).

* Use the item properties to [add images to items]({%slug panelbar/appearance-and-styling/adding-images-to-items%}).

* Use [templates]({%slug panelbar/templates/overview%}) to add controls to panel items.
