---
title: OnClientButtonToggling
page_title: OnClientButtonToggling | UI for ASP.NET AJAX Documentation
description: OnClientButtonToggling
slug: ribbonbar/client-side-programming/events/onclientbuttontoggling
tags: onclientbuttontoggling
published: True
position: 13
---

# OnClientButtonToggling



## 

The __OnClientButtonToggling__ client-side event occurs when the user clicks on a ribbonbar toggle button, before the ribbonbar responds to the mouse click.

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_button()__ returns a reference of the toggle button which is clicked.

* __set_cancel()__ lets you cancel the event and prevent the default action.

* __get_domEvent()__ returns the DOM event object.

# See Also

 * [Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Overview]({%slug ribbonbar/client-side-programming/events/overview%})
