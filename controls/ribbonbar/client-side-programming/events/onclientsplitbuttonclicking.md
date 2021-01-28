---
title: OnClientSplitButtonClicking
page_title: OnClientSplitButtonClicking - RadRibbonBar
description: Check our Web Forms article about OnClientSplitButtonClicking.
slug: ribbonbar/client-side-programming/events/onclientsplitbuttonclicking
tags: onclientsplitbuttonclicking
published: True
position: 9
---

# OnClientSplitButtonClicking



## 

The **OnClientSplitButtonClicking** client-side event occurs when the user clicks on a ribbonbar split button, before the ribbonbar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

	* **get_button()** returns a reference to the ribbonbar split button that was clicked. In this case it is **RibbonBarSplitButton**.

	* **set_cancel()** lets you prevent the ribbonbar from responding to the mouse click.

# See Also

 * [Client-side Programming Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Client-side Events Overview]({%slug ribbonbar/client-side-programming/events/overview%})
