---
title: OnClientLauncherClicking
page_title: OnClientLauncherClicking | UI for ASP.NET AJAX Documentation
description: OnClientLauncherClicking
slug: ribbonbar/client-side-programming/events/onclientlauncherclicking
tags: onclientlauncherclicking
published: True
position: 5
---

# OnClientLauncherClicking



## 

The __OnClientLauncherClicking__ client-side event occurs when the user clicks on a ribbonbar group, before the ribbonbar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_group()__ returns a reference to the ribbonbar group that was clicked. In this case it is __RibbonBarGroup__.

* __set_cancel()__ lets you prevent the ribbonbar from responding to the mouse click.

# See Also

 * [Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Overview]({%slug ribbonbar/client-side-programming/events/overview%})
