---
title: RadMenu Item Builder
page_title: RadMenu Item Builder | UI for ASP.NET AJAX Documentation
description: RadMenu Item Builder
slug: menu/design-time/radmenu-item-builder
tags: radmenu,item,builder
published: True
position: 1
---

# RadMenu Item Builder



The __RadMenu Item Builder__ lets you populate your menu with a hierarchy of items that do not come from a separate data source. There are two ways to bring up the RadMenu Item Builder:

* From the __RadMenu__[Smart Tag]({%slug menu/design-time/smart-tag%}), click on the __Build RadMenu__ link.

* Right-click on the __RadMenu__ component and select __Build RadMenu__ from its context menu.

## RadMenu Item Builder

![Sample RadMenu](images/menu_samplemenu.png)

The __RadMenu Item builder__ lets you add, rearrange, configure, and delete menu items. These actions are initiated using the tool bar at the upper left of the Item builder:

![RadMenu Item Builder toolbar](images/menu_itembuildertoolbar.png)

The following table describes the controls in the tool bar:


>caption  

| Button | Function |
| ------ | ------ |
|![RadMenu Add Root Item](images/menu_addrootitem.png)|Adds a root item to the menu in the next available position. Root items are the top-level items (menu items with no parent item).|
|![RadMenu Add Child Item](images/menu_addchilditem.png)|Adds a child item to the currently selected menu item. The child can belong to either a root item or another child item.|
|![RadMenu Delete Item](images/menu_deleteitem.png)|Deletes the currently selected menu item. When you delete a menu item, its child items are deleted as well.|
|![RadMenu Item Builder](images/menu_makesiblingtoparent.png)|Moves the currently selected menu item up a level, making it a sibling to its parent item (following the parent item).|
|![RadMenu Item Builder](images/menu_makechildofprecedingsibling.png)|Moves the currently selected menu item down a level, making it the child of its previous sibling.|
|![RadMenu Item Builder](images/menu_movebeforesibling.png)|Moves the currently selected menu item backward in its current list of siblings, so that it precedes the previous sibling.|
|![RadMenu Item Builder](images/menu_moveaftersibling.png)|Moves the currently selected menu item forward in its current list of siblings, so that it follows the next sibling.|

When a menu item (either a root item or a child item) is selected, the properties pane on the right of the __RadMenu Item Builder__ lets you configure the item by setting its properties. For each item,

* __Text__ is the text of the item as it appears in the menu.

* __ToolTip__is the text of a tooltip that appears when the user hovers the mouse over the item.

* __Enabled__ controls whether the item is initially enabled or disabled.

* __GroupSettings__ lets you [specify how the child items are laid out]({%slug menu/appearance-and-styling/layout-of-child-items%}).

* __IsSeparator__ specifies whether the menu item acts as a separator.

* __Value__ lets you associate a text value with the menu item that you can use when programming the menu behavior.

* __NavigateUrl__ and __Target__ cause the menu item to automatically launch another Web page (specified by __NavigateUrl__) in the window specified by __Target__. If the __Target__ property is not set, the new Web page uses the current browser window.

* __PostBack__ specifies whether the item causes a postback.

* __CssClass__, __ClickedCssClass__, __DisabledCssClass__, __ExpandedCssClas__, and __FocusedCssClass__[control the appearance of the menu item]({%slug menu/appearance-and-styling/setting--the-css-class-of-items%}) when it is in its normal state, clicked, disabled, expanded, and holds input focus, respectively.

* __ImageUrl__, __ImageClickedUrl__, __DisabledImageUrl__, __ExpandedImageUrl__, and __HoveredImageUrl__ let you [specify an image]({%slug menu/appearance-and-styling/adding-images-to-items%}) that appears on the left of the menu item when it is in its normal state, clicked, disabled, expanded, and when the mouse hovers over it, respectively.

# See Also

 * [Overview]({%slug menu/radmenu-items/overview%})
