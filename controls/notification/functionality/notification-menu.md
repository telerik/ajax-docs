---
title: Notification Menu
page_title: Notification Menu - RadNotification
description: Check our Web Forms article about Notification Menu.
slug: notification/functionality/notification-menu
tags: notification,menu
published: True
position: 0
---

# Notification Menu




**RadNotification** offers a built-in context menu which can be used to extend the control and to attach some custom functionality. You can use it like the regular **RadContextMenu** - it supports multiple targets, fully customizable layout, many client-side events and more - essentially the full functionality of the **RadContextMenu** is employed in **RadNotification**.

If the **ShowTitleMenu** property is set to **true** the menu icon will appear next to the close button in the titlebar. You can use both the left and the right mouse buttons to invoke this menu.

To activate the Notification Menu you need to declare some items in it and also a target. In this case the **ShowTitleMenu** property is used:

````ASP.NET
<telerik:RadNotification RenderMode="Lightweight" runat="server" ID="RadNotification1" VisibleOnPageLoad="true"
    ShowTitleMenu="true" Text="Sample notification text">
    <NotificationMenu>
        <Items>
            <telerik:RadMenuItem Text="Open Item">
            </telerik:RadMenuItem>
            <telerik:RadMenuItem Text="Flag Item">
            </telerik:RadMenuItem>
            <telerik:RadMenuItem Text="Delete Item">
            </telerik:RadMenuItem>
            <telerik:RadMenuItem Text="Mark As Read">
            </telerik:RadMenuItem>
        </Items>
    </NotificationMenu>
</telerik:RadNotification>
````

>tip If you do not need the menu, set its **Visible** property to **false**, so it does not render on the page at all. This will reduce the amount of scripts, stylesheets and HTML that are loaded.



# See Also
* [RadContextMenu]({%slug menu/context-menus/radcontextmenu-object %})
