---
title: OnClientSelectedTabChanged 
page_title: OnClientSelectedTabChanged  | UI for ASP.NET AJAX Documentation
description: OnClientSelectedTabChanged 
slug: ribbonbar/client-side-programming/events/onclientselectedtabchanged-
tags: onclientselectedtabchanged,
published: True
position: 10
---

# OnClientSelectedTabChanged 



## 

The __OnClientSelectedTabChanged__ client-side event occurs when a non-selected tab is clicked.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_tab()__ returns a reference to the ribbonbar tab which is the new selected tab.

* __get_previouslySelectedTab()__ returns a reference to the previously selected tab of the ribbonbar.

* __get_domEvent()__ returns the DOM event object.

# See Also

 * [Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Overview]({%slug ribbonbar/client-side-programming/events/overview%})
