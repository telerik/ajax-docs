---
title: Notification Menu
page_title: Notification Menu | UI for ASP.NET AJAX Documentation
description: Notification Menu
slug: notification/functionality/notification-menu
tags: notification,menu
published: True
position: 0
---

# Notification Menu



## 

__RadNotification__ offers a built-in context menu which can be used to extend the control and to attach some custom functionality. You can use it like the regular __RadContextMenu__ - it supports multiple targets, fully customizable layout, many client-side events and more - essentially the full functionality of the __RadContextMenu__ is employed in __RadNotification__.

If the __ShowTitleMenu__ property is set to __true__ the menu icon will appear next to the close button in the titlebar. You can use both the left and the right mouse buttons to invoke this menu.

To activate the Notification Menu you need to declare some items in it and also a target. In this case the __ShowTitleMenu__ property is used:

````ASPNET
	    <telerik:RadNotification runat="server" ID="RadNotification1" VisibleOnPageLoad="true"
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



# See Also[RadContextMenu](8A82F511-79B4-42B3-BBCA-B8C79A0BDBA0)
