---
title: Controls Are Not Updated During the ItemsRequested Event
page_title: Controls Are Not Updated During the ItemsRequested Event | UI for ASP.NET AJAX Documentation
description: Controls Are Not Updated During the ItemsRequested Event
slug: combobox/troubleshooting/controls-are-not-updated-during-the-itemsrequested-event
tags: controls,are,not,updated,during,the,itemsrequested,event
published: True
position: 2
---

# Controls Are Not Updated During the ItemsRequested Event



## 

The **ItemsRequested** event is fired when a callback is initiated from the client-side - when the user types in the combobox input field or when the user clicks the drop-arrow image. To fire the **ItemsRequested** event, you should first enable the **EnableLoadOnDemand** property of the **RadComboBox** object.

Since the **ItemsRequested** event is fired when a callback is initiated form the client-side, all controls that are being updated in the **ItemsRequested** event handler will lose the changes after the callback. This behavior is due to the async (callback) request that is made to fire the **ItemsRequested** event.

A working solution would be wrapping the combobox and the controls that will be updated with an [AJAX Panel](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Panel/FirstLook/DefaultCS.aspx). You should, however, keep into account that you should not use the built-in callback machinism of Telerik RadComboBox along with Telerik RadAjax.You should entirely use the combobox in a server mode - adding the items in the *Load* event of the page for instance. The AJAX Panel will take care of transforming the postback into a callback and thus keeping the needed client-side experience.
