---
title: OnClientLauncherClicking
page_title: OnClientLauncherClicking - RadRibbonBar
description: Check our Web Forms article about OnClientLauncherClicking.
slug: ribbonbar/client-side-programming/events/onclientlauncherclicking
tags: onclientlauncherclicking
published: True
position: 5
---

# OnClientLauncherClicking



## 

The **OnClientLauncherClicking** client-side event occurs when the user clicks on a ribbonbar group, before the ribbonbar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

	* **get_group()** returns a reference to the ribbonbar group that was clicked. In this case it is **RibbonBarGroup**.

	* **set_cancel()** lets you prevent the ribbonbar from responding to the mouse click.

# See Also

 * [Client-Side Programming Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Client-Side Events Overview]({%slug ribbonbar/client-side-programming/events/overview%})
