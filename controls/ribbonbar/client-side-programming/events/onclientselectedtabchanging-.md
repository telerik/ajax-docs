---
title: OnClientSelectedTabChanging 
page_title: OnClientSelectedTabChanging  | UI for ASP.NET AJAX Documentation
description: OnClientSelectedTabChanging 
slug: ribbonbar/client-side-programming/events/onclientselectedtabchanging-
tags: onclientselectedtabchanging,
published: True
position: 11
---

# OnClientSelectedTabChanging 



## 

The __OnClientSelectedTabChanging__ client-side event occurs when the user clicks on a ribbonbar tab, before the ribbonbar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_tab()__ returns a reference to the ribbonbar tab which is about to be selected.

* __get_previouslySelectedTab()__ returns a reference to the currently selected tab.

* __get_domEvent()__ returns the DOM event object.

* __set_cancel()__ lets you cancel the event and prevent changing the selected tab.

# See Also

 * [Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Overview]({%slug ribbonbar/client-side-programming/events/overview%})
