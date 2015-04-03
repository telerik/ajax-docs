---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: gantt/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 2
---

# Keyboard Support



__RadGantt__ introduces keyboard support. In order to activate it, you must set the __KeyboardNavigationSettings__:

````ASPNET
	    <telerik:RadGantt ID="RadGantt1" runat="server">
	        <KeyboardNavigationSettings FocusKey="W" CommandKey="Alt" />
	    </telerik:RadGantt>              
````



>note Some key combination are reserved by the browsers for default actions and they cannot be used. Ex. Ctrl + D adds current page to favorites/bookmarks.
>


The keyboard navigation has the following functionalities:

## 

__ACTIONS APPLIED ON GANTT'S TIMELINE__

* __Delete__ - deletes currently selected task and/or dependency.

__ACTIONS APPLIED ON GANTT'S TREELIST HEADER__

* __Enter__ - sort by the column.

__ACTIONS APPLIED ON GANTT'S TREELIST DATA TABLE__

* __Arrow Keys__ - to navigate over the cells.

* __Enter__ - opens cell editor.

* __Esc__ - closes cell editor.

* __Space__ - selects currently highlighted cell's row.

* __1 - 3__ - moves between the available views.

* __Alt Left Arrow / Alt Right Arrow__ - scrolls timeline.

* __Ctrl Right Arrow / Ctrl Left Arrow__ - expand/collapse summary row.

__ACTIONS APPLIED ON 'ADD TASK' ACTION DROPDOWN__

* __Up Arrow__ - highlights previous item.

* __Down Arrow__ - highlights next item.

* __Enter__ - selects highlighted item.

* __Esc__ - closes the dropdown.
