---
title: OnClientButtonToggling
page_title: OnClientButtonToggling - RadRibbonBar
description: Check our Web Forms article about OnClientButtonToggling.
slug: ribbonbar/client-side-programming/events/onclientbuttontoggling
tags: onclientbuttontoggling
published: True
position: 13
---

# OnClientButtonToggling



## 

The **OnClientButtonToggling** client-side event occurs when the user clicks on a ribbonbar toggle button, before the ribbonbar responds to the mouse click.

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

	* **get_button()** returns a reference of the toggle button which is clicked.

	* **set_cancel()** lets you cancel the event and prevent the default action.

	* **get_domEvent()** returns the DOM event object.

# See Also

 * [Client-side Programming Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Client-side Events Overview]({%slug ribbonbar/client-side-programming/events/overview%})
