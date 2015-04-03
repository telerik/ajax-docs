---
title: OnClientApplicationMenuItemClicking
page_title: OnClientApplicationMenuItemClicking | UI for ASP.NET AJAX Documentation
description: OnClientApplicationMenuItemClicking
slug: ribbonbar/client-side-programming/events/onclientapplicationmenuitemclicking
tags: onclientapplicationmenuitemclicking
published: True
position: 16
---

# OnClientApplicationMenuItemClicking



## 

The __OnClientApplicationMenuItemClicking__ client-side event occurs when an ApplicationMenu items is clicked, before the ribbonbar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_applicationMenu()__ returns a reference to the ribbonbar application menu.

* __get_item()__ returns a reference to the clicked application menu item.

* __get_domEvent()__ returns the DOM event object.

* __set_cancel()__ lets you cancel the event and prevent changing the selected tab.

# See Also

 * [Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Application Menu]({%slug ribbonbar/radribbonbar-items/application-menu%})

 * [Overview]({%slug ribbonbar/client-side-programming/events/overview%})
