---
title: OnClientShowing
page_title: OnClientShowing | RadAjax for ASP.NET AJAX Documentation
description: OnClientShowing
slug: ajax/client-side-programming/events/onclientshowing
tags: onclientshowing
published: True
position: 3
---

# OnClientShowing



## 

The **OnClientShowing** client-side event handler is called before the RadAjaxLoadingPanel is displayed.

Two parameters are passed to the event handler with the following methods:

* **sender** - the instance of the **RadAjaxLoadingPanel** client-side object.

* **eventArgs** has the following methods:

* **set_cancelNativeDisplay()** lets you cancel the default behavior of theRadAjaxLoadingPanel. Calling **set_cancelNativeDisplay(true)** prevents the defaultbehavior and allows you to implement custom show animation for the loading panel.

* **get_loadingElement()** gets the DOM element of the RadAjaxLoadingPanel.

* **get_updatedElement()** gets the DOM element of the ajax updated control, over which the loading panel is about to be displayed.

# See Also

 * [Animation]({%slug ajax/radajaxloadingpanel/animation%})

 * [OnClientHiding]({%slug ajax/client-side-programming/events/onclienthiding%})
