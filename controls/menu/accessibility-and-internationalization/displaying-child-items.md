---
title: Displaying Child Items
page_title: Displaying Child Items - RadMenu
description: Check our Web Forms article about Displaying Child Items.
slug: menu/accessibility-and-internationalization/displaying-child-items
tags: displaying,child,items
published: True
position: 1
---

# Displaying Child Items

## 

By default, the children of a menu item are displayed when the user hovers the mouse over the parent item.When the mouse moves over a new parent item, the original submenu collapses and the children of the new parent menu item are displayed. The **ExpandDelay** and **CollapseDelay** properties specify the time, in milliseconds, after the mouse enters or exits a parent item until the list of child items begins to expand or collapse.

You can use the **ClickToOpen** property to specify that menu items do not expand when the mouse hovers over them until the user clicks the menu with the mouse. When **ClickToOpen** is **True**, the menu does not expand until the user clicks on a root item, at which point the root item expands. Once clicked, the menu expands and collapses as normal, until the user clicks again (either on a menu item or outside the menu). The **ExpandDelay** property controls the time, in milliseconds, after the user first clicks the menu until the menu item expands. The **CollapseDelay** property controls the time, in milliseconds, after the user clicks a second time until the menu items all collapse.

>note You can further customize the behavior of the menu when it expands and collapses using [animations]({%slug menu/functionality/animations%}).
>


As of **Q3 2009**, **RadMenu** supports multi-column rendering of child items. This feature is controlled through the **GroupSettings** (either **DefaultGroupSettings** or per-item **GroupSettings**) using two properties:

* The **RepeatDirection** property determines the order in which the items are rendered.If this property is set to **RepeatDirection.Vertical**, the items are displayed in columns loaded from top to bottom, then left to right, until all items are rendered. If this property is set to **RepeatDirection.Horizontal**, the items are displayed in rows loaded from left to right, then top to bottom, until all items are rendered. The **RepeatDirection** has no effect if **RepeatColumns** is set to 1 (default).

* The **RepeatColumns** property specifies the number of columns.

>note  **Note:** Scrolling is disabled if multi-column rendering is in effect.
>




# See Also

 * [Layout of Child Items]({%slug menu/appearance-and-styling/layout-of-child-items%})
