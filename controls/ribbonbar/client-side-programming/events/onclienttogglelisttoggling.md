---
title: OnClientToggleListToggling
page_title: OnClientToggleListToggling | RadRibbonBar for ASP.NET AJAX Documentation
description: OnClientToggleListToggling
slug: ribbonbar/client-side-programming/events/onclienttogglelisttoggling
tags: onclienttogglelisttoggling
published: True
position: 15
---

# OnClientToggleListToggling



## 

The **OnClientToggleListToggling** client-side event occurs after a toggle button inside of ToggleList is clicked, before the ribbonbar responds to the mouse click.

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

	* **get_button()** returns a reference of the toggle button which is clicked.

	* **set_cancel()** lets you cancel the event and prevent the default action.

	* **get_domEvent()** returns the DOM event object.

# See Also

 * [Client-side Programming Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Client-side Events Overview]({%slug ribbonbar/client-side-programming/events/overview%})
