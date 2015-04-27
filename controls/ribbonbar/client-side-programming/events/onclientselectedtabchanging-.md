---
title: OnClientSelectedTabChanging 
page_title: OnClientSelectedTabChanging  | RadRibbonBar for ASP.NET AJAX Documentation
description: OnClientSelectedTabChanging 
slug: ribbonbar/client-side-programming/events/onclientselectedtabchanging-
tags: onclientselectedtabchanging,
published: True
position: 11
---

# OnClientSelectedTabChanging 



## 

The **OnClientSelectedTabChanging** client-side event occurs when the user clicks on a ribbonbar tab, before the ribbonbar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

* **get_tab()** returns a reference to the ribbonbar tab which is about to be selected.

* **get_previouslySelectedTab()** returns a reference to the currently selected tab.

* **get_domEvent()** returns the DOM event object.

* **set_cancel()** lets you cancel the event and prevent changing the selected tab.

# See Also

 * [Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Overview]({%slug ribbonbar/client-side-programming/events/overview%})
