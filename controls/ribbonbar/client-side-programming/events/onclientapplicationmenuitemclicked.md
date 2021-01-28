---
title: OnClientApplicationMenuItemClicked
page_title: OnClientApplicationMenuItemClicked - RadRibbonBar
description: Check our Web Forms article about OnClientApplicationMenuItemClicked.
slug: ribbonbar/client-side-programming/events/onclientapplicationmenuitemclicked
tags: onclientapplicationmenuitemclicked
published: True
position: 17
---

# OnClientApplicationMenuItemClicked



## 

The **OnClientApplicationMenuItemClicked** client-side event occurs after an ApplicationMenu items is clicked.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

	* **get_applicationMenu()** returns a reference to the ribbonbar application menu.

	* **get_item()** returns a reference to the clicked application menu item.

	* **get_domEvent()** returns the DOM event object.

# See Also

 * [Client-side Programming Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Application Menu]({%slug ribbonbar/radribbonbar-items/application-menu%})

 * [Client-side Events Overview]({%slug ribbonbar/client-side-programming/events/overview%})
