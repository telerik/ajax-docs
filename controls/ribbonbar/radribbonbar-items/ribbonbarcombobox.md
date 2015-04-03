---
title: RibbonBarComboBox
page_title: RibbonBarComboBox | UI for ASP.NET AJAX Documentation
description: RibbonBarComboBox
slug: ribbonbar/radribbonbar-items/ribbonbarcombobox
tags: ribbonbarcombobox
published: True
position: 12
---

# RibbonBarComboBox



## 

The __RibbonBarComboBox__ has a few important properties, which are listed below:

* __SelectedIndex__ - returns the index of the currently selected item.

* __Text__ - the __Text__ property returns the text of the currently selected item, or the value that is set to theText property of the RadComboBox. When both the __SelectedIndex__ and __Text__ properties are set, the Text property returns the text of the selected item. When the Text property is set ( *RibbonBarComboBox.Text = “text”;* ), the selected index is automatically set to __-1__.

## Working with RibbonBarComboBox on the Client-Side

__RadRibbonBar__ provides a client-side API for working with __RibbonBarComboBox__. Below you can find an list of with their detailed description:

* __get_text()__ - returns the text of the RibbonBarComboBox.

* __set_text()__ - sets the text of the RibbonBarComboBox.

* __get_index()__ - returns the index of the ComboBox in its parent group.

* __get_hierarchicalIndex()__ - returns the hierarchical index of the ComboBox.

* __get_selectedIndex()__ - returns the index of the selected RibbonBarListItem in the ComboBox.

* __set_selectedIndex()__ - sets the selected index of the ComboBox.

* __get_selectedItem()__ - returns the selected RibbonBarListItem of the ComboBox.

__RibbonBarListItem__

>note  __RibbonBarListItem__ - used by RibbonBarDropDown and RibbonBarComboBox. In order to access a single item in the collection of items *get_items().getItem(0);* or the *get_items.get_count();* can be used.
>


* __get_selected()__ - gets the selected state of the item.

* __set_selected()__- sets the selected state of the item.

* __select()__ - selects an item.

* __unselect()__ - unselect an item.
