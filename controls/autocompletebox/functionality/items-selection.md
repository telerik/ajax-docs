---
title: Items Selection
page_title: Items Selection | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: Items Selection
slug: autocompletebox/functionality/items-selection
tags: items,selection
published: True
position: 2
---

# Items Selection



## 

Items present in the drop-down container of RadAutoCompleteBox can be selected using both the mouse, or the keyboard.

When the user starts to type in the input area, the items present in the drop-down container are filtered against the typed text. Only the items which satisfy the filter criteria are visible in the drop-down container that pops up. When the drop-down list is visible, the user can use the 'Up' and 'Down' arrow keys, or the mouse, to go throught the filtered items and look for an item to select.An item from the drop-down container can be selected more than once.

RadAutoCompleteBox gives the users the ability to create entries which text does not match any of the items present in the drop-down container. This functionality is enabled by the **AllowCustomEntry** property of RadAutoCompleteBox,which takes a boolean as a value.

The **HighlightFirstMatch** property accepts boolen value. When set to true, the RadAutoCompleteBox highlights the first item that matches the user input. When focus is lost from the control the highlighted item is automatically added to the Entries collection of the RadAutoCompleteBox. When the property value is set to false, no item is highlighted added to Entries collection on lost focus.  The value of the property is set by default to true.
