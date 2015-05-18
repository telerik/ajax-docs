---
title: Keyboard Support
page_title: Keyboard Support | RadMenu for ASP.NET AJAX Documentation
description: Keyboard Support
slug: menu/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support


A critical requirement for software accessibility is keyboard support as a complete alternative to pointing devices (mouse, etc.). Keyboard support is comprised of access keys, keyboard navigation, and keyboard shortcuts. RadMenu seamlessly switches between mouse and keyboard navigation, just like in desktop applications.

Using the **AccessKey** property, you can associate an activation combination (access key) which moves focus to a particular menu item and enables keyboard navigation. When there are multiple menus on a given page, each of them may have a different activation combination.

## Setting access keys

**AccessKey** is a property of the **RadMenuItem** class. **AccessKey** sets the keyboard shortcut that may be used to activate a menu item. The value of the **AccessKey** property can only be a single character. When the user presses the [ALT] key in combination with the value specified by **AccessKey**, focus moves to the associated item.The user can then subsequently use the arrow keys for navigation. (See below.)

>note In **Opera**, access keys work by pressing **Shift+ESC**, then pressing the assigned **access key**.
>In **FireFox** and **Chrome**, access keys work by pressing **Alt + Shift + access key**.
>Note also that in some browsers like **FireFox** and **Chrome** some of the keyboard combination are already occupied by the browser itself. Therefore you will need to focus the Menu first, then use the Tab key to navigate between the RadMenuItems.
>


To set a keyboard shortcut to a menu item, simply set the **AccessKey** property to the desired key. When AccessKey is set, the character specified by AccessKey appears underlined in the menu item text:

![](images/menu_accesskeys.png)

````ASP.NET
<telerik:RadMenu ID="RadMenu1" runat="server" Flow="Horizontal" Skin="Inox">
    <Items>
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Company" AccessKey="C">
        </telerik:RadMenuItem>
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Products" AccessKey="P">
        </telerik:RadMenuItem>
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Support" AccessKey="S">
        </telerik:RadMenuItem>
    </Items>
</telerik:RadMenu>
````

## Keyboard navigation

Keyboard navigation is supported by using the [TAB] and arrow keys. Use the [TAB] key to move focus to the first menu item, and then use the arrow keys to move among menu items.

An alternative to arrow keys for moving forward and backward along the menu are the [TAB] and [SHIFT]+[TAB] key combinations:

* To move forward, use the [TAB] key.

* To move backward, use the [SHIFT]+[TAB] key combination.

Child menu items are expanded using the arrow keys from the opposite (perpendicular) axis: for example, in a horizontal menu, the left and right arrow keys (or [TAB] and [SHIFT]+[TAB] key combinations) navigate among the parent items; child items are accessed with the up and down arrow keys.

Use the [ESC] key to go back one level.

The following properties are related to keyboard accessibility as they define the flow and expanding direction of menu items:

* **Flow** This property defines whether the menu (or submenu) is horizontal or vertical. The left and right arrow keys navigate horizontal menus, while the up and down keys navigate vertical menus. Similarly, in a horizontal menu, the up and down arrow keys expand the child items of a focused parent, whereas in a vertical menu, children are expanded using the left and right keys.

* **GroupSettings** Each **RadMenuItem** has a **GroupSettings** property that specifies how its child menu expands. Apart from setting the **Flow** property on the menu level, you can explicitly set the flow and the expanding direction for each particular menu item. The values you set at this level affect the selected item's children.

To learn more about the **Flow** and **ExpandDirection** properties, see [Controlling the Layout of Child Items]({%slug menu/appearance-and-styling/layout-of-child-items%}).

# See Also

 * [RadMenu Item Builder]({%slug menu/design-time/radmenu-item-builder%})
