---
title: OnClientSelectedTabChanged 
page_title: OnClientSelectedTabChanged  | RadRibbonBar for ASP.NET AJAX Documentation
description: OnClientSelectedTabChanged 
slug: ribbonbar/client-side-programming/events/onclientselectedtabchanged-
tags: onclientselectedtabchanged,
published: True
position: 10
---

# OnClientSelectedTabChanged 



## 

The **OnClientSelectedTabChanged** client-side event occurs when a non-selected tab is clicked.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

	* **get_tab()** returns a reference to the ribbonbar tab which is the new selected tab.

	* **get_previouslySelectedTab()** returns a reference to the previously selected tab of the ribbonbar.

	* **get_domEvent()** returns the DOM event object.

# See Also

 * [Client-side Programming Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Client-side Events Overview]({%slug ribbonbar/client-side-programming/events/overview%})
