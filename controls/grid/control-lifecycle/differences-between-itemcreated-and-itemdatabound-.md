---
title: Differences Between ItemCreated and ItemDataBound 
page_title: Differences Between ItemCreated and ItemDataBound  | UI for ASP.NET AJAX Documentation
description: Differences Between ItemCreated and ItemDataBound 
slug: grid/control-lifecycle/differences-between-itemcreated-and-itemdatabound-
tags: differences,between,itemcreated,and,itemdatabound,
published: True
position: 4
---

# Differences Between ItemCreated and ItemDataBound 



## 

Here are some hints which can help you visualize the sequence of the __ItemCreated__and __ItemDataBound__events firing, their specifics and execution lifecycle:




>caption  

|  __Question__  |  __Answer__  |
| ------ | ------ |
| __Is there any data in the item?__ | __ItemCreated__ is fired -before- the item is data-bound. Thus no data is still in the cells' text or input controls. In __ItemDataBound__ all is available.|
| __How often does it fire?__ | __ItemCreated__ is fired when grid is binding to data and when grid is binding from the ViewState, hence after each page postback - just before __Load__ event occurs. __ItemDataBound__ is fired only when grid binds to data. This means that if you need to add controls to a grid item that should fire a postback event, you should:

1. Create the controls in __ItemCreated__ event handler

1. Bind them to data in __ItemDataBound__ (if that's needed)|
| __What about the ViewState management?__ | __ItemCreated__ should be hooked when you need to modify the controls inside a grid cell. __ItemDataBound__ should be wired in order to change the data displayed inside a grid cell and its controls.The changes made in the __ItemCreated__ / __ItemDataBound__ handlers will be persisted in the __ViewState__ .|
