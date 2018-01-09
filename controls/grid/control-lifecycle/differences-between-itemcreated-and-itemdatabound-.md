---
title: Differences Between ItemCreated and ItemDataBound 
page_title: Differences Between ItemCreated and ItemDataBound  | RadGrid for ASP.NET AJAX Documentation
description: Differences Between ItemCreated and ItemDataBound 
slug: grid/control-lifecycle/differences-between-itemcreated-and-itemdatabound-
tags: differences,between,itemcreated,and,itemdatabound,
published: True
position: 4
---

# Differences Between ItemCreated and ItemDataBound 



## 

Here are some hints which can help you visualize the sequence of the **ItemCreated** and **ItemDataBound** events firing, their specifics and execution lifecycle:




>caption  

|  **Question**  |  **Answer**  |
| ------ | ------ |
| **Is there any data in the item?** | **ItemCreated** is fired -before- the item is data-bound. Thus, there is no data in the cells' text or input controls yet. In **ItemDataBound** all is available.|
| **How often does it fire?** | **ItemCreated** is fired when grid is binding to data and when grid is binding from the ViewState, hence after each page postback - just before **Load** event occurs. **ItemDataBound** is fired only when grid binds to data. This means that if you need to add controls to a grid item that should fire a postback event, you should: <ol><li>Create the controls in **ItemCreated** event handler</li><li>Bind them to data in **ItemDataBound** (if that's needed)</li></ol>|
| **What about the ViewState management?** | **ItemCreated** should be hooked when you need to modify the controls inside a grid cell. **ItemDataBound** should be wired in order to change the data displayed inside a grid cell and its controls. The changes made in the **ItemCreated** / **ItemDataBound** handlers will be persisted in the **ViewState** .|


