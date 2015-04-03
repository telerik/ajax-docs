---
title: OnClientShowing
page_title: OnClientShowing | UI for ASP.NET AJAX Documentation
description: OnClientShowing
slug: ajax/client-side-programming/events/onclientshowing
tags: onclientshowing
published: True
position: 3
---

# OnClientShowing



## 

The __OnClientShowing__ client-side event handler is called before the RadAjaxLoadingPanel is displayed.

Two parameters are passed to the event handler with the following methods:

* __sender__ - the instance of the __RadAjaxLoadingPanel__ client-side object.

* __eventArgs__ has the following methods:

* __set_cancelNativeDisplay()__ lets you cancel the default behavior of theRadAjaxLoadingPanel. Calling __set_cancelNativeDisplay(true)__ prevents the defaultbehavior and allows you to implement custom show animation for the loading panel.

* __get_loadingElement()__ gets the DOM element of the RadAjaxLoadingPanel.

* __get_updatedElement()__ gets the DOM element of the ajax updated control, over which the loading panel is about to be displayed.

# See Also

 * [Animation]({%slug ajax/radajaxloadingpanel/animation%})

 * [OnClientHiding]({%slug ajax/client-side-programming/events/onclienthiding%})
