---
title: Keyboard Support
page_title: Keyboard Support | RadToolBar for ASP.NET AJAX Documentation
description: Keyboard Support
slug: toolbar/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support

A critical requirement for software accessibility is keyboard support as a complete alternative to pointing devices (mouse, etc.). Keyboard support is comprised of access keys, keyboard navigation, and keyboard shortcuts. RadMenu seamlessly switches between mouse and keyboard navigation, just like in desktop applications.

Using the **AccessKey** property, you can associate an activation combination (access key) which moves focus to a particular button in the toolbar and enables keyboard navigation. When there are multiple tool bars on a given page, each of them may have a different activation combination.

## Setting access keys

**AccessKey** is a property of the **RadToolBarItem** class (the base class for **RadToolBarButton**, **RadToolBarDropDown**, and **RadToolBarSplitButton**). **AccessKey** sets the keyboard shortcut that can be used to move focus to a button in the toolbar. The value of the **AccessKey** property can only be a single character. When the user presses the [ALT] key in combination with the value specified by **AccessKey**, focus moves to the associated button. The user can then subsequently use the arrow keys for navigation. (See below.)

>note In Opera, access keys work by pressing Shift+ESC, then pressing the assigned access key.
>


To set a keyboard shortcut to a menu item, simply set the **AccessKey** property to the desired key:

````ASPNET
<telerik:RadToolBar ID="RadToolBar1" runat="server" Skin="Outlook" OnButtonClick="RadToolBar1_ButtonClick">
    <Items>
        <telerik:RadToolBarButton runat="server" Text="Exit" AccessKey="X" />
        <telerik:RadToolBarDropDown runat="server" Text="Open" AccessKey="O">
            <Buttons>
                <telerik:RadToolBarButton runat="server" AccessKey="B" Text="Browse">
                </telerik:RadToolBarButton>
                <telerik:RadToolBarButton runat="server" IsSeparator="True" Text="-">
                </telerik:RadToolBarButton>
            </Buttons>
        </telerik:RadToolBarDropDown>
        <telerik:RadToolBarSplitButton runat="server" Text="Create New" AccessKey="N" DefaultButtonIndex="0">
            <Buttons>
                <telerik:RadToolBarButton runat="server" Text="File" AccessKey="F" />
                <telerik:RadToolBarButton runat="server" Text="Folder" AccessKey="D" />
            </Buttons>
        </telerik:RadToolBarSplitButton>
    </Items>
</telerik:RadToolBar>
````

## Keyboard navigation

Keyboard navigation is supported by using the [TAB] and arrow keys. Use the [TAB] key to move focus to the first button in the toolbar. Then use the arrow keys to move among the buttons.

## Moving through the buttons

An alternative to arrow keys for moving forward and backward along the toolbar are the [TAB] and [SHIFT]+[TAB] key combinations:

* To move forward, use the [TAB] key.

* To move backward, use the [SHIFT]+[TAB] key combination.

## Drop-down lists

Drop-down lists are expanded using the arrow keys in the direction in which they expand: for example, in a horizontal toolbar, drop-down lists are expanded using the down arrow key. In a vertical toolbar, the right arrow key expands a drop-down list (unless right-to-left support is enabled, in which case the left arrow key expands a drop-down list).

Drop-down lists are contracted using the [ESC] key. They can also be contracted by navigating to the first item in the list and then using the arrow key in the opposite direction from the one that expands the list.

## Executing buttons

When focus is on a button in the toolbar, pressing the [ENTER] key causes the button to execute (triggers the client- and server-side click events).
