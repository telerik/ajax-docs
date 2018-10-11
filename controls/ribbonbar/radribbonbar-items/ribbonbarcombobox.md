---
title: RibbonBarComboBox
page_title: RibbonBarComboBox | RadRibbonBar for ASP.NET AJAX Documentation
description: RibbonBarComboBox
slug: ribbonbar/radribbonbar-items/ribbonbarcombobox
tags: ribbonbarcombobox
published: True
position: 12
---

# RibbonBarComboBox



## 

The **RibbonBarComboBox** has a few important properties, which are listed below:

* **SelectedIndex** - returns the index of the currently selected item.

* **Text** - the **Text** property returns the text of the currently selected item, or the value that is set to theText property of the RadComboBox. When both the **SelectedIndex** and **Text** properties are set, the Text property returns the text of the selected item. When the Text property is set ( *RibbonBarComboBox.Text = “text”;* ), the selected index is automatically set to **-1**.

## Working with RibbonBarComboBox on the Client-Side

**RadRibbonBar** provides a client-side API for working with **RibbonBarComboBox**. Below you can find an list of with their detailed description:

* **get_text()** - returns the text of the RibbonBarComboBox.

* **set_text()** - sets the text of the RibbonBarComboBox.

* **get_index()** - returns the index of the ComboBox in its parent group.

* **get_hierarchicalIndex()** - returns the hierarchical index of the ComboBox.

* **get_selectedIndex()** - returns the index of the selected RibbonBarListItem in the ComboBox.

* **set_selectedIndex()** - sets the selected index of the ComboBox.

* **get_selectedItem()** - returns the selected RibbonBarListItem of the ComboBox.

**RibbonBarListItem**

>tip  **RibbonBarListItem** - used by RibbonBarDropDown and RibbonBarComboBox. In order to access a single item in the collection of items *get_items().getItem(0);* or the *get_items.get_count();* can be used.
>


* **get_selected()** - gets the selected state of the item.

* **set_selected()** - sets the selected state of the item.

* **select()** - selects an item.

* **unselect()** - unselect an item.
