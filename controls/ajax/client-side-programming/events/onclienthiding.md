---
title: OnClientHiding
page_title: OnClientHiding | UI for ASP.NET AJAX Documentation
description: OnClientHiding
slug: ajax/client-side-programming/events/onclienthiding
tags: onclienthiding
published: True
position: 4
---

# OnClientHiding



## 

The __OnClientHiding__ client-side event handler is called before the RadAjaxLoadingPanel is hidden.

Two parameters are passed to the event handler with the following methods:

* __sender__ - the instance of the __RadAjaxLoadingPanel__ client-side object.

* __eventArgs__ has the following methods:

* __set_cancelNativeDisplay()__ lets you cancel the default behavior of theRadAjaxLoadingPanel. Calling __set_cancelNativeDisplay(true)__ prevents the default behavior and allows you to implement custom hide animation for the loading panel.

* __get_loadingElement()__ gets the DOM element of the RadAjaxLoadingPanel.

* __get_updatedElement()__ gets the DOM element of the ajax updated control, over which the loading panel is about to be displayed.

# See Also

 * [Animation]({%slug ajax/radajaxloadingpanel/animation%})

 * [OnClientShowing]({%slug ajax/client-side-programming/events/onclientshowing%})
