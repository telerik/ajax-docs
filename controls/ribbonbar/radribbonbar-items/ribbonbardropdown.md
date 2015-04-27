---
title: RibbonBarDropDown
page_title: RibbonBarDropDown | RadRibbonBar for ASP.NET AJAX Documentation
description: RibbonBarDropDown
slug: ribbonbar/radribbonbar-items/ribbonbardropdown
tags: ribbonbardropdown
published: True
position: 11
---

# RibbonBarDropDown



## 

With the **RadRibbonBarDropDown** you can also use the **SelectedIndex** property. It returns the index (an **integer** value )of the currently selected item.

## Working with RibbonBarDropDown on the Client-Side

**RadRibbonBar** provides a client-side API for working with **RibbonBarDropDown**. Below you can find an list of with their detailed description:

* **get_index()** - returns the index of the DropDown in its parent group.

* **get_hierarchicalIndex()** - returns the hierarchical index of the DropDown.

* **get_selectedIndex()** - returns the index of the selected RibbonBarListItem in the DropDown.

* **set_selectedIndex()** - sets the selected index of the DropDown.

* **get_selectedItem()** - returns the selected RibbonBarListItem of the DropDown.

**RibbonBarListItem**

>note  **RibbonBarListItem** - used by RibbonBarDropDown and RibbonBarComboBox. In order to access a single item in the collection of items *get_items().getItem(0);* or the *get_items.get_count();* can be used.
>


* **get_selected()** - gets the selected state of the item.

* **set_selected()**- sets the selected state of the item.

* **select()** - selects an item.

* **unselect()** - unselect an item.
