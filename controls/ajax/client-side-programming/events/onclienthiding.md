---
title: OnClientHiding
page_title: OnClientHiding | RadAjax for ASP.NET AJAX Documentation
description: OnClientHiding
slug: ajax/client-side-programming/events/onclienthiding
tags: onclienthiding
published: True
position: 4
---

# OnClientHiding



## 

The **OnClientHiding** client-side event handler is called before the RadAjaxLoadingPanel is hidden.

Two parameters are passed to the event handler with the following methods:

* **sender** - the instance of the **RadAjaxLoadingPanel** client-side object.

* **eventArgs** has the following methods:

* **set_cancelNativeDisplay()** lets you cancel the default behaviour of theRadAjaxLoadingPanel. Calling **set_cancelNativeDisplay(true)** prevents the default behaviour and allows you to implement custom hide animation for the loading panel.

* **get_loadingElement()** gets the DOM element of the RadAjaxLoadingPanel.

* **get_updatedElement()** gets the DOM element of the ajax updated control, over which the loading panel is about to be displayed.

## See Also

 * [Animation]({%slug ajax/radajaxloadingpanel/animation%})

 * [OnClientShowing]({%slug ajax/client-side-programming/events/onclientshowing%})
