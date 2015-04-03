---
title: Differences between ItemCreated  and ItemDataBound Events
page_title: Differences between ItemCreated  and ItemDataBound Events | UI for ASP.NET AJAX Documentation
description: Differences between ItemCreated  and ItemDataBound Events
slug: listview/control-lifecycle/differences-between-itemcreated--and-itemdatabound-events
tags: differences,between,itemcreated,,and,itemdatabound,events
published: True
position: 3
---

# Differences between ItemCreated  and ItemDataBound Events



## 

Here are some hints which can help you visualize the sequence of the __ItemCreated__ and __ItemDataBound__ events firing, their specifics and execution lifecycle:


| Question | Answer |
| ------ | ------ |
| __Is there any data in the item?__ | __ItemCreated__ is fired -before- the item is data-bound. Thus no data is still in the listview item or the controls nested inside it. In __ItemDataBound__ all is available.|
| __How often does it fire?__ | __ItemCreated__ is fired when listiview is binding to data and when listview is created from the ViewState, hence after each page postback - just before __Load__ event occurs. __ItemDataBound__ is fired only when RadListView binds to data.This means that if you need to add controls to a listview item that should fire a postback event, you should:

1. Create the controls in __ItemCreated__ event handler

1. Bind them to data in __ItemDataBound__ (if that's needed)|
| __What about the ViewState management?__ | __ItemCreated__ should be hooked when you need to modify the controls inside a listview item. __ItemDataBound__ should be wired in order to change the data displayed inside a listview item and the controls nested inside it.The changes made in the __ItemCreated__ / __ItemDataBound__ handlers will be persisted in the __ViewState__ .|
