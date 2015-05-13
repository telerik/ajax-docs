---
title: Scrolling
page_title: Scrolling | RadTileList for ASP.NET AJAX Documentation
description: Scrolling
slug: tilelist/functionality/scrolling
tags: scrolling
published: True
position: 2
---

# Scrolling





**RadTileList** allows the developer the choose the scrolling experience for the end users.Generally, the control scrolls only horizontally and this can be done by using the mouse wheel. Turning it downward will scroll the control to the right.The **ScrollingMode** property is used to control the general behavior:

* Auto - the default value - the scrolling mode is automatically set to Native or Accelerated depending on the device touch capabilities.

* None - no scrollbar is displayed

* Native - the scrollbar is provided by the browser to provide the standard scrolling experience the user would expect,so touch devices allow the user to use a sliding motion to scroll the content.

* Accelerated - the displayed scrollbar is custom styled and accelerated. It is recommended that it is used only for touch devices, yet it can bring touch-scrolling experience to desktop users as well - the user can hold down the mouse button and scroll as if it were their finger on the screen.

The ScrollingMode property can be changed on the server (or in the markup) and on the client with JavaScript through the *`set_scrollingMode()`* method. It takes a member of the *`Telerik.Web.UI.TileList.TileListScrollingMode`* enum which has the same name both on the server and on the client.
