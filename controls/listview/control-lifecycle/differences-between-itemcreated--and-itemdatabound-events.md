---
title: Differences between ItemCreated  and ItemDataBound Events
page_title: Differences between ItemCreated  and ItemDataBound Events | RadListView for ASP.NET AJAX Documentation
description: Differences between ItemCreated  and ItemDataBound Events
slug: listview/control-lifecycle/differences-between-itemcreated--and-itemdatabound-events
tags: differences,between,itemcreated,,and,itemdatabound,events
published: True
position: 3
---

# Differences between ItemCreated  and ItemDataBound Events



##   

Here are some hints which can help you visualize the sequence of the **ItemCreated** and **ItemDataBound** events firing, their specifics and execution lifecycle:


| Question | Answer |
| ------ | ------ |
| **Is there any data in the item?** | **ItemCreated** is fired -before- the item is data-bound. Thus no data is still in the listview item or the controls nested inside it. In **ItemDataBound** all is available.|
| **How often does it fire?** | **ItemCreated** is fired when listiview is binding to data and when listview is created from the ViewState, hence after each page postback - just before **Load** event occurs. **ItemDataBound** is fired only when RadListView binds to data.This means that if you need to add controls to a listview item that should fire a postback event, you should: <ol><li>Create the controls in **ItemCreated** event handler</li><li>Bind them to data in **ItemDataBound** (if that's needed).</li></ol>  |
| **What about the ViewState management?** | **ItemCreated** should be hooked when you need to modify the controls inside a listview item. **ItemDataBound** should be wired in order to change the data displayed inside a listview item and the controls nested inside it.The changes made in the **ItemCreated** / **ItemDataBound** handlers will be persisted in the **ViewState** .|
