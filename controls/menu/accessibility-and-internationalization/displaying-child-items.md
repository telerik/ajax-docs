---
title: Displaying Child Items
page_title: Displaying Child Items | UI for ASP.NET AJAX Documentation
description: Displaying Child Items
slug: menu/accessibility-and-internationalization/displaying-child-items
tags: displaying,child,items
published: True
position: 1
---

# Displaying Child Items





## 

By default, the children of a menu item are displayed when the user hovers the mouse over the parent item.When the mouse moves over a new parent item, the original submenu collapses and the children of the new parent menu item are displayed. The __ExpandDelay__ and __CollapseDelay__ properties specify the time, in milliseconds, after the mouse enters or exits a parent item until the list of child items begins to expand or collapse.

You can use the __ClickToOpen__ property to specify that menu items do not expand when the mouse hovers over them until the user clicks the menu with the mouse. When __ClickToOpen__ is __True__, the menu does not expand until the user clicks on a root item, at which point the root item expands. Once clicked, the menu expands and collapses as normal, until the user clicks again (either on a menu item or outside the menu). The __ExpandDelay__ property controls the time, in milliseconds, after the user first clicks the menu until the menu item expands. The __CollapseDelay__ property controls the time, in milliseconds, after the user clicks a second time until the menu items all collapse.

>note You can further customize the behavior of the menu when it expands and collapses using[animations]({%slug menu/functionality/animations%}).
>


As of __Q3 2009__, __RadMenu__ supports multi-column rendering of child items. This feature is controlled through the __GroupSettings__ (either __DefaultGroupSettings__ or per-item __GroupSettings__) using two properties:

* The __RepeatDirection__ property determines the order in which the items are rendered.If this property is set to __RepeatDirection.Vertical__, the items are displayed in columns loaded from top to bottom, then left to right, until all items are rendered. If this property is set to __RepeatDirection.Horizontal__, the items are displayed in rows loaded from left to right, then top to bottom, until all items are rendered. The __RepeatDirection__ has no effect if __RepeatColumns__ is set to 1 (default).

* The __RepeatColumns__ property specifies the number of columns.

>note  __Note:__ Scrolling is disabled if multi-column rendering is in effect.
>




# See Also

 * [Layout of Child Items]({%slug menu/appearance-and-styling/layout-of-child-items%})
