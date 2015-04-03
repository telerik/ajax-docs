---
title: Layout of Root Items 
page_title: Layout of Root Items  | UI for ASP.NET AJAX Documentation
description: Layout of Root Items 
slug: menu/appearance-and-styling/layout-of-root-items-
tags: layout,of,root,items,
published: True
position: 2
---

# Layout of Root Items 



There are a number of ways you can customize the look & feel of your __RadMenu__ control:

## Layout

Use the __Flow__ property to control the basic orientation of the menu. Flow can be __Horizontal__ (the default):

![RadMenu Horizontal Flow](images/menu_horizontalflow.png)

or __Vertical__:

![RadMenu Vertical Flow](images/menu_verticalflow.png)

* Use the __Height__ and __Width__ properties to limit the dimensions of the menu. If the __Width__ of a horizontal menu is too small to display all of its root items, the menu automatically creates additional rows:![RadMenu Extra Rows](images/menu_extrarows.png)

* Use the __GroupSettings__ property of a __RadMenuItem__ object to [control the layout of its child items]({%slug menu/appearance-and-styling/layout-of-child-items%}).

* Add [separators]({%slug menu/functionality/separators%}) to a list of items by creating an item with the __IsSeparator__ property set to __True__.

* Use the __dir="rtl"__ attribute to give the menu a [right-to-left orientation]({%slug menu/accessibility-and-internationalization/rtl-support%}):![RadMenu RTL](images/menu_rtl.png)

## Look and Feel

* To change the overall look and feel of the combobox, set the [Skin]({%slug menu/appearance-and-styling/appearance-skins%}) property.

* To change the way the child menu items appear or disappear, use [Animations]({%slug menu/functionality/animations%}).

* To change the look of an individual item in the menu, including reflecting the item's state, [use a CSS class property]({%slug menu/appearance-and-styling/setting--the-css-class-of-items%}).

* Use the item properties to [add images to items]({%slug menu/appearance-and-styling/adding-images-to-items%}).

* Use [templates]({%slug menu/templates/overview%}) to add controls to menu items.

* Use [RepeatColumns]({%slug menu/functionality/multi-column-menu%}) property to enable the multi-column menu.

# See Also

 * [Overview]({%slug menu/radmenu-items/overview%})

 * [Showing the Path to an Item]({%slug menu/application-scenarios/showing-the-path-to-an-item%})
