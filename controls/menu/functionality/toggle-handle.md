---
title: Toggle Handle
page_title: Toggle Handle | UI for ASP.NET AJAX Documentation
description: Toggle Handle
slug: menu/functionality/toggle-handle
tags: toggle,handle
published: True
position: 0
---

# Toggle Handle



## Toggle Handle

As of __Q3 2013__ the __RadMenu__ features a new functionality aiming to improve its usability and user experience under mobile devices. This new functionality is enabled through the __ShowToggleHandle__ property of the control, which is __false__ by default.Once enabled (by setting the aforementioned property to __True__) a __Toggle Handle__ will appear beside the text or image of the the __RadMenuItem__. Once clicked or touched the __Toggle Handle__ will show or hide the child items of the corresponding item to which it belongs. It is also worth mentioning that this __Toggle Handle__ will be shown only when the menu item has children or when its __ExpandMode__ is set to __WebService__.
>caption Figure1

![Menu Toggle Handle](images/menu_togglehandle.png)

Due to the nature of the __RadMenu__ and its current implementation, there were few challenges that we needed to overcome when designing a unified behavior for both a traditional desktop environment and a touch enabled one. By default, the child menu items are shown once their parent item is hovered. While such scenario is applicable in traditional mouse centric environments, it introduces problems on touch-enabled devices when the parent items have the __NavitageUrl__ set or have to execute some action like server-side event upon click or touch.

However, when you enable the __Toggle Handle__, these problems are solved.For example once you click or touch the __Toggle Handle__, itwill only show or hide the children of the particular item without executing any action (navigation or sever event execution).

The event order when the __Toggle Handle__ is clicked or touched is the same as the one when the menu item is hovered.First the __OnClientItemOpening__ is fired followed by __OnClientItemOpened__ when the menu item is closed or __OnClientItemClosing__ followed by __OnClientItemClosed__ when the menu item is opened.

# See Also

 * [Online demo](http://demos.telerik.com/aspnet-ajax-beta/menu/examples/functionality/togglehandle/defaultcs.aspx)
